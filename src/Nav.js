import React from "react";
import { Link } from "react-router-dom";

const Nav = ({setShowNav}) => {
  return (
    <section className="Nav">
      <div 
        className="home"
        onClick={() => setShowNav(false)}>
      Nav Bar
      </div>
      <Link to="/" onClick={() => setShowNav(false)}>Home</Link>
      <Link to="/about" onClick={() => setShowNav(false)}><p>About</p></Link>
      <Link to="/setting" onClick={() => setShowNav(false)}><p>Setting</p></Link>
      <Link to="/Lyrics" onClick={() => setShowNav(false)}><p>Lyrics</p></Link>
    </section>
  );
};

export default Nav;  