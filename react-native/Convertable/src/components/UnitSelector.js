import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

import globalStyles from '../Styles';

class UnitSelector extends PureComponent {
  state = {  }

  _onPress = () => {
    this.props.onChangeUnitId(this.props.item.id);
  }

  render() {
    return (
      <TouchableOpacity 
        onPress={this._onPress}
        style={[
          styles.button, 
          (this.props.isEven 
            ? globalStyles.bgPrimary2 
            : globalStyles.bgPrimary3)
          ]}>

        <Text style={[
          this.props.isSelected 
          ? globalStyles.textHighlight 
          : globalStyles.textNormal
          ]}>
          {this.props.item.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button : {
    padding: 10
  }
});

export default UnitSelector;