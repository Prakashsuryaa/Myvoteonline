import User from '../models/user.model.js'; 
import asyncHandler from 'express-async-handler';
import {ApiError} from '../util/ApiError.js';
import {ApiResponse} from '../util/ApiResponse.js';
import jwt from 'jsonwebtoken';

const generateAccessAndRefreshTokens = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user) throw new ApiError(404, "User not found");

        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating tokens");
    }
};

const registerUser = asyncHandler(async (req, res) => {
    const { email, username, password } = req.body;
    console.log("req.body", req.body);

    if ([email, username, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }

    const existedUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existedUser) {
        throw new ApiError(409, "User with email or username already exists");
    }

    try {
        const user = await User.create({
            email,
            password,
            username: username.toLowerCase(),
        });

        const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);

        const createdUser = await User.findById(user._id).select("-password -refreshToken");
        if (!createdUser) {
            throw new ApiError(500, "User registration failed");
        }

        const cookieOptions = {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            maxAge: 24 * 60 * 60 * 1000,
        };

        return res
            .status(201)
            .cookie("accessToken", accessToken, cookieOptions)
            .cookie("refreshToken", refreshToken, cookieOptions)
            .json(new ApiResponse(201, createdUser, "User registered successfully"));
    } catch (error) {
        console.error("User registration failed:", error);
        throw new ApiError(500, "Internal Server Error");
    }
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, username, password } = req.body;
    console.log("check test", req.body);

    if (!(username || email)) {
        throw new ApiError(400, "Username or email is required");
    }

    const user = await User.findOne({ $or: [{ username }, { email }] });
    console.log("user", user);
    if (!user) {
        throw new ApiError(404, "User does not exist");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid user credentials");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);
    const loggedInUser = await User.findById(user._id).select("-userRole -password -refreshToken");

    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
    };

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(new ApiResponse(200, { user: { ...loggedInUser.toObject() }, accessToken, refreshToken }, "User logged in successfully"));
});

const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(req.user._id, { $unset: { refreshToken: 1 } });

    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    };

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "User logged out successfully"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;

    if (!incomingRefreshToken) {
        throw new ApiError(401, "Unauthorized request");
    }

    try {
        const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);
        const user = await User.findById(decodedToken?._id);

        if (!user || incomingRefreshToken !== user?.refreshToken) {
            throw new ApiError(401, "Invalid or expired refresh token");
        }

        const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        };

        const { accessToken, refreshToken: newRefreshToken } = await generateAccessAndRefreshTokens(user._id);

        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", newRefreshToken, options)
            .json(new ApiResponse(200, { accessToken, refreshToken: newRefreshToken }, "Access token refreshed"));
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid refresh token");
    }
});

const getCurrentUser = asyncHandler(async (req, res) => {
    return res.status(200).json(new ApiResponse(200, req.user, "User fetched successfully"));
});

const checkAuth = asyncHandler(async (req, res) => {
    const accessToken = req.cookies.accessToken || req.headers['authorization']?.split(' ')[1];

    if (!accessToken) {
        throw new ApiError(401, "Unauthorized request: No access token provided");
    }

    try {
        const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decodedToken._id).select("-password -refreshToken");

        if (!user) {
            throw new ApiError(401, "Unauthorized request: User not found");
        }

        return res.status(200).json(new ApiResponse(200, user, "User is authenticated successfully"));
    } catch (error) {
        throw new ApiError(401, error?.message || "Unauthorized request: Invalid access token");
    }
});
const changeCurrentPassword = asyncHandler(async(req, res) => {
  const {oldPassword, newPassword} = req.body

  

  const user = await User.findById(req.user?._id)
  const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)

  if (!isPasswordCorrect) {
      throw new ApiError(400, "Invalid old password")
  }

  user.password = newPassword
  await user.save({validateBeforeSave: false})

  return res
  .status(200)
  .json(new ApiResponse(200, {}, "Password changed successfully"))
})
const resetPassword = asyncHandler(async (req, res) => {
  console.log("Incoming request body:", req.body); // Log the entire body

  const resetToken = req.params.token; // Get the reset token from URL
// Check if resetToken is defined
if (!resetToken) {
  return res.status(400).json({ success: false, message: "Reset token is missing" });
}
  // Hash the token and find the user by resetPasswordToken and resetPasswordExpire
  const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex");
  console.log("Hashed token:", hashedToken);

  const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpire: { $gt: Date.now() }, // Token not expired
  });

  if (!user) {
      throw new ApiError(400, "Invalid or expired password reset token");
  }

  // Update the user's password and clear reset fields
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();

  // Send response
  res.status(200).json({ success: true, message: "Password reset successful" });
});
//send email
const sendPasswordResetEmail = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
      throw new ApiError(404, "User not found");
  }

  const resetToken = user.getPasswordResetToken();
  console.log("Received resetToken from URL:", resetToken);
  await user.save({ validateBeforeSave: false });

  // Get the current host and replace the port if necessary
  const currentHost = req.get('host');
  const newHost = currentHost.includes('3001') ? currentHost.replace('2001', '3000') : currentHost;

  const resetUrl = `${req.protocol}://${newHost}/reset-password/${resetToken}`;
  const message = `Click the following link to reset your password: ${resetUrl}`;

  //localhost port 2001 above change the code port 3000 as per my frontend 
  //const resetUrl = `${req.protocol}://${req.get('host')}/reset-password/${resetToken}`;
  //const message = `Click the following link to reset your password: ${resetUrl}`;

  try {
      await sendEmail({ email: user.email, subject: "Password Reset", message });
      res.status(200).json({ message: "Password reset link sent to your email." });
  } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save({ validateBeforeSave: false });
      throw new ApiError(500, "Email could not be sent");
  }
});
const updateAccountDetails = asyncHandler(async(req, res) => {
  const {username, email} = req.body

  if (!username || !email) {
      throw new ApiError(400, "All fields are required")
  }

  const user = await User.findByIdAndUpdate(
      req.user?._id,
      {
          $set: {
            username,
              email: email
          }
      },
      {new: true}
      
  ).select("-password")

  return res
  .status(200)
  .json(new ApiResponse(200, user, "Account details updated successfully"))
});




export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    getCurrentUser,
    checkAuth,
    changeCurrentPassword,
    resetPassword,
    sendPasswordResetEmail,
    updateAccountDetails
};
