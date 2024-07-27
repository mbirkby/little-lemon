import React from "react";
import restaurantImage from "../assets/images/restaurant.jpg"
import '../App.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-block content-block"> 
              <img className='footer-image' src={restaurantImage} alt="Restaurant verander" />
              <div className="footer-columns">
                  <ul className="footer-column">
                    <li><strong>Navigation</strong></li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order</li>
                    <li>Login</li>
                  </ul>
                  <ul className="footer-column">
                    <li><strong>Contact</strong></li>
                    <li>address</li>
                    <li>city</li>
                    <li>postcode</li>
                    <li>telephone</li>
                  </ul>
                  <ul  className="footer-column">
                    <li><strong>Social Media</strong></li>
                    <li>Meta</li>
                    <li>X</li>
                    <li>Instagram</li>
                  </ul>
                </div>
            </div>
        </footer>
    );
  };
  export default Footer;