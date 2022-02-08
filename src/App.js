import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import CardList from './components/CardList';
import  CardDetail from "./components/CardDetail";
import  CardCreate from "./components/CardCreate";
import  Error404 from "./components/Error404";
import CardSearch from './components/CardSearch';
import Favorites from './components/Favorites';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
                    <Route exact path = "/" element = {<CardList/>}/>
                    <Route path = "/create" element = {<CardCreate/>}/>
                    <Route path = "/card/:id" element = {<CardDetail/>}/>
                    <Route path = "*" element = {<Error404/>}/>
                    <Route path = "/search" element = {<CardSearch/>}/>
                    <Route path = "/favorites" element = {<Favorites/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
