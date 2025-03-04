import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";

// Lazy load the components
const Register = lazy(() => import("./component/register.jsx"));
const Footer = lazy(() => import("./component/footer.jsx"));
const Dashboard = lazy(() => import("./pages/dashboard.jsx"));
const VoterForm = lazy(() => import("./component/voterform.jsx"));
const SearchPage = lazy(() => import("./component/seachpage.jsx"));
const Login = lazy(() => import("./component/login.jsx"));
const Navbar = lazy(() => import("./component/navbar.jsx"));
const VoterSlipPage = lazy(() => import("./component/voterslip.jsx"));
const AboutUs = lazy(() => import("./component/aboutus.jsx"));
const FileUpload = lazy(() => import("./component/category.jsx"));

const PhoneListTable = lazy(() => import("./component/contactlist.jsx"));
const Sidebar2 = lazy(() => import("./component/sidebar2.jsx"));
const Socialmedia = lazy(() => import("./component/socialmedia.jsx"));
const SupportDetails = lazy(() => import("./component/support.jsx"));
const LoginFailure = lazy(() => import("./component/loginfailure.jsx")); 
const ServerErrorPage = lazy(() => import("./component/servererror.jsx"));
const Setting = lazy(() => import('./component/setting.jsx'))
const Sidebar =lazy(()=>import("./component/sidebar.jsx"))
const JsonUploader = lazy(() => import("./component/file.jsx"));
const Dashboard2 =lazy(() => import("./component/dasboard2.jsx"));
const Mediaform =lazy(()=> import("./component/mediaform.jsx"));


function App() {
  return (
    <Router>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/form" element={<VoterForm />} />
          <Route path="/search-page" element={<SearchPage />} />
          <Route path="/slip" element={<VoterSlipPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/fileupload" element={<FileUpload/>}/>
          <Route path="/setting" element={<Setting/>} />
          <Route path="/socialmedia" element={<Socialmedia />} />
          <Route path="/support" element={<SupportDetails />} />
          <Route path="/loginfailure" element={<LoginFailure/>} /> 
          <Route path="/servererror" element={<ServerErrorPage/>} />
          <Route path="/json" element={<JsonUploader/>}/>
          <Route path="/dashboard2" element={<Dashboard2/>}/>
          <Route path="/sidebar" element={<Sidebar/>}/>
          <Route path="/sidebar2" element={<Sidebar2/>}/>
          <Route path="/mediaform" element={<Mediaform/>}/>
        </Routes>

      </Suspense>
    </Router>
  );
}

export default App;
