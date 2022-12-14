import {
  ADD_DISH_TO_CART,
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_TOTAL_PRICE,
  INCREASE,
  INIT_CART,
  REMOVE_DISH_FROM_CART,
  SET_PLACING_ORDER
} from "../actions/cartActions";
import {DELIVERY} from "../../constants";

const initialState = {
  orderedDishes: [],
  totalPrice: 0,
  placingOrder: false,
  createOrderLoading: false,
  createOrderError: null,
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
          amount: orderedDish.amount + 1,
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
    case REMOVE_DISH_FROM_CART:
      return {
        ...state,
        orderedDishes: state.orderedDishes.filter(orderedDish => orderedDish !== action.payload),
      };
    case SET_PLACING_ORDER:
      return {...state, placingOrder: action.payload};
    case CREATE_ORDER_REQUEST:
      return {...state, createOrderLoading: true, createOrderError: null};
    case CREATE_ORDER_SUCCESS:
      return {...state, createOrderLoading: false, createOrderError: null};
    case CREATE_ORDER_FAILURE:
      return {...state, createOrderLoading: false, createOrderError: action.payload};
    default:
      return state;
  }
};

export default cartReducer;

