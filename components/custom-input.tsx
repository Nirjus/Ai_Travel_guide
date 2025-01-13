import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "@/constants/Colors";

interface InputProps extends TextInputProps {
  label: string;
  Icon?: React.ReactElement;
  readonly?: boolean;
  errorText?: string;
}
const CustomInput = ({
  label,
  secureTextEntry,
  Icon,
  errorText,
  readonly = false,
  ...props
}: InputProps) => {
  const [isFocus, setIsFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>{label}</Text>
          <View
            style={[
              styles.inputContainer,
              isFocus && { borderColor: "#5557e9", borderWidth: 2 },
            ]}
          >
            {Icon && <View>{Icon}</View>}
            <TextInput
              readOnly={readonly}
              style={styles.inputStyle}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              secureTextEntry={secureTextEntry && !showPassword}
              {...props}
            />
            {secureTextEntry && (
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <Feather name="eye" size={20} color="gray" />
                ) : (
                  <Feather name="eye-off" size={20} color="gray" />
                )}
              </TouchableOpacity>
            )}
          </View>
          {errorText && <Text style={styles.errorText}>{errorText}</Text>}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputSection: {
    marginBottom: 5,
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.GRAY,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 4,
  },
  inputLabel: {
    fontSize: 17,
    color: Colors.PRIMARY,
    fontFamily: "Outfit-Bold",
    marginTop: 15,
    padding: 10,
  },
  inputStyle: {
    height: 40,
    width: "100%",
    fontFamily: "Outfit-Regular",
    color: Colors.PRIMARY,
    flex: 1,
  },
  errorText: {
    fontFamily: "Outfit-Regular",
    color: Colors.WARNING,
    fontSize: 12,
    padding: 5,
  },
});
