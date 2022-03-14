import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

export const getCameraRollPermission = async () => {
  if (Constants.platform.ios) {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
  }
};

export const getLocationPermission = async () => {
  const { status } = await Location.requestPermissionsAsync();
  if (status !== "granted") {
    alert("Permission to access location was denied");
  }
};
