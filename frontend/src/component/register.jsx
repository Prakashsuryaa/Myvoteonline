import React, { useState } from "react";
import ImageSlider from "./slider";

const Register = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", user);
    // Add API request here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 bg-gradient-to-b from-orange-500 via-white to-green-900">
      <div className="w-full max-w-4xl bg-[#dad5d0] shadow-md rounded-lg p-6 flex">
        
        <div className="w-1/2 p-6">
          <h2 className="text-2xl font-semibold text-center text-blue-600">Register</h2>
          <form className="mt-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full p-3 border rounded-md mb-3"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md mb-3"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 border rounded-md mb-3"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full p-3 border rounded-md mb-3"
              onChange={handleChange}
              required
            />
            <button className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700">
              Register
            </button>
          </form>
          <p className="text-sm text-gray-600 text-center mt-4">
            Already have an account?{" "}
            <a href="/" className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </div>
        
        {/* Right Section - Image Slider */}
        <div className=" w-1/2 flex items-center justify-center">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
};

export default Register;