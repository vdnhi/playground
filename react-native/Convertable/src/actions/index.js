import { CHANGE_BASE_VALUE, CURRENCY_REQUEST_LOADING, CURRENCY_REQUEST_SUCCESS, CURRENCY_REQUEST_ERROR } from './type';
import { CHANGE_CATEGORY_ID } from './type';
import { CHANGE_LEFT_COL } from './type';
import { CHANGE_RIGHT_COL } from './type'

export const changeBaseValue = (newValue) => ({
  type: CHANGE_BASE_VALUE,
  payload: newValue
});

export const changeCategoryId = (newValue) => ({
  type: CHANGE_CATEGORY_ID,
  payload: newValue
})

export const changeLeftCol = (newValue) => ({
  type: CHANGE_LEFT_COL,
  payload: newValue
});

export const changeRightCol = (newValue) => ({
  type: CHANGE_RIGHT_COL,
  payload: newValue
}); 

const currencyLoadingAction = () => ({
  type: CURRENCY_REQUEST_LOADING
});

const currencySuccessAction = (data) => ({
  type: CURRENCY_REQUEST_SUCCESS,
  payload: data
});

const currencyErrorAction = (err) => ({
  type: CURRENCY_REQUEST_ERROR,
  payload: err
});

export const currencyRequestAction = () => async dispatch => {
  dispatch(currencyLoadingAction());
  try {
    const result = await fetch('http://www.apilayer.net/api/live?access_key=6c773e97d2f5efa2ae97f97aef7f706b');
    const data = await result.json();
    dispatch(currencySuccessAction(data));
  } catch (err) {
    console.log(err);
    dispatch(currencyErrorAction(err));
  }
}