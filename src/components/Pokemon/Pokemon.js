import React, { useState } from "react";
import "./Pokemon.css";
import heart from '../Pokemon/like.png'

const Pokemon = (props) => {

    const {pokemon} = props
    const onHeartClick = () => {
        console.log("favoritado");
    }

    return (
    <div className="pokemon-card">
        <div className="pokemon-img-container">
        <img className="pokemon-img" src={pokemon.sprites.front_default}/>
        </div>
        <div className="pokemon-body">
            <div className="pokemon-topo">
                <h3>{pokemon.name}</h3>
                <div>#{pokemon.id}</div>
                <button className="pokemon-heart-btn" onClick={onHeartClick}>
                <img src={heart}/>
            </button>
            </div>
            <div className="pokemon-footer">
            <div className="pokemon-tipo">
                {pokemon.types.map((type, index) => {
                    return (
                        <div key={index} className="pokemon-tipo-texto">{type.type.name}</div>
                    )
                })}
            </div>
            </div>
        </div>
        
    </div>
  );
};

export default Pokemon;
