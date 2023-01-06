import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <section className="Nav">
      <Link to="/"><p>List</p></Link>
      <Link to="/about">About</Link>
      <Link to="/Lyrics">Lyrics</Link>
    </section>
  );
};

export default Nav; 