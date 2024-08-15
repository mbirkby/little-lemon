import React from "react";

import {Routes, Route} from 'react-router-dom';
import {useReducer} from 'react';
//import {useEffect} from 'react';

import HomePage from './HomePage';
import BookingPage from './BookingPage';
import {fetchAPI} from '../js/api.js';


function initializeTimes() {
  console.log("initializeTimes");
  const date = new Date();
  const initialTimes = fetchAPI(date);
  //const initialTimes = ["17:00","18:00","19:00","20:00","21:00","22:00"]
 
  return initialTimes;
}


function updateTimes(state, action) {
  console.log("updateTimes "+action.date);
  const dateStr = action.date;
  const date = new Date(dateStr);
  console.log("fetchAPI ("+date+")");
  
   const updatedTimes = fetchAPI(date);
   //const updatedTimes=["17:30","18:30","19:30","20:30","21:30","22:30"];
   
   return updatedTimes
 }




const Main = () => {
  console.log("Main");
  
  //const [availableTimes, setAvailableTimes] = useState(initializeTimes());
  
  

  

  const [availableTimes, dateChangeHandler] = useReducer(updateTimes,initializeTimes());


  function submitHandler(data) {
    console.log("Submitted");
  }


 

 

  return (
    <main>
      <Routes> 
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dateChangeHandler={dateChangeHandler} submitHandler={submitHandler}/>}></Route>
      </Routes>
    </main>
  );
};


export {updateTimes, initializeTimes};
export default Main;