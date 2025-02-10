import React from "react";

const VoterSlip = ({ voter }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-300 mt-6">
      <h2 className="text-lg font-semibold text-center border-b pb-2 mb-4">Voter Details</h2>
      <div className="space-y-2 text-sm">
        <p><span className="font-semibold">Name:</span> {voter.name}</p>
        <p><span className="font-semibold">Father’s Name:</span> {voter.fatherName}</p>
        <p><span className="font-semibold">Age:</span> {voter.age}</p>
        <p><span className="font-semibold">Gender:</span> {voter.gender}</p>
        <p><span className="font-semibold">EPIC Number:</span> {voter.epicNumber}</p>
        <p><span className="font-semibold">State:</span> {voter.state}</p>
        <p><span className="font-semibold">Assembly Constituency:</span> {voter.constituency}</p>
        <p><span className="font-semibold">Polling Station:</span> {voter.pollingStation}</p>
        <p><span className="font-semibold">Address:</span> {voter.address}</p>
        <p><span className="font-semibold">Part Number:</span> {voter.partNumber}</p>
      </div>
    </div>
  );
};

export default VoterSlip;
