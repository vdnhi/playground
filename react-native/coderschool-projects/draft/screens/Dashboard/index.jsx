import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

export default function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <Button title="Notifications" onPress={() => navigation.navigate("Modal")}></Button>
    </View>
  );
}