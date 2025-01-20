import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ItineraryDay = ({ date, theme, schedule }) => (
  <View style={styles.container}>
    <Text style={styles.date}>{date}</Text>
    <Text style={styles.theme}>{theme}</Text>
    {schedule.map((event, index) => (
      <Text key={index} style={styles.event}>
        • {event.time}: {event.activity}
      </Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  date: { fontSize: 16, fontWeight: "bold" },
  theme: { fontSize: 14, color: "#666", marginBottom: 5 },
  event: { fontSize: 14, marginVertical: 2 },
});

export default ItineraryDay;
