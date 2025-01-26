import { StyleSheet, Text, ToastAndroid, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CalendarPicker from "react-native-calendar-picker";
import { useRouter } from "expo-router";
import moment from "moment";
import { Colors } from "@/constants/Colors";
import CustomButton from "@/components/custom-button";
import { useAppContext } from "@/context/tripContext";

const SelectDates = () => {
  const { state, setState } = useAppContext();
  const router = useRouter();
  const [picdate, setPicdate] = useState<{
    startDate: Date | null;
    endDate: Date | null;
  }>({
    startDate: null,
    endDate: null,
  });
  const onDateChange = (date: any, type: string) => {
    const parsedDate = new Date(date);
    if (type === "START_DATE") {
      setPicdate((prev) => ({ ...prev, startDate: parsedDate }));
    }
    if (type === "END_DATE") {
      setPicdate((prev) => ({ ...prev, endDate: parsedDate }));
    }
  };

  const handleNext = () => {
    const { startDate, endDate } = picdate;
    if (startDate === null || endDate === null) {
      ToastAndroid.showWithGravity(
        "Please select start date and end date.",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      );
      return;
    }
    const totalNumberOfDays = endDate.getTime() - startDate.getTime();
    if (totalNumberOfDays < 0) {
      ToastAndroid.showWithGravity(
        "End date cannot be before start date.",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      );
      return;
    }
    const totalDays = totalNumberOfDays / 1000 / 60 / 60 / 24 + 1;
    setState({
      ...state,
      startDate: moment(startDate).format("DD MMM YYYY"),
      endDate: moment(endDate).format("DD MMM YYYY"),
      totalDays,
    });
    router.push("/(trip)/select-budget");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.hederTxt}>Select Dates</Text>
        <Text style={styles.subText}>Best Time to go</Text>
        <View style={{ marginTop: 20, flex: 1 }}>
          <CalendarPicker
            onDateChange={onDateChange}
            allowRangeSelection
            minDate={new Date()}
            maxRangeDuration={10}
            selectedRangeStyle={{
              backgroundColor: Colors.PRIMARY,
            }}
            selectedDayTextStyle={{
              color: Colors.WHITE,
            }}
          />
        </View>

        <CustomButton
          label="Continue"
          style={{ marginTop: 20 }}
          onPress={handleNext}
          disabled={picdate.startDate === null || picdate.endDate === null}
        />
      </View>
    </SafeAreaView>
  );
};

export default SelectDates;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  hederTxt: {
    fontFamily: "Outfit-Bold",
    fontSize: 30,
    marginTop: 10,
    marginBottom: 5,
    color: Colors.PRIMARY,
  },
  subText: {
    fontFamily: "Outfit-Regular",
    fontSize: 17,
    marginBottom: 10,
    color: Colors.GRAY,
  },
});
