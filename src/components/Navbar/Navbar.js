import React, { useState } from "react";
import "./Navbar.css";
import Searchbar from '../Searchbar/Searchbar'
import {searchPokemon} from '../api'

const Navbar = () => {
  const PokeLogo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  const [pokemon, setPokemon] = useState();
  const onSearchHandler = async (pokemon) => {
    // console.log("pesquisando pokemon",pokemon);
    const result = await searchPokemon(pokemon);
    // console.log("pesquisando pokemon",result);
    setPokemon(result);
  }

  return (
    <nav>
      <div className="navbar-container">
        <img src={PokeLogo} className="navbar-img" />
        <Searchbar onSearch={onSearchHandler}/>
      </div>
      <div>
      {pokemon ? (
        <div>
          <img src={pokemon.sprites.front_default}/>
          <div>NOME: {pokemon.name}</div>
          <div>PESO: {pokemon.weight}</div>
          <div>ID: {pokemon.id}</div>
        </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
