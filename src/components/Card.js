import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Card.css';

const Card = () => {
    const cards = useSelector(state => state.allCards.cards); //accede al state de redux
    console.log("Card: ", cards.data) 

    return(
        <div className = "container">
            {cards.data?.map((card)=>(

            <div className = "card" key ={card.id}>
           

                <div className="conteiner-id-star">
                    <div className="id">{card.id}</div>
                    <div><i class="fas fa-star"></i></div>
                </div>
            <Link to = {`/card/${card.id}`}>
                <div>Name: {card.name}</div>
                <div>Level: {card.level}</div>
                <div>Tecnic: {card.tecnic}</div>
            </Link >
            </div> 
            ))}

        </div>
    )
}

export default Card;