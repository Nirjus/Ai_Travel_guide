import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FlightCard = ({
  airline,
  departureTime,
  arrivalTime,
  flightNumber,
  price,
}) => (
  <View style={styles.card}>
    <Text style={styles.title}>{airline}</Text>
    <Text style={styles.subtitle}>Flight: {flightNumber}</Text>
    <Text style={styles.time}>Departure: {departureTime}</Text>
    <Text style={styles.time}>Arrival: {arrivalTime}</Text>
    <Text style={styles.price}>Price: {price}</Text>
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
  subtitle: { fontSize: 14, marginVertical: 5 },
  time: { fontSize: 14, color: "#777" },
  price: { fontSize: 16, color: "#000", marginTop: 10 },
});

export default FlightCard;
