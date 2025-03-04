import React from "react";

const LoginFailure = () => {
  return (
    <div className="flex flex-col md:flex-row p-6 max-w-5xl mx-auto gap-6 animate-fadeIn relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-pink-500 opacity-30 -z-10"></div>
      
      {/* Main Content */}
      <div className="bg-white p-6 shadow-2xl rounded-xl w-full md:w-2/3 text-gray-800">
        <h1 className="text-3xl font-bold">Login Failure</h1>
        <p className="text-gray-500 text-sm">Last Updated: 608d</p>
        <p className="mt-4 text-gray-700">
          We are sorry to hear that you are having trouble logging in due to poor internet connection. Go to a new location where you get a stable internet. We also recommend trying the following:
        </p>
        <ol className="list-decimal list-inside mt-4 text-gray-700 space-y-2">
          <li>Ensure that you have a stable internet connection (Cellular or Wi-Fi).</li>
          <li>Change your internet connection to vs. Wi-Fi.</li>
          <li>Log out of your account, exit the site and clear some storage on your device, then log in again.</li>
          <li>Wait some time to get a better connection or let us check.</li>
          <li>We will fix it as soon as possible.</li>
        </ol>
      </div>

      {/* Sidebar - FAQ */}
      <div className="bg-white p-4 shadow-2xl rounded-xl w-full md:w-1/3 animate-fadeIn text-gray-800">
        <h2 className="text-xl font-semibold mb-4">Related Issues</h2>
        <ul className="space-y-3">
          {[
            "Internet issue?",
            "How to change password?",
            "Server does not respond / Server failure",
          ].map((item, index) => (
            <li
              key={index}
              className="p-4 bg-gray-100 hover:bg-gray-200 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer rounded-lg shadow-md hover:shadow-lg"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LoginFailure;
