import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ActiveScreen from "./screens/ActiveTodo.js";
import AllScreen from "./screens/AllTodo";
import CompleteScreen from "./screens/CompleteTodo";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator initialRouteName="AllScreen">
        <Tab.Screen name="CompleteScreen" component={CompleteScreen} />
        <Tab.Screen name="AllScreen" component={AllScreen} />
        <Tab.Screen name="ActiveScreen" component={ActiveScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
