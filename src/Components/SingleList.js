import React from "react";

const SingleList = ( { writer, date, children } ) => {

  return (
    <li className="list">
      <div className="writer">{writer}</div>
      <div className="date">{date}</div>
      <div>{children}</div>
    </li>
    );
}

export default SingleList;