import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import StartNewTripCard from "@/components/MyTrip/StartNewTripCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "@/config/firebase-config";
import MainTripInfo from "@/components/AiTripComponents/mainTripInfo";
import { Link } from "expo-router";
import TripLoader from "@/components/AiTripComponents/TripLoader";

export default function TripScreen() {
  const user = auth.currentUser;
  const [userTrips, setUserTrips] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const getMyTrip = async () => {
    try {
      setLoading(true);
      const q = query(
        collection(db, "UserTrips"),
        where("userEmail", "==", user?.email)
      );
      const querySnapShot = await getDocs(q);
      const tripData = [] as any[];
      querySnapShot.forEach((doc) => {
        tripData.push(doc.data());
      });
      setUserTrips(tripData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    user && getMyTrip();
  }, [user]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>My Trips</Text>
          <Link href={"/trip/search-place"} asChild>
            <Ionicons name="add-circle" size={50} color="black" />
          </Link>
        </View>
        <FlatList
          data={userTrips}
          renderItem={({ item }) => (
            <MainTripInfo userTrip={item} key={item.docId} />
          )}
          keyExtractor={(item) => item.docId}
          ListEmptyComponent={
            <>{loading ? <TripLoader /> : <StartNewTripCard />}</>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    // paddingTop: 55,
  },
  headerContainer: {
    paddingHorizontal: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontFamily: "Outfit-Bold",
    fontSize: 30,
    marginBottom: 10,
  },
});
