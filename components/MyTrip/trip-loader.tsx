import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import { Colors } from "@/constants/Colors";

const TripLoader = () => {
  const animation = useRef<LottieView>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>Please wait...</Text>
      <Text style={styles.subTxt}>Trip will be generated soon</Text>
      <View style={{ marginVertical: 20 }}>
        <LottieView
          ref={animation}
          style={styles.animation}
          source={require("@/assets/animations/planAnimation.json")}
          autoPlay
          loop
        />
      </View>
      <Text style={[styles.subTxt, { color: Colors.GRAY }]}>
        Do not go back. or else you lost your progress!
      </Text>
    </View>
  );
};

export default TripLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTxt: {
    fontFamily: "Outfit-Bold",
    fontSize: 30,
    marginTop: 20,
    textAlign: "center",
    color: Colors.PRIMARY,
    marginBottom: 20,
  },
  subTxt: {
    fontFamily: "Outfit-Regular",
    fontSize: 17,
    marginBottom: 20,
    color: Colors.PRIMARY,
    textAlign: "center",
  },
  animation: {
    width: 250,
    height: 250,
    alignSelf: "center",
  },
});
