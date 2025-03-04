import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../src/images/ravan.jpg";
import Sidebar2 from "./sidebar2";

const Setting = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleTurnOff = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar Toggle Button for Mobile (with spacing) */}
      <button
        className="md:hidden fixed top-2 left-4 p-3 bg-blue-600 text-white rounded-lg z-50"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "✖" : "☰"}
      </button>

      {/* Sidebar */}
      <div className={`absolute md:relative md:block ${isSidebarOpen ? "block" : "hidden"} w-64`}>
        <Sidebar2 />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-800 flex flex-col items-center justify-start p-4 sm:p-6">
        {/* Search Bar with spacing on mobile */}
        <div className="mb-4 w-full max-w-md mt-12 sm:mt-0">
          <input
            type="text"
            placeholder="Search settings"
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Profile Card */}
        <div className="w-full max-w-lg bg-gray-900 p-6 rounded-lg shadow-lg mt-16">
          <div className="flex items-center space-x-4 mb-4">
            <img src={img1} alt="Profile" className="w-16 h-16 rounded-full" />
            <div>
              <h2 className="text-white text-xl font-semibold">Sandip Ravan</h2>
              <p className="text-gray-400 text-sm">Syncing to sandipravan95@gmail.com</p>
            </div>
          </div>

          {/* Loader or Button */}
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4 w-full"
              onClick={handleTurnOff}
            >
              Turn off
            </button>
          )}

          {/* Settings Options */}
          <div className="space-y-3 text-center sm:text-left">
            <div className="p-4 bg-gray-800 rounded-lg text-white">Sync and Google services</div>
            <div className="p-4 bg-gray-800 rounded-lg text-white">Manage your Google Account</div>
            <div className="p-4 bg-gray-800 rounded-lg text-white">Customize your Chrome profile</div>
            <div className="p-4 bg-gray-800 rounded-lg text-white">Import bookmarks and settings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;