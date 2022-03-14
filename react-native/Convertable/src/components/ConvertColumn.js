import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { connect } from 'react-redux';

import { changeBaseValue, changeLeftCol, changeRightCol } from '../actions/';

import globalStyles from '../Styles';

import UnitDisplay from './UnitDisplay';
import UnitList from './UnitList';

const Big = require('big.js');

class ConvertColumn extends PureComponent {
  state = {}

  _onChangeUnitId = (id) => {
    this.props.columnID === "1" ? this.props.changeLeftCol(id) : this.props.changeRightCol(id);
  }

  _onChangeText = (text) => {
    const currentUnitId = this.props.columnID === "1" ? this.props.leftCol : this.props.rightCol;
    const currentItem = this.props.items.filter(
      item => item.id === currentUnitId
    )[0];
    const ratiMul = new Big(currentItem.ratio);
    const updateValue = ratiMul.times(Big(parseFloat(text || 0)));
    this.props.changeBaseValue(
      Number(updateValue.toFixed())
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.category !== this.props.category) {
      this.setState({
        leftCol: 0,
        rightCol: 0
      });
    }
  }

  render() {
    const currentUnitId = this.props.columnID === "1" ? this.props.leftCol : this.props.rightCol;
    const currentItem = this.props.items.filter(
      item => item.id === currentUnitId
    )[0]; 
    
    return (
      <View style={[styles.column]}>
        <UnitDisplay
          title={currentItem.title}
          value={this.props.baseValue/currentItem.ratio}
          onChange={this._onChangeText}
        />
        <UnitList 
          items={this.props.items} 
          selectedId={this.state.currentUnitId}
          onChangeUnitId={this._onChangeUnitId}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  column : {
    flex: 1
  }
});

const mapAppStateToProps = state => ({
  baseValue: state.baseValue,
  leftCol: state.leftCol,
  rightCol: state.rightCol,
  category: state.category
});

const mapDispatchToProps = dispatch => ({
  changeBaseValue: newValue => dispatch(changeBaseValue(newValue)),
  changeLeftCol: newValue => dispatch(changeLeftCol(newValue)),
  changeRightCol: newValue => dispatch(changeRightCol(newValue))
});

export default connect(mapAppStateToProps, mapDispatchToProps)(ConvertColumn);