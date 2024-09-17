import React from "react";
import "../styles/Home.css"
import pic1 from "../assets/carva2.jpg"
import { Link } from "react-router-dom";
<link href="https://fonts.googleapis.com/css?family=Ubuntu+Mono:400,700" rel="stylesheet"></link>

// import pic2 from "../assets/pic2.jpg"
// import pic5 from "../assets/pic5.jpg"
function Home(){
    return(
        <div className="header">
            <h1 className="cssanimation leMagnify sequence">Welcome to DressCode</h1>
            <p className="cssanimation leMagnify sequence">Your Favourite Dress Site</p>
            
        <img src={pic1} alt="girl on the beach" className="images"></img>
        {/* <img src={pic2} alt="girl on the beach" className="images2"></img>
        <img src={pic5} alt="girl on the beach" className="images3"></img> */}
        <Link to="/Men"  className="display">Shop Men </Link> 
        <Link to="/Women" className="display1">Shop Women</Link>  
    
        </div>
    )
}
export default Home
