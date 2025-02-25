import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-gray-800 text-white shadow-lg p-6">
      
   <h1 className="text-xl font-semibold mb-6 ml-10 ">⚙ Settings</h1> 
      <ul className="space-y-1">
        {[
          { name: "User Name", path: "#" },
          { name: "Privacy and Security", path: "#" },
          { name: "Download", path: "#" },
          { name: "Reset Settings", path: "#" },
          { name: "Password", path: "#" },
          { name: "Change Password", path: "#" },
          { name: "Feedback", path: "#" },
          { name: "Help", path: "#" },
          { name: "Help Center", path: "#" },
          { name: "Privacy", path: "#" },
          { name: "Terms", path: "#" },
        ].map((item, index) => (
          <li key={index}>
            <a
              href={item.path}
              className="block py-3 px-4 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300"
            >
              {item.name}
            </a>
          </li>
        ))}
        {/* Logout Button */}
        <li>
          <button
            onClick={() => navigate("/")}
            className="block w-full py-3 px-4 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-all duration-300"
          >
            Logout
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
