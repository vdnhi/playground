import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
} from 'react-native';

import globalStyles from '../Styles';
import { categories } from '../database.json';
import UnitSelector from '../components/UnitSelector';
import { connect } from 'react-redux';
import { changeCategoryId } from '../actions/';

class CategoryScreen extends PureComponent {
  static navigationOptions = ({navigation}) => ({
    title: "Category Screen",
  })
  state = {  }
  _onChangeCategoryId  = id => {
    this.props.changeCategoryId(id);
    this.props.navigation.goBack();
  }

  _keyExtractor = item => item.id;

  _renderItem = ({item, index}) => (<UnitSelector
    onChangeUnitId={this._onChangeCategoryId} 
    item={{title: item.name, id: item.id}}
    isEven={index % 2 === 0}
    isSelected={item.id === this.props.category}
    />)
  render() {
    return (
      <FlatList
        style={[globalStyles.bgPrimary3, {flex: 1}]}
        data={this.props.categories}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}

const mapAppStateToProps = state => ({
  category: state.category,
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  changeCategoryId: newValue => dispatch(changeCategoryId(newValue))
});

export default connect(mapAppStateToProps, mapDispatchToProps)(CategoryScreen);