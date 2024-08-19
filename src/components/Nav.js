import React from "react";
import '../App.css';
import '../styles.css';
import  {Link} from 'react-router-dom';

const Nav = () => {
    return (
      
        <nav>
            <ul className="nav-list text-dark">
                <li className="nav-item"><Link to="/">HOME</Link></li>
                <li className="nav-item">ABOUT</li>
                <li className="nav-item"><Link to="/booking">RESERVATIONS</Link></li>
                <li className="nav-item">ORDER</li>
                <li className="nav-item">LOGIN</li>
            </ul>
        </nav>
      
    );
  };
  export default Nav;