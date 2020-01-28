import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import yelp from "../api/yelp";
export default () => {
  const [resuilts, setResuilts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get("search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose"
        }
      });
      setResuilts(response.data.businesses);
    } catch (error) {
      setErrorMessage(error);
    }
  };
  useEffect(() => {
    searchApi("pasta");
  }, []);
  return [searchApi, resuilts, errorMessage];
};
