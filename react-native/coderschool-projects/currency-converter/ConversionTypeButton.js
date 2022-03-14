import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ConversionTypeButton(props) {
  const { fromCurrency, toCurrency, from, to, setConversionCurrency } = props;
  const fromFlag = from === "usd" ? "🇺🇲" : "🇻🇳";
  const toFlag = to === "usd" ? "🇺🇲" : "🇻🇳";
  const isSelectedConversionType = fromCurrency === from && toCurrency === to;
  const backgroundColor = isSelectedConversionType ? "lightblue" : null;
  const conditionalButtonStyle = { backgroundColor };

  return (
    <TouchableOpacity
      style={[styles.convertButton, conditionalButtonStyle]}
      onPress={() => setConversionCurrency(from, to)}
    >
      <Text>
        {fromFlag} to {toFlag}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  convertButton: {
    height: 35,
    width: 200,
    margin: 10,
    borderWidth: 2,
    borderRadius: 20,
    alignItems: "center",
    borderColor: "lightblue",
    justifyContent: "center",
  },
});
