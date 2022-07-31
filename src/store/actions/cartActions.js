export const INIT_CART = 'INIT_CART';
export const ADD_DISH_TO_CART = 'ADD_DISH_TO_CART';
export const INCREASE = 'INCREASE';
export const GET_TOTAL_PRICE = 'GET_TOTAL_PRICE';
export const REMOVE_DISH_FROM_CART = 'REMOVE_DISH_FROM_CART';
export const SET_PLACING_ORDER = 'SET_PLACING_ORDER';

export const initCart = () => ({type: INIT_CART});
export const addDish = orderedDish => ({type: ADD_DISH_TO_CART, payload: orderedDish});
export const increase = dishTitle => ({type: INCREASE, payload: dishTitle});
export const getTotalPrice = () => ({type: GET_TOTAL_PRICE});
export const removeDishFromCart = dish => ({type: REMOVE_DISH_FROM_CART, payload: dish});
export const setPlacingOrder = isOpen => ({type: SET_PLACING_ORDER, payload: isOpen});



