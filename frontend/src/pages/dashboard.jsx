import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import img2 from "../../src/images/img2.jpg";
import img4 from "../../src/images/img4.png";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />

      {/* Main Content */}
      <div className="flex-1">
        
        <div className="relative overflow-hidden">
          <img
            src={img2}
            className="w-full transition-transform duration-500 ease-in-out hover:scale-105"
            alt="Hero"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-2 sm:p-4">
            <div className="w-full max-w-screen-md mx-auto">
              <h2 className="text-white text-xl sm:text-3xl md:text-4xl font-bold animate-slide-in-top">
                Welcome to Our Voting Data Website
              </h2>
              <p className="text-white text-sm sm:text-lg mt-2 animate-fade-in">
                Explore comprehensive voting data for all wards. Stay informed and engaged with our detailed analytics and insights.
              </p>
            </div>
          </div>
        </div>

        {/* Inline Images */}
        <div className="flex justify-center space-x-10 mt-10">
          <img
            src={img4}
            className="w-56 h-48 p-5 transition-transform duration-500 ease-in-out hover:scale-110"
            alt="Vote Image"
          />
        </div>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Dashboard;
