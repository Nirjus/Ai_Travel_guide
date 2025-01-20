import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import TripHeader from "@/components/AiTripComponents/TripHeader";
import AccommodationCard from "@/components/AiTripComponents/AccommodationCard";
import FlightCard from "@/components/AiTripComponents/FlightCard";
import WeatherCard from "@/components/AiTripComponents/WeatherCard";
import AttractionCard from "@/components/AiTripComponents/AttractionCard";

const MainTripScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <TripHeader
        location={data.tripDetails.location.name}
        startDate={data.travelPeriod.startDate}
        endDate={data.travelPeriod.endDate}
        duration={data.travelPeriod.duration}
        travelers={data.travelers.count}
        budget={data.tripDetails.budget}
      />
      {data.accommodationOptions.map((option, index) => (
        <AccommodationCard key={index} {...option} />
      ))}
      {data.flights.map((flight, index) => (
        <FlightCard key={index} {...flight} />
      ))}
      <WeatherCard
        location={data.weather.location}
        temperature={data.weather.temperature}
        description={data.weather.description}
      />

      {data.attractions.map((attraction, index) => (
        <AttractionCard key={index} {...attraction} />
      ))}
    </ScrollView>
  );
};

export default MainTripScreen;

const styles = StyleSheet.create({});
