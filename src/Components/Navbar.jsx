import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state, dispatch} = useContext(ContextGlobal);
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Navbar</h1>
      
      <div className="navbar-links" >
        <Link to={"/"}>
          <button className="navbar-button" >Home</button>
        </Link>
        <Link to={"/contact"}>
          <button className="navbar-button" >Contact</button>
        </Link>
        <Link to={"/favs"}>
          <button className="navbar-button" >Favs</button>
        </Link>
      </div>
      <button className="theme-toggle-button" onClick={toggleTheme}>
        {state.theme === 'light' ? ' Dark Theme' : ' Light Theme'}
      </button>
    </nav>
  )
}

export default Navbar;