import React,{ useState } from "react";

const NewListForm = ({ onButtonClick }) => {
  const [NewListContent, setNewListContent] = useState("");

  const onTextChange = (e) => {
    setNewListContent(e.target.value);
  }

  const onClickSubmit = () => {
    let newList = {
      uuid: Math.floor(Math.random() * 10000),
      writer: '원필',
      date: new Date().toISOString().substring(0, 10),
      content: NewListContent
    };
    onButtonClick(newList);
  }


  return (
      <div id="writing-area">
        <textarea id="new-list-content" onChange={onTextChange}></textarea>
        <button id="submit-new-list" onClick={onClickSubmit}>Button</button>
      </div>
    );
}

export default NewListForm;