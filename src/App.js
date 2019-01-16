import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Maths from './Maths';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/:operation/:val1/:val2"
            render={props => <Maths {...props} />}
          />
          <Route render={() => <p>Gimme an elixir!</p>} />
        </Switch>
      </div>
    );
  }
}

export default App;
