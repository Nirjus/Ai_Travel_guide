import React from "react";
import { Stack } from "expo-router";

export default function TripLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="search-place"
        options={{
          headerTransparent: true,
          headerTitle: "Search",
        }}
      />
      <Stack.Screen
        name="select-Traveler"
        options={{
          headerTransparent: true,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="select-dates"
        options={{
          headerTransparent: true,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="select-budget"
        options={{
          headerTransparent: true,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="review-trip"
        options={{
          headerTransparent: true,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="generate-trip"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
