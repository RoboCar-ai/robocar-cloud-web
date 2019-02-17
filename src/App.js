import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sessions from './sessions/Sessions';
import Status from './status/Status';
import Callback from './callback/Callback';
import Nav from './navigation/Nav';
import {isAuthenticated, login} from './utils/AuthService'

import './App.css';


const routeConfig = [
  {
    name: 'Status',
    path: '/',
    component: Status,
    protected: true,
  },
  {
    name: 'Sessions',
    path: '/sessions',
    component: Sessions,
    protected: true,
  },
  {
    name: 'Callback',
    path: '/callback',
    component: Callback,
    protected: false,
  }

];  

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
            {routeConfig.map((r, i) => {
                if (r.protected) 
                 return (<PrivateRoute key={i} path={r.path} exact={r.path === '/'} component={r.component} />)
                else
                  return <Route key={i} path={r.path} exact={r.path === '/'} component={r.component} />
              })}
            {/* <Route exact path="/" component={Status} />
            <Route path="/sessions" component={Sessions} /> */}
          </div>
        </Router>
      </div>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render= {
      props =>{
        if (!isAuthenticated()) {
          return login();
        }
        return (<Component {...props} />)
      }
    }
  />
);

export default App;
