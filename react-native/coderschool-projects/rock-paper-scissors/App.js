import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ChoiceCard from "./ChoiceCard";
import ChoiceButton from "./ChoiceButton";

const CHOICES = [
  {
    name: "rock",
    uri: "http://pngimg.com/uploads/stone/stone_PNG13622.png",
  },
  {
    name: "paper",
    uri: "https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png",
  },
  {
    name: "scissors",
    uri:
      "http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png",
  },
];

const SCISSORS = "scissors";
const PAPER = "paper";
const ROCK = "rock";
const VICTORY = "You win";
const DEFEAT = "You lose";
const TIE = "Tie";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamePrompt: "",
      userChoice: {},
      computerChoice: {},
      totalGamePlayed: 0,
      countWonGame: 0,
    };
  }

  getResultColor = () =>
    this.state.gamePrompt === VICTORY
      ? "green"
      : this.state.gamePrompt === DEFEAT
      ? "red"
      : "blue";

  getRoundResult = (userChoice) => {
    const computerChoice =
      CHOICES[Math.floor(Math.random() * CHOICES.length)].name;
    let result;
    if (userChoice === ROCK) {
      result = computerChoice === SCISSORS ? VICTORY : DEFEAT;
    }
    if (userChoice === PAPER) {
      result = computerChoice === ROCK ? VICTORY : DEFEAT;
    }
    if (userChoice === SCISSORS) {
      result = computerChoice === PAPER ? VICTORY : DEFEAT;
    }
    if (userChoice === computerChoice) {
      result = TIE;
    }
    return [result, computerChoice];
  };

  onPress = (playerChoice) => {
    const [result, compChoice] = this.getRoundResult(playerChoice);
    const newUserChoice = CHOICES.find(
      (choice) => choice.name === playerChoice
    );
    const newComputerChoice = CHOICES.find(
      (choice) => choice.name === compChoice
    );
    const newCountWonGame =
      this.state.countWonGame + (result === VICTORY ? 1 : 0);
    this.setState({
      gamePrompt: result,
      userChoice: newUserChoice,
      computerChoice: newComputerChoice,
      totalGamePlayed: this.state.totalGamePlayed + 1,
      countWonGame: newCountWonGame,
    });
  };

  render() {
    const {
      gamePrompt,
      totalGamePlayed,
      countWonGame,
      userChoice,
      computerChoice,
    } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ fontSize: 35, color: this.getResultColor() }}>
          {gamePrompt.toUpperCase()}
        </Text>
        <Text style={styles.largeText}>Total game played: {totalGamePlayed}</Text>
        <Text style={styles.largeText}>You won: {countWonGame} games</Text>
        <View style={styles.choicesContainer}>
          <ChoiceCard player="Player" choice={userChoice} />
          <Text style={{ color: "#250902", fontSize: 30 }}>vs</Text>
          <ChoiceCard player="Computer" choice={computerChoice} />
        </View>
        {CHOICES.map((choice) => {
          return (
            <ChoiceButton
              key={choice.name}
              name={choice.name}
              onPress={this.onPress}
            />
          );
        })}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e9ebee",
    flex: 1,
  },
  largeText: {
    fontSize: 20
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  choicesContainer: {
    margin: 10,
    borderWidth: 2,
    paddingTop: 100,
    shadowRadius: 5,
    paddingBottom: 100,
    borderColor: "grey",
    shadowOpacity: 0.9,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-around",
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: { height: 5, width: 5 },
    height: 350,
  },
});
