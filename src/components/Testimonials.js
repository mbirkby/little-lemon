
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
    const testimonials = [
        {
            rating :5,
            name: 'Mary',
            image: require('../assets/images/mary'),
            comment:'Lovely food'
        },
        {
            rating :3,
            name: 'Mark',
            image: require('../assets/images/mark'),
            comment:'Lively atmosphere and great service',
        },
        {
            rating :4,
            name: 'Sue',
            image: require('../assets/images/sue'),
            comment:'Recommend the greek salad'
        },
        {
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
                    <TestimonialCard testimonial={testimonial} />
                    )
                    )}
                </ul>
            </section>
        </article>
    )
}

export default Testimonials;