import React from "react";
import { Text, StyleSheet } from "react-native";

const FormattedCurrency = (props) => {
  const format = props.type === "usd" ? "us" : "vn";
  const currency = props.type === "usd" ? "USD" : "VND";
  const flag = props.type === "usd" ? "🇺🇸" : "🇻🇳";

  const formatter = new Intl.NumberFormat(format, {
    currency,
    style: "currency",
  });

  return (
    <Text style={styles.currencyText}>
      {formatter.format(props.value)} {flag}
    </Text>
  );
};

const styles = StyleSheet.create({
  currencyText: {
    fontSize: 30,
    color: "green",
    fontWeight: "bold",
  },
});

export default FormattedCurrency;
