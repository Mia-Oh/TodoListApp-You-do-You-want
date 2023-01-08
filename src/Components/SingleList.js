import React from "react";

const SingleList = ( { id, writer, date, children, deleteList } ) => {


  return (
    <li className="list">
      <div className="date">{date}</div>
      <div>{children}</div>
      <button className="delete" value={id} onClick={(e) => deleteList(e.target.value)}>X</button>
    </li>
    );
}

export default SingleList;