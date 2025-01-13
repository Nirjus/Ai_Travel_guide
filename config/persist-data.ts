import AsyncStorage from "@react-native-async-storage/async-storage";
export const persistUserData = async (userData: any) => {
  await AsyncStorage.setItem("user", JSON.stringify(userData));
};
