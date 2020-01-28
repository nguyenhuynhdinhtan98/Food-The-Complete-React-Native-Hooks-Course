import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./Screen/SearchScreen";
import DetailScreen from "./Screen/DetailScreen";
const navigator = createStackNavigator(
  {
    SearchScreen: SearchScreen,
    DetailScreen: DetailScreen
  },
  {
    initialRouteName: "SearchScreen",
    defaultNavigationOptions: { title: "Food Search" }
  }
);
export default createAppContainer(navigator);
