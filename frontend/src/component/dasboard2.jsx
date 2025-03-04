// Dashboard2.js
import React from "react";
import { FaSearch, FaUser, FaList, FaMapMarkerAlt, FaPhone, FaUsers, FaLayerGroup, FaPalette, FaCheckCircle, FaCopy, FaCalendarCheck, FaThumbsUp, FaThumbsDown, FaCertificate, FaCrown, FaHandshake } from "react-icons/fa";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";

const Dashboard2 = () => {
    return (
        <div className="flex h-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <Sidebar />
            <div className="flex-1 p-6">
                <div className="bg-white shadow-md p-4 rounded-lg text-black flex items-center gap-3">
                    <input type="text" placeholder="Enter Name, Door No" className="flex-1 p-2 border rounded-md" />
                    <button className="bg-blue-500 text-white p-2 rounded-md flex items-center gap-1">
                        <FaSearch /> Search
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-6 mt-6">
                    {menuItems.map((item, index) => (
                        <Link
                            to={item.link || "/"}
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center gap-3 text-center text-black hover:scale-105 transition-transform cursor-pointer"
                        >
                            {item.icon}
                            <span className="font-semibold">{item.label}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

const menuItems = [
    { label: "Booth Wise", icon: <FaUser size={30} className="text-red-500" />, link: "/booth-wise" },
    { label: "Alphabetic", icon: <FaList size={30} className="text-blue-500" />, link: "/alphabetic" },
    { label: "Phone No. List", icon: <FaPhone size={30} className="text-green-500" />, link: "/contact-list" },
    { label: "Address Wise", icon: <FaMapMarkerAlt size={30} className="text-yellow-500" />, link: "/address-wise" },
    { label: "Age Wise", icon: <FaUsers size={30} className="text-purple-500" />, link: "/age-wise" },
    { label: "Caste Wise", icon: <FaLayerGroup size={30} className="text-orange-500" />, link: "/caste-wise" },
    { label: "Color Wise", icon: <FaPalette size={30} className="text-pink-500" />, link: "/color-wise" },
    { label: "Effective Voters", icon: <FaCheckCircle size={30} className="text-teal-500" />, link: "/effective-voters" },
    { label: "Duplicate", icon: <FaCopy size={30} className="text-gray-500" />, link: "/duplicate" },
    { label: "Polling Day", icon: <FaCalendarCheck size={30} className="text-brown-500" />, link: "/polling-day" },
    { label: "Voted", icon: <FaThumbsUp size={30} className="text-green-700" />, link: "/voted" },
    { label: "Non Voted", icon: <FaThumbsDown size={30} className="text-red-700" />, link: "/non-voted" },
    { label: "Verified/Unverified", icon: <FaCertificate size={30} className="text-yellow-700" />, link: "/verified-unverified" },
    { label: "Beneficiary Wise", icon: <FaCrown size={30} className="text-gold-500" />, link: "/beneficiary-wise" },
    { label: "Others", icon: <FaHandshake size={30} className="text-blue-700" />, link: "/others" },
];

export default Dashboard2;