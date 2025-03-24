import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const PollingAgent = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        address: "",
        ward: "",
        boothNumber: "",
        boothName: "",
        city: "",
        state: "",
        voterID: null,
        photo: null
    });
    const [submissions, setSubmissions] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (event, field) => {
        const file = event.target.files[0];
        if (file) {
            setFormData({ ...formData, [field]: URL.createObjectURL(file) });
        }
    };

    const handleSubmit = () => {
        if (Object.values(formData).some(value => value === "" || value === null)) {
            alert("Please fill all fields before submitting.");
            return;
        }
        setSubmissions([...submissions, formData]);
        setFormData({
            name: "",
            mobile: "",
            address: "",
            ward: "",
            boothNumber: "",
            boothName: "",
            city: "",
            state: "",
            voterID: null,
            photo: null
        });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
            <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-lg relative">
                {/* Back Button */}
                <button
                    className="absolute top-4 left-4 text-gray-800 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg flex items-center gap-2 transition duration-300"
                    onClick={() => navigate(-1)}
                >
                    <FaArrowLeft /> Back
                </button>

                <h2 className="text-gray-800 text-3xl font-semibold text-center mb-10 mt-10">
                    Polling Agent Details
                </h2>

                <div className="space-y-4">
                    <input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} className="input-style" />
                    <input type="number" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} className="input-style" />
                    <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="input-style" />
                    <input type="number" name="ward" placeholder="Ward Number" value={formData.ward} onChange={handleChange} className="input-style" />
                    <input type="number" name="boothNumber" placeholder="Polling Booth Number" value={formData.boothNumber} onChange={handleChange} className="input-style" />
                    <input type="text" name="boothName" placeholder="Booth Name" value={formData.boothName} onChange={handleChange} className="input-style" />
                    <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="input-style" />
                    <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} className="input-style" />
                </div>

                {/* File Upload Section */}
                <div className="mt-6 space-y-4">
                    {/* Voter ID Upload */}
                    <div className="border-2 border-dashed border-gray-400 p-4 text-center cursor-pointer rounded-lg bg-gray-100 hover:bg-gray-200 transition" onClick={() => document.getElementById("voterIDInput").click()}>
                        {formData.voterID ? <img src={formData.voterID} alt="Voter ID" className="w-48 h-48 rounded-lg object-cover mx-auto" /> : <p className="text-gray-700">Click to upload ID</p>}
                    </div>
                    <input type="file" id="voterIDInput" className="hidden" onChange={(e) => handleFileChange(e, "voterID")} />

                    {/* Photo Upload */}
                    <div className="border-2 border-dashed border-gray-400 p-4 text-center cursor-pointer rounded-lg bg-gray-100 hover:bg-gray-200 transition" onClick={() => document.getElementById("photoInput").click()}>
                        {formData.photo ? <img src={formData.photo} alt="Photo" className="w-48 h-48 rounded-lg object-cover mx-auto" /> : <p className="text-gray-700">Click to upload Photo</p>}
                    </div>
                    <input type="file" id="photoInput" className="hidden" onChange={(e) => handleFileChange(e, "photo")} />
                </div>

                {/* Submit Button */}
                <button onClick={handleSubmit} className="w-full mt-10 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition duration-300 transform hover:scale-105">
                    Submit
                </button>
            </div>

            {/* Table to Display Submitted Data */}
            {submissions.length > 0 && (
                <div className="mt-10 w-full max-w-4xl">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Submitted Details</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white shadow-md rounded-lg">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="p-3 text-left">Sno.</th>
                                    <th className="p-3 text-left">Name</th>
                                    <th className="p-3 text-left">Mobile</th>
                                    <th className="p-3 text-left">Address</th>
                                    <th className="p-3 text-left">City</th>
                                    <th className="p-3 text-left">Voter ID</th>
                                    <th className="p-3 text-left">Photo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {submissions.map((data, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="p-3">{index + 1}</td>
                                        <td className="p-3">{data.name}</td>
                                        <td className="p-3">{data.mobile}</td>
                                        <td className="p-3">{data.address}</td>
                                        <td className="p-3">{data.city}</td>
                                        <td className="p-3"><img src={data.voterID} alt="Voter ID" className="w-14 h-14 rounded-lg object-cover" /></td>
                                        <td className="p-3"><img src={data.photo} alt="Photo" className="w-14 h-14 rounded-lg object-cover" /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PollingAgent;
