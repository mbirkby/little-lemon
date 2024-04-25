import React from "react";
import footerLogo from "../assets/images/Mario and Adrian A.jpg"
import '../App.css';
const Footer = () => {
    return (
      
        <footer className="footerRow">
            <img src={footerLogo} alt="Propietors" />
            <div className="footerColumn">
                <ul>
                    <li><strong>Navigation</strong></li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order</li>
                    <li>Login</li>
                </ul>
                
            </div>
            <div className="footerColumn">
                <ul>
                    <li><strong>Contact</strong></li>
                    <li>address</li>
                    <li>city</li>
                    <li>postcode</li>
                    <li>telephone</li>
                </ul>
            </div>
            <div className="footerColumn">
            <ul>
                    <li><strong>Social Media</strong></li>
                    <li>Meta</li>
                    <li>X</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </footer>
      
    );
  };
  export default Footer;