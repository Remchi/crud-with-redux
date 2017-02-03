export const SET_GAMES = 'SET_GAMES';
export const ADD_GAME = 'ADD_GAME';
export const GAME_FETCHED = 'GAME_FETCHED';
export const GAME_UPDATED = 'GAME_UPDATED';
export const GAME_DELETED = 'GAME_DELETED';

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function setGames(games) {
  return {
    type: SET_GAMES,
    games
  }
}

export function addGame(game) {
  return {
    type: ADD_GAME,
    game
  }
}

export function gameFetched(game) {
  return {
    type: GAME_FETCHED,
    game
  }
}

export function gameUpdated(game) {
  return {
    type: GAME_UPDATED,
    game
  }
}

export function gameDeleted(gameId) {
  return {
    type: GAME_DELETED,
    gameId
  }
}

export function saveGame(data) {
  return dispatch => {
    return fetch('/api/games', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(addGame(data.game)));
  }
}

export function updateGame(data) {
  return dispatch => {
    return fetch(`/api/games/${data._id}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(gameUpdated(data.game)));
  }
}

export function deleteGame(id) {
  return dispatch => {
    return fetch(`/api/games/${id}`, {
      method: 'delete',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(gameDeleted(id)));
  }
}

export function fetchGames() {
  return dispatch => {
    fetch('/api/games')
      .then(res => res.json())
      .then(data => dispatch(setGames(data.games)));
  }
}

export function fetchGame(id) {
  return dispatch => {
    fetch(`/api/games/${id}`)
      .then(res => res.json())
      .then(data => dispatch(gameFetched(data.game)));
  }
}
