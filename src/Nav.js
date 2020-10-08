import React, { useContext } from 'react';
import './App.css';
import { MovieContext } from './MovieContexct';


const Nav = () => {
    const [movies ,setMoives] = useContext(MovieContext);
    return (
        <nav className="nav-bar">
         <h3>Andrew Dev</h3>
         <p className="num-counter">List film : {movies.length}</p>
        </nav>
   );
}

export default Nav;
