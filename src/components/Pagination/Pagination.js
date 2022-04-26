import React, { useState } from "react";
import "./Pagination.css";
import seta from '../Pagination/seta.png'

const Pagination = (props) => {
  const { page, totalPage, onLeftClick, onRightClick } = props;

  return (
    <div className="pagination-container">
      <button onClick={onLeftClick}>
        <img className="left" src={seta}/>
      </button>
      <div>
        {page} de {totalPage}
      </div>
      <button onClick={onRightClick}>
      <img className="right" src={seta}/>
      </button>
    </div>
  );
};

export default Pagination;
