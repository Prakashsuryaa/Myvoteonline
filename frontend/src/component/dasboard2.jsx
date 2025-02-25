import React from "react";
import img from "../images/bhushan.jpg";
import { 
    FaSearch, FaUser, FaList, FaMapMarkerAlt, FaPhone, FaUsers, FaLayerGroup, FaPalette, 
    FaCheckCircle, FaCopy, FaCalendarCheck, FaThumbsUp, FaThumbsDown, FaCertificate, FaCrown, FaHandshake 
} from "react-icons/fa";
import Sidebar from "./sidebar";  // Ensure the correct import path

const Dashboard2 = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-100 overflow-auto">
                {/* Image Div */}
                <div className="h-60 w-auto border overflow-hidden mt-4">
                    <img src={img} alt="Dashboard" className="w-full h-full object-cover" />
                </div>
                
                {/* Search Bar */}
                <div className="bg-white shadow-md p-4 rounded-lg flex items-center gap-3 mt-4">
                    <input 
                        type="text" 
                        placeholder="Enter Name, Door No" 
                        className="flex-1 p-2 border rounded-md outline-none"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-1">
                        <FaSearch /> Search
                    </button>
                </div>

                {/* Menu Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {menuItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center gap-3 text-center text-black hover:scale-105 transition-transform cursor-pointer"
                        >
                            {item.icon}
                            <span className="font-semibold">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Menu Items
const menuItems = [
    { label: "Booth Wise", icon: <FaUser size={30} className="text-red-500" /> },
    { label: "Alphabetic", icon: <FaList size={30} className="text-blue-500" /> },
    { label: "Phone No. List", icon: <FaPhone size={30} className="text-green-500" /> },
    { label: "Address Wise", icon: <FaMapMarkerAlt size={30} className="text-yellow-500" /> },
    { label: "Age Wise", icon: <FaUsers size={30} className="text-purple-500" /> },
    { label: "Caste Wise", icon: <FaLayerGroup size={30} className="text-orange-500" /> },
    { label: "Color Wise", icon: <FaPalette size={30} className="text-pink-500" /> },
    { label: "Effective Voters", icon: <FaCheckCircle size={30} className="text-teal-500" /> },
    { label: "Duplicate", icon: <FaCopy size={30} className="text-gray-500" /> },
    { label: "Polling Day", icon: <FaCalendarCheck size={30} className="text-brown-500" /> },
    { label: "Voted", icon: <FaThumbsUp size={30} className="text-green-700" /> },
    { label: "Non Voted", icon: <FaThumbsDown size={30} className="text-red-700" /> },
    { label: "Verified/Unverified", icon: <FaCertificate size={30} className="text-yellow-700" /> },
    { label: "Beneficiary Wise", icon: <FaCrown size={30} className="text-yellow-500" /> },
    { label: "Others", icon: <FaHandshake size={30} className="text-blue-700" /> },
];

export default Dashboard2;
