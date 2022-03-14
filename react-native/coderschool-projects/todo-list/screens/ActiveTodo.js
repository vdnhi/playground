import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import TodoItem from "../components/TodoItem";
import { TODOS } from "../utils/data";

const ActiveTodo = () => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(TODOS);
  }, []);

  const renderItem = (item) => <TodoItem item={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) =>
          item.status === "Active" ? renderItem(item) : null
        }
        ItemSeparatorComponent={() => <View style={styles.container} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default ActiveTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  itemSperator: {
    height: 5,
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    borderRadius: 10,
  },
  itemStatus: {
    fontSize: 18,
    color: "white",
    paddingBottom: 5,
  },
  itemBody: {
    fontSize: 16,
    color: "white",
  },
});
