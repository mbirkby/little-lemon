
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
    const testimonials = [
        {
            id:1, 
            rating:5,
            name: 'Mary',
            image: require('../assets/images/mary'),
            comment:'Lovely food'
        },
        {
            id: 2,
            rating: 3,
            name: 'Mark',
            image: require('../assets/images/mark'),
            comment:'Lively atmosphere and great service',
        },
        {
            id: 3,
            rating: 4,
            name: 'Sue',
            image: require('../assets/images/sue'),
            comment:'Recommend the greek salad'
        },
        {   id: 4,
            rating :5,
            name: 'John',
            image: require('../assets/images/john.jpg'),
            comment:'Fantastic fresh food at reasonable prices'
        }
    ]
    return (
        <article className='testimonials'>
            <section className="testimonials-block content-block">
                <h1 className="testimonial-title">Testimonials</h1>

                <ul className="testimonials-list">
                    {testimonials.map((testimonial)=>(
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    )
                    )}
                </ul>
            </section>
        </article>
    )
}

export default Testimonials;