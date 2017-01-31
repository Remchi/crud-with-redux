import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { saveGame, fetchGame, updateGame } from './actions';
import GameForm from './GameForm';

class GameFormPage extends React.Component {

  state = {
    redirect: false
  }

  componentDidMount = () => {
    if (this.props.params._id) {
      this.props.fetchGame(this.props.params._id);
    }
  }

  saveGame = ({_id, title, cover }) => {
    if (_id) {
      return this.props.updateGame({ _id, title, cover }).then(
        () => { this.setState({ redirect: true })},
      );
    } else {
      return this.props.saveGame({ title, cover }).then(
        () => { this.setState({ redirect: true })},
      );
    }
  }

  render() {
    return (
      <div>
        {
          this.state.redirect ?
          <Redirect to="/games" /> :
          <GameForm
            game={this.props.game}
            saveGame={this.saveGame}
          />
        }
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  if (props.params._id) {
    return {
      game: state.games.find(item => item._id === props.params._id)
    }
  }

  return { game: null };
}

export default connect(mapStateToProps, { saveGame, fetchGame, updateGame })(GameFormPage);
