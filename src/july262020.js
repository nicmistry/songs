import React from 'react';
import logo from './Monster_music.svg';
import './App.css';
import {Link, withRouter}from 'react-router-dom';

function july262020() {

  const linkStyle = {
    color: "rgb(172, 221, 187)"
  }

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
          <div className = "App-subheader">
          <h1 className="Date">July 26, 2020
          </h1>
            Song of the Day:

            <div className="SongArtist">
            <div className="SongTitle">Jellyfish</div>
    
            By: Oliver Francis
            </div>
        </div>
        <p>
          MAJOR lyrics:
          <br></br>
          0:21
          <br></br>
          0:56
          <br></br>
          1:06
        </p>
        

        <iframe src="https://open.spotify.com/embed/track/4RcTovmTxoVKvc2Ueyn84G" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <br></br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/MA_-mJdZJEU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

export default july262020;
