import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
  FlatList,
} from "react-native";
import ImageList from "./components/ImageList/ImageList";
import PersonalInformation from "./components/PersonalInformations/PersonalInformation";
import StatisticInformation from "./components/StatisticInformation/StatisticInformation";

export default function App() {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?limit=20")
      .then((res) => res.json())
      .then((fetchedImages) => setImageData(fetchedImages))
      .catch((error) => console.log(error));
  }, []);

  const renderImageItem = ({ item, index }) => (
    <ImageList image={item} index={index} />
  );

  const renderPersonalInformation = () => {
    return (
      <View>
        <PersonalInformation />
        <StatisticInformation />
      </View>
    );
  };

  const renderBottomUtilities = () => {
    return <View></View>;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{ width: 200, height: 20, backgroundColor: "black", flex: 1 }}
      ></View>
      <View style={{ flex: 18 }}>
        <FlatList
          data={imageData}
          renderItem={renderImageItem}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={renderPersonalInformation}
          numColumns={2}
          columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
          ListFooterComponent={renderBottomUtilities}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>

      <View
        style={{ backgroundColor: "black", width: 200, height: 20, flex: 1 }}
      ></View>
    </SafeAreaView>
  );
}
