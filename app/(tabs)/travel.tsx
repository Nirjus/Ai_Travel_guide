import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import StartNewTripCard from "@/components/MyTrip/StartNewTripCard";

export default function TripScreen() {
  const [userTrips, setUserTrips] = useState([]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>My Trips</Text>
          <Ionicons name="add-circle" size={50} color="black" />
        </View>

        {userTrips.length === 0 ? <StartNewTripCard /> : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    // paddingTop: 55,
  },
  headerContainer: {
    paddingHorizontal: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontFamily: "Outfit-Bold",
    fontSize: 30,
    marginBottom: 10,
  },
});
