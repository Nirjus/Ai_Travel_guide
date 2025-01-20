import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

type Props = {
  location;
  startDate;
  endDate;
  duration;
  travelers;
  budget;
};

const TripHeader = ({
  location,
  startDate,
  endDate,
  duration,
  travelers,
  budget,
}: Props) => {
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: "https://example.com/paris-background.jpg" }}
        style={styles.headerImage}
      />
      <View style={styles.overlay}>
        <Text style={styles.title}>{location}</Text>
        <Text style={styles.subtitle}>
          {startDate} - {endDate} ({duration})
        </Text>
        <Text style={styles.subtitle}>
          Travelers: {travelers} | Budget: {budget}
        </Text>
      </View>
    </View>
  );
};

export default TripHeader;

const styles = StyleSheet.create({
  header: { height: 200, position: "relative" },
  headerImage: { width: "100%", height: "100%" },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  title: { fontSize: 24, fontWeight: "bold", color: Colors.WHITE },
  subtitle: { fontSize: 16, color: Colors.WHITE, marginVertical: 2 },
});
