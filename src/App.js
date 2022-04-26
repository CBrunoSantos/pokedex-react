import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Pokedex from './components/Pokedex/Pokedex'
import {getPokemon, getPokemonData} from './components/api'

function App() {
  const [loading,setLoading ] = useState(false);
  const [pokemons,setPokemons ] = useState([]);
  const [page,setPage] = useState(0);
  const [totalPage,setTotalPage] = useState(0);

  const itensPerPage = 18

  const fetchpokemons = async () =>{
    try {
      setLoading(true);
      const data = await getPokemon(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async(pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPage(Math.ceil(data.count / itensPerPage))
    } catch (error) {
      console.error("busca de pokemons deu error",error);
    }
  }

  useEffect(()=>{
    fetchpokemons();
  }, [page]);


  return (
    <div>
      <Navbar/>
      <Pokedex pokemons = {pokemons} loading={loading} page={page} setPage={setPage} totalPage={totalPage}/>
    </div>
  );
}

export default App;
