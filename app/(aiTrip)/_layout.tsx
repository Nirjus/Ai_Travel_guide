import React from "react";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function AiTripLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer initialRouteName="[tripId]">
        <Drawer.Screen
          name="[tripId]"
          options={{
            title: "",
            headerTransparent: true,
            drawerLabel: "Your Trip",
          }}
        />
        <Drawer.Screen
          name="TripDetails"
          options={{
            headerTransparent: true,
            drawerLabel: "Trip Details",
            title: "overview",
          }}
        />
        <Drawer.Screen
          name="Attraction"
          options={{
            headerTransparent: true,
            drawerLabel: "Destinations",
            title: "Destinations",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
