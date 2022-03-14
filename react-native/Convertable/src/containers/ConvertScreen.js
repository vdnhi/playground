import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import globalStyles from '../Styles';

import ConvertColumn from '../components/ConvertColumn';

import { categories } from '../database.json';
import { connect } from 'react-redux';

class ConvertScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params ? navigation.state.params.title : "Nothing",
    headerRight: (
      <Button
        title="Categories"
        onPress={() => navigation.navigate("CategoryScreen")}
      />
    )
  });

  componentDidMount() {
    this.props.navigation.setParams({
      title: this.props.category.name
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.category.name !== this.props.category.name) {
      this.props.navigation.setParams({
        title: nextProps.category.name
      });
    }
  }

  state = {}

  render() {
    return (
      <View style={[globalStyles.bgPrimary3, globalStyles.container, styles.appContainer]}>
        <ConvertColumn
          items={this.props.category.items}
          columnID="1"
        />
        <ConvertColumn
          items={this.props.category.items}
          columnID="2"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flexDirection: "row"
  }
});

const mapAppStateToProps = state => {
  return ({
    category: state.categories[state.category]
  })
}

export default connect(mapAppStateToProps)(ConvertScreen);