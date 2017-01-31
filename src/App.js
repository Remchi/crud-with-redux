import React, { Component } from 'react';
import { Link, Match } from 'react-router';
import GamesPage from './GamesPage';
import GameFormPage from './GameFormPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <Link className="item" activeClassName="active" activeOnlyWhenExact to="/">Home</Link>
          <Link className="item" activeClassName="active" activeOnlyWhenExact to="/games">Games</Link>
          <Link className="item" activeClassName="active" activeOnlyWhenExact to="/games/new">Add New Game</Link>
        </div>

        <Match exactly pattern="/games" component={GamesPage} />
        <Match pattern="/games/new" component={GameFormPage} />
        <Match pattern="/game/:_id" component={GameFormPage} />
      </div>
    );
  }
}

export default App;
