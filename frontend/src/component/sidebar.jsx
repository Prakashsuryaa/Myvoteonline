import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import img from "../images/bhushan.jpg";
import { 
    FaBars, FaHome, FaFileImport, FaServer, FaFileExport, FaPhoneVolume, FaSms, 
    FaWhatsapp, FaShareAlt, FaUserPlus, FaSlidersH 
} from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoPerson, IoLogOut } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdCategory } from "react-icons/md";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("userToken");
        navigate("/");
    };

    return (
        <>
            {/* Hamburger Button for Small Screens */}
            <button 
                className="md:hidden text-white bg-blue-600 fixed rounded-lg z-50" 
                onClick={() => setIsOpen(!isOpen)}
            >
                <FaBars size={30} />
            </button>

            {/* Sidebar with 30px margin from top */}
            <aside className={`w-64 bg-white text-black shadow-lg font-[Poppins] overflow-auto fixed md:relative transition-all duration-300
                ${isOpen ? "left-0" : "-left-64"} md:left-0 h-full z-40`}>
                
                {/* Profile Section */}
                <div className="bg-blue-600 h-44 flex flex-col items-center justify-center relative">
                    <div className="w-16 h-16 bg-white rounded-full absolute top-10 left-4 border-2 border-gray-400">
                        <img src={img} className="w-16 h-16 bg-white rounded-full" alt="User" />
                    </div>
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
                        onClick={handleLogout} // Call Logout Function
                    >
                        <IoLogOut className="text-lg text-red-500" />
                        <span className="text-sm font-medium text-red-500">Logout</span>
                    </li>
                </ul>
            </aside>
        </>
    );
};

const menuItems = [
    { icon: FaHome, text: "Home", path: "/" },
    { icon: FaFileImport, text: "Import Updated Data", path: "/import" },
    { icon: FaServer, text: "Update Data to Server", path: "/update" },
    { icon: FaFileExport, text: "Export Data", path: "/export" },
    { icon: FaSlidersH, text: "Update Slider", path: "/slider" },
    { icon: FaPhoneVolume, text: "Contacts", path: "/contacts" },
    { icon: FaServer, text: "Summary", path: "/summary" },
    { icon: IoMdSettings, text: "Settings", path: "/settings" },
    { icon: FaUserPlus, text: "Add Volunteer", path: "/add-volunteer" },
    { icon: IoPerson, text: "My Volunteers", path: "/my-volunteers" },
    { icon: MdCategory, text: "Castes", path: "/castes" },
    { icon: FaSms, text: "Send SMS", path: "/sms" },
    { icon: FaPhoneVolume, text: "Voice Calls", path: "/voice-calls" },
    { icon: FaWhatsapp, text: "Bulk WhatsApp", path: "/whatsapp" },
    { icon: RiLockPasswordLine, text: "Change Password", path: "/change-password" },
];

<<<<<<< HEAD
        export default Sidebar;
=======
export default Sidebar;
>>>>>>> 11d90be960b6b7542b62a81e6a12f1746e07236c
