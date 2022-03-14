import {categories} from '../database.json';
import { CHANGE_BASE_VALUE } from '../actions/type';
import { AsyncStorage } from 'react-native';

export default (state = 0, action) => {
  return action.type === CHANGE_BASE_VALUE
          ? action.payload
          : state;
}

