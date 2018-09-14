import React, { Component } from 'react';

import './App.css';
import { Route} from 'react-router-dom';

import Home from './Home';
import Fahrschule from './Fahrschule';
import Error from './Error';
import Switch from 'react-router-dom/Switch';





class App extends Component {
  render() {
    return (
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/fahrschule" component={Fahrschule} />
          <Route component={Error} />
      </Switch>
    );
  }
}

export default App;
