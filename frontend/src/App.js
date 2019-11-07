import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import HomePage from './HomePage';
import MyArticles from './MyArticles';
import ThemeArticles from './ThemeArticles'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {

  render() {

    return (

      <Router>
            <div className="App">
                  <Switch>
                      <Route path="/" exact component={Login} />
                      <Route path="/HomePage" component={HomePage} />
                      <Route path="/ThemeArticles/:id" component={ThemeArticles} />
                      <Route path="/MyArticles" component={MyArticles} />
                  </Switch>
            </div>
      </Router>

    );
  }
}

export default App;