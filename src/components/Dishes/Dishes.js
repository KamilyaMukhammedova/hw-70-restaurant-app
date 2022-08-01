import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchDishes} from "../../store/actions/ dishesActions";
import {addDish, getTotalPrice, increase} from "../../store/actions/cartActions";

const Dishes = () => {
  const dispatch = useDispatch();
  const dishes = useSelector(state => state.dishes.dishes);
  const loading = useSelector(state => state.dishes.loading);
  const orderedDishes = useSelector(state => state.cart.orderedDishes);

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  const addDishToCart = (dish) => {
    const dishToCart = {
      title: dish.title,
      price: dish.price,
      amount: 1
    };

    if (orderedDishes.some(orderedDish => dish.title === orderedDish.title)) {
      dispatch(increase(dish.title));
      dispatch(getTotalPrice());
    } else {
      dispatch(addDish(dishToCart));
      dispatch(getTotalPrice());
    }
  };

  return (
    <>
      {
        (loading && dishes === null) &&
        <div className="spinner-border text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      }
      {
        (dishes && !loading) &&
        <div className="border p-5">
          {Object.keys(dishes).map(dish => (
            <div
              className="p-3 row mb-3 justify-content-between align-items-center"
              key={dish}
              style={{backgroundColor: '#303434'}}
            >
              <div>
                <img
                  src={dishes[dish].image}
                  alt={dishes[dish].title}
                  style={{width: '100px', height: '70px'}}
                />
              </div>
              <div className="column col-5">
                <div>{dishes[dish].title}</div>
                <div><strong>KGS {dishes[dish].price}</strong></div>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-outline-light"
                  onClick={() => addDishToCart(dishes[dish])}
                >
                  <i className="bi bi-cart4 mr-1"/>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      }
    </>
  );
};

export default Dishes;