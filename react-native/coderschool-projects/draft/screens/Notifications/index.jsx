import React from "react";
import { View, Text, Button, Image, SafeAreaView, TouchableOpacity } from "react-native";
import closeButton from "../../assets/icons/close.png";
import styles from "./styles";

export default function Notifications({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Notifications</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Main")}
        style={styles.buttonContainer}
      >
        <Image source={closeButton} style={styles.closeIcon} />
      </TouchableOpacity>

    </SafeAreaView>
  );
}
