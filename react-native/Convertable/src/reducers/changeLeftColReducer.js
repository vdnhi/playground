import { CHANGE_LEFT_COL } from '../actions/type';

export default (state = 0, action) => {
  return action.type === CHANGE_LEFT_COL ? action.payload : state;
}