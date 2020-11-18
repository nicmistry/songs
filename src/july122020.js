import React from 'react';
import logo from './Monster_music.svg';
import './App.css';
import {Link, withRouter}from 'react-router-dom';



function july122020() {

  const linkStyle = {
    color: "rgb(172, 221, 187)"
  }

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
          <div className = "App-subheader">
           <div className="Date">July 12, 2020</div>
            <br></br>
            Song of the Day:
            <br></br>
            <br></br>
            <div className="SongArtist">
            My Shit
            <br></br>
            By:  A Boogie Wit Da Hoodie
            </div>
        </div>
        <p>
          MAJOR lyrics:
          <br></br>
          1:29
        </p>

        <iframe src="https://open.spotify.com/embed/track/5uQOauh47VFt3B2kV9kRXw" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <br></br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9cGpLc-G20E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

export default july122020;
