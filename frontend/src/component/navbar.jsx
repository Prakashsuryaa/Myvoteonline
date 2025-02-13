import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import img from "../../src/images/Img1.png";
import img3 from "../../src/images/img3.png";
import img4 from "../../src/images/img4.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar Section */}
      <div className="h-12 w-full bg-[#165887] flex items-center justify-between px-4 md:px-6 relative">
        <div></div>

        <div className="flex items-center gap-x-4 ml-auto">
          {/* Language Selector */}
          <div className="text-black bg-[#FEFCFC] h-7 px-3 rounded-lg">
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
                    <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                      Settings
                    </button>
                  </li>
                  <li>
                    <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Logo Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-[73px] py-3 gap-6">
        <div className="flex items-center gap-4 md:gap-6">
          <img src={img} alt="Election Logo" className="h-16 md:h-24 w-auto" />
          <span className="text-xl md:text-2xl font-bold text-[#165887] font-sans">
            My Vote Online
          </span>
        </div>
        <img src={img3} className="h-16 md:h-24 w-auto" alt="India logo" />
      </div>

      {/* Navigation Bar */}
      <nav className="text-[#165887] sticky top-0 w-full h-[45px] flex justify-between items-center border border-[#E8FAFC] bg-[#E8FAFC] z-50 px-6 md:px-[72px]">
        <button className="md:hidden text-[#165887]" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <ul
          className={`md:flex md:space-x-10 lg:space-x-20 text-lg font-semibold cursor-pointer absolute md:static bg-[#E8FAFC] md:bg-transparent w-full md:w-auto left-0 top-12 md:top-0 transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          {["Home", "About Us", "Services", "Form", "Election"].map((item) => (
            <li key={item} className="px-4 py-2 md:px-0 md:py-0 hover:bg-gray-200 md:hover:bg-transparent">
              {item}
            </li>
          ))}
        </ul>
        <button className="hidden md:flex items-center gap-2 text-[#165887] text-sm px-4 md:px-6 py-2 rounded-2xl bg-[#FBF6F6]">
          <FaSearch aria-label="Search" />
          <span>Search Pages</span>
        </button>
      </nav>
    </>
  );
};

export default Navbar;