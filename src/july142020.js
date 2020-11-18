import React from 'react';
import logo from './Monster_music.svg';
import './App.css';
import {Link, withRouter}from 'react-router-dom';

function july142020() {

  const linkStyle = {
    color: "rgb(172, 221, 187)"
  }

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
          <div className = "App-subheader">
          <h1 className="Date">July 14, 2020
          </h1>
            Song of the Day:

            <div className="SongArtist">
            <div className="SongTitle">B.A.N.K.R.O.L.</div>
    
            By: Bankrol Hayden
            </div>
        </div>
        <p>
          MAJOR lyrics:
          <br></br>
          1:17
        </p>
        

        <iframe src="https://open.spotify.com/embed/track/6qVPeiDQyjLbZKN24ufCu7" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <br></br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8mIDCLBQm-A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

export default july142020;
