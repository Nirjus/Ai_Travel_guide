import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "@/constants/Colors";
import CustomButton from "../custom-button";
import { Link } from "expo-router";

type Props = {
  userTrip: any;
  directionRow?: boolean;
};
export default function MainTripInfo({
  directionRow = false,
  userTrip,
}: Props) {
  const { aiTripDataResponse, docId } = userTrip;
  return (
    <View style={styles.container}>
      <View style={[directionRow && styles.card]}>
        <Image
          source={require("@/assets/images/plan-image2.webp")}
          style={[directionRow ? styles.bannerImg2 : styles.bannerImg1]}
        />
        <View style={styles.cardTextContainer}>
          <Text style={styles.title}>
            {aiTripDataResponse?.tripDetails?.location?.name}
          </Text>
          <View style={[directionRow ? styles.groupText2 : styles.groupText1]}>
            <Text style={styles.subInformation}>
              {aiTripDataResponse?.tripDetails?.travelPeriod?.startDate} -{" "}
              {aiTripDataResponse?.tripDetails?.travelPeriod?.endDate}
            </Text>
            <Text style={styles.subInformation}>
              ✈️{aiTripDataResponse?.tripDetails?.travelers?.type}
            </Text>
          </View>
          <Link href={`/(aiTrip)/${docId}`} asChild>
            {directionRow ? (
              <CustomButton
                label="View Trip"
                IconRight={
                  <AntDesign
                    name="arrowright"
                    size={20}
                    color={Colors.PRIMARY}
                  />
                }
                textStyle={{ color: Colors.PRIMARY }}
                style={{ backgroundColor: Colors.WHITE }}
              />
            ) : (
              <CustomButton
                label="View Trip"
                IconRight={
                  <AntDesign name="arrowright" size={20} color={Colors.WHITE} />
                }
              />
            )}
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  bannerImg1: {
    width: "100%",
    height: 240,
    objectFit: "cover",
    borderRadius: 15,
  },
  bannerImg2: {
    width: 100,
    height: 150,
    objectFit: "cover",
    borderRadius: 15,
  },
  card: {
    flexDirection: "row",
  },
  cardTextContainer: {
    padding: 10,
    width: "100%",
    flex: 1,
  },
  title: {
    flex: 1,
    fontFamily: "Outfit-Bold",
    fontSize: 17,
    color: Colors.PRIMARY,
    marginVertical: 5,
  },
  subInformation: {
    fontSize: 12,
    color: Colors.PRIMARY,
    fontFamily: "Outfit-Regular",
  },
  groupText1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  groupText2: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 5,
  },
});
