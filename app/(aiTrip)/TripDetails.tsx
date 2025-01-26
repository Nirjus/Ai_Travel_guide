import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppContext } from "@/context/tripContext";

const TripDetailsScreen = () => {
  const { trip } = useAppContext();
  console.log(trip);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>{trip?.tripDetails?.location?.name}</Text>
      </View>
    </SafeAreaView>
  );
};

export default TripDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
});
