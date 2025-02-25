import { Router } from "express";
const router = Router();
import { registerUser, loginUser, logoutUser, refreshAccessToken, changeCurrentPassword,sendPasswordResetEmail, resetPassword, getCurrentUser,updateAccountDetails,checkAuth} from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { asyncHandler } from "../util/asyncHandler.js";

// User Authentication Routes
router.route("/register").post(
  
  ),asyncHandler(registerUser);

router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, logoutUser) ;
router.route("/refresh-token").post (refreshAccessToken);

// Password Management Routes
router.route("/change-password").post( verifyJWT, asyncHandler(changeCurrentPassword));
 router.route("/forgot-password").post(asyncHandler(sendPasswordResetEmail));

router.route("/reset-password/:token")
       .get((req, res) => {
        const { token } = req.params;
        // Here you can render a form for the new password or send a response indicating where to input the new password.
        // You can return a simple message or render an HTML form.
        res.status(200).json({ message: "Please enter your new password.", token });
    }).post(asyncHandler(resetPassword));

       
    router.route("/current-user").get(verifyJWT, getCurrentUser);
    router.route("/update-account").patch(verifyJWT, updateAccountDetails);
    router.route("/auth/check").get(checkAuth); 

export default router;

