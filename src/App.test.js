import {fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import BookingForm from './components/BookingForm';
import {act} from "react-dom/test-utils"
import {initializeTimes, updateTimes} from './components/Main';





test('Renders the BookingForm heading', () => {
    const availableTimes = ["15:00","16:00"];
    const updateTimes = jest.fn();
    render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes}/>);
   
    const headingElement = screen.getByText("Booking Form");
    expect(headingElement).toBeInTheDocument();
});

test('Test initialize times returns the correct times for a given date',() => {
     const initialTimes = initializeTimes();

    expect(initialTimes).not.toBeNull();
    expect(initialTimes.length).toBeGreaterThan(0)
    //expect(initialTimes).toStrictEqual(["17:00","18:00","19:00","20:00","21:00","22:00"]);
})


test('Update times',()=> {
    const initialState = ["17:00","18:00","19:00","20:00","21:00","22:00"]
    const date = new Date('2023-08=24');
    
    
    
    const action = {
        type:'update-times', 
        date:'2023-08=24'
    };
   
    const updatedTimes = updateTimes(initialState,action);
    expect(updatedTimes).toStrictEqual(["17:00","17:30","18:00","19:00","19:30","20:30","22:30"]);
})

test('Date Change Handler is called when date is changed',() => {
    const availableTimes = ["17:00","18:00","19:00","20:00","21:00","22:00"];
    const dateChangeHandler = jest.fn();
    const submitHandler = jest.fn();

    render(<BookingForm availableTimes={availableTimes} dateChangeHandler={dateChangeHandler} submitHandler={submitHandler}/>);

    const dateField = screen.getByLabelText(/Date/);
    act(()=> {
        fireEvent.change(dateField, { target: { value: "2024-06-23"} });
    })
    

    expect(dateChangeHandler).toHaveBeenCalledWith({type:'update-times', date:"2024-06-23"});
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
       
  
    expect(screen.getByText('19:00').selected).toBe(true);
    expect(screen.getByText('Birthday').selected).toBe(true);
    expect(screen.getByText('Aniversary').selected).toBe(false);
    expect(screen.getByText('-- select an occasion --').selected).toBe(false);
    
    act(()=> {
        fireEvent.click(submitButton);
    })

    expect(submitHandler).toHaveBeenCalledWith({resDate, resTime, guests, occasion});
    
});

test('Test validation attributes on html input elements',()=> {
    const availableTimes = ["17:00","18:00","19:00","20:00","21:00","22:00"];
    const dateChangeHandler = jest.fn();
    const submitHandler = jest.fn();

   

    render(<BookingForm availableTimes={availableTimes} dateChangeHandler={dateChangeHandler} submitHandler={submitHandler}/>);

    const dateField = screen.getByLabelText("Date*");
    expect(dateField).toHaveAttribute("required");


    const timeField = screen.getByLabelText("Time*");
    expect(timeField).toHaveAttribute("required");

    const guests= screen.getByLabelText("Number Of Guests*");
    expect(guests).toHaveAttribute("required");
    expect(guests).toHaveAttribute("min","1");
    expect(guests).toHaveAttribute("max","10");

    const occasion= screen.getByLabelText("Occasion");
    expect(occasion).not.toHaveAttribute("required");

});


test('Test initial form has disabled submit button',()=> {
    const availableTimes = ["17:00","18:00","19:00","20:00","21:00","22:00"];
    const dateChangeHandler = jest.fn();
    const submitHandler = jest.fn();
    render(<BookingForm availableTimes={availableTimes} dateChangeHandler={dateChangeHandler} submitHandler={submitHandler}/>);

    const submitButton = screen.getByRole('button');
    expect(submitButton.disabled).toBe(true);
    

})

test('Test form is disabled when just date is selected',()=> {
    const availableTimes = ["17:00","18:00","19:00","20:00","21:00","22:00"];
    const dateChangeHandler = jest.fn();
    const submitHandler = jest.fn();
    const resDate = "2024-08-18"; 
   
    render(<BookingForm availableTimes={availableTimes} dateChangeHandler={dateChangeHandler} submitHandler={submitHandler}/>);
    const dateField = screen.getByLabelText(/Date/);
    act(() => {
        fireEvent.change(dateField, { target: { value: resDate } });
    });

    const submitButton = screen.getByRole('button');
    expect(submitButton.disabled).toBe(true);
    

})

test('Test form is disabled when just time is selected',()=> {
    const availableTimes = ["17:00","18:00","19:00","20:00","21:00","22:00"];
    const dateChangeHandler = jest.fn();
    const submitHandler = jest.fn();
    const resDate = "2024-08-18"; 
    const resTime = "18:00"
   
    render(<BookingForm availableTimes={availableTimes} dateChangeHandler={dateChangeHandler} submitHandler={submitHandler}/>);
    const timeField = screen.getByLabelText(/Time/);
    act(() => {
        userEvent.selectOptions(timeField, resTime);(timeField, { target: { value: resTime } });
    });

    const submitButton = screen.getByRole('button');
    expect(submitButton.disabled).toBe(true);
    

});

test('Test form is disabled when date and time selected but number ofguests is invalid',()=> {
    const availableTimes = ["17:00","18:00","19:00","20:00","21:00","22:00"];
    const dateChangeHandler = jest.fn();
    const submitHandler = jest.fn();
    const resDate = "2024-08-18"; 
    const resTime = "18:00"
   
    render(<BookingForm availableTimes={availableTimes} dateChangeHandler={dateChangeHandler} submitHandler={submitHandler}/>);
    const dateField = screen.getByLabelText(/Date/);
    const timeField = screen.getByLabelText(/Time/);
    const guestsField = screen.getByLabelText(/Guests/);
    act(() => {
        fireEvent.change(dateField, { target: { value: resDate } });
        userEvent.selectOptions(timeField, resTime);
        fireEvent.change(guestsField, { target: { value: 0 } });
    });

    const submitButton = screen.getByRole('button');
    expect(submitButton.disabled).toBe(true);
    

});

test('Test initial form is not disabled when date and time selected and number of guests is valid',()=> {
    const availableTimes = ["17:00","18:00","19:00","20:00","21:00","22:00"];
    const dateChangeHandler = jest.fn();
    const submitHandler = jest.fn();
    const resDate = "2024-08-18"; 
    const resTime = "18:00"
   
    render(<BookingForm availableTimes={availableTimes} dateChangeHandler={dateChangeHandler} submitHandler={submitHandler}/>);
    const dateField = screen.getByLabelText(/Date/);
    const timeField = screen.getByLabelText(/Time/);
    const guestsField = screen.getByLabelText(/Guests/);
    
    act(() => {
        fireEvent.change(dateField, { target: { value: resDate } });
        userEvent.selectOptions(timeField, resTime);
        fireEvent.change(guestsField, { target: { value: 2 } });
    });

    const submitButton = screen.getByRole('button');
    expect(submitButton.disabled).toBe(false);
    

})


