import React from 'react';
import logo from './Monster_music.svg';
import './App.css';
import {Link, withRouter}from 'react-router-dom';



function july102020() {

  const linkStyle = {
    color: "rgb(172, 221, 187)"
  }

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
          <div className = "App-subheader">
          <h1 className="Date">July 10, 2020
          </h1>
            Song of the Day:
            <br></br>
            <div className="SongArtist">
            Danny Phantom
            <br></br>
            By: Oliver Francis
            </div>
        </div>
        <p>
          MAJOR lyrics:
          <br></br>
          0:33
          <br></br>
          0:58
          <br></br>
          1:22
        </p>

        <iframe src="https://open.spotify.com/embed/track/3WJGDyQMUOwrml7zaUVU5t" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <br></br>
        <iframe width="560" height="320" src="https://www.youtube.com/embed/Drjc_MOxjdw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br></br>

        <a className="Past-link">
          <Link style={linkStyle} to='/pastsongs'>
          Past Songs
          </Link>
        
        </a>
        <p>
            
          </p>
      </header>
    </div>
  );
}

export default july102020;
