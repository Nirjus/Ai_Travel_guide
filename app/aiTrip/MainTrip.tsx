import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config/firebase-config";
import { useAppContext } from "@/context/tripContext";
import TripHeader from "@/components/AiTripComponents/TripHeader";
import AccommodationCard from "@/components/AiTripComponents/AccommodationCard";
import FlightCard from "@/components/AiTripComponents/FlightCard";
import WeatherCard from "@/components/AiTripComponents/WeatherCard";
import AttractionCard from "@/components/AiTripComponents/AttractionCard";
import TripLoader from "@/components/AiTripComponents/TripLoader";

const MainTripScreen = () => {
  const { trip, setTrip } = useAppContext();
  const [loading, setLoading] = useState(false);
  const tripId = "1737354521157";
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
      fetchTripDetails(tripId);
    }
  }, [tripId]);

  if (loading) {
    return <TripLoader />;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <TripHeader
          location={trip?.tripDetails?.location?.name}
          startDate={trip?.travelPeriod?.startDate}
          endDate={trip?.travelPeriod?.endDate}
          duration={trip?.travelPeriod?.duration}
          travelers={trip?.travelers?.count}
          budget={trip?.tripDetails?.budget}
        />
        {/* {trip?.accommodationOptions.map((option: any, index: number) => (
          <AccommodationCard key={index} {...option} />
        ))} */}

        {/* {trip?.flights.map((flight: any, index: number) => (
          <FlightCard key={index} {...flight} />
        ))} */}
        {/* <WeatherCard
          location={trip.weather.location}
          temperature={trip.weather.temperature}
          description={trip.weather.description}
        /> */}
        {/* {trip.attractions.map((attraction: any, index: number) => (
          <AttractionCard key={index} {...attraction} />
        ))} */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainTripScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
});
