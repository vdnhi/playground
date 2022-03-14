import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  View,
  Text,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default class App extends Component {
  _isMounted = false;

  state = {
    feedData: [],
  };

  componentDidMount() {
    this._isMounted = true;
    fetch(`https://picsum.photos/v2/list?limit=20`)
      .then((res) => res.json())
      .then((fetchedImages) => {
        if (this._isMounted) {
          let newFeedData = [];
          fetchedImages.forEach((image, index) => {
            newFeedData.push({
              id: index,
              name: `Image ${index}`,
              image: image.download_url,
              author: image.author,
              likeCount: Math.floor(Math.random() * 100),
            });
          });
          this.setState({
            feedData: newFeedData,
          });
        }
      })
      .catch((error) => console.log(error));
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item, index }) => (
    <View styles={styles.feedItem} key={item.id}>
      <View style={styles.avatarWrapper}>
        <Image
          source={{ uri: item.image }}
          style={styles.avatarImage}
          resiezMode="cover"
        />
        <Text style={styles.posterName}>{item.author}</Text>
      </View>
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: item.image }}
          style={styles.imagePoster}
          resizeMode="cover"
        />
      </View>
      <View style={styles.interactIcons}>
        <Feather
          name="heart"
          size={27}
          color="black"
          onPress={() => alert("Clicked Love")}
          style={styles.reactionButton}
        />
        <Feather
          name="message-square"
          size={27}
          color="black"
          onPress={() => alert("Clicked Comment")}
          style={styles.reactionButton}
        />
        <Feather
          name="share"
          size={27}
          color="black"
          onPress={() => alert("Clicked Share")}
          style={styles.reactionButton}
        />
      </View>
      <View style={styles.likeCountWrapper}>
        <Text style={styles.likeCount}>
          {item.likeCount} likes
        </Text>
      </View>
    </View>
  );

  render() {
    const { feedData } = this.state;
    console.log(feedData);
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Feather name="camera" size={27} color="black" style={{marginLeft: 10}} />
          <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png",
            }}
            style={styles.logoImage}
            resizeMode="contain"
          />
          <Feather
            name="inbox"
            size={27}
            color="black"
            style={{ marginRight: 10 }}
          />
        </View>

        <FlatList
          style={styles.feedList}
          data={feedData}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#f3f6fa",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoImage: {
    flex: 1,
    width: "100%",
    height: 44,
  },
  feedList: {
    width: "100%",
  },
  avatarWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 7,
    marginHorizontal: 12,
  },
  avatarImage: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  feedItem: {},
  posterName: {
    marginLeft: 12,
    fontSize: 15,
    fontWeight: "500",
  },
  imageWrapper: {
    height: 300,
  },
  imagePoster: {
    flex: 1,
    width: null,
    height: null,
  },
  interactIcons: {
    flex: 1,
    flexDirection: "row"
  },
  reactionButton: {
    marginHorizontal: 10,
    marginTop: 15
  },
  likeCountWrapper: {
    flexDirection: "row",
    borderBottomColor: "#e4e3e5",
    borderBottomWidth: 1.5,
    alignItems: "center"
  },
  likeCount: {
    fontWeight: "bold", 
    marginHorizontal: 12,
    marginBottom: 15
  }
});
