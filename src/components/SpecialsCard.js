import React from "react";


import motorbikeImage from '../assets/images/motorbike.png';

//import image from '' ;


const SpecialsCard = ({card}) => {
    
    return (
        <li className="specials-item">
            <article className="specials-card ">
                <img className="special-image" src={card.image} alt={card.title} />
                <div className="special-content bg-green">
                    <div className="special-header">
                        <h1 className="special-title text-yellow">{card.title}</h1>
                        <p className="special-price">{card.price}</p>
                    </div>
                    <p className="special-desc  text-light">{card.desc}</p>
                    <div className="special-footer text-yellow">
                        <p className = "delivery-text">Order a Delivery</p>
                        <img className="delivery-icon" src={motorbikeImage}  alt="Motorbike" />
                    </div>
                </div>
 
            
            </article>

        </li>
        );
}



export default SpecialsCard;