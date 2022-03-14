import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const InputTodo = (props) => {
  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder={"What do you want to do?"}
        onChangeText={(value) => props.onChangeText(value)}
        clearButtonMode="always"
        ref={input}
      />
      <TouchableOpacity
        onPress={() => props.handleSubmit()}
        style={styles.submitButton}
      >
        <Text style={styles.submitText}>Add new todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputTodo;

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginVertical: 10,
  },
  submitButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "red",
    marginTop: 5,
    borderRadius: 10,
    marginVertical: 20,
  },
  submitText: {
    color: "white",
    fontWeight: "bold",
  },
});
