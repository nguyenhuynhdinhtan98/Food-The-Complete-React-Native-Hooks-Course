import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  FlatList,
  ScrollView,
  Image
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { text } from "@fortawesome/fontawesome-svg-core";
const ResuiltScreen = ({ item }) => {
  return (
    <View key={item.id} style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.image_url
        }}
      />
      <Text style={styles.fontSize}>{item.name}</Text>
      <Text style={styles.detailInfor}>
        Rating: {item.rating}, Review :{item.review_count}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 230,
    width: 150,
    padding: 3
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 10
  },
  textRestaurant: {
    fontSize: 15,
    fontWeight: "bold"
  },
  detailInfor: {
    fontWeight: "100"
  }
});
export default ResuiltScreen;
