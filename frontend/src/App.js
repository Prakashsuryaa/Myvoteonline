import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/login.jsx";
import Register from "./component/register.jsx";
import Navbar from "./component/navbar.jsx";
import Footer from "./component/footer.jsx";
import Dashboard from "./pages/dashboard.jsx";
import VoterForm from "./component/voterform.jsx";
import SearchPage from "./component/seachpage.jsx";
function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/form" element={<VoterForm />} />
        <Route path="/search-page" element={<SearchPage />} />
      </Routes>
      
    </Router>
  );
}

export default App;
