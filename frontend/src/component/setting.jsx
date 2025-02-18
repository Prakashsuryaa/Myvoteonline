import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Setting = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside
        className={`md:flex md:flex-col md:w-64 bg-gray-800 p-5 border-r border-gray-700 z-20 fixed md:relative h-full ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center mb-6 md:hidden">
          <button onClick={() => setIsSidebarOpen(false)} className="text-white">
            <X size={24} />
          </button>
        </div>
        <ul className="space-y-4">
          <h1 className="text-xl font-semibold">⚙ Settings</h1>
          {[
            "User  Name",
            "Privacy and security",
            "Downloads",
            "Reset settings",
            "Password",
            "Change Password",
            "Feedback",
            "Help",
            "Help Center",
            "Privacy",
            "Terms",
          ].map((item, index) => (
            <li
              key={index}
              className="cursor-pointer text-gray-300 hover:text-white"
            >
              {item}
            </li>
          ))}
          <li>
            <button
              onClick={handleLogout}
              className="text-left w-full text-gray-300 hover:text-white"
            >
              Log Out
            </button>
          </li>
        </ul>
      </aside>

      {/* Mobile Menu Button */}
      <button
        className="absolute top-4 left-4 md:hidden text-white"
        onClick={() => setIsSidebarOpen(true)}
      >
        <Menu size={24} />
      </button>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-start p-4 md:p-8 md:ml-64">
        {/* Header */}
        <div className="w-full text-center mb-6 md:mb-8">
          <h1 className="text-2xl font-semibold">⚙ Settings</h1>
        </div>

        {/* Search Box */}
        <div className="w-full flex justify-center mb-6">
          <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
            <input
              type="text"
              placeholder="Search settings"
              className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Profile Section */}
        <div className="bg-gray-800 p-5 rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto text-center mb-6">
          <div className="flex flex-col items-center space-y-3">
            <img
              src="https://via.placeholder.com/50"
              alt="Profile"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">Sandip Ravan</h2>
              <p className="text-gray-400 text-sm">Syncing to sandipravn95@gmail.com</p>
            </div>
            <button className="mt-4 bg-blue-600 px-4 py-2 rounded-md">
              Turn off
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Setting;