import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/login.jsx";
import Register from "./component/register.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Navbar from "./component/navbar.jsx";
import Footer from "./component/footer.jsx";
import VoterForm from "./component/voterform.jsx";
import SearchPage from "./component/seachpage.jsx";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/form" element={<VoterForm/>} />
        <Route path="/search" element={<SearchPage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
