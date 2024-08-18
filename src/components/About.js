
import marioAndAdrian from '../assets/images/Mario and Adrian A.jpg';
import  restaurantImage from '../assets/images/Mario and Adrian b.jpg';

const About = () => {
    return (
        <article className="about" >
            <div className="about-block content-block  bg-green">
                <div className="about-text">
                    <h1 className="text-yellow">Little Lemon</h1>
                    <h2 className="text-light">Chicago</h2>
                    <p  className="text-light">
                        Little lemon is owned and run by Mario and Adrian.  They pride themselves on giving a warm welcome and providing perfectly cooked food using thr freshest
                        of ingredients.
                    </p>
                </div>
                <div className="about-images">
                    <img className="about-image about-image-a" src={restaurantImage} alt='Mario and Adrian' />
                    <img className="about-image about-image-b" src={marioAndAdrian} alt="Mario and Adrian" />
                </div>
            </div>
        </article>
    )
}

export default About;