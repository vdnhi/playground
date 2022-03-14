import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function ImageList({ image, index }) {
  return (
    <Image source={{ uri: image.download_url }} style={styles.imageStyle} />
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: windowWidth / 2 - 20,
    height: windowWidth / 2 - 20,
    borderRadius: 10,
    marginVertical: 10,
  },
});
