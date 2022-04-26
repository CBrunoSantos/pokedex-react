import React, { useState } from "react";
import "./Pagination.css";

const Pagination = (props) => {
  const { page, totalPage, onLeftClick, onRightClick } = props;

  return (
    <div className="pagination-container">
      <button onClick={onLeftClick}>
        <div>volta</div>
      </button>
      <div>
        {page} de {totalPage}
      </div>
      <button onClick={onRightClick}>
        <div>vai</div>
      </button>
    </div>
  );
};

export default Pagination;
