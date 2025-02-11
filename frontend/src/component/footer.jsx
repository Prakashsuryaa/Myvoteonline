import { Link } from "react-router-dom";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-4 ">
      <p>HELP | FEEDBACK | CONTACT US</p>
      <p>LAST UPDATE: 21-01-2025</p>
      <p>
        <Link to="https://electoralsearch.eci.gov.in" className="underline">https://electoralsearch.eci.gov.in</Link>
      </p>
    </footer>
  );
};

export default Footer;