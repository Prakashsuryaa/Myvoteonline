import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar2 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    console.log("User logged out");
    navigate("/");
    
  };

  return (
    <>
      {/* Button to toggle sidebar */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="text-2xl p-2 focus:outline-none md:hidden"
      >
        <FaBars className="text-white" />
      </button>

      {/* Sidebar */}
      <aside
        className={`md:flex md:flex-col md:w-64 bg-gray-800 p-5 border-r border-gray-700 z-20 fixed md:relative h-full ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        
        {/* Sidebar Menu */}
        <ul className="space-y-4">
          <h1 className="text-xl font-semibold text-white">⚙ Settings</h1>
          {[
            "User Name",
            "Privacy and Security",
            "Downloads",
            "Reset Settings",
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
              onClick={() => setIsSidebarOpen(false)} 
            >
              {item}
            </li>
          ))}

          {/* Logout Button */}
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

      {/* Click outside to close sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar2;
