import React, { useState } from "react";
import { Link } from "react-router-dom";

const PhoneListTable = () => {
    // Sample data for the phone list
    const phoneList = [
        { name: "John Doe", fatherName: "Jane Doe", phoneNo: "1234567890" },
        { name: "Alice Smith", fatherName: "Bob Smith", phoneNo: "0987654321" },
        // Add more entries as needed
    ];

    const [searchQuery, setSearchQuery] = useState("");

    // Filter the phone list based on the search query
    const filteredPhoneList = phoneList.filter(
        (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.fatherName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.phoneNo.includes(searchQuery)
    );

    return (
        <div className="bg-white shadow-md p-4 rounded-lg text-black">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Phone List</h2>
                <Link to="/" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                    Back
                </Link>
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by Name, Father Name, or Phone No"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-2 border rounded-md"
                />
            </div>
            <table className="w-full border-collapse text-center">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border p-2">Sr No</th>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Father Name</th>
                        <th className="border p-2">Phone No</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPhoneList.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                            <td className="border p-2">{index + 1}</td>
                            <td className="border p-2">{item.name}</td>
                            <td className="border p-2">{item.fatherName}</td>
                            <td className="border p-2">{item.phoneNo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PhoneListTable;