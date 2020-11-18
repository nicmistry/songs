import React from 'react';
import logo from './Monster_music.svg';
import './App.css';
import {Link, withRouter}from 'react-router-dom';

function july162020() {

  const linkStyle = {
    color: "rgb(172, 221, 187)"
  }

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
          <div className = "App-subheader">
          <div className="Date">July 16, 2020</div>
            <br></br>
            Song of the Day:
            <br></br>
            <br></br>
            <div className="SongArtist">
            im so sick of this
            <br></br>
            By:  guccihighwaters
            </div>
        </div>

        <p>

        </p>

        <iframe src="https://open.spotify.com/embed/track/3SuuGrAqprpL6NA9xMqC4K" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <br></br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Gd_Xqqx_St8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

export default july162020;
