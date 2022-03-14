import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function MessagesScreen(props) {
  return (
    <View>
      <Text>Messages Screen</Text>
    </View>
  );
}

MessagesScreen.navigationOptions = {
  title: "Messages"
};
