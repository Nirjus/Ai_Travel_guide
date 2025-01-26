import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config/firebase-config";
import { useAppContext } from "@/context/tripContext";
import TripLoader from "@/components/AiTripComponents/TripLoader";
import { Card } from "@/components/AiTripComponents/Card";
import { InfoItem } from "@/components/AiTripComponents/InfoItem";
import { useLocalSearchParams } from "expo-router";
import { Image } from "react-native";

const MainTripScreen = () => {
  const { tripId } = useLocalSearchParams();
  const { trip, setTrip } = useAppContext();
  const [loading, setLoading] = useState(false);
  const fetchTripDetails = async (tripId: string) => {
    try {
      setLoading(true);
      const tripRef = doc(db, "UserTrips", tripId);
      const docSnap = await getDoc(tripRef);
      if (docSnap.exists()) {
        const { aiTripDataResponse } = docSnap.data();
        setTrip(aiTripDataResponse);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (tripId) {
      fetchTripDetails(tripId as string);
    }
  }, [tripId]);

  if (loading) {
    return <TripLoader />;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        {/* {trip?.accommodationOptions[0].image ? (
          <Image
            source={{ uri: trip?.accommodationOptions[0].image }}
            style={styles.headerImage}
          />
        ) : ( */}
        <Image
          source={require("@/assets/images/plane-image1.webp")}
          style={styles.headerImage}
        />
        {/* )} */}
        <Card title="Trip Details">
          <InfoItem label="Location" value={trip?.tripDetails?.location.name} />
          <InfoItem
            label="Travel Period"
            value={`${trip?.tripDetails?.travelPeriod.startDate} to ${trip?.tripDetails?.travelPeriod.endDate}`}
          />
          <InfoItem
            label="Duration"
            value={`${trip?.tripDetails?.travelPeriod.durationDays} days`}
          />
          <InfoItem
            label="Travelers"
            value={`${trip?.tripDetails?.travelers.count} ${trip?.tripDetails?.travelers.type}`}
          />
          <InfoItem label="Budget" value={trip?.tripDetails?.budget} />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainTripScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImage: {
    width: "100%",
    height: 250,
  },
});
