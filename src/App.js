import React, { Component } from 'react';
import { Link, Match } from 'react-router';
import GamesPage from './GamesPage';
import GameForm from './GameForm';
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
        <Match pattern="/games/new" component={GameForm} />
        <Match pattern="/game/:_id" component={GameForm} />
      </div>
    );
  }
}

export default App;
