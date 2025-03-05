import React from "react";
import img from "../images/bg.jpg";
import Navbar from "./navbar";

const Mediaform = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Form submit hone se pehle default behavior rokna
    alert("Candidate details saved successfully! ✅"); // Alert message
    event.target.reset(); // Form reset karna
  };

  return (
    <>
    <Navbar/>
    <div
      className="flex justify-center items-center min-h-screen bg-gray-900 p-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
      
    >
      <form
        onSubmit={handleSubmit}
        className="bg-opacity-90 p-10 rounded-2xl shadow-2xl w-full max-w-4xl border bg-transparent"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
          Candidate Form
        </h2>

        {/* 2 Columns Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
          <input type="text" placeholder="Name" className="input-style p-2 rounded" required />
          <input type="text" placeholder="Party Name" className="input-style p-2 rounded" required />
          <input type="text" placeholder="State" className="input-style p-2 rounded" required />
          <input type="text" placeholder="City" className="input-style p-2 rounded" required />
          <input type="number" placeholder="Ward No." className="input-style p-2 rounded" required />
          <input type="number" placeholder="Mobile No." className="input-style p-2 rounded" required />
          <input type="email" placeholder="Email" className="input-style p-2 rounded" required />
          <input type="text" placeholder="Instagram URL" className="input-style p-2 rounded" />
          <input type="text" placeholder="YouTube URL" className="input-style p-2 rounded" />
          <input type="text" placeholder="Facebook URL" className="input-style p-2 rounded" />
          <input type="text" placeholder="Twitter URL" className="input-style p-2 rounded" />
          <input type="text" placeholder="LinkedIn URL" className="input-style p-2 rounded" />
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg text-lg capitalize"
          >
            Add Candidate
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Mediaform;
