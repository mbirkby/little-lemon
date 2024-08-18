const ConfirmedBooking = ({formData}) => {

    return (
        <div className="confirm-block content-block bg-green text-yellow">
           <h1>Booking Confirmed</h1>
           <div className="booking-details text-light">
            <p>Date: {formData.resDate}</p>
            <p>Time: {formData.resTime}</p>
            <p>Guests: {formData.guests}</p>
            { 
                formData.occasion &&
                <p>Occasion: {formData.occasion}</p>
            }
            </div>
        </div>
    )
}

export default ConfirmedBooking;