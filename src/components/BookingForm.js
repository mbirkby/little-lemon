import {useState} from 'react';


const BookingForm = ({availableTimes}) => {
    const [resDate, setResDate] = useState(new Date());
   
    const[resTime, setResTime] = useState("18:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("None");

    const handleSubmit =  (e) => {
        e.preventDefault()
        setResDate(new Date());
        setResTime("18:00");
        setGuests(2);
        setOccasion("None");
    }
    
    return (
        <div className="booking-block content-block bg-green">
            <div className="booking-form  text-light">
                <h1>Booking Form</h1>
                <form className=" booking-inputs" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="res_date">Date</label><br />
                        <input type="date" value={resDate}  onChange={e => setResDate(e.target.value)} name="res_date" id="res_date" />
                    </div>
                    <div>
                        <label htmlFor="res_time">Time</label><br />
                        <select id="res_time"  value={resTime} onChange={e => setResTime(e.target.value)}>
                            {availableTimes.map((time) => (
                                <option>{time}</option>
                            ))}
                           
                        </select>
                    </div>
                    <div>
                        <label htmlFor="guests">Number Of Guests</label><br/>
                        <input type="number" value={guests} onChange={e => setGuests(e.target.value)} placeholder="1" min="1" max="10" name="guests" id="gests"/>

                    </div>
                    <div>
                        <label htmlFor="occasion">Occasion</label><br />
                        <select id="occasion"  value={occasion} onChange={e=>setOccasion(e.target.value)}>
                            <option>None</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
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