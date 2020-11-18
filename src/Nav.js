import React from 'react';
import logo from './lips.svg';
import './App.css';
import {Link, withRouter}from 'react-router-dom';


function Nav() {

  const navStyle = {
    color: 'white'
  };
  return (
      <nav>
        <img src={logo} className="App-logo-rat" alt="logo" /> 
         <h3>
           </h3> 
         <u1 className="nav-links">
         <Link style={navStyle} to='/'>
             <ul>Home</ul>
             </Link>
           <Link style={navStyle} to='/songoftheday'>
             <ul>Song of the Day</ul>
             </Link>
            <Link style={navStyle} to='/hub'>
             <ul>For the Rats</ul>
             </Link>
         </u1>
      </nav>
  );
}

export default Nav;