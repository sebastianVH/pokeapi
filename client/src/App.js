import './App.css';
import { Routes,Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Login from './components/Login/Login';
import Pokemons from './components/PokemonsList/Pokemons';
import Detail from './components/Detail/Detail';
import Navbar from './components/Navbar/Navbar';
import { useDispatch,useSelector } from 'react-redux';
import { setPokemons,getTypes } from './redux/actions';
import Form from './components/Form/Form';
import SearchBar from './components/SearchBar/Searchbar';

function App() {

  
  const {pathname} = useLocation()
  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.allPokemons)
  const types = useSelector( state => state.allTypes)


  useEffect(()=>{
    dispatch(setPokemons())
    dispatch(getTypes())
    },[])

  return (
    <div className="App">
        {pathname !== "/" && <SearchBar types = {types}/>}
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/form' element={<Form types={types}/> }/>
          <Route path='/home' element={<Pokemons pokemons={pokemons} types={types} />}/>
          <Route path='/home/detail/:id' element={<Detail/>}/>
        </Routes>
    </div>
  );
}

export default App;
