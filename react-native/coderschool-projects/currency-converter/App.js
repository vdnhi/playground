import React, { Component } from "react";
import { StyleSheet, Text, SafeAreaView, TextInput } from "react-native";
import ConversionTypeButton from "./ConversionTypeButton";
import FormattedCurrency from "./FormattedCurrency";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCurrencyValue: 0,
      convertedCurrencyValue: 0,
      fromCurrency: "vnd",
      toCurrency: "usd",
    };
  }

  setConversionCurrency = (from, to) => {
    this.setState({
      fromCurrency: from,
      toCurrency: to,
    });
  };

  convertCurrency = (value) => {
    // by default is convert from vnd
    let convertedValue = value / 23000;
    if (this.state.fromCurrency === "usd") {
      convertedValue = value * 23000;
    }
    this.setState({
      currentCurrencyValue: value,
      convertedCurrencyValue: convertedValue,
    });
  };

  render() {
    const {
      fromCurrency,
      toCurrency,
      currentCurrencyValue,
      convertedCurrencyValue,
    } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Text>Please enter the value of the currency you want to convert</Text>
        <TextInput
          onChangeText={(value) => this.convertCurrency(value)}
          style={styles.inputBox}
          keyboardType="number-pad"
          autoFocus={true}
          textAlign="center"
          placeholder="100,000,000 VND"
          selectionColor="red"
        />
        <ConversionTypeButton
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          from="vnd"
          to="usd"
          setConversionCurrency={this.setConversionCurrency}
        />
        <ConversionTypeButton
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          setConversionCurrency={this.setConversionCurrency}
          from="usd"
          to="vnd"
        />
        <Text>Current currency:</Text>
        <FormattedCurrency type={fromCurrency} value={currentCurrencyValue} />
        <Text>Conversion currenecy:</Text>
        <FormattedCurrency type={toCurrency} value={convertedCurrencyValue} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inputBox: {
    height: 60,
    padding: 5,
    width: 300,
    fontSize: 35,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: "lightblue",
  },
});
