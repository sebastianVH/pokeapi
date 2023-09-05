import './App.css';
import { Routes,Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Login from './components/Login/Login';
import Pokemons from './components/PokemonsList/Pokemons';
import Detail from './components/Detail/Detail';
import Navbar from './components/Navbar/Navbar';
import { useDispatch } from 'react-redux';
import { setPokemons,getTypes } from './redux/actions';
const BASE_URL = "http://localhost:3001/pokemons/"

function App() {

  const dispatch = useDispatch()
  const navigate = useNavigate() 
  const {pathname} = useLocation()

  useEffect(()=>{
    dispatch(setPokemons())
  },[])


  return (
    <div className="App">
        {pathname !== "/" && <Navbar/>}
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Pokemons />}/>
          <Route path='/home/detail/:id' element={<Detail/>}/>
        </Routes>
    </div>
  );
}

export default App;
