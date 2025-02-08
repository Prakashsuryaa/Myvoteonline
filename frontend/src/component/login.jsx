import React, { useState } from "react";
import ImageSlider from "./slider";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Logged In:", user);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-500 via-white to-green-900 px-4">
      <div className="flex bg-[#dcdfdf] shadow-lg rounded-lg w-[1100px] h-[500px]">
        
        <div className="w-[50%] p-12 flex flex-col justify-center">
          <h2 className="text-4xl font-semibold text-center text-[#165887]">Login</h2>
          <form className="mt-8" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-5 border rounded-md mb-5 text-lg"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-5 border rounded-md mb-5 text-lg"
              onChange={handleChange}
              required
            />
            <button className="w-full bg-blue-600 text-white p-5 rounded-md text-lg hover:bg-blue-700">
              Login
            </button>
          </form>
          <p className="text-lg text-gray-600 text-center mt-5">
            Don't have an account?{" "}
            <a href="/register" className="text-[#165887] hover:underline">
              Register
            </a>
          </p>
        </div>
        
        <ImageSlider />
      </div>
    </div>
  );
};

export default Login;
