import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Platform
} from 'react-native';

import ColorButton from "../components/ColorButton";
import Sound from "react-native-sound";
Sound.setCategory("Playback");

const PlayState = {
  HINTING: "HINTING",
  PLAYING: "PLAYING"
}

const pling1 = new Sound(`pling1.mp3`, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  }
})

const pling2 = new Sound(`pling2.mp3`, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  }
})

const pling3 = new Sound(`pling3.mp3`, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  }
})

const pling4 = new Sound(`pling4.mp3`, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  }
})

export default class GamePlay extends PureComponent {
  state = {
    score: 0,
    targetInput: [],
    userInputIndex: 0,
    gameBoardSize: 0,
    flashIndex: -1,
    playState: PlayState.HINTING,
    buttonColor: ["red", "yellow", "blue", "green"]
  }

  _onPress = (input) => {
    const { targetInput, userInputIndex, score } = this.state;
    if (input === 0) {
      pling1.play();
    } else if (input === 1) {
      pling2.play();
    } else if (input === 2) {
      pling3.play();
    } else {
      pling4.play();
    }
    input !== targetInput[userInputIndex]
      ? this.props.onGameOver(this.state.score)
      : userInputIndex === targetInput.length - 1
        ? this._toNextLevel(this.state.score + 1)
        : this.setState({
          userInputIndex: userInputIndex + 1
        });
  }

  _randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  _toNextLevel = (score) => {
    this.setState({
      score,
      userInputIndex: 0,
      targetInput: this._nextLevel(this.state.targetInput)
    }, () => {
      this.setState({
        playState: PlayState.HINTING
      })
      setTimeout(this._onButtonFlashCompleted, 1000);
    });
  }

  _onButtonFlashCompleted = () => {
    const {flashIndex, targetInput} = this.state;
    this.setState({
      flashIndex: -1
    }, () => {
      this.setState(
        flashIndex < targetInput.length - 1
          ? {
            playState: PlayState.HINTING,
            flashIndex: flashIndex + 1
          }
          : {
            playState: PlayState.PLAYING,
            flashIndex: -1
          }
      ); 
    });
  }

  _nextLevel = (targetInput) => {
    return targetInput.concat(this._randomInt(0, 4));
  }

  _onLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;

    this.setState({
      gameBoardSize: Math.min(width, height)
    });
  }

  componentDidMount() {
    this._toNextLevel(0);
  }

  _propsForButtonIndex = (index) => {
    return {
      onPress: () => this._onPress(index),
      isFlashing: this.state.targetInput[this.state.flashIndex] === index,
      onFlashComplete: this._onButtonFlashCompleted,
      disabled: this.state.playState === PlayState.HINTING,
      background: this.state.buttonColor[index]
    }
  }
  render() {
    return (
      <View style={[styles.container, styles.wrapper]}>
        <Text style={styles.scoreText}>{`Score: ${this.state.score}`}</Text>
        <View style={styles.boardContainer} onLayout={this._onLayout}>
          <View style={[
            styles.gameBoard,
            {
              width: this.state.gameBoardSize,
              height: this.state.gameBoardSize
            }
          ]}>
            <ColorButton {...this._propsForButtonIndex(0)} />
            <ColorButton {...this._propsForButtonIndex(1)} />
            <ColorButton {...this._propsForButtonIndex(2)} />
            <ColorButton {...this._propsForButtonIndex(3)} />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 20,
    alignItems: "center"
  },
  container: {
    flex: 1,
  },
  scoreText: {
    paddingVertical: 30,
    fontSize: 36
  },
  boardContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center"
  },
  gameBoard: {
    flexWrap: "wrap"
  }
});