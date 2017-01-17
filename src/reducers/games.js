import { SET_GAMES, ADD_GAME } from '../actions';

export default function games(state = [], action = {}) {
  switch(action.type) {
    case ADD_GAME:
      return [
        ...state,
        action.game
      ];
    case SET_GAMES:
      return action.games;
    default: return state;
  }
}
