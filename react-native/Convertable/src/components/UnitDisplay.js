import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

import globalStyles from '../Styles';

class UnitDisplay extends PureComponent {
  state = {
    text : this.props.value.toString()
  }

  _onChange = (text) => {
    this.setState({text});
    this.props.onChange(text);
  }

  _onBlur = () => {
    this.setState({
      text: this.props.value.toString()
    })
  }

  componentWillReceiveProps(nextProps) {
    if (parseFloat(this.state.text) !== nextProps.value){
      this.setState({text: nextProps.value.toString()})
    }
  }

  render() {
    return (
      <View style={[globalStyles.bgPrimary1]}>
        <Text
          style={[globalStyles.textLarge, globalStyles.textNormal, styles.text]}
          >
          {this.props.title}
        </Text>
        <TextInput 
          style={[globalStyles.textLarge, globalStyles.textNormal, styles.text]}
          value={this.state.text}
          onChangeText={this._onChange}
          onBlur={this._onBlur}
          keyboardType="numeric"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text : {
    padding: 10
  }
});

export default UnitDisplay;