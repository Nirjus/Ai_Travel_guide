import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/colors";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  return (
    <ScrollView>
      <Image
        source={require("@/assets/images/plane-image1.webp")}
        style={{
          width: "100%",
          height: 400,
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 28,
            fontFamily: "Outfit-Bold",
            textAlign: "center",
            color: Colors.PRIMARY,
          }}
        >
          AI Travel Planner
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Outfit-Regular",
            fontSize: 17,
            color: "#696969",
          }}
        >
          Discover the best travel destinations with AI. Get personalized travel
          plans based on your preferences and interests.
        </Text>
        <Pressable
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.7 : 1,
            },
            styles.btn,
          ]}
          onPress={() => router.push("/(auth)/signIn")}
        >
          <Text
            style={{
              color: Colors.WHITE,
              fontFamily: "Outfit-medium",
              textAlign: "center",
            }}
          >
            Sign In with Google
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
    gap: 30,
  },
  btn: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
  },
});
