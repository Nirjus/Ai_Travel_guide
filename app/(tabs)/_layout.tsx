import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";

export default function MainLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarStyle: {
          marginBottom: 10,
          height: 60,
          borderRadius: 30,
          marginHorizontal: 20,
          paddingTop: 5,
        },
      }}
    >
      <Tabs.Screen
        name="travel"
        options={{
          tabBarLabel: "My Trip",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="location" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="destinations"
        options={{
          tabBarLabel: "Destination",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="travel-explore" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
