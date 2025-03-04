import React, { useState, useRef, useEffect } from "react";
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
  const profileRef = useRef(null);
  const servicesRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Navbar Top Section */}
      <div className="h-12 w-full bg-[#165887] flex items-center justify-between px-6 md:px-10 lg:px-14 relative">
        <div className="flex items-center gap-x-6 ml-auto">
          {/* Language Selector */}
          <div className="text-black bg-[#FEFCFC] h-7 px-4 rounded-lg">
            <select className="cursor-pointer outline-none border-none bg-transparent p-1">
              <option>ENGLISH</option>
              <option>HINDI</option>
            </select>
          </div>
          {/* Profile Dropdown */}
          <div className="relative" ref={profileRef}>
            <div
              className="h-9 w-9 rounded-full overflow-hidden border cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <img src={img4} alt="Profile" className="h-full w-full object-cover" />
            </div>
            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50">
                <ul className="text-sm text-gray-700">
                  <li><a href="/dashboard2" className="block px-4 py-2 hover:bg-gray-100">Dashboard</a></li>
                  <li><a href="/setting" className="block px-4 py-2 hover:bg-gray-100">Settings</a></li>
                  <li><a href="/" className="block px-4 py-2 text-red-500 hover:bg-gray-100">Logout</a></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-8 md:px-12 lg:px-14 py-4 gap-6">
        <div className="flex items-center gap-6 md:gap-10">
          <img src={img} alt="Election Logo" className="h-16 md:h-20" />
          <span className="text-xl md:text-2xl font-bold text-[#165887]">My Vote Online</span>
        </div>
        <img src={img3} className="h-16 md:h-20" alt="India logo" />
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-0 w-full h-[50px] flex justify-between items-center border bg-[#E8FAFC] px-8 md:px-12 lg:px-14 z-50">
        <button className="md:hidden text-[#165887]" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        
        <ul className={`absolute md:static top-[50px] left-0 w-full bg-[#E8FAFC] md:bg-transparent md:flex md:items-center md:space-x-10 text-lg font-semibold ${menuOpen ? 'flex flex-col p-6' : 'hidden md:flex'}`}>
          <li onClick={() => { navigate("/dashboard"); setMenuOpen(false); }} className="hover:text-blue-700">Home</li>
          <li onClick={() => { navigate("/form"); setMenuOpen(false); }} className="hover:text-blue-700">Form</li>
          <li onClick={() => { navigate("/search-page"); setMenuOpen(false); }} className="hover:text-blue-700">Search Pages</li>
          <li className="relative" ref={servicesRef}>
            <button onClick={() => setServicesDropdown(!servicesDropdown)} className="hover:text-blue-700">Services</button>
            {servicesDropdown && (
              <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50">
                <li><button onClick={() => { navigate("/socialmedia"); setServicesDropdown(false); }} className="w-full px-4 py-2 text-left hover:bg-gray-100">Social Media</button></li>
              </ul>
            )}
          </li>
          <li onClick={() => { navigate("/aboutus"); setMenuOpen(false); }} className="hover:text-blue-700">About Us</li>
          <li onClick={() => { navigate("/fileupload"); setMenuOpen(false); }} className="hover:text-blue-700">Category</li>
        </ul>

        {/* Search Box */}
        <div className="hidden md:flex items-center">
          <button className="flex items-center gap-3 text-[#165887] text-sm px-5 py-2 rounded-xl bg-[#FBF6F6]">
            <FaSearch aria-label="Search" />
            <input type="search" placeholder="Search Page" className="border-none outline-none bg-transparent" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;