import React from "react";
const ServerErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-2xl bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-2">Server does not respond / Server failure</h1>
        <p className="text-gray-500 text-sm mb-4">Last Updated: 609d</p>
        <p className="text-gray-700 mb-4">
          This issue usually occurs when the connection is unstable or when the
          signal is too weak. Please try the following to fix it:
        </p>
        <ul className="list-decimal list-inside text-gray-700 mb-4">
          <li>
            Change your connection method to Cellular vs. Wi-Fi (Wi-Fi
            preferably), or avoid regions with heavy network traffic.
          </li>
          <li>End all the other applications in the background and restart the game.</li>
          <li>Restart your phone and connection to try again.</li>
        </ul>
        <p className="text-gray-700 mb-4">
          If your ping is around 360-369ms, then it becomes a Server Not
          Responding issue.
        </p>
        <p className="text-gray-700">
          If the problem persists, please contact us and our technical team will
          assist you.
        </p>
      </div>
    </div>
  );
};

export default ServerErrorPage ;

