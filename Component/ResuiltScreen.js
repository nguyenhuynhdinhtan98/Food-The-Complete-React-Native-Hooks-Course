import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Button
} from "react-native";
import { withNavigation } from "react-navigation";
import ResuiltDetail from "./ResuiltDetail";
const ResuiltScreen = ({ title, resuilts, navigation }) => {
  return (
    <View>
      <Text>{title}</Text>
      <FlatList
        horizontal
        data={resuilts}
        renderItem={value => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("DetailScreen", { id: value.item.id });
            }}
          >
            <ResuiltDetail item={value.item} />
          </TouchableOpacity>
        )}
        keyExtractor={key => key.id}
      />
      <Text>Total resuilts: {resuilts.length}</Text>
    </View>
  );
};

export default withNavigation(ResuiltScreen);
