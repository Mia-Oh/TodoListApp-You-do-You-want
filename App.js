import React,{ useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './Nav';
import List from './Pages/List'
import About from './Pages/About'
import Lyrics from './Pages/Lyrics'
import Setting from "./Pages/Setting";
import Feedback from "./Pages/Feedback";

const App = (props) => {
  
  // 유저 닉네임 상태
  const [currentUser, setCurrentUser] = useState('원필이');


  // 슬라이드 메뉴를 위한 상태 만들기
  const [showNav, setShowNav] = useState(false);

  const navHandler = () => {
    setShowNav(!showNav)
    //console.log(showNav)
  }

  return (
    <BrowserRouter>
      <div id="App">
        <main>
          {showNav ?
          <Nav setShowNav={setShowNav} /> :
          <div
            className="home"        
            onClick={navHandler}
          ></div> 
          }
          {showNav ? null :
            <section id="features">
            <Routes>
              <Route path="/" element={<List currentUser={currentUser}/>}/>
              <Route path="/about" element={<About />} />
              <Route path="/setting" element={<Setting 
                currentUser={currentUser} 
                setCurrentUser={setCurrentUser}/>} />
              <Route path="/Lyrics" element={<Lyrics />} />
              <Route path="/Feedback" element={<Feedback />} />
            </Routes>
          </section>}
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;