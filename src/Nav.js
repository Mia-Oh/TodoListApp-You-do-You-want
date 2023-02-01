import { Link } from "react-router-dom";

const Nav = ({setShowNav}) => {
  return (
    <section className="Nav">
      <div id="Nav-container">
        <div 
          className="home"
          onClick={() => setShowNav(false)}>
        </div>
        <Link to="/TodoListApp-You-do-You-want/index.html" onClick={() => setShowNav(false)}><p className="nav-link">Home</p></Link>
        <Link to="/TodoListApp-You-do-You-want/about" onClick={() => setShowNav(false)}><p className="nav-link">About</p></Link>
        <Link to="/TodoListApp-You-do-You-want/setting" onClick={() => setShowNav(false)}><p className="nav-link">Setting</p></Link>
        <Link to="/TodoListApp-You-do-You-want/Lyrics" onClick={() => setShowNav(false)}><p className="nav-link">Lyrics</p></Link>
        <Link to="/TodoListApp-You-do-You-want/Feedback" onClick={() => setShowNav(false)}><p className="nav-link">Feedback</p></Link>
      </div>
    </section>
  );
};

export default Nav;  