import { Link } from 'react-router-dom';
import React from 'react';
// import Home from './Home';
import './App.css';

const NavBar = () => (
  <header>
    <div className="navbar">
      <h2>Math-magicians</h2>
      <ul>
        <Link to="/home"><li>Home</li></Link>
        <Link to="/app"><li>Calculator</li></Link>
        <Link to="/quote"><li>Quote</li></Link>
      </ul>

    </div>
    {/* <Home /> */}
  </header>
);

export default NavBar;
