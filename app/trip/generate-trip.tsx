import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";

export default function GenerateTrip() {
  const animationRef = useRef<LottieView>(null);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.headerTxt}>Please wait...</Text>
        <Text style={styles.subTxt}>Trip will be generated soon</Text>

        <LottieView
          style={styles.animation}
          ref={animationRef}
          source={require("@/assets/animations/Animation - 1737298921927.json")}
          autoPlay
          loop
        />
      </View>
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
    marginTop: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  subTxt: {
    fontFamily: "Outfit-Regular",
    fontSize: 17,
    marginBottom: 20,
    textAlign: "center",
  },
  animation: {
    width: 500,
    height: 500,
    backgroundColor: "transparent",
  },
});
