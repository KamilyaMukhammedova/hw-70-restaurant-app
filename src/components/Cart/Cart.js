import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTotalPrice, initCart, removeDishFromCart, setPlacingOrder} from "../../store/actions/cartActions";
import {DELIVERY} from "../../constants";
import Modal from "../ui/Modal/Modal";
import OrderForm from "../ui/OrderForm/OrderForm";

const Cart = () => {
  const dispatch = useDispatch();
  const orderedDishes = useSelector(state => state.cart.orderedDishes);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const placingOrder = useSelector(state => state.cart.placingOrder);

  useEffect(() => {
    dispatch(initCart());
  }, [dispatch]);

  const removeDish = (dish) => {
    dispatch(removeDishFromCart(dish));
    dispatch(getTotalPrice());
  };

  const onOpenPlacingOrder = () => {
    dispatch(setPlacingOrder(true));
  };

  const onClosePlacingOrder = () => {
    dispatch(setPlacingOrder(false));
  };

  return (
    <>
      <Modal
        show={placingOrder}
        closed={() => onClosePlacingOrder()}
      >
        <OrderForm/>
      </Modal>
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
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onOpenPlacingOrder()}
        >
          Place order
        </button>
      </div>
    </>
  );
};

export default Cart;