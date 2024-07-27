import React from "react";


import motorbikeImage from '../assets/images/motorbike.svg';

//import image from '' ;


const SpecialsCard = ({card}) => {
    
    return (
        <li className="specials-item">
            <article className="specials-card bg-green">
                <img className="special-image" src={card.image} alt={card.title} />
                <div className="special-header">
                    <h1 className="special-title">{card.title}</h1>
                    <p className="special-price">{card.price}</p>
                </div>
                <p className="special-desc">{card.desc}</p>
                <div className="special-footer">
                   <p className = "delivery-text">Order a Delivery</p>
                   <img className="delivery-icon" src={motorbikeImage} alt="Motorbike" />
                </div>
 
            
            </article>

        </li>
        );
}



export default SpecialsCard;