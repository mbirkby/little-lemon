import React from "react";
import '../App.css';

const Nav = () => {
    return (
      
        <nav>
            <ul className="nav-list text-yellow">
                <li className="nav-item"><a href="home">Home</a></li>
                <li className="nav-item"><a href="about">About</a></li>
                <li className="nav-item"><a href="reservations">Reservations</a></li>
                <li className="nav-item"><a href="order">Order</a></li>
                <li className="nav-item"><a href="login">Login</a></li>
            </ul>
        </nav>
      
    );
  };
  export default Nav;