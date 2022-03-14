import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, SafeAreaView, ActivityIndicator } from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import * as ImagePicker from 'expo-image-picker';
import * as Constants from "./utils/Constants";
import ListMarker from "./components/ListMarker";

import {
  getCameraRollPermission,
  getLocationPermission,
} from "./utils/permissionUtils";

export default function App() {
  const [location, setLocation] = useState(null);
  const [listMarker, setListMarker] = useState([]);
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    (async () => {
      getLocationPermission();
      getCameraRollPermission();
      const location = await Location.getCurrentPositionAsync();
      const newLocation = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: Constants.LATITUDE_DELTA,
        longitudeDelta: Constants.LONGITUDE_DELTA,
      };
      setLocation(newLocation);
    })();
  }, []);

  const handleLongPress = (e) => {
    const newListMarker = listMarker.concat({
      coordinate: e.nativeEvent.coordinate,
      image: null,
    });
    setListMarker(newListMarker);
  };

  const pickImage = async (index) => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        let newListMarker = listMarker;
        newListMarker[index].image = result.uri;
        setListMarker(newListMarker);
        forceUpdate();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {location ? (
        <MapView
          style={styles.container}
          region={location}
          onLongPress={handleLongPress}
        >
          <ListMarker listMarker={listMarker} handlePickImage={pickImage} />
        </MapView>
      ) : (
        <ActivityIndicator size="large" />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  }
});
