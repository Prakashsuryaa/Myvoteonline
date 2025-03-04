  import React from "react";

  const ServerErrorPage = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600 p-6">
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl animate-fadeIn">
          {/* Main Content */}
          <div className="bg-white p-6 rounded-lg shadow-md flex-1 transform transition duration-500 hover:scale-105">
            <h1 className="text-3xl font-bold mb-2 text-gray-900">Server does not respond / Server failure</h1>
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

          {/* Sidebar - FAQ */}
          <div className="bg-white p-4 shadow-lg rounded-xl w-full md:w-1/3 transform transition duration-500 hover:scale-105">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Related Issues</h2>
            <ul className="space-y-3">
              {[
                "Internet issue?",
                "How to change password?",
                "Server does not respond / Server failure",
              ].map((item, index) => (
                <li
                  key={index}
                  className="p-3 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-lg text-gray-700 transition-all duration-300 hover:translate-x-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  export default ServerErrorPage;
