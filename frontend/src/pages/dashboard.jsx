import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import img2 from "../../src/images/img2.jpg";
import img4 from "../../src/images/img4.png";

const Dashboard = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero Image with Overlay Text */}
      <div className="relative overflow-hidden">
        <img
          src={img2}
          className="w-full transition-transform duration-500 ease-in-out hover:scale-105"
          alt="Hero"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-50">
          <h2 className="text-white text-4xl font-bold animate-slide-in-top">
            Welcome to Our Voting Data Website
          </h2>
          <p className="text-white text-lg mt-2 animate-fade-in">
            Explore comprehensive voting data for all wards. Stay informed and engaged with our detailed analytics and insights.
          </p>
        </div>
      </div>

      {/* Inline Images */}
      <div className="flex justify-center space-x-10 mt-10">
        <img
          src={img4}
          className="w-56 h-48 p-5 transition-transform duration-500 ease-in-out hover:scale-110"
          alt="Vote Image"
        />
        <img
          src={img4}
          className="w-56 h-48 p-5 transition-transform duration-500 ease-in-out hover:scale-110"
          alt="Additional Image"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
