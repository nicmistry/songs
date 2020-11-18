import React from 'react';
import logo from './Monster_music.svg';
import './App.css';
import {Link, withRouter}from 'react-router-dom';

function aug172020() {

  const linkStyle = {
    color: "rgb(172, 221, 187)"
  }

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
          <div className = "App-subheader">
          <h1 className="Date">August 17, 2020
          </h1>
            Song of the Day:

            <div className="SongArtist">
            <div className="SongTitle">Morgue</div>
    
            By: geet, Symbolick
            </div>
            <br></br>
        </div>

        <iframe src="https://open.spotify.com/embed/track/0gv7t2rWYxXOxpHkBtnZWI" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <br></br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/RNnTLftsbjU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br></br>
        <a className="Past-link">
          <Link style={linkStyle} to='/pastsongs'>
          Past Songs
          </Link>
          <p>

          </p>
        </a>
      </header>
    </div>
  );
}

export default aug172020;
