import React from 'react';
import logo from './Monster_music.svg';
import './App.css';
import {Link, withRouter}from 'react-router-dom';

function july132020() {

  const linkStyle = {
    color: "rgb(172, 221, 187)"
  }

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
          <div className = "App-subheader">
          <h1 className="Date">July 13, 2020
          </h1>
            Song of the Day:

            <div className="SongArtist">
            <div className="SongTitle">Taking You Home</div>
    
            By: Don Henley
            </div>
        </div>
          
          <br></br>
        

        <iframe src="https://open.spotify.com/embed/track/4UkTyNLKOre2Eb9So4i7na" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
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

export default july132020;
