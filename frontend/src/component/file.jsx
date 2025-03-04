import React, { useState } from "react";

const JsonUploader = () => {
  const [jsonData, setJsonData] = useState(null);
  const [error, setError] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/json") {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const parsedData = JSON.parse(e.target.result);
          setJsonData(parsedData);
          setError(null);
        } catch (err) {
          setError("Invalid JSON file");
          setJsonData(null);
        }
      };
      reader.readAsText(file);
    } else {
      setError("Please upload a valid JSON file");
      setJsonData(null);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Upload JSON File</h2>
      <input
        type="file"
        accept="application/json"
        onChange={handleFileUpload}
        className="block w-full p-2 border border-gray-300 rounded-md"
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {jsonData && (
        <pre className="mt-4 p-2 bg-gray-100 rounded-md overflow-x-auto text-sm">
          {JSON.stringify(jsonData, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default JsonUploader;
  