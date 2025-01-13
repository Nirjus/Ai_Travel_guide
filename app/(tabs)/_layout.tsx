import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

export default function MainLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="travel" />
      <Tabs.Screen name="destinations" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
