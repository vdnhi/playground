import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
} from 'react-native';

import UnitSelector from './UnitSelector';

class UnitList extends PureComponent {
  state = {
    
  }

  _keyExtractor = (item,index) => item.id;

  _renderItem = ({item,index}) => (<UnitSelector 
    onChangeUnitId={this.props.onChangeUnitId} 
    item={item} 
    isEven={index % 2 === 0} 
    isSelected={item.id === this.props.selectedId}
    />)

  render() {
    return (
      <FlatList
        style={{flex: 1}}
        data={this.props.items}
        keyExtractor={this._keyExtractor} 
        renderItem={this._renderItem}
        />
    );
  }
}

export default UnitList;