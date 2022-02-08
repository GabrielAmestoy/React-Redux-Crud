import React, { useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import {  useSelector, useDispatch } from "react-redux";
import { selectedCard } from "../redux/actions/cardsActions";
import { deleteCArd } from "../redux/actions/crudActions";
import './CardDetail.css';

const CardDetail = () => {
    const card = useSelector(state => state.card.data); //card viene de reducers/index
    console.log("a:", card);
    const {id} = useParams(); // el nombre del params es id en la url
    const dispatch = useDispatch();


    const fetchCardDetail = async () => {
        const response = await axios.get(`http://localhost:3001/card/${id}`)
        .catch((error) => {
            console.log("error:", error)
            });
        dispatch(selectedCard(response.data));
        console.log(response.data);
    };

    const deleteCard = () => {

        // console.log("se ha eliminado la tarjeta ", card.id)
        axios.delete(`http://localhost:3001/card/${id}`)
        .then(() => {
            dispatch(deleteCArd(card));
        })  
        .catch((error) => {
            console.log("error:", error)
            });
    }

    useEffect(() => {
        if(id && id !== "") fetchCardDetail();
    },[id])

    return (
        <div>
            <h2 className="titulo-detail">Card Detail</h2>
            { card === undefined ? (<div>Loanding..</div>):(
            <>
             
            <div className="card-detail">
                <div className="name">{card.name}</div>
                <div className="data-card">
                    <div>{card.id}</div>
                    <div>Nivel: {card.level}</div>
                    <div>Tecnica: {card.tecnic}</div>
                    <div>Defensa: {card.defense}</div>
                    <div>Ataque: {card.atack}</div>
                </div>
                <button className="btn-eliminar" onClick = {deleteCard}>Eliminar</button> 
            </div>
            

            </>
             )} 

        </div>

    );
};

export default CardDetail;