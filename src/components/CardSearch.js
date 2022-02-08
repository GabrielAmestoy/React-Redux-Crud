import React,{ useState, useEffect } from 'react';
import './CardSearch.css';
import { Link, useSearchParams } from "react-router-dom";
import axios from 'axios';


 
const CardSearch = () => {

    const [busqueda, setbusqueda] = useState([])
    const [query] = useSearchParams(); 

    const search = query.get("search");
    // console.log("search tiene: ",search);


    useEffect(() => {
        const searchCard = async () => {
            await axios.get(`http://localhost:3001/cards/search?search=${search}`)
            .then((response) => {
                    console.log(response.data); 
                    setbusqueda(response.data) 
             })
            .catch((error) => {
                console.log("error:", error)
            });
        }
        searchCard()
    }, [search])

    // console.log(busqueda);

    return (
        <div>
            <h2 className="titulo-resultado">Resultados de Busqueda: {search}</h2>
            <div className = "container">
            {busqueda.data?.map((card)=>(

            <div className = "card" key ={card.id}>
            <Link to = {`/card/${card.id}`}>
                <div className="id">{card.id}</div>
                <div>Name: {card.name}</div>
                <div>Level: {card.level}</div>
                <div>Tecnic: {card.tecnic}</div>
            </Link >
            </div> 
            ))}

        </div>
        </div>
    )
}

export default CardSearch
