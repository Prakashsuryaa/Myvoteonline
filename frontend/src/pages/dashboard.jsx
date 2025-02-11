import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import img2 from "../../src/images/img2.jpg";
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
