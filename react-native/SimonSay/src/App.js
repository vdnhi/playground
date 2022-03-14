import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform
} from 'react-native';

import GamePlay from './containers/GamePlay';
import GameOver from './containers/GameOver';
import StyleDemo from './containers/StyleDemo';

const GAME_STATE = {
  PLAYING: "PLAYING",
  GAMEOVER: "GAMEOVER"
}

export default class App extends Component {
  state = {
    score: 0,
    gameState: GAME_STATE.PLAYING
  }

  _changeGameState(gameState, score) {
    this.setState({
      gameState,
      score
    });
  }

  render() {
    // return <StyleDemo />
    return this.state.gameState === GAME_STATE.PLAYING
      ? <GamePlay onGameOver={(score) => this._changeGameState(
        GAME_STATE.GAMEOVER,
        score
      )} />
      : <GameOver score={this.state.score} onRetry={() => this._changeGameState(
        GAME_STATE.PLAYING,
        0
      )} />;
  }
}