import React from 'react';
import logo from './Monster_music.svg';
import './App.css';
import {Link, withRouter}from 'react-router-dom';


function pastsongs() {

  const linkStyle = {
    color: 'rgb(153,255,205)'
  }

  const titleStyle = {
      font: 100
  }

  return (
    <div className="App">
      <header className="App-header" style={titleStyle}>
          <h1>
          Past Songs
          </h1>
      <img src={logo} className="App-logo" alt="logo" />
        <u1 className="Past-links">
          <Link style={linkStyle} to='/july102020'>
          <ul>
            July 10, 2020
              </ul>
          </Link>
          <Link style={linkStyle} to='/july112020'>
              <ul>
            July 11, 2020
              </ul>
          </Link>
          <Link style={linkStyle} to='/july122020'>
              <ul>
            July 12, 2020
              </ul>
          </Link>
          <Link style={linkStyle} to='/july132020'>
              <ul>
            July 13, 2020
              </ul>
          </Link>
          <Link style={linkStyle} to='/july142020'>
              <ul>
            July 14, 2020
              </ul>
          </Link>
          <Link style={linkStyle} to='/july152020'>
              <ul>
            July 15, 2020
              </ul>
          </Link>
          <Link style={linkStyle} to='/july162020'>
              <ul>
            July 16, 2020
              </ul>
          </Link>
          <Link style={linkStyle} to='/july172020'>
              <ul>
            July 17, 2020
              </ul>
          </Link>
          <Link style={linkStyle} to='/july182020'>
              <ul>
            July 18, 2020
              </ul>
          </Link>
          <Link style={linkStyle} to='/july252020'>
              <ul>
            July 25, 2020
              </ul>
          </Link>
          <Link style={linkStyle} to='/july262020'>
              <ul>
            July 26, 2020
              </ul>
          </Link>
          <Link style={linkStyle} to='/aug172020'>
              <ul>
            August 17, 2020
              </ul>
          </Link>
        </u1>
      </header>
    </div>
  );
}

export default pastsongs;
