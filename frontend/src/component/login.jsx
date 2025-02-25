import React, { useState } from "react";
import ImageSlider from "./slider";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError(""); // Reset error on change
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

    setLoading(true);
    setTimeout(() => {
      console.log("User Logged In:", user);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-500 via-white to-green-900 px-4">
      <div className="flex flex-col md:flex-row bg-[#dcdfdf] shadow-lg rounded-lg w-full max-w-[1100px] h-auto md:h-[500px] overflow-hidden">
        
        {/* Login Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#165887]">Login</h2>
          <form className="mt-6 md:mt-8" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-4 md:p-5 border rounded-md mb-3 text-lg"
              onChange={handleChange}
              required
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full p-4 md:p-5 border rounded-md mb-3 text-lg"
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="absolute right-4 top-5 md:top-6 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
            <button
              className={`w-full text-white p-4 md:p-5 rounded-md text-lg ${
                loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
              }`}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <p className="text-md md:text-lg text-gray-600 text-center mt-4 md:mt-5">
            Don't have an account?{" "}
            <a href="/register" className="text-[#165887] hover:underline">
              Register
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

export default Login;
