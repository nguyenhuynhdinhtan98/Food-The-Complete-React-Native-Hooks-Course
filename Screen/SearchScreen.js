import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import axios from "axios";
import SearchBar from "../Component/SearchBar";
import ResuiltScreen from "../Component/ResuiltScreen";
import useResuilt from "../hooks/useResuilt";
const SearchScreen = () => {
  const [state, setstate] = useState("");
  const [searchApi, resuilts, errorMessage] = useResuilt();
  const filterResuilts = price => {
    return resuilts.filter(value => {
      return price === value.price;
    });
  };
  return (
    <View style={styles.container}>
      <SearchBar
        onChangeSearch={setstate}
        onChangeSubmit={() => searchApi(state)}
        term={state}
      />
      <ScrollView>
        <ResuiltScreen title="Cost Effective" resuilts={filterResuilts("$")} />
        <ResuiltScreen title="Bit Pricer" resuilts={filterResuilts("$$")} />
        <ResuiltScreen title="Big Spencer" resuilts={filterResuilts("$$$")} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 3,
    flex: 1
  }
});
export default SearchScreen;
