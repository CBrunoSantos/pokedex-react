import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Pokedex from './components/Pokedex/Pokedex'
import {getPokemon, getPokemonData} from './components/api'

function App() {
  const [loading,setLoading ] = useState(false);
  const [pokemons,setPokemons ] = useState([]);

  const fetchpokemons = async () =>{
    try {
      setLoading(true);
      const data = await getPokemon();
      const promises = data.results.map(async(pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.error("busca de pokemons deu error",error);
    }
  }

  useEffect(()=>{
    console.log("carrregou")
    fetchpokemons();
  }, []);


  return (
    <div>
      <Navbar/>
      <Pokedex pokemons = {pokemons} loading={loading}/>
    </div>
  );
}

export default App;
