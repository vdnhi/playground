import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import TodoItem from "../components/TodoItem";

const CompleteTodo = () => {
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
          item.status === "Done" ? renderItem(item) : null
        }
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default CompleteTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemSeparator: {
    height: 5,
  },
  contentContainer: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});
