import React from "react";
import Footer from "../Components/Footer";

const Setting = ({currentUser,setCurrentUser}) => {

  const onTextSetting = (e) => {
    setCurrentUser(e.target.value);
  }

  return (
    <section id="setting">
      <h3>Setting</h3>
      <p>닉네임을 설정해 주세요</p>      
      <p>현재 닉네임은 {currentUser} 입니다</p>
      <input
        placeholder=" 귀엽네요!" 
        onChange={onTextSetting}
        ></input>
      <Footer />
    </section>
  );
};

export default Setting;