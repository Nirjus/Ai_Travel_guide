import { StyleSheet, Text, ToastAndroid, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CalendarPicker from "react-native-calendar-picker";
import { useRouter } from "expo-router";
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
    setState({ ...state, startDate, endDate, totalDays });
    router.push("/trip/select-budget");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.hederTxt}>Select Dates</Text>
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
    marginVertical: 10,
  },
});
