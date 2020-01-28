import React, { Component } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
const SearchBar = ({ term, onChangeSearch, onChangeSubmit }) => {
  return (
    <View style={styles.container}>
      <Feather name="search" size={32} style={styles.iconsearch} />
      <TextInput
        autoCapitalize="none"
        style={styles.textSearch}
        onChangeText={onChangeSearch}
        onEndEditing={onChangeSubmit}
        value={term}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "#F0EEEE",
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    margin: 10
  },
  iconsearch: {},
  textSearch: {
    borderWidth: 1,
    flex: 1
  }
});
export default SearchBar;
