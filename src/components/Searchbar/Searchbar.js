import React, { useState } from "react";
import "./Searchbar.css";

const Searchbar = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("dito");
  const onChangeHandler = (e) => {
    console.log("pokemon", e.target.value);
    setSearch(e.target.value);
  };
  const onButtonClickHandler = () => {
    // console.log("pokemon console", search);
    onSearch(search);
  };

  return (
    <div>
      <div className="searchbar-container">
        <input className="searchbar-input" onChange={onChangeHandler}></input>
        <div>
          <button className="searchbar-btn" onClick={onButtonClickHandler}>
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
