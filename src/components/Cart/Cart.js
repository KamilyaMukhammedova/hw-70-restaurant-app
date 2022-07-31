import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {initCart} from "../../store/actions/cartActions";
import {DELIVERY} from "../../constants";

const Cart = () => {
  const dispatch = useDispatch();
  const orderedDishes = useSelector(state => state.cart.orderedDishes);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  useEffect(() => {
    dispatch(initCart());
  }, [dispatch]);

  return (
    <div className="border p-3">
      {orderedDishes.map(orderedDish => (
        <div className="row justify-content-between" key={orderedDish.title}>
          <p>{orderedDish.title} X{orderedDish.amount}</p>
          <p>{orderedDish.price}</p>
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