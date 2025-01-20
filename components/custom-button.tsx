import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import React, { forwardRef, useEffect, useRef } from "react";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "@/constants/Colors";

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  IconLeft?: React.ReactElement;
  IconRight?: React.ReactElement;
  loading?: boolean;
  textStyle?: TextStyle;
}

const CustomButton = forwardRef<any, ButtonProps>(
  (
    { label, IconLeft, IconRight, loading, textStyle, style, ...props },
    ref
  ) => {
    const animatedRef = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      if (loading) {
        Animated.loop(
          Animated.timing(animatedRef, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
            easing: Easing.linear,
          })
        ).start();
      } else {
        animatedRef.stopAnimation();
      }
    }, [loading]);
    const spin = animatedRef.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
    });
    return (
      <TouchableOpacity
        ref={ref}
        activeOpacity={0.5}
        style={[styles.container, loading && { opacity: 0.5 }, style]}
        disabled={loading}
        {...props}
      >
        {/* Left icon */}
        <View>{IconLeft && !loading && IconLeft}</View>
        <View>
          {loading ? (
            <Animated.View style={[{ transform: [{ rotate: spin }] }]}>
              <Feather name="loader" size={20} color={"blue"} />
            </Animated.View>
          ) : (
            <Text style={[styles.label, textStyle]}>{label}</Text>
          )}
        </View>
        {/* Right Icon */}
        <View>{IconRight && !loading && IconRight}</View>
      </TouchableOpacity>
    );
  }
);

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginVertical: 15,
  },
  label: {
    textAlign: "center",
    color: Colors.WHITE,
    fontFamily: "Outfit-Bold",
    fontSize: 15,
  },
});
