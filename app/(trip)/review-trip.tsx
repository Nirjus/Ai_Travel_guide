import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppContext } from "@/context/tripContext";
import { Colors } from "@/constants/Colors";
import CustomButton from "@/components/custom-button";
import { Link } from "expo-router";

export default function ReviewTrip() {
  const { state } = useAppContext();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Text style={styles.headerTxt}>Trip Review</Text>
        <Text style={styles.subTxt}>
          Before generating AI trip, please review your trip
        </Text>
        <View>
          <View style={styles.reviewContainer}>
            <Text style={{ fontSize: 30 }}>🗺️</Text>
            <View style={{ flex: 1 }}>
              <Text
                style={[styles.tripInfo, { fontSize: 17, color: Colors.GRAY }]}
              >
                Destination
              </Text>
              <Text style={styles.tripInfo}>
                {state?.locationInfo?.display_name}
              </Text>
            </View>
          </View>
          <View style={styles.reviewContainer}>
            <Text style={{ fontSize: 30 }}>🗓️</Text>
            <View style={{ flex: 1 }}>
              <Text
                style={[styles.tripInfo, { fontSize: 17, color: Colors.GRAY }]}
              >
                Time period
              </Text>
              <Text style={styles.tripInfo}>
                {state.startDate + " - " + state?.endDate + " "} (
                {state?.totalDays}
                days)
              </Text>
            </View>
          </View>
          <View style={styles.reviewContainer}>
            <Text style={{ fontSize: 30 }}>{state?.travelerCount?.icon}</Text>
            <View style={{ flex: 1 }}>
              <Text
                style={[styles.tripInfo, { fontSize: 17, color: Colors.GRAY }]}
              >
                Travel Companion
              </Text>
              <Text style={styles.tripInfo}>
                Type: {state?.travelerCount?.title}
              </Text>
              <Text style={styles.tripInfo}>
                {state?.travelerCount?.people}
              </Text>
            </View>
          </View>
          <View style={styles.reviewContainer}>
            <Text style={{ fontSize: 30 }}>{state?.budget?.icon}</Text>
            <View style={{ flex: 1 }}>
              <Text
                style={[styles.tripInfo, { fontSize: 17, color: Colors.GRAY }]}
              >
                Budget Info
              </Text>
              <Text style={styles.tripInfo}>{state?.budget?.title}</Text>
            </View>
          </View>
        </View>
        <Link href={"/(trip)/generate-trip"} replace asChild>
          <CustomButton label="Build My Trip" />
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  headerTxt: {
    fontFamily: "Outfit-Bold",
    fontSize: 30,
    marginTop: 10,
  },
  subTxt: {
    fontFamily: "Outfit-Medium",
    fontSize: 17,
    marginTop: 10,
    marginBottom: 15,
  },
  reviewContainer: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom: 20,
  },
  tripInfo: {
    fontFamily: "Outfit-Medium",
    fontSize: 13,
    marginBottom: 5,
    color: Colors.PRIMARY,
  },
});
