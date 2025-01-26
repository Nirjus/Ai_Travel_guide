import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import CustomButton from "../custom-button";
import { useRouter } from "expo-router";

const StartNewTripCard = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Ionicons name="location" size={30} color="black" />
      <Text style={styles.notFoundText}>No trip found 😒</Text>
      <Text style={styles.description}>
        Create your first trip, and start enjoying the world around you.
      </Text>
      <CustomButton
        label="Start New Trip"
        onPress={() => router.push("/(trip)/search-place")}
      />
    </View>
  );
};

export default StartNewTripCard;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
    alignItems: "center",
  },
  notFoundText: {
    fontSize: 20,
    marginTop: 20,
    fontFamily: "Outfit-medium",
    textAlign: "center",
    color: Colors.PRIMARY,
  },
  description: {
    marginTop: 20,
    textAlign: "center",
    fontFamily: "Outfit-Regular",
    fontSize: 17,
    color: Colors.GRAY,
    marginBottom: 20,
  },
});
