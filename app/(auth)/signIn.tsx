import React, { useState } from "react";
import { Text, StyleSheet, ScrollView, ToastAndroid } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "@/constants/Colors";
import CustomInput from "@/components/custom-input";
import CustomButton from "@/components/custom-button";
import { useRouter } from "expo-router";
import { useFormField } from "@/utils/formHook";
import { validateEmail, validatePassword } from "@/utils/formValidation";
import { persistUserData } from "@/config/persist-data";

export default function SignIn() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { values, errors, handleInputChange } = useFormField(userData, {
    email: validateEmail,
    password: validatePassword,
  });
  const handleSignIn = () => {
    if (errors.email || errors.password) return;
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>Let's Sign You In</Text>
        <Text style={styles.welcomeTxt}>Welcome Back</Text>
        <CustomInput
          keyboardType="email-address"
          label="Email"
          placeholder="Enter Email"
          Icon={<AntDesign name="mail" size={24} color="gray" />}
          errorText={errors.email}
          value={values.email}
          onChangeText={(text) => handleInputChange("email", text)}
        />
        <CustomInput
          label="Password"
          placeholder="Enter Password"
          secureTextEntry={true}
          Icon={<Feather name="lock" size={24} color="gray" />}
          errorText={errors.password}
          value={values.password}
          onChangeText={(text) => handleInputChange("password", text)}
        />
        <CustomButton
          label="Sign In"
          style={{ marginTop: 30 }}
          onPress={handleSignIn}
        />
        <CustomButton
          label="Create account"
          style={{
            marginTop: 20,
            backgroundColor: "#f0f0f0",
            borderWidth: 1,
          }}
          textStyle={{ color: Colors.PRIMARY }}
          IconRight={<AntDesign name="arrowright" size={18} color="black" />}
          onPress={() => router.push("/(auth)/signUp")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  container: {
    flex: 1,
    padding: 25,
  },
  headerText: {
    fontFamily: "Outfit-Bold",
    fontSize: 30,
    color: Colors.PRIMARY,
  },
  welcomeTxt: {
    color: Colors.GRAY,
    fontSize: 20,
    fontFamily: "Outfit-medium",
    marginTop: 10,
  },
});
