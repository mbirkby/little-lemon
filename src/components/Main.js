import React from "react";

import {Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import HomePage from './HomePage';
import BookingPage from './BookingPage';


const Main = () => {
    const [availableTimes, setAvailableTimes] = useState(["17:00","18:00","19:00","20:00","21:00","22:00"]);
    
    
    return (
        <main>
            
            <Routes> 
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes}/>}></Route>
            </Routes>
        </main>
      
    );
  };
  export default Main;