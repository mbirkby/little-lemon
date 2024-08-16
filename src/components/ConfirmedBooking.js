const ConfirmedBooking = ({formData}) => {

    return (
        <div className="confirm-block content-block bg-green">
           <h1>Booking Confirmed</h1>
           <p>Date: {formData.resDate}</p>
           <p>Time: {formData.resTime}</p>
           <p>Guests: {formData.guests}</p>
           { 
                formData.occasion &&
                <p>Occasion: {formData.occasion}</p>
            }
        </div>
    )
}

export default ConfirmedBooking;