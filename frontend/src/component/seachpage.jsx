import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import VoterSlip from "./voterslip";
import img4 from "../../src/images/bg.jpg";



const SearchPage = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [epicNumber, setEpicNumber] = useState("");
  const [details, setDetails] = useState({
    name: "",
    relativeName: "",
    dob: "",
    age: "",
    gender: "",
  });
  const [familyId, setFamilyId] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("epic"); 

  // Mock data for different searches
  const voterData = [
    {
      name: "Naresh Kumar",
      fatherName: "Ramesh Chand",
      age: 58,
      gender: "Male",
      epicNumber: "BFS1491125",
      state: "Haryana",
      constituency: "88-Ballabgarh",
      pollingStation: "Punjabi Dharmasala",
      address: "Malerna Road, Ballabgarh",
      partNumber: "199-Uncha Gaon",
      mobile: "1234567890",
      familyId: "FAMILY123",
      aadhar: "AADHAR123",
    },
    {
      name: "Naresh",
      fatherName: "Ramesh Chand",
      age: 58,
      gender: "Male",
      epicNumber: "BFS1491125",
      state: "Haryana",
      constituency: "88-Ballabgarh",
      pollingStation: "Punjabi Dharmasala",
      address: "Malerna Road, Ballabgarh",
      partNumber: "199-Uncha Gaon",
      mobile: "1234567890",
      familyId: "FAMILY123",
      aadhar: "AADHAR123",
    },
    {
      name: "Pooja Sharma",
      fatherName: "Ravi Sharma",
      age: 45,
      gender: "Female",
      epicNumber: "ABC9876543",
      state: "Delhi",
      constituency: "50-Karol Bagh",
      pollingStation: "Community Hall",
      address: "Karol Bagh, Delhi",
      partNumber: "105-Karol Bagh",
      mobile: "9876543210",
      familyId: "FAMILY987",
      aadhar: "AADHAR987",
    },
  ];

  // Handle search action based on selected search type
  const handleSearch = () => {
    let result;
    if (searchType === "mobile") {
      result = voterData.find((item) => item.mobile === mobileNumber);
    } else if (searchType === "epic") {
      result = voterData.find((item) => item.epicNumber === epicNumber); // Fixed
    } else if (searchType === "details") {
      result = voterData.find(
        (item) =>
          item.name.toLowerCase() === details.name.toLowerCase() &&
          item.fatherName.toLowerCase() === details.relativeName.toLowerCase()
      );
    } else if (searchType === "familyId") {
      result = voterData.find((item) => item.familyId === familyId);
    } else if (searchType === "aadhar") {
      result = voterData.find((item) => item.aadhar === aadhar);
    }
  
    setSearchResult(result || null);
  };

  
  

  return (
    <div className="flex flex-col min-h-screen" >
      {/* Navbar */}
      <Navbar />
    <div className="flex justify-center items-start min-h-screen p-4 pt-10" style={{ backgroundImage: `url(${img4} )`, backgroundSize: '100% 100%' }}>
      <div className=" shadow-lg rounded-lg p-6 w-full max-w-7xl">
        <h1 className="text-2xl font-semibold mb-4 text-center">Search Page</h1>

        {/* 5 buttons at the top */}
        <div className="mb-4 flex flex-wrap justify-center gap-4">
  <button
    onClick={() => setSearchType("epic")}
    className="w-full sm:w-auto bg-green-500 text-white px-4 py-2 rounded  hover:bg-green-600"
  >
    ईपीसी द्वारा खोजें/SEARCH BY EPIC
  </button>
  <button
    onClick={() => setSearchType("details")}
    className="w-full sm:w-auto bg-yellow-500 text-white px-4 py-2 rounded  hover:bg-yellow-600"
  >
    विवरण द्वारा खोजें/SEARCH BY DETAILS
  </button>
  <button
    onClick={() => setSearchType("mobile")}
    className="w-full sm:w-auto bg-gray-500 text-white px-4 py-2 rounded  hover:bg-gray-600"
  >
    मोबाइल द्वारा खोजें/SEARCH BY MOBILE
  </button>
</div>

<div className="mb-4 flex flex-wrap justify-center gap-4">
  <button
    onClick={() => setSearchType("familyId")}
    className="w-full sm:w-auto bg-orange-600 text-white px-4 py-2 rounded  hover:bg-orange-700"
  >
    परिवार आईडी द्वारा खोजें/SEARCH BY FAMILY ID
  </button>
  <button
    onClick={() => setSearchType("aadhar")}
    className="w-full sm:w-auto bg-violet-600 text-white px-4 py-2 rounded  hover:bg-violet-700"
  >
    आधार द्वारा खोजें /SEARCH BY AADHAR
  </button>
</div>


        {/* Search by Mobile, EPIC, Details, Family ID, or Aadhar */}
        {searchType === "mobile" && (
          <div className="w-full border-2 border-gray-300 rounded p-2">
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
          <div className="w-full border-2 border-gray-300 rounded p-2">
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
          <div className="w-full border-2 border-gray-300 rounded p-2">
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
          <div className="w-full border-2 border-gray-300 rounded p-2">
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
          <div className="w-full border-2 border-gray-300 rounded p-2">
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

        
        

        {/* Search and Clear Buttons */}
        <div className="flex justify-center space-x-4 mt-4">
            <button onClick={handleSearch} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Search
            </button>
            <button
              onClick={() => {
                setSearchQuery("");
                setSearchResult(null);
              }}
              className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700"
            >
              Clear
            </button>
          </div>
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
          {searchResult ? <VoterSlip voter={searchResult} /> : searchQuery && <p className="text-center mt-4">No record found.</p>}

      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default SearchPage;
