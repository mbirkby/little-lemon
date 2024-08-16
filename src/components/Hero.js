import foodimage from "../assets/images/restauranfood.jpg"


const Hero= () => {
    return (
        <article className='hero bg-green'>
            <div className="hero-block content-block">
                <section className="hero-text">
                    <div className="hero-titles">
                        <h1 className="text-yellow text-title" >Little Lemon</h1>
                        <h2 className="text-light text-subtitle">Chicago</h2>
                    </div>
                    <p className="hero-text text-light">
                         Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual  environment.  The restaurant features locally sourced menu with daily specials 
                    </p>
                    <button aria-label="See More" className="hero-button button" type="button">See More</button>
                </section>
                <section className="hero-image">
                    <img  src={foodimage} alt="waiter carrying food" />
                </section>
                
            </div>
           
            
        </article>

    );
  };
  export default Hero;