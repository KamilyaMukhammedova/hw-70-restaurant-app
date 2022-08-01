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
      {
        orderedDishes.length === 0 ?
          <p className="border p-3">Cart is empty</p>
          :
          <>
            <Modal
              show={placingOrder}
              closed={() => onClosePlacingOrder()}
            >
              <OrderForm/>
            </Modal>
            <div className="border p-3">
              {orderedDishes.map(orderedDish => (
                <div
                  className="row justify-content-between mb-3 align-items-start pr-3 pl-3"
                  key={orderedDish.title}
                >
                  <p className="col-3">{orderedDish.title}</p>
                  <p>x{orderedDish.amount}</p>
                  <p>{orderedDish.price}</p>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => removeDish(orderedDish)}
                  >
                    <i className="bi bi-basket"/>
                  </button>
                </div>
              ))}
              <p style={{height: '2px', backgroundColor: '#cccccc'}}/>
              <div className="row justify-content-between pr-3 pl-3">
                <p>Delivery</p>
                <p>{DELIVERY}</p>
              </div>
              <div className="row justify-content-between pr-3 pl-3">
                <p><strong>Total</strong></p>
                <p>{totalPrice}</p>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-outline-info"
                  onClick={() => onOpenPlacingOrder()}
                >
                  Place order
                </button>
              </div>
            </div>
          </>
      }
    </>
  );
};

export default Cart;