import React, { useState } from "react";

const SearchPage = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [epicNumber, setEpicNumber] = useState("");
  const [details, setDetails] = useState("");
  const [familyId, setFamilyId] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [searchType, setSearchType] = useState("epic"); // Set default search type to "epic"

  // Mock data for different searches
  const data = [
    {
      mobile: "1234567890",
      name: "John Doe",
      epic: "EPIC123456",
      details: "Detail1",
      familyId: "FAMILY123",
      aadhar: "AADHAR123",
    },
    {
      mobile: "9876543210",
      name: "Jane Smith",
      epic: "EPIC987654",
      details: "Detail2",
      familyId: "FAMILY987",
      aadhar: "AADHAR987",
    },
  ];

  // Handle search action based on selected search type
  const handleSearch = () => {
    let result;
    if (searchType === "mobile") {
      result = data.find((item) => item.mobile === mobileNumber);
    } else if (searchType === "epic") {
      result = data.find((item) => item.epic === epicNumber);
    } else if (searchType === "details") {
      result = data.find((item) => item.details === details);
    } else if (searchType === "familyId") {
      result = data.find((item) => item.familyId === familyId);
    } else if (searchType === "aadhar") {
      result = data.find((item) => item.aadhar === aadhar);
    }

    if (result) {
      setSearchResult(result);
    } else {
      setSearchResult(null);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-7xl">
        <h1 className="text-2xl font-semibold mb-4 text-center">Search Page</h1>

        {/* 5 buttons at the top */}
        <div className="mb-4 flex justify-center space-x-4">
          <button
            onClick={() => setSearchType("epic")}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            ईपीसी द्वारा खोजें/SEARCH BY EPIC
          </button>
          <button
            onClick={() => setSearchType("details")}
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            विवरण द्वारा खोजें/SEARCH BY DETAILS
          </button>
          <button
            onClick={() => setSearchType("mobile")}
            className="bg-blue-300 text-white px-4 py-2 rounded"
          >
            मोबाइल द्वारा खोजें/SEARCH BY MOBILE
          </button>
        </div>
        <div className="mb-4 flex justify-center space-x-4">
          <button
            onClick={() => setSearchType("familyId")}
            className="bg-pink-400 text-white px-4 py-2 rounded"
          >
            परिवार आईडी द्वारा खोजें/SEARCH BY FAMILY ID
          </button>
          <button
            onClick={() => setSearchType("aadhar")}
            className="bg-violet-500 text-white px-4 py-2 rounded"
          >
            आधार द्वारा खोजें /SEARCH BY AADHAR
          </button>
        </div>

        {/* Search by Mobile, EPIC, Details, Family ID, or Aadhar */}
        {searchType === "mobile" && (
          <div className="w-full border-2 border-gray-800 rounded p-2">
            <div className="mb-4 flex flex-col items-center justify-center">
              <label htmlFor="mobile" className="block text-sm font-medium">
                मोबाइल नंबर/Mobile NUMBER
              </label>
              <input
                id="mobile"
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Enter Mobile Number"
                className="w-1/2 border border-gray-500 rounded p-2 mt-2"
              />
            </div>
          </div>
        )}

        {searchType === "epic" && (
          <div className="w-full border-2 border-gray-800 rounded p-2">
            <div className="mb-4 flex flex-col items-center justify-center">
              <label htmlFor="epic" className="block text-sm font-medium">
                EPIC NUMBER
              </label>
              <input
                id="epic"
                type="text"
                value={epicNumber}
                onChange={(e) => setEpicNumber(e.target.value)}
                placeholder="Enter EPIC Number"
                className="w-1/2 border border-gray-500 rounded p-2 mt-2"
              />
            </div>
          </div>
        )}

        {searchType === "details" && (
          <div className="w-full border-2 border-gray-800 rounded p-2">
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Name */}
              <div className="flex flex-col items-center justify-center">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={details.name}
                  onChange={(e) =>
                    setDetails({ ...details, name: e.target.value })
                  }
                  placeholder="Enter Name"
                  className="w-full border border-gray-500 rounded p-2 mt-2"
                />
              </div>

              {/* Relative's Name */}
              <div className="flex flex-col items-center justify-center">
                <label htmlFor="relativeName" className="block text-sm font-medium">
                  Relative's Name
                </label>
                <input
                  id="relativeName"
                  type="text"
                  value={details.relativeName}
                  onChange={(e) =>
                    setDetails({ ...details, relativeName: e.target.value })
                  }
                  placeholder="Enter Relative's Name"
                  className="w-full border border-gray-500 rounded p-2 mt-2"
                />
              </div>

              {/* Date of Birth */}
              <div className="flex flex-col items-center justify-center">
                <label htmlFor="dob" className="block text-sm font-medium">
                  Date of Birth
                </label>
                <input
                  id="dob"
                  type="date"
                  value={details.dob}
                  onChange={(e) => setDetails({ ...details, dob: e.target.value })}
                  className="w-full border border-gray-500 rounded p-2 mt-2"
                />
              </div>

              {/* Age */}
              <div className="flex flex-col items-center justify-center">
                <label htmlFor="age" className="block text-sm font-medium">
                  Age
                </label>
                <input
                  id="age"
                  type="number"
                  value={details.age}
                  onChange={(e) => setDetails({ ...details, age: e.target.value })}
                  placeholder="Enter Age"
                  className="w-full border border-gray-500 rounded p-2 mt-2"
                />
              </div>

              {/* Gender */}
              <div className="flex flex-col items-center justify-center">
                <label htmlFor="gender" className="block text-sm font-medium">
                  Gender
                </label>
                <select
                  id="gender"
                  value={details.gender}
                  onChange={(e) => setDetails({ ...details, gender: e.target.value })}
                  className="w-full border border-gray-500 rounded p-2 mt-2"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {searchType === "familyId" && (
          <div className="w-full border-2 border-gray-800 rounded p-2">
            <div className="mb-4 flex flex-col items-center justify-center">
              <label htmlFor="familyId" className="block text-sm font-medium">
                FAMILY ID
              </label>
              <input
                id="familyId"
                type="text"
                value={familyId}
                onChange={(e) => setFamilyId(e.target.value)}
                placeholder="Enter Family ID"
                className="w-1/2 border border-gray-500 rounded p-2 mt-2"
              />
            </div>
          </div>
        )}

        {searchType === "aadhar" && (
          <div className="w-full border-2 border-gray-800 rounded p-2">
            <div className="mb-4 flex flex-col items-center justify-center">
              <label htmlFor="aadhar" className="block text-sm font-medium">
                AADHAR NUMBER
              </label>
              <input
                id="aadhar"
                type="text"
                value={aadhar}
                onChange={(e) => setAadhar(e.target.value)}
                placeholder="Enter Aadhar Number"
                className="w-1/2 border border-gray-500 rounded p-2 mt-2"
              />
            </div>
          </div>
        )}

        {/* Search Result */}
        {searchResult && (
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Search Result</h2>
            <p>
              <strong>Name:</strong> {searchResult.name}
            </p>
            <p>
              <strong>
                {searchType === "mobile"
                  ? "Mobile"
                  : searchType === "epic"
                  ? "EPIC"
                  : searchType === "details"
                  ? "Details"
                  : searchType === "familyId"
                  ? "Family ID"
                  : "Aadhar"}
              </strong>{" "}
              {searchType === "mobile"
                ? searchResult.mobile
                : searchType === "epic"
                ? searchResult.epic
                : searchType === "details"
                ? searchResult.details
                : searchType === "familyId"
                ? searchResult.familyId
                : searchResult.aadhar}
            </p>
          </div>
        )}
        {searchResult === null &&
          (mobileNumber || epicNumber || details || familyId || aadhar) && (
            <p>No result found for this {searchType}.</p>
          )}

        {/* Search and Clear Buttons */}
        <div className="mb-4 flex justify-center space-x-4">
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-6 py-2 rounded mt-2"
          >
            Search
          </button>
          <button
            onClick={() => {
              setMobileNumber("");
              setEpicNumber("");
              setDetails("");
              setFamilyId("");
              setAadhar("");
              setSearchResult(null);
              setSearchType("");
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded mt-2"
          >
            CLEAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
