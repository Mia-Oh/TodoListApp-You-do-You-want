import React from "react";
import Footer from "./Components/Footer.js"
import { Link } from "react-router-dom";

const Nav = ({setShowNav}) => {
  return (
    <section className="Nav">
      <div id="Nav-container">
        <div 
          className="home"
          onClick={() => setShowNav(false)}>
        </div>
        <Link to="/" onClick={() => setShowNav(false)}><p className="nav-link">Home</p></Link>
        <Link to="/about" onClick={() => setShowNav(false)}><p className="nav-link">About</p></Link>
        <Link to="/setting" onClick={() => setShowNav(false)}><p className="nav-link">Setting</p></Link>
        <Link to="/Lyrics" onClick={() => setShowNav(false)}><p className="nav-link">Lyrics</p></Link>
        <Link to="/Feedback" onClick={() => setShowNav(false)}><p className="nav-link">Feedback</p></Link>
        <Footer />       
      </div>
    </section>
  );
};

export default Nav;  