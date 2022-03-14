import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function ContactsScreen(props) {
  return (
    <View>
      <Text>Contacts Screen</Text>
    </View>
  );
}

MessagesScreen.navigationOptions = {
  title: "Contacts"
};
