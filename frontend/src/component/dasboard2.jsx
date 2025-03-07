import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sidebar from "./sidebar";

// Import Images
import img1 from "../images/img2.jpg";
import img2 from "../images/socialmedia.jpg";
import img3 from "../images/support.jpg";

// Import Icons
import { 
    FaSearch, FaUser, FaList, FaMapMarkerAlt, FaPhone, FaUsers, FaLayerGroup, FaPalette, 
    FaCheckCircle, FaCopy, FaCalendarCheck, FaThumbsUp, FaThumbsDown, FaCertificate, FaCrown, FaHandshake 
} from "react-icons/fa";

const Dashboard2 = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    // Filter menu items based on search
    const filteredMenuItems = menuItems.filter(item => 
        item.label.toLowerCase().includes(searchQuery)
    );

    // Slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    // Images for the slider
    const sliderImages = [img1, img2, img3];

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-100 overflow-auto">
                
                {/* Image Slider */}
                <div className="mb-4">
                    <Slider {...sliderSettings}>
                        {sliderImages.map((src, index) => (
                            <div key={index} className="h-48 w-full overflow-hidden">
                                <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Search Bar */}
                <div className="bg-white shadow-md p-4 rounded-lg flex items-center gap-3 mt-4">
                    <input 
                        type="text" 
                        placeholder="Enter Name, Door No" 
                        className="flex-1 p-2 border rounded-md outline-none"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                    <button className="bg-blue-500 text-white px-3 py-2 rounded-md flex items-center gap-1">
                        <FaSearch className="size-3.5"/> Search
                    </button>
                </div>

                {/* Menu Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {filteredMenuItems.map((item, index) => (
                        <Link 
                            key={index} 
                            to={item.path} 
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

// Menu Items with Paths
const menuItems = [
    { label: "Booth Wise", icon: <FaUser size={30} className="text-red-500" />, path: "/booth-wise" },
    { label: "Alphabetic", icon: <FaList size={30} className="text-blue-500" />, path: "/alphabetic" },
    { label: "Phone No. List", icon: <FaPhone size={30} className="text-green-500" />, path: "/phone-list" },
    { label: "Address Wise", icon: <FaMapMarkerAlt size={30} className="text-yellow-500" />, path: "/address-wise" },
    { label: "Age Wise", icon: <FaUsers size={30} className="text-purple-500" />, path: "/age-wise" },
    { label: "Caste Wise", icon: <FaLayerGroup size={30} className="text-orange-500" />, path: "/caste-wise" },
    { label: "Color Wise", icon: <FaPalette size={30} className="text-pink-500" />, path: "/color-wise" },
    { label: "Effective Voters", icon: <FaCheckCircle size={30} className="text-teal-500" />, path: "/effective-voters" },
    { label: "Duplicate", icon: <FaCopy size={30} className="text-gray-500" />, path: "/duplicate" },
    { label: "Polling Day", icon: <FaCalendarCheck size={30} className="text-brown-500" />, path: "/polling-day" },
    { label: "Voted", icon: <FaThumbsUp size={30} className="text-green-700" />, path: "/voted" },
    { label: "Non Voted", icon: <FaThumbsDown size={30} className="text-red-700" />, path: "/non-voted" },
    { label: "Verified/Unverified", icon: <FaCertificate size={30} className="text-yellow-700" />, path: "/verified" },
    { label: "Beneficiary Wise", icon: <FaCrown size={30} className="text-yellow-500" />, path: "/beneficiary-wise" },
    { label: "Others", icon: <FaHandshake size={30} className="text-blue-700" />, path: "/others" },
];

export default Dashboard2;
