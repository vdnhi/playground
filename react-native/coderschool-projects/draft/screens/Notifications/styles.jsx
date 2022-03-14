import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(242, 244, 247)"
  },
  text: {
    fontSize: 25,
  },
  closeIcon: {
    width: 20,
    height: 20
  },
  buttonContainer: {
    backgroundColor: "white",
    width: 120,
    height: 35,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginTop: 10
  },
});

export default styles;
