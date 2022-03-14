import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function CustomCalloutView({ index, image, handlePickImage }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Marker {index}</Text>
      </View>
      <View>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <TouchableOpacity onPress={() => handlePickImage(index)}>
            <Text>Choose image</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10
  },  
  title: {
    fontWeight: "bold",
  },
  image: {
    height: 60,
    width: 60
  },
});
