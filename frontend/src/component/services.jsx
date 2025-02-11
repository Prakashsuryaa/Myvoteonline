import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import img4 from "../../src/images/bg.jpg";

const Services =(()=>
{
    return(
        <>
        <Navbar/>
        <div style={{ backgroundImage: `url(${img4} )`, backgroundSize: '100% 100%' }} > 
            <h1>Services</h1>
            <p>We offer various services to help you with your voting needs.</p>
        </div>
        <Footer/>
        </>

    )
})
export default Services;