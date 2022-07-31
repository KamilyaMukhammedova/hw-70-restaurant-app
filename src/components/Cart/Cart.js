import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTotalPrice, initCart, removeDishFromCart} from "../../store/actions/cartActions";
import {DELIVERY} from "../../constants";

const Cart = () => {
  const dispatch = useDispatch();
  const orderedDishes = useSelector(state => state.cart.orderedDishes);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  useEffect(() => {
    dispatch(initCart());
  }, [dispatch]);

  const removeDish = (dish) => {
    dispatch(removeDishFromCart(dish));
    dispatch(getTotalPrice());
  };

  return (
    <div className="border p-3">
      {orderedDishes.map(orderedDish => (
        <div className="row justify-content-between mb-3 align-items-center" key={orderedDish.title}>
          <p className="col-4">{orderedDish.title}</p>
          <p>x{orderedDish.amount}</p>
          <p>{orderedDish.price}</p>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => removeDish(orderedDish)}
          >
            Remove
          </button>
        </div>
      ))}
      <div>--------------</div>
      <div className="row justify-content-between">
        <p>Delivery</p>
        <p>{DELIVERY}</p>
      </div>
      <div className="row justify-content-between">
        <p><strong>Total</strong></p>
        <p>{totalPrice}</p>
      </div>
      <button type="button" className="btn btn-primary">Place order</button>
    </div>
  );
};

export default Cart;