import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function Login() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Image
        source={require("@/assets/images/plane-image1.webp")}
        style={{
          width: "100%",
          height: 450,
        }}
      />
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>AI Travel Planner</Text>
          <Text style={styles.description}>
            Discover the best travel destinations with AI. Get personalized
            travel plans based on your preferences and interests.
          </Text>
        </View>
        <Pressable
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.7 : 1,
            },
            styles.btn,
          ]}
          onPress={() => router.push("/(auth)/signIn")}
        >
          <Text style={styles.btnText}>Sign In with Google</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1, // Ensures it takes up the full height
    justifyContent: "space-between", // Places items at the top and bottom
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
    marginTop: -20,
  },
  title: {
    fontSize: 28,
    fontFamily: "Outfit-Bold",
    textAlign: "center",
    color: Colors.PRIMARY,
    marginBottom: 15,
    marginTop: 10,
  },
  description: {
    textAlign: "center",
    fontFamily: "Outfit-Regular",
    fontSize: 17,
    color: "#696969",
    marginBottom: 20,
  },
  btn: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
  },
  btnText: {
    color: Colors.WHITE,
    fontFamily: "Outfit-Medium",
    textAlign: "center",
  },
});
