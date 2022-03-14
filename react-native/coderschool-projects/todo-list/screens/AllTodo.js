import React, { useState, useEffect, useRef } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import InputTodo from "../components/InputTodo";
import TodoItem from "../components/TodoItem";

const AllTodo = () => {
  const input = useRef(null);
  const [data, setData] = useState();
  const [text, setText] = useState();

  useEffect(() => {
    setData(TODOS);
  }, []);

  const handleSubmit = () => {
    input.current.clear();
    let newData = data;
    let newElement = {
      id: data.length + 1,
      status: "Active",
      body: text,
    };
    newData.push(newElement);
    setData(newData);
  };

  const renderItem = (item) => <TodoItem item={item} />;
  const renderInput = () => (
    <InputTodo onSubmit={handleSubmit} onChangeText={setText} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => renderItem(item)}
        ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
        ListHeaderComponent={renderInput()}
        ListFooterComponentStyle={styles.listFooter}
      />
    </View>
  );
};

export default AllTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    marginTop: 20,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  listFooter: {
    marginTop: 5,
    width: "100%",
  },
});
