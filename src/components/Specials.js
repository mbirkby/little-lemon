import React from "react";

import SpecialsCard from './SpecialsCard'



const Specials = () => {
    const cards = [
        {
            title: 'Greek Salad',
            image: require('../assets/images/greek salad.jpg'),
            price: '$15.00',
            desc: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. '
        },
        {
            title: 'Bruchetta',
            image: require('../assets/images/bruchetta.jpg'),
            price: '$8.00',
            desc: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. '
        },
        {
            title: 'Lemon Dessert',
            image: require('../assets/images/lemon dessert.jpg'),
            price: '$5.00',
            desc: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
        },

    ];

    return (

       <article className="specials">
            <section className="specials-block content-block">
                    <div className="specials-header">
                        <h1 className="specials-title">Specials</h1>
                        <button className="specials-button" type="button" >Online Menu</button>
                    </div>
                    <ul className="specials-list">
                    {
                        cards.map((card) => (
                            <SpecialsCard key={card.title} card={card} />
                       ))
                    }
                    </ul>
           </section>
        </article>
    )

    
}


    function getImageURL(imageId) {
        return (
          '../assets/images/' +
          imageId 
        );
      }
    


export default Specials;