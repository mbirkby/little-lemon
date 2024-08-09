
import BookingForm from "./BookingForm";


const BookingPage = ({availableTimes, dateChangeHandler, submitHandler}) => {
    
    return (
        <div className="booking-page">
            <BookingForm availableTimes={availableTimes} dateChangeHandler={dateChangeHandler} submitHandler={submitHandler}/>
        </div>
    );
}

export default BookingPage