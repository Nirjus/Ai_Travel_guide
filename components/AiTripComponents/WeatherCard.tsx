import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WeatherCard = ({ location, temperature, description }) => (
  <View style={styles.card}>
    <Text style={styles.title}>Weather in {location}</Text>
    <Text style={styles.temperature}>{temperature}°C</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
  },
  title: { fontSize: 18, fontWeight: "bold" },
  temperature: { fontSize: 32, fontWeight: "bold", marginVertical: 5 },
  description: { fontSize: 14, color: "#777" },
});

export default WeatherCard;
