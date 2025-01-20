import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect } from "expo-router";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/config/firebase-config";
import { useAppContext } from "@/context/tripContext";
import { chatSession } from "@/config/gen-ai-model";
import TripLoader from "@/components/MyTrip/trip-loader";
import { ai_prompts } from "@/constants/AI-Prompts";

export default function GenerateTrip() {
  const user = auth.currentUser;
  const { state } = useAppContext();
  const [loading, setLoading] = useState(false);

  const generateAiTrip = async () => {
    const {
      locationInfo,
      totalDays,
      budget,
      startDate,
      endDate,
      travelerCount,
    } = state;
    try {
      const final_prompts = ai_prompts(
        locationInfo?.display_name,
        locationInfo?.lat, // Latitude
        locationInfo?.lon, // Longitude
        startDate,
        endDate,
        totalDays,
        budget?.title,
        budget?.desc,
        travelerCount?.people
      );
      setLoading(true);
      const result = await chatSession.sendMessage(final_prompts);
      // console.log(result.response.text());
      const jsonResponse = JSON.parse(result.response.text());
      const docId = Date.now().toString();
      const location = {
        display_name: locationInfo?.display_name,
        lat: locationInfo?.lat,
        lon: locationInfo?.lon,
      };
      await setDoc(doc(db, "UserTrips", docId), {
        docId: docId,
        userEmail: user?.email,
        aiTripDataResponse: jsonResponse,
        locationInfo: location,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    generateAiTrip();
  }, [state]);

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TripLoader />
      </SafeAreaView>
    );
  }

  return <Redirect href={"/(tabs)/travel"} />;
}
