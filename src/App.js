import React,{ useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './Nav';
import List from './Pages/List'
import About from './Pages/About'
import Lyrics from './Pages/Lyrics'

const App = (props) => {
  
  // 슬라이드 메뉴를 위한 상태 만들기
  const [showNav, setShowNav] = useState(false);

  const navHandler = () => {
    setShowNav(!showNav)
    //console.log(showNav)
  }


  return (
    <BrowserRouter>
      <div id="App">
        <main>{showNav ?
          <Nav setShowNav={setShowNav} /> :
          <div        
            onClick={navHandler}
          >Home</div> 
          }
          {showNav ? null :
            <section className="features">
            <Routes>
              <Route path="/" element={<List />}/>
              <Route path="/about" element={<About />} />
              <Route path="/Lyrics" element={<Lyrics />} />
            </Routes>
          </section>}
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
