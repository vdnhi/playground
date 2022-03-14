import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function StatisticInformation() {
  return (
    <View style={styles.container}>
      <View style={styles.itemWrapper}>
        <Text style={styles.firstLine}>210</Text>
        <Text style={styles.secondLine}>Photos</Text>
      </View>
      <View style={styles.itemWrapper}>
        <Text style={styles.firstLine}>15k</Text>
        <Text style={styles.secondLine}>Followers</Text>
      </View>
      <View style={styles.itemWrapper}>
        <Text style={styles.firstLine}>605</Text>
        <Text style={styles.secondLine}>Following</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  itemWrapper: {
    alignItems: "center",
  },
  firstLine: {
    fontWeight: "bold",
    fontSize: 20,
    color: "rgb(50, 60, 87)",
  },
  secondLine: {
    color: "rgb(129, 129, 129)",
  },
});
