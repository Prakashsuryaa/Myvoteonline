import React from "react";

const BulkNav = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-lg relative">
      <button 
        onClick={() => window.history.back()} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-full shadow-md hover:bg-gray-500 transition duration-300"
      >
        ← Back
      </button>
      <ul className="flex justify-between items-center w-full max-w-4xl mx-auto px-4">
        <li>
          <a href="/bulksms" className="text-gray-300 text-lg font-semibold hover:text-blue-400 transition duration-300">
            Bulk SMS
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-300 text-lg font-semibold hover:text-blue-400 transition duration-300">
            Bulk WhatsApp
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-300 text-lg font-semibold hover:text-blue-400 transition duration-300">
            Bulk Services
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default BulkNav;

