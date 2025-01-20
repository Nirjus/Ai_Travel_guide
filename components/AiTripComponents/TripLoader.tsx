import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";

const TripLoader = () => {
  const animatedRef = useRef<LottieView>(null);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <LottieView
          ref={animatedRef}
          source={require("@/assets/animations/tripLoader.json")}
          autoPlay
          loop
          style={styles.animation}
        />
      </View>
    </SafeAreaView>
  );
};

export default TripLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
});
