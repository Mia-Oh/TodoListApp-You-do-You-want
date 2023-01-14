import React,{ useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './Nav';
import List from './Pages/List'
import About from './Pages/About'
import Lyrics from './Pages/Lyrics'
import Setting from "./Pages/Setting";
import Feedback from "./Pages/Feedback";
import Loading from "./Pages/Loading";

const App = (props) => {
  
  // 유저 닉네임 상태
  const [currentUser, setCurrentUser] = useState('원필이');


  // 슬라이드 메뉴를 위한 상태 만들기
  const [showNav, setShowNav] = useState(false);

  const navHandler = () => {
    setShowNav(!showNav)
    //console.log(showNav)
  }

  // 로딩 페이지를 위한 상태 만들기 
  const [showLoading, setShowLoading] = useState(false);

  // 첫 창이 로딩될 때 --> List 보여주기
  const [firstShowing, setFirstShowing] = useState(false);

  // Loading page 구현
  // useEffect(실행하는 함수[, 의존하는 값])
  useEffect(() => {
    setTimeout(() => {
      setShowLoading(true)
    },1500)
  },[])


  useEffect(() => {
    setFirstShowing(true)
  },[])

  return (
    <BrowserRouter>
      <div id="App">
        <main>
          { // 1.5초 뒤에 로딩페이지 사라짐
          showLoading ? null : <Loading />}
          {showNav ?
            <Nav setShowNav={setShowNav} />
           :
            <div
              className="home"        
              onClick={navHandler}
            >
            </div>
          }
          {firstShowing ? null :
          <section id="features">
            <List currentUser={currentUser}/>
          </section>
          }
          {showNav ? null :
            <section id="features">
            <Routes>
              <Route path="/TodoListApp-You-do-You-want/index.html" element={<List currentUser={currentUser}/>}/>
              <Route path="/TodoListApp-You-do-You-want/about" element={<About />} />
              <Route path="/TodoListApp-You-do-You-want/setting" element={<Setting 
                currentUser={currentUser} 
                setCurrentUser={setCurrentUser}/>} />
              <Route path="/TodoListApp-You-do-You-want/Lyrics" element={<Lyrics />} />
              <Route path="/TodoListApp-You-do-You-want/Feedback" element={<Feedback />} />
            </Routes>
          </section>}
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
