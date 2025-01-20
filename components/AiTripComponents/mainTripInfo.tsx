import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

type Props = {
  userTrip: any;
};
export default function MainTripInfo({ userTrip }: Props) {
  const { aiTripDataResponse } = userTrip;
  console.log("aiTripDataResponse", aiTripDataResponse);
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("@/assets/images/plan-image2.webp")}
          style={styles.bannerImg}
        />
        <View style={styles.cardTextContainer}>
          <Text style={styles.title}>
            {aiTripDataResponse?.tripDetails?.location?.name}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  bannerImg: {
    width: "100%",
    height: 240,
    objectFit: "cover",
    borderRadius: 15,
  },
  cardTextContainer: {
    padding: 10,
  },
  title: {
    fontFamily: "Outfit-Medium",
    fontSize: 17,
    color: Colors.PRIMARY,
    marginVertical: 5,
  },
});
