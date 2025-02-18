import React, { useState } from "react";
import img1 from "../../src/images/socialmedia.jpg";
import { FaInstagramSquare, FaYoutube, FaFacebook, FaSearch } from "react-icons/fa";

const SupportPage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handlePlatformChange = (event) => {
    setSelectedPlatform(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const socialMediaLinks = [
    {
      platform: "instagram",
      icon: <FaInstagramSquare className="text-pink-500 text-6xl transition-transform duration-300 hover:rotate-6" />, 
      link: "https://www.instagram.com/myvoteonline01",
      color: "text-blue-500"
    },
    {
      platform: "youtube",
      icon: <FaYoutube className="text-red-500 text-6xl transition-transform duration-300 hover:rotate-6" />, 
      link: "https://youtube.com/@myvoteonline",
      color: "text-red-500"
    },
    {
      platform: "facebook",
      icon: <FaFacebook className="text-blue-700 text-6xl transition-transform duration-300 hover:rotate-6" />, 
      link: "https://www.facebook.com/share/15mA9nafz4",
      color: "text-blue-700"
    }
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-black px-6 py-4 flex justify-between items-center fixed top-0 w-full z-10">
        <h1 className="text-3xl font-bold text-white cursor-auto">
          <a href="/dashboard">My Vote Online</a>
        </h1>
        <span className="text-gray-400 text-xl cursor-pointer">
          Social Media | <a href="/support">Support</a>
        </span>
      </nav>

      {/* Spacer for Fixed Navbar */}
      <div className="h-32"></div>

      {/* Platform Dropdown */}
      <div className="bg-white text-black px-6 py-4 flex items-center gap-2 fixed top-16 w-full z-10">
        <span className="text-lg">📂</span>
        <select
          className="border px-4 py-2 rounded"
          onChange={handlePlatformChange}
          value={selectedPlatform}
        >
          <option value="">Select Platform</option>
          <option value="instagram">Instagram</option>
          <option value="youtube">YouTube</option>
          <option value="facebook">Facebook</option>
        </select>
      </div>

      {/* Hero Section */}
      <div className="relative h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute w-full h-full bg-black opacity-60"></div>
        <img
          src={img1}
          alt="Social Media"
          className="absolute w-full h-full object-cover opacity-30"
        />
        <div className="relative bg-opacity-70 p-6 rounded-lg bg-gray-700">
          <h2 className="text-4xl font-bold text-white cursor-pointer">
            HI, HOW CAN WE HELP YOU?
          </h2>
        </div>

        {/* Search Box with Icon */}
        <div className="absolute bottom-0 w-[90vw] p-7">
          <div className="relative">
            <input
              type="text"
              className="h-16 w-full p-5 pr-16 rounded text-xl border-none outline-none shadow-md"
              placeholder="Type your query here..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <FaSearch className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Social Media Links - Shown Based on Selection and Search */}
      <div className="flex flex-wrap justify-center gap-10 py-12 bg-gray-100">
        {socialMediaLinks
          .filter(({ platform }) =>
            (selectedPlatform === "" || selectedPlatform === platform) &&
            platform.includes(searchQuery)
          )
          .map(({ platform, icon, link, color }) => (
            <div
              key={platform}
              className="p-6 w-80 h-48 bg-white shadow-lg rounded-lg text-center flex flex-col justify-center items-center 
                        transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              {icon}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${color} text-lg font-semibold mt-4`}
              >
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </a>
            </div>
          ))}
      </div>
    </>
  );
};

export default SupportPage;
