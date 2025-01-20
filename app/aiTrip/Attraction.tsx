import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import ItineraryDay from "@/components/AiTripComponents/ItineraryDay";

const AttractionScreen = () => {
  return (
    <ScrollView>
      {/* {itineraryData.map((day, index) => (
        <ItineraryDay key={index} {...day} />
      ))} */}
    </ScrollView>
  );
};

export default AttractionScreen;

const styles = StyleSheet.create({
  screenContainer: {
    padding: 10,
    backgroundColor: "#f7f7f7",
  },
});
