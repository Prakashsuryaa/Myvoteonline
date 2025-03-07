import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {FaBars, FaHome,FaServer, FaFileExport, FaPhoneVolume, FaSms, FaWhatsapp, FaShareAlt, FaUserPlus, FaSlidersH 
} from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoPerson, IoLogOut } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    
    // Load Image from LocalStorage or Use Default
    const defaultImage = require("../images/bhushan.jpg");
    const storedImage = localStorage.getItem("profileImage");
    const [profileImage, setProfileImage] = useState(storedImage || defaultImage);

    // Handle Image Change
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                setProfileImage(base64String); // Update State
                localStorage.setItem("profileImage", base64String); // Save to LocalStorage
            };
            reader.readAsDataURL(file);
        }
    };

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem("userToken");
        navigate("/");
    };

    return (
        <>
            {/* Hamburger Button for Small Screens */}
            <button 
                className="md:hidden fixed rounded-lg z-50" 
                onClick={() => setIsOpen(!isOpen)}
            >
                <FaBars size={30} />
            </button>

            {/* Sidebar with transition effect */}
            <aside className={`w-64 bg-white text-black shadow-lg font-[Poppins] overflow-auto fixed md:relative transition-all duration-300
                ${isOpen ? "left-0" : "-left-64"} md:left-0 h-full z-40`}>

                {/* Profile Section */}
                <div className="bg-blue-600 h-44 flex flex-col items-center justify-center relative">
                    {/* Profile Image (Clickable) */}
                    <label htmlFor="profileImageInput" className="cursor-pointer">
                        <div className="w-16 h-16 bg-white rounded-full absolute top-10 left-4 border-2 border-gray-400 overflow-hidden">
                            <img src={profileImage} className="w-full h-full object-cover" alt="User" />
                        </div>
                        {/* Hidden File Input */}
                        <input 
                            type="file" 
                            id="profileImageInput" 
                            accept="image/*" 
                            className="hidden" 
                            onChange={handleImageChange} 
                        />
                    </label>

                    <p className="text-white font-semibold mt-24 mr-32">Bhushan</p>
                    <p className="text-white font-semibold mr-28">9053068979</p>
                </div>

                {/* Menu Items */}
                <ul className="space-y-4 p-5">
                    {menuItems.map(({ icon: Icon, text, path }, index) => (
                        <li key={index} className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-300 hover:text-blue-600">
                            <Icon className="text-lg" />
                            <a href={path} className="text-sm font-medium">{text}</a>
                        </li>
                    ))}

                    <hr className="border-gray-400 my-4" />

                    {/* Share & Logout */}
                    <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-300 hover:text-blue-600">
                        <FaShareAlt className="text-lg" />
                        <a href="#" className="text-sm font-medium">Share</a>
                    </li>
                    <li 
                        className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-300 hover:text-red-500"
                        onClick={handleLogout}
                    >
                        <IoLogOut className="text-lg text-red-500" />
                        <span className="text-sm font-medium text-red-500">Logout</span>
                    </li>
                </ul>
            </aside>
        </>
    );
};

// Menu Items
const menuItems = [
    { icon: FaHome, text: "Home", path: "/" },
    { icon: FaFileExport, text: "Export Data", path: "/export" },
    { icon: FaSlidersH, text: "Update Slider", path: "/slider" },
    { icon: FaPhoneVolume, text: "Contacts", path: "/contacts" },
    { icon: FaServer, text: "Summary", path: "/summary" },
    { icon: IoMdSettings, text: "Settings", path: "/settings" },
    { icon: FaUserPlus, text: "Polling agent", path: "/polling-agent" },
    { icon: IoPerson, text: "My polling agent", path: "/my-polling-agent" },
    { icon: FaSms, text: "Send SMS", path: "/sms" },
    { icon: FaPhoneVolume, text: "Voice Calls", path: "/voice-calls" },
    { icon: FaWhatsapp, text: "Bulk WhatsApp", path: "/whatsapp" },
    { icon: RiLockPasswordLine, text: "Change Password", path: "/change-password" },
];

export default Sidebar;
