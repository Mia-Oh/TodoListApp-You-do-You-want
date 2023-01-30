import React, { useState } from "react";
import Footer from "../Components/Footer";

const Setting = ({ userNameHandler,currentUser }) => {

  //이름을 받아서 저장할 상태 
  const [newName, setNewName] = useState('')

  const onTextSetting = (e) => {
    setNewName(e.target.value);
  }

  const onClickSubmit = () => {
    let newConent = newName;
    userNameHandler(newConent);
  }

  return (
    <section id="setting">
      <h3>Setting</h3>
      <p>닉네임을 설정해 주세요</p>      
      <p>현재 닉네임은 {currentUser} 입니다</p>
      <div>
        <input
          placeholder=" 귀엽네요!" 
          onChange={onTextSetting}
          ></input>
        <button id="submit-new-name" onClick={onClickSubmit}>Button</button>
      </div>
      <Footer />
    </section>
  );
};

export default Setting;