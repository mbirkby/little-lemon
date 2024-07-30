import React from "react";
import '../App.css';
import '../styles.css';
import  {Link} from 'react-router-dom';

const Nav = () => {
    return (
      
        <nav>
            <ul className="nav-list text-yellow">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/">About</Link></li>
                <li className="nav-item"><Link to="/booking">Reservations</Link></li>
                <li className="nav-item"><Link to="/">Order</Link></li>
                <li className="nav-item"><Link to="/">Login</Link></li>
            </ul>
        </nav>
      
    );
  };
  export default Nav;