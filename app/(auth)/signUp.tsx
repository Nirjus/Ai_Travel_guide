import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  ToastAndroid,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "@/constants/Colors";
import CustomInput from "@/components/custom-input";
import CustomButton from "@/components/custom-button";
import { useRouter } from "expo-router";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "@/utils/formValidation";
import { useFormField } from "@/utils/formHook";
import { auth } from "@/config/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    fullName: "",
    password: "",
  });
  const { values, errors, handleInputChange } = useFormField(userData, {
    fullName: validateName,
    email: validateEmail,
    password: validatePassword,
  });
  const handleCreateuser = async () => {
    if (errors.fullName || errors.email || errors.password) return;
    if (!values.fullName || !values.email || !values.password) return;
    setLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      router.replace("/(auth)/signIn");
    } catch (error: any) {
      console.log("[ERROR in creating user]", error.message);
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>Create New Account</Text>
        <Text style={styles.welcomeTxt}>Register here</Text>
        <CustomInput
          label="Name"
          placeholder="Enter Name"
          Icon={<AntDesign name="user" size={24} color="gray" />}
          errorText={errors.fullName}
          value={values.fullName}
          onChangeText={(text) => handleInputChange("fullName", text)}
        />
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
          label="Create Account"
          style={{ marginTop: 30 }}
          onPress={handleCreateuser}
          loading={loading}
        />
        <CustomButton
          label="Sign In"
          style={{
            marginTop: 10,
            backgroundColor: "#f0f0f0",
            borderWidth: 1,
          }}
          textStyle={{ color: Colors.PRIMARY }}
          IconLeft={<Feather name="arrow-left" size={18} color="black" />}
          onPress={() => router.push("/(auth)/signIn")}
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
