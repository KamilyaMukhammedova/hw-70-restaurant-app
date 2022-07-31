import {ADD_DISH_TO_CART, INCREASE, INIT_CART} from "../actions/cartActions";

const initialState = {
  orderedDishes: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_CART:
      return {...initialState};
    case ADD_DISH_TO_CART:
      return {...state, orderedDishes: [...state.orderedDishes, action.payload]};
    case INCREASE:
      const orderedDishesCopy = state.orderedDishes.map(orderedDish => {
        if (orderedDish.title !== action.payload) {
          return orderedDish;
        }
        return {
          ...orderedDish,
          amount: orderedDish.amount + 1
        };
      });
      return {
        ...state,
        orderedDishes: orderedDishesCopy
      };
    default:
      return state;
  }
};

export default cartReducer;

