import React, { useState } from "react";
import "./Pokedex.css";
import Pokemon from "../Pokemon/Pokemon";
import Pagination from "../Pagination/Pagination";

const Pokedex = (props) => {
  const { pokemons, loading, page, setPage, totalPage } = props;

  const onLeftClickHandler = () =>{
    if(page> 0){
      setPage(page-1);
    }
  }

  const onRightClickHandler = () =>{
    if(page+1 !== totalPage){
      setPage(page+1);
    }
  }

  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <Pagination
          page={page + 1}
          totalPage={totalPage}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </div>
      {loading ? (
        <div>estão carregando</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
