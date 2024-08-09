import React from "react";

import {Routes, Route} from 'react-router-dom';
import {useReducer} from 'react';
import HomePage from './HomePage';
import BookingPage from './BookingPage';

 const updateTimes =(state, action) => {
    const date = action.date;
    
    //console.log("date is " +date);
    //console.log("type is "+action.type);


    return [...state];
  }


  function initializeTimes() {
    return ["17:00","18:00","19:00","20:00","21:00","22:00"];
  }


  function submitHandler(data) {
    console.log("Submitted");

  }


const Main = () => {
   // const [availableTimes, setAvailableTimes] = useState(["17:00","18:00","19:00","20:00","21:00","22:00"]);

   
   
  
   const [availableTimes, dispatch] = useReducer(updateTimes,initializeTimes());

   const dateChangeHandler = (date) => {
     
      dispatch({type:'update-times', date:date});
 
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

  



export {initializeTimes, updateTimes};
export default Main;