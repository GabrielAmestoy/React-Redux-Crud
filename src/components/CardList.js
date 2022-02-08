import React, { useEffect } from 'react';
import './CardList.css';
import axios from "axios";
import {  useSelector, useDispatch } from "react-redux";
import { setCards } from "../redux/actions/cardsActions";
import Card from './Card';
import { Link } from "react-router-dom";

const CardList = () => {

    // useSelector permite acceder al state en cualquier componente
    const cards = useSelector(state => state.allCards.cards);
    const dispatch = useDispatch();

    const fetchCards = async () => {
        const response = await axios.get("http://localhost:3001/cardsDigimon")
        .catch((error) => {
            console.log("error:", error)
        });
        dispatch(setCards(response.data));
    };


    useEffect(() =>{
        fetchCards();
    },[])
    console.log("cartas: ", cards);

    return (
        <div>
        <div className="contenedor-add">            
            <Link to = {"/create"}><div className="add-card">Add Card</div></Link>
        </div>
            <h2 className = "titulocentral">Cards List</h2>
             <Card />
        </div>
    )
}

export default CardList;
