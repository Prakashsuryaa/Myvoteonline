import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from 'react';


// Lazy load components
const Register = lazy(() => import('./component/register.jsx'));
const Footer = lazy(() => import('./component/footer.jsx'));
const Dashboard = lazy(() => import('./pages/dashboard.jsx'));
const VoterForm = lazy(() => import('./component/voterform.jsx'));
const SearchPage = lazy(() => import('./component/seachpage.jsx'));
const Login = lazy(() => import('./component/login.jsx'));
const Navbar = lazy(() => import('./component/navbar.jsx'));
const VoterSlip = lazy(() => import('./component/voterslip.jsx'));
const AboutUs = lazy(() => import('./component/aboutus.jsx'));
const Services = lazy(() => import('./component/services.jsx'));

function App() {
  return (
    <Router>
      {/* Suspense wrapper for lazy-loaded components */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/form" element={<VoterForm />} />
          <Route path="/search-page" element={<SearchPage />} />
          <Route path="/slip" element={<VoterSlip/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/services" element={<Services/>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
