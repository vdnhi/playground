import { combineReducers } from 'redux';

import baseValueReducer from './baseValueReducer';
import categoryReducer from './categoryReducer';
import { navigationReducer } from '../AppNavigation';
import changeLeftColReducer from './changeLeftColReducer';
import changeRightColReducer from './changeRightColReducer';
import categoriesReducer from './categoriesReducer';

export default reducers = combineReducers({
  baseValue: baseValueReducer,
  category: categoryReducer,
  nav: navigationReducer,
  leftCol: changeLeftColReducer,
  rightCol: changeRightColReducer,
  categories: categoriesReducer
})