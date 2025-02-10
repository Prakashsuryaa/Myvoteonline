import React from "react";
import { FaSearch, FaSitemap } from "react-icons/fa";
import img from "../../src/images/Img1.png";
import img3 from "../../src/images/img3.png";

const Navbar = () => {
  return (
    <>
      {/* Navbar Section */}
      <div className="h-12 w-full bg-[#165887] flex justify-end items-center px-6 ">
        <div className="text-black bg-[#FEFCFC] w-80 h-9 flex items-center justify-between px-3 rounded-lg">
          <button tabIndex={0} className="focus:outline-none text-sm">
            SKIP TO MAIN CONTENT
          </button>
          <FaSearch aria-label="Search" className="cursor-pointer" />
          <FaSitemap aria-label="Sitemap "className="cursor-pointer" />
          <select name="" id="ENGLISH" className="cursor-pointer">
            <option value="">ENGLISH</option>
            <option value="">HINDI</option>
            <option value="">SPAN</option>
            <option value="">URDU</option>
            <option value="">BANGOLI</option>
            <option value="">CHINDI</option>
          </select>
        </div>
      </div>

      {/* Main Logo Section */}
      <div className="flex items-center justify-between w-full max-w-full overflow-hidden px-[73px] py-3 gap-6">
        <div className="flex items-center gap-6">
          <img src={img} alt="Election Logo" className="h-24 w-auto" />
          <span className="text-2xl font-bold text-[#165887] font-sans">
            My Vote Online
          </span>
        </div>
        <img src={img3} className="h-24 w-auto" alt="India logo" />
      </div>

      {/* Navigation Bar */}
      <nav
         className="text-[#165887] sticky top-0 w-full h-[45px] flex justify-between items-center border border-[#E8FAFC] bg-[#E8FAFC] z-50 px-[72px]"
        style={{ paddingLeft: "72px", paddingRight: "72px" }}
      >
        <ul className="flex space-x-20 text-lg font-semibold  cursor-pointer">
          {["Home", "About Us", "Services", "Form", "Election"].map((item) => (
            <li key={item} className="">
              {item}
            </li>
          ))}
        </ul>
        <button className="flex items-center gap-2 text-[#165887] text-sm px-6 py-2 rounded-2xl bg-[#FBF6F6]">
          <FaSearch aria-label="Search" />
          <span>Search Electoral Roll</span>
        </button>
      </nav>

    </>
  );
};

export default Navbar;
