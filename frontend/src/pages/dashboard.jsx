// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-md">
//         <div className="p-4 text-blue-600 font-bold text-xl border-b">
//           My Vote Online
//         </div>
//         <nav className="mt-4">
//           <ul className="space-y-2">
//             <li className="p-3 hover:bg-blue-100 cursor-pointer">🏠 Home</li>
//             <li className="p-3 hover:bg-blue-100 cursor-pointer">🗳 Elections</li>
//             <li className="p-3 hover:bg-blue-100 cursor-pointer">📊 Results</li>
//             <li className="p-3 hover:bg-blue-100 cursor-pointer">📄 Reports</li>
//             <li className="p-3 hover:bg-blue-100 cursor-pointer">⚙️ Settings</li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1">
//         {/* Navbar */}
//         <header className="flex justify-between p-4 bg-white shadow-md">
//           <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
//           <div className="flex items-center space-x-4">
//             <span className="text-gray-600">Welcome, User</span>
//             <img
//               src="https://via.placeholder.com/40"
//               alt="Profile"
//               className="w-10 h-10 rounded-full"
//             />
//           </div>
//         </header>

//         {/* Content Section */}
//         <main className="p-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="p-4 bg-white shadow-md rounded-lg">
//               <h2 className="text-lg font-semibold">Upcoming Elections</h2>
//               <p className="text-gray-500">Check election schedules and updates.</p>
//             </div>

//             <div className="p-4 bg-white shadow-md rounded-lg">
//               <h2 className="text-lg font-semibold">Your Voter Status</h2>
//               <p className="text-gray-500">Verify your registration details.</p>
//             </div>

//             <div className="p-4 bg-white shadow-md rounded-lg">
//               <h2 className="text-lg font-semibold">Results & Reports</h2>
//               <p className="text-gray-500">View past election results and reports.</p>
//             </div>

//             <div className="p-4 bg-white shadow-md rounded-lg">
//               <h2 className="text-lg font-semibold">Election Awareness</h2>
//               <p className="text-gray-500">Learn about election processes.</p>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
// src/pages/Dashboard.jsx
import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import img2 from "../../src/images/img2.png";
import img4 from "../../src/images/img4.png";

const Dashboard = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <img src={img2} className="w-full " alt="img" />
      <img src={img4} className="w-234px h-192px p-20"  alt="voteimage" />

      <Footer />
    </div>
  );
};

export default Dashboard;
