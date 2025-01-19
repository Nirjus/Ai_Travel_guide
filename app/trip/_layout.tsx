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
    </Stack>
  );
}
