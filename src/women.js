import React from "react";
import women1 from "./womenstyle/cavs.jpg"
import women2 from "./womenasset/women4.jpg"
import women3 from "./womenasset/women5.jpg"
import women5 from "./womenfashion/bags19.jpg"
import women4 from "./womenasset/women7.jpg"
import women6 from "./womenasset/women10.jpg"
import women7 from "./womenasset/women12.jpg"
import "./styles/women.css"
import { Link } from 'react-router-dom';
function Women(){
    return(
        <div>
        <div className="header">
        <div className="sub-header">
<img src={women1} alt="Two Fashion women " className="img1"></img>
<h1 className="caption1">Shop It For Girls</h1>
<Link to="/unisexs" >
 <button className="btn-23"> 
  <span className="text"></span>
  <span aria-hidden="" className="marquee">shop Now!</span>
</button></Link>
        </div>
       
        <div className="main-content">
            <div className="sub-content">
        <img src={women2} alt="fashion women" className="fashion"></img>
        <p className="image-text">Hot Ladies</p>
        <p className="image-text">shop it</p>
        <Link to="/shorts" >
 <button className="btn-23"> 
  <span className="text"></span>
  <span aria-hidden="" className="marquee">shop Now!</span>
</button></Link>
        </div>
        
        <div className="sub-content">
        <img src={women3} alt="fashion women" className="fashion"></img>
        <p className="image-text">kudos </p>
        <p className="image-text">your Favourite</p>
        <Link to="/Skirts" >
 <button className="btn-23"> 
  <span className="text"></span>
  <span aria-hidden="" className="marquee">shop Now!</span>
</button></Link>
        </div>
       
        <div className="sub-content">
        <img src={women4} alt="fashion women" className="fashion"></img>
        <p className="image-text">Trandy outfit</p>
        <p className="image-text">Shop it</p>
        <Link to="/heels" >
 <button className="btn-23"> 
  <span className="text"></span>
  <span aria-hidden="" className="marquee">shop Now!</span>
</button></Link>
        </div>
       
        <div className="sub-content">
        <img src={women5} alt="fashion women" className="fashion"></img>
        <p className="image-text">Trandy Bags</p>
        <Link to="/Bags" >
 <button className="btn-23"> 
  <span className="text"></span>
  <span aria-hidden="" className="marquee">shop Now!</span>
</button></Link>
        </div>
       
        </div>
        </div>

<div className="content">
    <div className="image-wrap">
    <img src={women6} alt="fashion women" className="fashion1"></img>
    <p className="content-text">Super hot</p>
    <p className="content-text">Days wears</p>
    <Link to="http://localhost:3000/top" >
 <button className="btn-23"> 
  <span className="text"></span>
  <span aria-hidden="" className="marquee">shop Now!</span>
</button></Link>

    </div>

    <div className="image-wrap">
    <img src={women7} alt="fashion women" className="fashion1"></img> 
    <p className="content-text">seasonal fit</p> 
    <Link to="/blazer" >
 <button className="btn-23"> 
  <span className="text"></span>
  <span aria-hidden="" className="marquee">shop Now!</span>
</button></Link>
    </div>
</div>

        </div>
    )
}

export default Women