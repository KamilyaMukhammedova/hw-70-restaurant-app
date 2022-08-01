import axiosApi from "../../axiosApi";

export const INIT_CART = 'INIT_CART';
export const ADD_DISH_TO_CART = 'ADD_DISH_TO_CART';
export const INCREASE = 'INCREASE';
export const GET_TOTAL_PRICE = 'GET_TOTAL_PRICE';
export const REMOVE_DISH_FROM_CART = 'REMOVE_DISH_FROM_CART';
export const SET_PLACING_ORDER = 'SET_PLACING_ORDER';
export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const CREATE_ORDER_FAILURE = 'CREATE_ORDER_FAILURE';

export const initCart = () => ({type: INIT_CART});
export const addDish = orderedDish => ({type: ADD_DISH_TO_CART, payload: orderedDish});
export const increase = dishTitle => ({type: INCREASE, payload: dishTitle});
export const getTotalPrice = () => ({type: GET_TOTAL_PRICE});
export const removeDishFromCart = dish => ({type: REMOVE_DISH_FROM_CART, payload: dish});
export const setPlacingOrder = isOpen => ({type: SET_PLACING_ORDER, payload: isOpen});
export const createOrderRequest = () => ({type: CREATE_ORDER_REQUEST});
export const createOrderSuccess = () => ({type: CREATE_ORDER_SUCCESS});
export const createOrderFailure = error => ({type: CREATE_ORDER_FAILURE, payload: error});

export const createOrder = (orderData) => {
  return async (dispatch) => {
    try {
      dispatch(createOrderRequest());
      await axiosApi.post('/orders.json', orderData);
      dispatch(createOrderSuccess());
    } catch (e) {
      dispatch(createOrderFailure(e.message));
      throw e.message;
    }
  };
};



