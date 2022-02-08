import axios from 'axios';
import React,{ useState} from 'react';
import { useDispatch } from "react-redux";
import { createCard } from "../redux/actions/crudActions";
import './CardCreate.css';

const CardCreate = () => {
    const dispatch = useDispatch()

    const [create, setCreate ] = useState({
        name : "",
        level : "",
        typeId : 2,
        image : "/img/nada.jpg",
        defense : 0,
        atack : 0,
        tecnic : "",
        
    })

    const addCard = async () => {
        console.log(create);
        await axios.post("http://localhost:3001/cardsDigimon", create)
        .then(() => {
            dispatch(createCard(create)); // ver redux toolkit
        })       
        .catch((error) => {
            console.log("error:", error)
        });

    }

    const onChangeCreate = (e) => {
        setCreate({
            ...create,
            [e.target.name]: e.target.value,

        })
    }
    console.log(create);

    return (
        <div className="conteiner-create">
            <h2 className="create">Create Card</h2>
            <form>
                <div className="form-create">
                    <input className = "input" type="text" name = "name" placeholder = "Nombre" onChange = {onChangeCreate}/>
                    <input className = "input" type="text" name = "level" placeholder = "Level" onChange = {onChangeCreate}/>
                    <input className = "input" type="number" name = "defense" placeholder = "Defensa" onChange = {onChangeCreate}/>
                    <input className = "input" type="number" name = "atack" placeholder = "Ataque" onChange = {onChangeCreate}/>
                    <input className = "input" type="text" name = "tecnic" placeholder = "Tecnica" onChange = {onChangeCreate}/>
                    <button className="btn-create" onClick = {addCard}>Add</button>
                </div>
            </form>

        </div>
    )
}


export default CardCreate;