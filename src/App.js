import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sessions from './sessions/Sessions';
import Status from './status/Status';
import Nav from './navigation/Nav';

import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Router>

          <div>
            <Nav />

            <Route exact path="/" component={Status} />
            <Route path="/sessions" component={Sessions} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
