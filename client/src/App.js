import './App.css';
import { Routes,Route,useLocation } from 'react-router-dom';
import { useEffect} from 'react';
import Login from './components/Login/Login';
import Pokemons from './components/PokemonsList/Pokemons';
import Detail from './components/Detail/Detail';
import { useDispatch,useSelector } from 'react-redux';
import { setPokemons,getTypes } from './redux/actions';
import Form from './components/Form/Form';
import SearchBar from './components/SearchBar/Searchbar';
import Alert from './components/Alert/Alert';

function App() {

  const {pathname} = useLocation()
  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.myPokemons)
  const types = useSelector( state => state.allTypes)

  useEffect(()=>{
    dispatch(getTypes())
    dispatch(setPokemons())
    },[])

  return (
    <div className="App">
        {pathname !== "/" && <SearchBar types = {types}/>}
        <Routes>
          <Route path='/' Component={Login}/>
          <Route path='/form' Component={Form}/>
          <Route path='/home' element={<Pokemons pokemons={pokemons} types={types} />}/>
          <Route path='/detail/:id' Component={Detail}/>
        </Routes>
    </div>
  );
}

export default App;
