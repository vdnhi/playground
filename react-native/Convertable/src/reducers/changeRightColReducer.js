import { CHANGE_RIGHT_COL } from "../actions/type";

export default (state = 0, action) => {
  return action.type === CHANGE_RIGHT_COL ? action.payload : state;
}