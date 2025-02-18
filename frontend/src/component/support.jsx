import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../src/images/support.jpg";

const SupportDetails = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    setShow(true);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start relative">
      {/* Image with dark overlay */}
      <img
        src={img1}
        alt="Support"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40" // makes the image fit and adds opacity
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> {/* Dark overlay */}

      {/* Welcome section centered */}
      <div
        className={`flex flex-col items-center justify-center w-full min-h-screen transform transition duration-500 ${
          scrolling ? "opacity-0 translate-y-[-100px]" : "opacity-100 translate-y-0"
        }`}
      >
        <h1
          className={`text-4xl text-gray-300 font-bold mb-4 border-4 p-4 rounded-lg shadow-lg transform transition duration-500 ${
            show ? "opacity-100 scale-105 translate-y-0" : "opacity-0 scale-90 translate-y-10"
          }`}
        >
          Welcome to the Support Page
        </h1>
        <p className="text-lg text-gray-700 mb-6">Here you can find detailed support information.</p>
      </div>

      {/* Popular Articles Section with only header text color change */}
      <div className="px-6 py-6 w-full cursor-pointer">
        <h2 className="text-3xl font-bold mb-6 text-black">Popular Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Article 1 */}
          <div className="bg-gray-200 shadow-md rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <a href="/loginfailure">
            <p className="text-gray-500">Server/Connection/Log In</p>
            <h3 className="text-xl font-bold mt-2">Login Failure</h3>
            </a>
          </div>

          {/* Article 2 */}
          <div className="bg-gray-200 shadow-md rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <p className="text-gray-500">Account</p>
            <h3 className="text-xl font-bold mt-2">How to change Password?</h3>
          </div>

          {/* Article 3 */}
          <div className="bg-gray-200 shadow-md rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <a href="/servererror">
            <p className="text-gray-500">Server/Connection/Log In</p>
            <h3 className="text-xl font-bold mt-2">Server does not respond / Server failure</h3>
            </a>
          </div>
          
        </div>
      </div>
      <br></br>

      <button
        className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-red-700 transform transition duration-300 hover:scale-105"
        onClick={() => navigate("/dashboard")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default SupportDetails;
