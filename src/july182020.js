import React from 'react';
import logo from './Monster_music.svg';
import './App.css';
import {Link, withRouter}from 'react-router-dom';

function july182020() {

  const linkStyle = {
    color: "rgb(172, 221, 187)"
  }

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
          <div className = "App-subheader">
          <h1 className="Date">July 18, 2020
          </h1>
            Song of the Day:

            <div className="SongArtist">
            <div className="SongTitle">Permanent</div>
    
            By: Comethazine 
            </div>
        </div>
        <p>
          MAJOR lyrics:
          <br></br>
          0:00
        </p>
        

        <iframe src="https://open.spotify.com/embed/track/1w9a84nSrTyjNjYviMYvJh" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <br></br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/UFxCHFtAg2w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

export default july182020;
