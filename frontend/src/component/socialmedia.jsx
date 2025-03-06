import React, { useState } from "react";
import img1 from "../../src/images/socialmedia.jpg";
import { FaInstagramSquare, FaYoutube, FaFacebook, FaSearch, FaWhatsapp } from "react-icons/fa";

const Socialmedia = () => {
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
      icon: <FaInstagramSquare className="text-pink-500 text-8xl sm:text-7xl transition-transform duration-300 hover:scale-110 hover:rotate-6" />,
      link: "https://www.instagram.com/myvoteonline01",
      color: "text-pink-500",
    },
    {
      platform: "youtube",
      icon: <FaYoutube className="text-red-500 text-8xl sm:text-7xl transition-transform duration-300 hover:scale-110 hover:rotate-6" />,
      link: "https://youtube.com/@myvoteonline",
      color: "text-red-500",
    },
    {
      platform: "facebook",
      icon: <FaFacebook className="text-blue-700 text-8xl sm:text-7xl transition-transform duration-300 hover:scale-110 hover:rotate-6" />,
      link: "https://www.facebook.com/share/15mA9nafz4",
      color: "text-blue-700",
    },
    {
      platform: "whatsapp",
      icon: <FaWhatsapp className="text-green-500 text-8xl sm:text-7xl transition-transform duration-300 hover:scale-110 hover:rotate-6" />,
      link: "https://wa.me/9053068979",
      color: "text-green-500",
    },
  ];

  return (
    <>
      <nav className="bg-black px-4 sm:px-6 py-3 flex justify-between items-center fixed top-0 w-full z-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-white cursor-auto">
          <a href="/dashboard">My Vote Online</a>
        </h1>
        <span className="text-gray-400 text-sm sm:text-xl cursor-pointer">
          Social Media | <a href="/support">Support</a>
        </span>
      </nav>

      <div className="h-24 sm:h-32"></div>

      <div className="bg-white text-black px-4 sm:px-6 py-3 flex items-center gap-2 fixed top-14 w-full z-10">
        <span className="text-lg">📂</span>
        <select className="border px-3 py-2 rounded w-full sm:w-auto" onChange={handlePlatformChange} value={selectedPlatform}>
          <option value="">Select Platform</option>
          <option value="instagram">Instagram</option>
          <option value="youtube">YouTube</option>
          <option value="facebook">Facebook</option>
        </select>
      </div>

      <div className="relative h-[60vh] sm:h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute w-full h-full bg-black opacity-60"></div>
        <img src={img1} alt="Social Media" className="absolute w-full h-full object-cover opacity-30" />
        <div className="relative bg-opacity-70 p-4 sm:p-6 rounded-lg bg-gray-700">
          <h2 className="text-2xl sm:text-4xl font-bold text-white cursor-pointer">HI, HOW CAN WE HELP YOU?</h2>
        </div>
        <div className="absolute bottom-0 w-[90%] p-4 sm:p-7">
          <div className="relative">
            <input
              type="text"
              className="h-12 sm:h-16 w-full p-4 pr-12 sm:pr-16 rounded text-lg sm:text-xl border-none outline-none shadow-md"
              placeholder="Type your query here..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl sm:text-2xl cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-start px-5 sm:px-10 py-10 bg-gray-100 relative">
        <div className="w-1/2 sm:w-1/3 p-5 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-3">Candidate Details</h3>
          <table className="w-full border-collapse border border-gray-300 text-left">
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">Name:</td>
                <td className="border border-gray-300 px-3 py-2">Bhushan</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">Party:</td>
                <td className="border border-gray-300 px-3 py-2">BJP</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">State:</td>
                <td className="border border-gray-300 px-3 py-2">Haryana</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">City:</td>
                <td className="border border-gray-300 px-3 py-2">Hodal</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">Ward No:</td>
                <td className="border border-gray-300 px-3 py-2">21</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">Mobile no:</td>
                <td className="border border-gray-300 px-3 py-2">9053068979</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">Email:</td>
                <td className="border border-gray-300 px-3 py-2">Bhushan905306@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full sm:w-1/2 flex flex-col gap-14 sm:gap-12">
          <div className="flex justify-between">
            {socialMediaLinks.slice(0, 2).map(({ platform, icon, link, color }) => (
              <a key={platform} href={link} target="_blank" rel="noopener noreferrer" className="p-6 w-48 bg-white shadow-lg rounded-xl text-center flex flex-col justify-center items-center hover:scale-110 transition-transform duration-300">
                {icon}
                <span className={`${color} text-lg font-semibold mt-3`}>{platform.charAt(0).toUpperCase() + platform.slice(1)}</span>
              </a>
            ))}
          </div>
          <div className="flex justify-between">
            {socialMediaLinks.slice(2).map(({ platform, icon, link, color }) => (
              <a key={platform} href={link} target="_blank" rel="noopener noreferrer" className="p-6 w-48 bg-white shadow-lg rounded-xl text-center flex flex-col justify-center items-center hover:scale-110 transition-transform duration-300">
                {icon}
                <span className={`${color} text-lg font-semibold mt-3`}>{platform.charAt(0).toUpperCase() + platform.slice(1)}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Socialmedia;


