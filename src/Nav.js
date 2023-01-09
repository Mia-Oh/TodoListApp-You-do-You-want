import React from "react";
import { Link } from "react-router-dom";

const Nav = ({setShowNav}) => {


  return (
    <section className="Nav">
      <div onClick={() => setShowNav(false)}>Home</div>
      <Link to="/" onClick={() => setShowNav(false)}>List</Link>
      <Link to="/about" onClick={() => setShowNav(false)}><p>About</p></Link>
      <Link to="/Lyrics" onClick={() => setShowNav(false)}><p>Lyrics</p></Link>
    </section>
  );
};

export default Nav; 