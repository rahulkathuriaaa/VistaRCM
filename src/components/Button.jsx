import React from "react";
import { Link } from "react-router-dom";

const scrollUp = () =>{
  window.scrollTo({
    top:0,
    behavior: "smooth"
  })
}

const Button = ({ styles }) => (
  <Link
  to="/about"
  className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  onClick={scrollUp}
>
Get Started
</Link>
 
//  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
//   Get Started
//   </button>
 
 
   
);

export default Button;
