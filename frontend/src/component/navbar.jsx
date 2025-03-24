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
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesDropdown(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Navbar Top Bar */}
      <div className="h-12 w-full bg-[#165887] flex items-center justify-between px-4 md:px-8 relative">
        <div className="flex items-center gap-4">
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className="flex items-center gap-x-4 ml-auto">
          <div className="text-black bg-[#FEFCFC] h-7 px-3 rounded-lg ">
          <select className="cursor-pointer bg-transparent text-xs p-1 outline-none border-none appearance-none focus:ring-0">
              <option>ENGLISH</option>
              <option>HINDI</option>
            </select>
          </div>
          <div className="relative" ref={profileRef}>
            <div
              className="h-8 w-8 rounded-full overflow-hidden border cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <img src={img4} alt="Profile" className="h-full w-full object-cover" />
            </div>
            {open && (
              <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-md overflow-hidden z-50">
                <ul className="text-sm text-gray-700">
                  <li><button className="w-full px-3 py-2 text-left hover:bg-gray-100" onClick={() => navigate("/dashboard2")}>Dashboard</button></li>
                  <li><button className="w-full px-3 py-2 text-left hover:bg-gray-100 text-red-500" onClick={() => navigate("/")}>Logout</button></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 py-3 gap-4">
        <div className="flex items-center gap-4">
          <img src={img} alt="Logo" className="h-[4.3rem]  w-auto" />
          <span className="text-[1.5rem] font-bold text-[#165887]">My Vote Online</span>
        </div>
        <img src={img3} className="h-[4.3rem] w-auto" alt="India logo" />
      </div>

      {/* Navigation Bar */}
      <nav className="w-full h-[50px] flex items-center border bg-[#E8FAFC] px-6 md:px-10">
        <ul 
          ref={menuRef} 
          className={`absolute md:static top-[50px] left-0 w-full bg-[#E8FAFC] md:flex md:space-x-8  font-semibold transition-all duration-300 ease-in-out ${
            menuOpen ? "flex flex-col p-4" : "hidden md:flex"
          }`}
        >
          <li className="cursor-pointer hover:text-blue-700" onClick={() => navigate("/dashboard")}>Home</li>
          <li className="cursor-pointer hover:text-blue-700" onClick={() => navigate("/form")}>Form</li>
          <li className="cursor-pointer hover:text-blue-700" onClick={() => navigate("/search-page")}>Search Pages</li>
          <li className="cursor-pointer hover:text-blue-700" onClick={() => navigate("/mediaform")}>Candidate Form</li>
          <li className="cursor-pointer hover:text-blue-700" onClick={() => navigate("/fileupload")}>Category</li>
          <li className="relative" ref={servicesRef}>
            <button onClick={() => setServicesDropdown(!servicesDropdown)} className="hover:text-blue-700">Services</button>
            {servicesDropdown && (
              <ul className="absolute left-0 mt-2 w-36 bg-white shadow-lg rounded-md z-50 text-sm">
                <li><button onClick={() => navigate("/socialmedia")} className="w-full px-3 py-2 hover:bg-gray-100">Social Media</button></li>
                <li><button onClick={() => navigate("/bulkupdate")} className="w-full px-3 py-2 hover:bg-gray-100">Bulk update</button></li>
              </ul>
            )}
          </li>
          <li className="cursor-pointer hover:text-blue-700" onClick={() => navigate("/aboutus")}>About Us</li>
        </ul>
        <div className="hidden md:flex items-center">
          <button className="flex items-center gap-2 text-[#165887] text-xs px-4 py-2 rounded-xl bg-[#FBF6F6]">
            <FaSearch />
            <input type="search" placeholder="Search Page" className="border-none outline-none bg-transparent w-full" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
