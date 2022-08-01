import axiosApi from "../../axiosApi";

export const FETCH_DISHES_REQUEST = 'FETCH_DISHES_REQUEST';
export const FETCH_DISHES_SUCCESS = 'FETCH_DISHES_SUCCESS';
export const FETCH_DISHES_FAILURE = 'FETCH_DISHES_FAILURE';

export const fetchDishesRequest = () => ({type: FETCH_DISHES_REQUEST});
export const fetchDishesSuccess = dishes => ({type: FETCH_DISHES_SUCCESS, payload: dishes});
export const fetchDishesFailure = error => ({type: FETCH_DISHES_FAILURE, payload: error});

export const fetchDishes = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchDishesRequest());
      const response = await axiosApi('/dishes.json');

      if (response.data) {
        dispatch(fetchDishesSuccess(response.data));
      }
    } catch (e) {
      dispatch(fetchDishesFailure(e.message));
      throw e.message;
    }
  };
};