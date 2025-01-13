import { View, StyleSheet } from "react-native";
import React from "react";
import Login from "@/components/Login";

export default function GetStarted() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
