import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const AttractionCard = ({ name, imageUrl, description, location }) => (
  <View style={styles.card}>
    <Image source={{ uri: imageUrl }} style={styles.image} />
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.subtitle}>{location}</Text>
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
  },
  image: { width: "100%", height: 150, borderRadius: 10 },
  title: { fontSize: 18, fontWeight: "bold", margin: 10 },
  subtitle: { fontSize: 14, marginHorizontal: 10, color: "#666" },
  description: { fontSize: 14, margin: 10, color: "#333" },
});

export default AttractionCard;
