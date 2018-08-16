import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sessions from './sessions/Sessions';
import Status from './status/Status';
import Callback from './callback/Callback';
import Nav from './navigation/Nav';

import './App.css';


const routeConfig = [
  {
    name: 'Status',
    path: '/',
    component: Status
  },
  {
    name: 'Sessions',
    path: '/sessions',
    component: Sessions
  },
  {
    name: 'Callback',
    path: '/callback',
    component: Callback
  }

]

function getRouteByPath(path) {
  return routeConfig.find(r => path === r.path);
}

class App extends Component {
  
  render() {
    
    return (
      <div>
        <Router>
          <div>
            <Route path='/' render={p => <Nav title={getRouteByPath(p.location.pathname).name}/>} />
            {routeConfig.map((r, i) => <Route key={i} path={r.path} exact={r.path === '/'} component={r.component} />)}
            {/* <Route exact path="/" component={Status} />
            <Route path="/sessions" component={Sessions} /> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
