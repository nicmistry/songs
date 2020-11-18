import React from 'react';
import './App.css';
import Nav from './Nav.js';
import hub from "./hub.js";
import songoftheday from "./songoftheday.js";
import pastsongs from "./pastsongs";
import july10 from './july102020';
import july11 from './july112020';
import july12 from './july122020';
import july13 from './july132020';
import july14 from './july142020';
import july15 from './july152020';
import july16 from './july162020';
import july17 from './july172020';
import july18 from './july182020';
import july25 from './july252020';
import july26 from './july262020';
import aug17 from './aug172020';

import home from './home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="bar">
            <Nav />
            <Switch>
              <Route path="/" exact component={home}/>
              <Route path="/hub" component={hub}/>
              <Route path="/songoftheday" exact component={songoftheday}/>
              <Route path="/pastsongs" component={pastsongs}/>
              <Route path="/july102020" component={july10}/>
              <Route path="/july112020" component={july11}/>
              <Route path="/july122020" component={july12}/>
              <Route path="/july132020" component={july13}/>
              <Route path="/july142020" component={july14}/>
              <Route path="/july152020" component={july15}/>
              <Route path="/july162020" component={july16}/>
              <Route path="/july172020" component={july17}/>
              <Route path="/july182020" component={july18}/>
              <Route path="/july252020" component={july25}/>
              <Route path="/july262020" component={july26}/>
              <Route path="/aug172020" component={aug17}/>

            </Switch>
          </div>
        </BrowserRouter>
    </div>
  );
}


export default App;
