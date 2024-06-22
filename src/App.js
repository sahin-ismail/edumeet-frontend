import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ListOfTodo from './components/ListOfTodo';
import ForgotPassword from './components/ForgotPassword';
import UpdatePassword from './components/UpdatePassword';

function App() {
  return (<Router>
    <div className="App">
      {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>RemoteStack</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={ListOfTodo} />
            <Route path='/list-of-todo' component={ListOfTodo} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/update-password" component={UpdatePassword} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;