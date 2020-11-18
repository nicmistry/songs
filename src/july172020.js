import React from 'react';
import logo from './Monster_music.svg';
import './App.css';
import {Link, withRouter}from 'react-router-dom';

function july172020() {

  const linkStyle = {
    color: "rgb(172, 221, 187)"
  }

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
          <div className = "App-subheader">
          <div className="Date">July 17, 2020</div>
            Song of the Day:

            <div className="SongArtist">
            <h1>
                Fu2
                </h1>
    
            By: Oliver Francis 
            </div>
        </div>
        <p>
          MAJOR lyrics:
          <br></br>
          1:05
          <br></br>
          1:26
          <br></br>
          2:39
        </p>
        

        <iframe src="https://open.spotify.com/embed/track/0LdPn0yIiIKZH0FdP2cnPJ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <br></br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/LXxiGES_b_A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

export default july172020;
