import {ADD_DISH_TO_CART, GET_TOTAL_PRICE, INCREASE, INIT_CART} from "../actions/cartActions";
import {DELIVERY} from "../../constants";

const initialState = {
  orderedDishes: [],
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_CART:
      return {...initialState};
    case ADD_DISH_TO_CART:
      return {
        ...state,
        orderedDishes: [...state.orderedDishes, action.payload],
      };
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
        orderedDishes: orderedDishesCopy,
      };
    case GET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice:
          state.orderedDishes.reduce((acc, orderedDish) => acc + (orderedDish.price * orderedDish.amount), 0) + DELIVERY,
      };
    default:
      return state;
  }
};

export default cartReducer;

