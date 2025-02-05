// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">My Vote Online</div>
      <ul className="flex space-x-4">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">About Us</li>
        <li className="hover:underline cursor-pointer">Services</li>
        <li className="hover:underline cursor-pointer">Form</li>
        <li className="hover:underline cursor-pointer">Election</li>
      </ul>
      <button className="bg-white text-blue-900 px-4 py-2 rounded">Search Electoral Roll</button>
    </nav>
  );
};

export default Navbar;