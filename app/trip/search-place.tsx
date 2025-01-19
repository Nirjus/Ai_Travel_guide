import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import CustomInput from "@/components/custom-input";
import { useAppContext } from "@/context/tripContext";
const SearchPlace = () => {
  const [query, setQuery] = useState("");
  const [places, setPlaces] = useState<any[]>([]);
  const [placeSelected, setPlaceSelected] = useState(false);
  const router = useRouter();
  const { setState } = useAppContext();
  const getPlacesData = async (searchText: string) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${searchText}`
      );
      if (response.ok) {
        const data = await response.json();
        setPlaces(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onChangeText = (text: string) => {
    setQuery(text);
    if (text.length > 1) {
      getPlacesData(text);
    } else {
      setPlaces([]);
    }
  };

  const onPressSelectLocation = (placeItem: any) => {
    setQuery(placeItem.display_name);
    setState({
      locationInfo: placeItem,
    });
    setPlaceSelected(true);
    setPlaces([]);
    router.push("/trip/select-Traveler");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <CustomInput
          label="Search for a place"
          placeholder="Enter your destination"
          Icon={<Ionicons name="search" size={24} color="gray" />}
          onChangeText={onChangeText}
          value={query}
        />
        <View style={styles.btnGroup}>
          {query.length > 0 && (
            <TouchableOpacity
              style={styles.removeBtn}
              activeOpacity={0.5}
              onPress={() => {
                setQuery("");
                setPlaceSelected(false);
              }}
            >
              <Text style={styles.removeText}>Remove</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={styles.removeBtn}
            activeOpacity={0.5}
            onPress={() => router.push("/trip/select-Traveler")}
            disabled={!placeSelected}
          >
            <Text style={styles.removeText}>Next</Text>
            <AntDesign name="arrowright" size={15} color={Colors.GRAY} />
          </TouchableOpacity>
        </View>
        {places && places.length > 0 && (
          <FlatList
            data={places}
            renderItem={({ item, index }) => (
              <Pressable
                key={index}
                onPress={() => onPressSelectLocation(item)}
                style={styles.suggestedItem}
              >
                <Text style={styles.suggestedText}>{item.display_name}</Text>
              </Pressable>
            )}
            keyExtractor={(item) => item.place_id}
            style={{
              marginTop: 10,
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchPlace;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 50,
  },
  inputStyle: {
    height: 50,
    marginTop: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.GRAY,
  },
  suggestedItem: {
    padding: 10,
    backgroundColor: "#efefef",
    borderBottomWidth: 1,
    borderBottomColor: "#dadada",
    marginBottom: 5,
    borderRadius: 5,
  },
  suggestedText: {
    fontFamily: "Outfit-Medium",
    flex: 1,
  },
  btnGroup: {
    flexDirection: "row",
    marginVertical: 5,
    gap: 10,
  },
  removeBtn: {
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    backgroundColor: "#dadada",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  removeText: {
    fontFamily: "Outfit-Regular",
    color: Colors.PRIMARY,
  },
});
