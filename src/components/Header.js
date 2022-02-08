import React,{ useState, useEffect } from 'react';
import './Header.css';

import { useNavigate, Link } from "react-router-dom";

// import { searchCardSuccess } from "../redux/actions/searchCardActions";

const Header = () => {


    const [searchText, setSearchText] = useState("")
    const navigate = useNavigate();






    const handleSearch = (e) => {
        setSearchText(e.target.value.toLowerCase());
    }




    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/search/?search=" + searchText);
    }

    return (
        <>
        <div className = "conteiner-header">
            <div className="logo">
            <Link to = {"/"}><h5 className = "titulo">CardsShop</h5></Link>
            </div>

            <div className="search">
                <form className="fromSearch" onSubmit = {handleSubmit}>
                    <input className = "input-search" type="input" placeholder = "Buscar" name = "search" value = {searchText} onChange = {handleSearch}/>
                    <button className="button"><i className ="fas fa-search"></i></button>
                </form>  
            </div>
        
       

            <div className= "users">
                <Link to = {"/favorites"}><div className="title-favorites">Favorites</div></Link>
                <div  className="title-users">
                Users
                </div>
            </div>
        </div>
        </>
    )
}
export default Header;