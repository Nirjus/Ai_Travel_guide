import { StyleSheet, Text, View } from "react-native";
import Login from "@/components/Login";
export default function Index() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
