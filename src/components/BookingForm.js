import {useState} from 'react';
//import { useEffect } from 'react';

//import BookingSlot from './BookingSlot';
const BookingForm = ({availableTimes, dateChangeHandler, submitHandler}) => {
    const [resDate, setResDate] = useState("");
    const[resTime, setResTime] = useState("");
    const [guests, setGuests] = useState(2);
    const [occasion, setOccasion] = useState("None");

    
    
    
    function bundleData() {
        const data = {resDate, resTime, guests, occasion}
        return data;
    }

    

    const handleSubmit =  (e) => {
        e.preventDefault()
        const formData = bundleData();

        submitHandler(formData);

        clearForm();
        
        
    }

    

    function clearForm() {
        setResDate("");
        setResTime("");
        setGuests(2);
        setOccasion("None");
    }


    
    function updateDate(dateStr) {
        console.log("updateDate ("+dateStr+")");
        setResDate(dateStr);
        
        const action = {
            type:'update-times',
            date:dateStr
        }

        dateChangeHandler(action);

    }
    


    return (
        <div className="booking-block content-block bg-green">
            <div className="booking-form  text-light">
                <h1>Booking Form</h1>
                <form className=" booking-inputs" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="res_date">Date</label><br />
                        <input type="date" value={resDate}  onChange={e => updateDate(e.target.value)} name="res_date" id="res_date" />
                    </div>
                    <div>
                        <label htmlFor="res_time">Time</label><br />
                        <select id="res_time" name="res-time" value={resTime} onChange={e => setResTime(e.target.value)}>
                            {availableTimes.map((time) => (
                                <option  key={time}>{time}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="guests">Number Of Guests</label><br/>
                        <input  id="guests" name="guests" type="number" value={guests} onChange={e => setGuests(parseInt(e.target.value))} placeholder="1" min="1" max="10" />

                    </div>
                    <div>
                        <label htmlFor="occasion">Occasion</label><br />
                        <select id="occasion"  value={occasion} onChange={e=>setOccasion(e.target.value)}>
                            <option  key="1">None</option>
                            <option  key="2">Birthday</option>
                            <option  key="3">Aniversary</option>
                        </select>

                    </div>
                    <div>
                        <button className="button" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BookingForm;