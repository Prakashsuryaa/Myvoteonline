import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const VoterForm = () => {
  const [formData, setFormData] = useState({
    parliamentaryNo: "",
    assemblyNo: "",
    wardNo: "",
    epicNo: "",
    name: "",
    fatherName: "",
    dob: "",
    age: "",
    religion: "",
    caste: "",
    gender: "",
    phone: "",
    aadharNo: "",
    familyId: "",
    rationCard: "",
    boothNo: "",
    partNo: "",
    address: "",
    district: "",
    state: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Form Data Submitted:", formData); // Log data to console
    alert("Voter registration saved successfully!"); // Show success message
  };

  return (
  
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 pt-10">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-7xl">
        <h2 className="text-xl font-semibold text-center mb-4">
          Voter Registration Form
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <div>
            <label className="block text-sm font-medium">
              Parliamentary Constituency No.
            </label>
            <input
              name="parliamentaryNo"
              value={formData.parliamentaryNo}
              onChange={handleChange}
              type="text"
              className="w-full border rounded p-2"
              placeholder="Enter No."
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Assembly Constituency No.
            </label>
            <input
              name="assemblyNo"
              value={formData.assemblyNo}
              onChange={handleChange}
              type="text"
              className="w-full border rounded p-2"
              placeholder="Enter No."
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Ward No.</label>
            <input
              name="wardNo"
              value={formData.wardNo}
              onChange={handleChange}
              type="text"
              className="w-full border rounded p-2"
              placeholder="Enter No."
            />
          </div>

          <div>
            <label className="block text-sm font-medium">EPIC NO.</label>
            <input
              name="epicNo"
              value={formData.epicNo}
              onChange={handleChange}
              type="text"
              className="w-full border rounded p-2"
              placeholder="NAH0000123"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              className="w-full border rounded p-2"
              placeholder="Full Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Father's Name</label>
            <input
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              type="text"
              className="w-full border rounded p-2"
              placeholder="Father's Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Date of Birth</label>
            <input
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              type="date"
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Age</label>
            <input
              name="age"
              value={formData.age}
              onChange={handleChange}
              type="text"
              className="w-full border rounded p-2"
              placeholder="Enter Age"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Religion</label>
            <input
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              type="text"
              className="w-full border rounded p-2"
              placeholder="Religion"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Caste</label>
            <input
              name="caste"
              value={formData.caste}
              onChange={handleChange}
              type="text"
              className="w-full border rounded p-2"
              placeholder="Caste"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border rounded p-2"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="text"
              className="w-full border rounded p-2"
              placeholder="XXXXXX XXXXX"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Aadhar No.</label>
            <input
              name="aadharNo"
              value={formData.aadharNo}
              onChange={handleChange}
              type="text"
              className="w-full border rounded p-2"
              placeholder="XXXX XXXX XXXX"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Family ID No.</label>
            <input
              name="familyId"
              value={formData.familyId}
              onChange={handleChange}
              type="text"
              className="w-full border rounded p-2"
              placeholder="Enter family ID"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Ration Card No.</label>
            <input
              name="rationCard"
              value={formData.rationCard}
              onChange={handleChange}
              type="text"
              className="w-full border rounded p-2"
              placeholder="Enter ration card no."
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Booth No.</label>
            <input
              name="boothNo"
              value={formData.boothNo}
              onChange={handleChange}
              type="text"
              className="w-full border rounded p-2"
              placeholder="Enter Booth No."
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Part No.</label>
            <input
              name="partNo"
              value={formData.partNo}
              onChange={handleChange}
              type="text"
              className="w-full border rounded p-2"
              placeholder="Enter Part No."
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Address</label>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              type="text"
              className="w-full border rounded p-2"
              placeholder="Enter Address"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">District</label>
            <input
              name="district"
              value={formData.district}
              onChange={handleChange}
              type="text"
              className="w-full border rounded p-2"
              placeholder="District"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">State</label>
            <input
              name="state"
              value={formData.state}
              onChange={handleChange}
              type="text"
              className="w-full border rounded p-2"
              placeholder="State"
            />
          </div>

          <div className="col-span-4 flex justify-end mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default VoterForm;
