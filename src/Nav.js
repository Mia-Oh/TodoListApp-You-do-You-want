import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <section className="Nav">
      <Link to="/"><p>List</p></Link>
      <Link to="/about"><p>About</p></Link>
      <Link to="/Lyrics"><p>Lyrics</p></Link>
    </section>
  );
};

export default Nav; 