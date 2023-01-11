import React,{ useState } from "react";

const SingleList = ( { id, date, children, deleteList } ) => {


  const [isCheck, setIsCheck] = useState(false);

  const toggleHandler = () => {
    setIsCheck(!isCheck)
    //console.log(isCheck)
  }

  return (
    <li className="list">
      <div 
        className={`toggle-container ${isCheck ? "toggle-checked" : ""}`}
        value={id}
        onClick={toggleHandler} 
       ></div>
      <div className="date">{date}</div>
      <div className="list-contents">{children}</div>
      <button className="delete" value={id} onClick={(e) => deleteList(e.target.value)}>
      XXX</button>
    </li>
    );
}

export default SingleList;