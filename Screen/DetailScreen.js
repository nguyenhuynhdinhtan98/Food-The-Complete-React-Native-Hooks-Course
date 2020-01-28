import React, { Component, useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import yelp from "../api/yelp";
const DetailScreen = ({ navigation }) => {
  const [state, setstate] = useState([]);
  const id = navigation.getParam("id");
  const getItemById = async id => {
    try {
      const response = await yelp.get(`/${id}`);
      setstate(response.data);
    } catch (error) {
      setErrorMessage(error);
    }
  };
  useEffect(() => {
    getItemById(id);
  }, []);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SearchScreen");
        }}
      >
        <Text>Screen</Text>
      </TouchableOpacity>
      <FlatList
        data={state.photos}
        renderItem={item => {
          console.log({ item });
          return (
            <Image
              style={{ height: 200, width: 200 }}
              source={{
                uri: item.item
              }}
            />
          );
        }}
        keyExtractor={key => key}
      />
    </View>
  );
};

export default DetailScreen;
