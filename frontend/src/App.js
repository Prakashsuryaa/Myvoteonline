import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/login.jsx";
import Register from "./component/register.jsx";
import Navbar from "./component/navbar.jsx";
import Footer from "./component/footer.jsx";
import Dashboard from "./pages/dashboard.jsx";
import ImageSlider from "./component/slider.jsx";


function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/slider" element={<ImageSlider/>} />
      </Routes>
      
    </Router>
  );
}

export default App;
