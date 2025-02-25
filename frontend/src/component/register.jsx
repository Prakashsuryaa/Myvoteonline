import React, { useState } from "react";
import ImageSlider from "./slider";

const Register = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError(""); // Reset error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(user.email)) {
      setError("Invalid email format");
      return;
    }
    if (user.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (user.password !== user.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      console.log("User Registered:", user);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-500 via-white to-green-900 px-4">
      <div className="flex flex-col md:flex-row bg-[#dcdfdf] shadow-lg rounded-lg w-full max-w-[1100px] h-[600px] overflow-hidden">
        
        {/* Register Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between h-full">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#165887]">
            Register
          </h2>
          <form className="mt-6 md:mt-8 w-full flex flex-col items-center" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full p-4 md:p-5 border rounded-md mb-3 text-lg"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-4 md:p-5 border rounded-md mb-3 text-lg"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-4 md:p-5 border rounded-md mb-3 text-lg"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full p-4 md:p-5 border rounded-md mb-3 text-lg"
              onChange={handleChange}
              required
            />
            {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
            <button
              className={`w-full text-white p-4 md:p-5 rounded-md text-lg ${
                loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
              }`}
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          {/* Always Visible on All Screens */}
          <p className="text-md md:text-lg text-gray-600 text-center mt-auto mb-4">
            Already have an account?{" "}
            <a href="/" className="text-[#165887] hover:underline">
              Login
            </a>
          </p>
        </div>

        {/* Image Slider Section with Right Padding */}
        <div className="w-full md:w-1/2 flex items-center pr-6 md:pr-10">
          <ImageSlider />
        </div>

      </div>
    </div>
  );
};

export default Register;
