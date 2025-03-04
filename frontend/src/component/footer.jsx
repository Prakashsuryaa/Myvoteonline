import { Link } from "react-router-dom";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-4 ">
      <a href="#">HELP</a>&nbsp;| &nbsp;<a  href="#">FEEDBACK</a>&nbsp;|&nbsp;<a  href="#">CONTACT US</a>&nbsp;|&nbsp;<a>LAST UPDATE: 21-01-2025</a>
    
    
    
    <p>  <Link to="https://electoralsearch.eci.gov.in" className="underline">https://electoralsearch.eci.gov.in</Link>
      </p>
    </footer>
  );
};

export default Footer;