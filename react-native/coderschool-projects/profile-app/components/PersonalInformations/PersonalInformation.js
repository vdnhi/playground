import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function PersonalInformation() {
  return (
    <View style={styles.containter}>
      <Image
        source={{ uri: `https://picsum.photos/200` }}
        style={styles.avatarImage}
      />
      <View style={styles.personalInfo}>
        <Text style={styles.name}>Vu Duc Nhi</Text>
        <Text style={styles.description}>Student at Coderschool</Text>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.followButton}
            onPress={() => alert("Followed")}
          >
            <Text style={styles.followText}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.directMessageButton}
            onPress={() => alert("Message Sended")}
          >
            <Entypo name="direction" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containter: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 70,
    marginVertical: 20,
  },
  avatarImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 20,
  },
  followButton: {
    width: 80,
    height: 25,
    borderRadius: 20,
    backgroundColor: "rgb(71, 113, 246)",
    alignItems: "center",
    justifyContent: "center",
  },
  personalInfo: {
    flex: 1,
    justifyContent: "space-between",
  },
  name: {
    color: "rgb(50, 60, 87)",
    fontSize: 20,
  },
  description: {
    color: "rgb(129, 129, 129)",
    marginBottom: 10,
  },
  buttonWrapper: {
    flexDirection: "row",
    width: 140,
    justifyContent: "space-between",
  },
  directMessageButton: {
    width: 50,
    height: 25,
    backgroundColor: "rgb(120, 213, 250)",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  followText: {
    color: "white",
    fontWeight: "bold",
  },
});
