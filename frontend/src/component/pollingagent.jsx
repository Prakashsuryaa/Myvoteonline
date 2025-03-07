import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const PollingAgent = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="bg-gray-800 p-10 rounded-2xl shadow-lg w-full max-w-lg relative">
                
                {/* Back Button */}
                <button
                    className="absolute top-4 left-4 text-white bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg flex items-center gap-2 transition duration-300"
                    onClick={() => navigate(-1)}
                >
                    <FaArrowLeft /> Back
                </button>

                <h2 className="text-white text-2xl font-semibold text-center mb-8 mt-6">
                    Polling Agent Details
                </h2>

                <div className="space-y-6">
                    <input type="text" placeholder="Enter Name" className="input-style" />
                    <input type="text" placeholder="Mobile Number" className="input-style" />
                    <input type="text" placeholder="Address" className="input-style" />
                    <input type="text" placeholder="Ward Number" className="input-style" />
                    <input type="text" placeholder="Polling Booth Number" className="input-style" />
                    <input type="text" placeholder="Booth Name" className="input-style" />
                    <input type="text" placeholder="City" className="input-style" />
                    <input type="text" placeholder="State" className="input-style" />

                    {/* File Upload Inputs */}
                    <label className="file-label">
                        <span className="block text-white font-medium mb-1">Select Voter ID</span>
                        <input type="file" className="file-input" />
                    </label>

                    <label className="file-label">
                        <span className="block text-white font-medium mb-1">Select Photo</span>
                        <input type="file" className="file-input" />
                    </label>
                </div>

                {/* Submit Button */}
                <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-300 transform hover:scale-105">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default PollingAgent;
