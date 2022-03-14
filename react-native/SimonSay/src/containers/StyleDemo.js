import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  Dimensions
} from 'react-native';

class StyleDemo extends Component {
  state = {}
  render() {
    const {width, height} = Dimensions.get("window");
    return (
      <View style={{ 
        flex: 1
      }}>
        <View style={[styles.container, { flex: 0.5 }]}>
          <Text>Hello!</Text>
        </View>
        <View style={{
          flex : 0.25,
          backgroundColor: "blue"
        }}>
          <Text>Hello!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    paddingTop: Platform.OS === "ios" ? 20 : 0
  }
});

export default StyleDemo;