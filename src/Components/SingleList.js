import React,{ useState } from "react";

const SingleList = ( { id, date, children, deleteList, toggleHandler, checked } ) => {


  return (
    <li className="list">
      <div 
        className={`toggle-container ${ checked ? "toggle-checked" : ""}`}
        id={id}
        onClick={() => toggleHandler(id)} 
       ></div>
      <div className="date">{date}</div>
      <div className="list-contents">{children}</div>
      <button className="delete" value={id} onClick={(e) => deleteList(e.target.value)}>
      XXX</button>
    </li>
    );
}

export default SingleList;