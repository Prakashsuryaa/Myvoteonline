import { motion } from "framer-motion";
import img1 from "../../src/images/prakash.jpg";
import img2 from "../../src/images/bhushan.jpg";
import img3 from "../../src/images/ravan.jpg";
import img4 from "../../src/images/bg.jpg";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

// 🔹 Team Members Array पहले Define करें
const teamMembers = [
    { name: "Prakash Suryavanshi", role: "Team-Leader", image: img1 },
    { name: "Bhushan Ravan", role: "Frontend developer", image: img2 },
    { name: "Sandip Ravan", role: "Lead Designer", image: img3 },
];

const AboutUs = () => {
    return (
        <>
        <Navbar />
        <div
  className="min-h-screen flex flex-col items-center p-10 text-white bg-cover bg-center bg-no-repeat"style={{ backgroundImage: `url(${img4} )`, backgroundSize: '100% 100%' }}
>            
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl text-center mt-10 bg-slate-200 bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border-l-8 border-r-8 border-black"
            >
                <h1 className="text-5xl font-mono text-black drop-shadow-lg">About Us</h1>
                <p className="text-gray-700 mt-4 text-lg leading-relaxed">
                    <b>Vote Online – Your Ultimate Election Management Platform</b> <br />
                    Our platform provides innovative election solutions, including voter outreach, campaign promotion, and strategic insights to help candidates win elections efficiently.
                </p>
            </motion.div>

            {/* Mission Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-white bg-opacity-10 backdrop-blur-lg shadow-2xl rounded-2xl p-10 mt-12 max-w-4xl text-center border-l-8 border-r-8 border-black"
            >
                <h2 className="text-3xl font-mono font-bold text-black drop-shadow-lg">Our Mission</h2>
                <p className="text-gray-800 mt-4 text-lg leading-relaxed">
                    <b>At Vote Online</b>, we aim to revolutionize the election process with cutting-edge digital solutions that boost campaign efficiency, voter engagement, and strategic decision-making.
                </p>
            </motion.div>

            {/* Team Section */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-2xl shadow-2xl text-center transform hover:scale-105 transition duration-300 border border-gray-600 hover:border-black"
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-400 shadow-md"
                        />
                        <h3 className="mt-4 text-xl font-semibold text-gray-800 drop-shadow-lg">{member.name}</h3>
                        <p className="text-xl font-semibold text-gray-600 drop-shadow-lg">{member.role}</p>
                    </motion.div>
                ))}
            </div>

            
        </div>
        <Footer />
        </>
       
    );
};

export default AboutUs;
