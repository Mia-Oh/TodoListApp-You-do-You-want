import React,{ useState } from "react";

const NewListForm = ({ onButtonClick }) => {
  const [NewListContent, setNewListContent] = useState("");

  const onTextChange = (e) => {
    
    setNewListContent(e.target.value);
  }

  const onClickSubmit = (e) => {
    let newList = {
      uuid: Math.floor(Math.random() * 10000),
      date: new Date().toISOString().substring(0, 10),
      content: NewListContent
    };
    onButtonClick(newList);
    formReset();
  }

  // 입력창 비우기
  const formReset = () => {
    const inputValue = document.querySelector('#new-list-content');
    //console.log(inputValue.value);
    inputValue.value = '';
  }

  return (
      <div id="writing-area">
        <input id="new-list-content" onChange={onTextChange} placeholder=" Type Here...!"></input>
        <button id="submit-new-list" 
        onClick={onClickSubmit}>입력</button>
      </div>
    );
}

export default NewListForm;