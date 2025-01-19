import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";
import { SelectTravelerList } from "@/constants/traveler-option";
import TravelerOptionCard from "@/components/MyTrip/travelerOptionCard";
import CustomButton from "@/components/custom-button";

const SelectTraveler = () => {
  const [selectTraveler, setSelectTraveler] = useState(-1);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.headerTxt}>Select your travel parnter</Text>
        <Text style={styles.subTxt}>Choose your travels</Text>

        <FlatList
          data={SelectTravelerList}
          renderItem={({ item }) => (
            <TravelerOptionCard
              traveler={item}
              selectTraveler={selectTraveler}
              setSelectTraveler={setSelectTraveler}
              key={item.id}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        <Link href={"/trip/select-dates"} asChild>
          <CustomButton label="Continue" disabled={selectTraveler === -1} />
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default SelectTraveler;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  headerTxt: {
    fontFamily: "Outfit-Bold",
    color: Colors.PRIMARY,
    fontSize: 30,
    marginTop: 30,
  },
  subTxt: {
    fontFamily: "Outfit-Medium",
    color: Colors.PRIMARY,
    fontSize: 25,
    marginTop: 15,
    marginBottom: 15,
  },
});
