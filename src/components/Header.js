import React from "react";
import logo from "../assets/images/Logo.svg"
import Nav from "./Nav";
import '../App.css';




const Header = () => {
    return (
      
        <header className='header'>
           <div className="header-block content-block">
                <img className="header-logo" src={logo} alt="Logo" />  
                <Nav />  
           </div>    
        </header>

    );
  };
  export default Header;