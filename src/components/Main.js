import React from "react";

import {Routes, Route} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import {useReducer} from 'react';
import {useState} from 'react';
//import {useEffect} from 'react';


import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import {fetchAPI, submitAPI} from '../js/api.js';


function initializeTimes() {
  
  const date = new Date();
  const initialTimes = fetchAPI(date);

  return initialTimes;
}


function updateTimes(state, action) {
  const dateStr = action.date;
  const date = new Date(dateStr);
  const updatedTimes = fetchAPI(date);

   return updatedTimes
 }




const Main = () => {


  const [availableTimes, dateChangeHandler] = useReducer(updateTimes,initializeTimes());

  const navigate = useNavigate();

  const [formData, setFormData] = useState({resDate:"", resTime:"", guests:0,occasion:''});

  function submitForm(formData) {
   
    if (submitAPI(formData)) {
      setFormData(formData);
      navigate('/booking/confirmed')
    }
  }


 

 

  return (
    <main>
      <Routes> 
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dateChangeHandler={dateChangeHandler} submitHandler={submitForm}/>}></Route>
        <Route path="/booking/confirmed" element={<ConfirmedBooking formData={formData}/>}></Route>
      </Routes>
    </main>
  );
};


export {updateTimes, initializeTimes};
export default Main;