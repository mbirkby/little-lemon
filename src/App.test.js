import {fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import BookingForm from './components/BookingForm';
import  {initializeTimes, updateTimes} from './components/Main';
import {act} from "react-dom/test-utils"





test('Renders the BookingForm heading', () => {
    const availableTimes = ["15:00","16:00"];
    const updateTimes = jest.fn();
    render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes}/>);
   
    const headingElement = screen.getByText("Booking Form");
    expect(headingElement).toBeInTheDocument();
});

test('initialize times',() => {
   
    const initialTimes = initializeTimes();
    expect(initialTimes).toStrictEqual(["17:00","18:00","19:00","20:00","21:00","22:00"]);
})


test('Update times',()=> {
    const initialState = ["17:00","18:00","19:00","20:00","21:00","22:00"]
    const date = new Date();
    
    
    const action = {
        type:'update-times', 
        date:date,
    };
   
    const updatedTimes = updateTimes(initialState,action);
    expect(updatedTimes).toStrictEqual(["17:00","18:00","19:00","20:00","21:00","22:00"]);
})

test('Date Change Handler is called when date is changed',() => {
    const availableTimes = ["17:00","18:00","19:00","20:00","21:00","22:00"];
    const dateChangeHandler = jest.fn();
    const submitHandler = jest.fn();

    render(<BookingForm availableTimes={availableTimes} dateChangeHandler={dateChangeHandler} submitHandler={submitHandler}/>);

    const dateField = screen.getByLabelText(/Date/);
    fireEvent.change(dateField, { target: { value: "2024-06-23"} });

    expect(dateChangeHandler).toHaveBeenCalledWith("2024-06-23");
})

test('Submit button runs handler with correct form properties',()=> {
   
    
    const availableTimes = ["17:00","18:00","19:00","20:00","21:00","22:00"];
    const dateChangeHandler = jest.fn();
    const submitHandler = jest.fn();

    //expercted properties 
    const resDate = "2024-08-18"; 
    const resTime ="19:00";
    const guests = 4;
    const occasion = "Birthday"

    render(<BookingForm availableTimes={availableTimes} dateChangeHandler={dateChangeHandler} submitHandler={submitHandler}/>);
    
    const dateField = screen.getByLabelText(/Date/);
    expect(dateField).toBeInTheDocument();
    
    const timeField = screen.getByLabelText(/Time/);
    
    const guestsField = screen.getByLabelText(/Number Of Guests/);
    expect(guestsField).toBeInTheDocument();
   

    const occasionField = screen.getByLabelText(/Occasion/);
    expect(occasionField).toBeInTheDocument();

    const submitButton = screen.getByRole("button");

    act(() => {
        fireEvent.change(dateField, { target: { value: resDate } });
        userEvent.selectOptions(timeField, resTime);
        fireEvent.change(guestsField, { target: { value: guests } });
        userEvent.selectOptions(occasionField, occasion);
    });
       
  
    expect(screen.getByRole('option', {name: "19:00"}).selected).toBe(true);
    expect(screen.getByRole('option', {name: 'Birthday'}).selected).toBe(true);
    expect(screen.getByRole('option', {name: 'Aniversary'}).selected).toBe(false);
    expect(screen.getByRole('option', {name: 'None'}).selected).toBe(false);
    
    act(()=> {
        fireEvent.click(submitButton);
    })
    
    
    

    
    
    

    expect(submitHandler).toHaveBeenCalledWith({resDate, resTime, guests, occasion});
    
});


