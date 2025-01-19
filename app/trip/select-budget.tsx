import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SelectBudgetList } from "@/constants/traveler-option";
import BudgetOptionCard from "@/components/MyTrip/budgetOptions";
import CustomButton from "@/components/custom-button";
import { Link } from "expo-router";

const SelectBudget = () => {
  const [selectBudget, seySelectBudget] = useState(-1);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.headerTxt}>Budget</Text>
        <Text style={styles.subTxt}>Choose the trip budget</Text>
        <FlatList
          data={SelectBudgetList}
          renderItem={({ item }) => (
            <BudgetOptionCard
              key={item.id}
              budget={item}
              selectBudget={selectBudget}
              setSelectBudget={seySelectBudget}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        <Link href={"/trip/review-trip"} asChild>
          <CustomButton
            label="Continue"
            style={{ marginTop: 10 }}
            disabled={selectBudget === -1}
          />
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default SelectBudget;

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
    fontSize: 18,
    marginBottom: 20,
  },
  budgetContainer: {
    padding: 5,
  },
});
