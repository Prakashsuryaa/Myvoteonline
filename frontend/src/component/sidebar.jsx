        import React from "react";
        import img from "../images/bhushan.jpg"
        import {FaHome,FaFileImport,FaServer,FaFileExport,FaPhoneVolume,FaSms,FaWhatsapp,FaShareAlt,FaUserPlus,
        } from "react-icons/fa";
        import { IoMdSettings } from "react-icons/io";
        import { IoPerson } from "react-icons/io5";
        import { RiLockPasswordLine } from "react-icons/ri";
        import { IoLogOut } from "react-icons/io5";
        import { MdCategory } from "react-icons/md";
        import { FaSlidersH } from "react-icons/fa";

        const Sidebar = () => {
        return (
            <aside className="w-64 h- bg-white text-black shadow-lg font-[Poppins] overflow-auto">
                <div className="bg-blue-600 h-36 flex flex-col items-center justify-center relative">
                <div className="w-16 h-16 bg-white rounded-full absolute top-5 left-4 border-2 border-gray-400"><img src={img} className="w-16 h-16 bg-white rounded-full absolute"></img></div>
                <p className="text-white font-semibold mt-20 mr-32"> Bhushan</p>
                <p className="text-white font-semibold mr-28">9053068979</p>

            </div>
            
            <ul className="space-y-4 p-5">
                {menuItems.map(({ icon: Icon, text }, index) => (
                <li
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-300 hover:text-blue-600"
                >
                    <Icon className="text-lg" />
                    <a href="#" className="text-sm font-medium">{text}</a>
                </li>
                ))}

                <hr className="border-gray-400 my-4" />

                <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-300 hover:text-blue-600">
                <FaShareAlt className="text-lg" />
                <a href="#" className="text-sm font-medium">Share</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-300 hover:text-red-500">
                <IoLogOut className="text-lg text-red-500" />
                <a href="#" className="text-sm font-medium text-red-500">Logout</a>
                </li>
            </ul>
            </aside>
        );
        };

        const menuItems = [
        { icon: FaHome, text: "Home" },
        { icon: FaFileImport, text: "Import Updated Data" },
        { icon: FaServer, text: "Update Data to Server" },
        { icon: FaFileExport, text: "Export Data" },
        { icon: FaSlidersH, text: "Update Slider" },
        { icon: FaPhoneVolume, text: "Contacts" },
        { icon: FaServer, text: "Summary" },
        { icon: IoMdSettings, text: "Settings" },
        { icon: FaUserPlus, text: "Add Volunteer" },
        { icon: IoPerson, text: "My Volunteers" },
        { icon: MdCategory, text: "Castes" },
        { icon: FaSms, text: "Send SMS" },
        { icon: FaPhoneVolume, text: "Voice Calls" },
        { icon: FaWhatsapp, text: "Bulk WhatsApp" },
        { icon: RiLockPasswordLine, text: "Change Password" },
        ];

        export default Sidebar;