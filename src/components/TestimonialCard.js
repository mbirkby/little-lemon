import starImage from '../assets/images/star.jpg'


const TestimonialCard = ({testimonial}) => {
    return (
        <li  className='testimonial-item'>
           
                {
                  getRating(testimonial.rating)
                }
                
                <div className="testimonial-content">
                    <img className="testimonial-image" src={testimonial.image} alt={testimonial.name}/>
                    <div className="testimonial-text">
                        <p className="testimonial-name">{testimonial.name}</p>
                        <p className="testimonial-comment">{testimonial.comment}</p>
                    </div>
                </div>
           
        </li>
    )
}


function getRating(rating) {
    const stars = [];
    for (var i=0; i < rating; i++) {
        stars.push(<img key={i} className="rating-star" src ={starImage} alt="star" />);
     }

     return (
        <div className="rating">
            <p className="rating-label">Rating</p>
            <div className="rating-stars">{stars}</div>
            <p className="rating-score">{rating}/5</p>
        </div>
     )
   
}

export default TestimonialCard;