
import BookingForm from "./BookingForm";


const BookingPage = ({availableTimes}) => {
    return (
        <div className="booking-page">
            <BookingForm availableTimes={availableTimes}/>
        </div>
    );
}

export default BookingPage