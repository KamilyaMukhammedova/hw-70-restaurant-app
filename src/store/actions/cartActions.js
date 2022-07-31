export const INIT_CART = 'INIT_CART';
export const ADD_DISH_TO_CART = 'ADD_DISH_TO_CART';
export const INCREASE = 'INCREASE';

export const initCart = () => ({type: INIT_CART});
export const addDish = orderedDish => ({type: ADD_DISH_TO_CART, payload: orderedDish});
export const increase = dishTitle => ({type: INCREASE, payload: dishTitle});



