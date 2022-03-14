import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TodoItem = ({ item }) => {
  const bgColor = {
    backgroundColor: item.status === "Done" ? "green" : "blue",
  };
  return (
    <TouchableOpacity>
      <View style={{ bgColor, ...styles.container }}>
        <Text style={styles.status}>
          {item.id}. {item.status}
        </Text>
        <Text style={styles.body}>{item.body}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 10,
    borderRadius: 10,
  },
  status: {
    fontSize: 20,
    color: "white",
    marginBottom: 5,
  },
  body: {
    fontSize: 16,
    color: "white",
  },
});
