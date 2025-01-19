import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { BudgetOptions } from "@/constants/traveler-option";
import { useAppContext } from "@/context/tripContext";
import { Colors } from "@/constants/Colors";

type Props = {
  budget: BudgetOptions;
  selectBudget: number;
  setSelectBudget: (selectBudget: number) => void;
};
const BudgetOptionCard = ({ budget, selectBudget, setSelectBudget }: Props) => {
  const { setState, state } = useAppContext();
  const handlePress = () => {
    setSelectBudget(budget.id);
    setState({ ...state, budget });
  };
  return (
    <Pressable
      style={({ pressed }) => [
        pressed && { opacity: 0.7 },
        {
          backgroundColor:
            selectBudget === budget.id ? Colors.WHITE : "#eeeded",
        },
        styles.container,
      ]}
      onPress={handlePress}
    >
      <Text style={styles.icon}>{budget.icon}</Text>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{budget.title}</Text>
        <Text style={styles.desc}>{budget.desc}</Text>
      </View>
    </Pressable>
  );
};

export default BudgetOptionCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginTop: 15,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: Colors.GRAY,
  },
  title: {
    fontFamily: "Outfit-Medium",
    fontSize: 20,
    color: Colors.PRIMARY,
  },
  icon: {
    fontSize: 30,
  },
  desc: {
    fontFamily: "Outfit-Regular",
    fontSize: 15,
    color: "#575757",
    marginTop: 5,
  },
});
