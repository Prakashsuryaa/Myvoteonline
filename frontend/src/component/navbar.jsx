import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import img from "../../src/images/Img1.png";
import img3 from "../../src/images/img3.png";
import img4 from "../../src/images/img4.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  return (
    <>
      {/* Navbar Section */}
      <div className="h-12 w-full bg-[#165887] flex items-center justify-between px-6 md:px-10 lg:px-14 relative">
        <div></div>
        <div className="flex items-center gap-x-6 ml-auto">
          {/* Language Selector */}
          <div className="text-black bg-[#FEFCFC] h-7 px-4 rounded-lg">
            <select
              name="language"
              id="language"
              className="cursor-pointer outline-none border-none bg-transparent"
            >
              <option value="">ENGLISH</option>
              <option value="">HINDI</option>
            </select>
          </div>
          {/* Profile */}
          <div className="relative">
            <div
              className="h-9 w-9 rounded-full overflow-hidden border border-gray-300 cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <img src={img4} alt="Profile" className="h-full w-full object-cover" />
            </div>
            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden z-50">
                <ul className="text-sm text-gray-700">
                <li>
                    <button className="w-full px-4 py-2 text-left hover:bg-gray-100"> <a href="/dashboard2">Dashboard</a></button>
                  </li>
                  <li>
                    <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                      <a href="/setting">Settings</a>
                    </button>
                  </li>
                  <li>
                    <button className="w-full px-4 py-2 text-left hover:bg-gray-100">Logout</button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Logo Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-8 md:px-12 lg:px-14 py-4 gap-6">
        <div className="flex items-center gap-6 md:gap-10">
          <img src={img} alt="Election Logo" className="h-16 md:h-20 w-auto" />
          <span className="text-xl md:text-2xl font-bold text-[#165887] font-sans">My Vote Online</span>
        </div>
        <img src={img3} className="h-16 md:h-20 w-auto" alt="India logo" />
      </div>

      {/* Navigation Bar */}
      <nav className="text-[#165887] sticky top-0 w-full h-[50px] flex justify-between items-center border border-[#E8FAFC] bg-[#E8FAFC] z-50 px-8 md:px-12 lg:px-14">
        <button className="md:hidden text-[#165887]" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <div className="flex w-full justify-between items-center">
          <ul className={`${menuOpen ? "flex flex-col space-y-4 absolute top-full left-0 w-full bg-[#E8FAFC] p-4 shadow-lg" : "hidden"} md:flex md:flex-row md:space-x-20 text-lg font-semibold cursor-pointer transition-all duration-300 ease-in-out`}>
            <li onClick={() => { navigate("/dashboard"); setMenuOpen(false); }} className="hover:text-blue-700 transition duration-300 ease-in-out">Home</li>
            <li onClick={() => { navigate("/form"); setMenuOpen(false); }} className="hover:text-blue-700 transition duration-300 ease-in-out">Form</li>
            <li onClick={() => { navigate("/search-page"); setMenuOpen(false); }} className="hover:text-blue-700 transition duration-300 ease-in-out">Search Pages</li>
            <li className="relative">
              <button onClick={() => setServicesDropdown(!servicesDropdown)} className="hover:text-blue-700 transition duration-300 ease-in-out">
                Services
              </button>
              {servicesDropdown && (
                <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden z-50 text-sm text-gray-700 transition-all duration-300 ease-in-out">
                  <li>
                    <button onClick={() => { navigate("/socialmedia"); setServicesDropdown(false); }} className="w-full px-4 py-2 text-left hover:bg-gray-100 transition duration-300 ease-in-out">
                      Social Media
                    </button>
                  </li>
                </ul>
              )}
            </li>
            <li onClick={() => { navigate("/aboutus"); setMenuOpen(false); }} className="hover:text-blue-700 transition duration-300 ease-in-out">About Us</li>
            <li onClick={() => { navigate("/fileupload"); setMenuOpen(false); }} className="hover:text-blue-700 transition duration-300 ease-in-out">Category</li>
          </ul>
          <div className="hidden md:flex items-center">
            <button className="flex items-center gap-3 text-[#165887] text-sm px-5 py-2 rounded-xl bg-[#FBF6F6]">
              <FaSearch aria-label="Search" />
              <input type="search" placeholder="Search Page" className="border-none outline-none bg-transparent" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;