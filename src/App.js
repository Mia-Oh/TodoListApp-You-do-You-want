import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './Nav';
import List from './Pages/List'
import About from './Pages/About'
import Lyrics from './Pages/Lyrics'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Nav />
          <section className="features">
            <Routes>
              <Route path="/" element={<List />}/>
              <Route path="/about" element={<About />} />
              <Route path="/Lyrics" element={<Lyrics />} />
            </Routes>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
