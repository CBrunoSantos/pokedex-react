import React, { useState } from "react";
// import "./Pokedex.css";

const Pokemon = (props) => {

    const {pokemon} = props
  return (
    <div className="pokemon-card">
        <div className="pokemon-img-container">
        <img className="pokemon-img" src={pokemon.sprites.front_default}/>
        </div>
        <div className="pokemon-body">
            <div className="pokemon-topo">
                <h3>{pokemon.name}</h3>
                <div>{pokemon.id}</div>
            </div>
            <div className="pokemon-footer">
            <div className="pokemon-tipo">
                {pokemon.types.map((type, index) => {
                    return (
                        <div key={index} className="pokemon-tipo-texto">{type.type.name}</div>
                    )
                })}
            </div>
            <button className="pokemon-heart-btn"></button>
            </div>
        </div>
        
    </div>
  );
};

export default Pokemon;
