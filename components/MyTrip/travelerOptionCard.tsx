import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TravelerOption } from "@/constants/traveler-option";
import { Colors } from "@/constants/Colors";
import { useAppContext } from "@/context/tripContext";

type Props = {
  traveler: TravelerOption;
  selectTraveler: TravelerOption;
  setSelectTraveler: (selectTraveler: TravelerOption) => void;
};

const TravelerOptionCard = ({
  traveler,
  selectTraveler,
  setSelectTraveler,
}: Props) => {
  const { setState, state } = useAppContext();
  const handlePress = () => {
    setSelectTraveler(traveler);
    setState({ ...state, travelerCount: traveler.people });
  };
  return (
    <Pressable
      style={({ pressed }) => [
        pressed && { opacity: 0.7 },
        {
          backgroundColor:
            selectTraveler.id === traveler.id ? Colors.WHITE : "#eeeded",
        },
        styles.container,
      ]}
      onPress={handlePress}
    >
      <Text style={styles.icon}>{traveler.icon}</Text>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{traveler.title}</Text>
        <Text style={styles.desc}>{traveler.desc}</Text>
      </View>
    </Pressable>
  );
};

export default TravelerOptionCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    // backgroundColor: "#eeeded",
    marginTop: 10,
    borderBottomWidth: 2,
    borderRightWidth: 2,
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
