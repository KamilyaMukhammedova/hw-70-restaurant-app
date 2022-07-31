import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {initCart} from "../../store/actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();
  const orderedDishes = useSelector(state => state.cart.orderedDishes);

  useEffect(() => {
    dispatch(initCart());
  }, [dispatch]);

  return (
    // <div className="border p-3">
    //   {orderedDishes.map(orderedDish => (
    //     <div className="row justify-content-between">
    //       <p>{orderedDish.title} X{orderedDish.amount}</p>
    //       <p>{orderedDish.price}</p>
    //     </div>
    //   ))}
    //   <div>--------------</div>
    //   <div className="row justify-content-between">
    //     <p>Delivery</p>
    //     <p>150</p>
    //   </div>
    //   <div className="row justify-content-between">
    //     <p><strong>Total</strong></p>
    //     <p>Here total price</p>
    //   </div>
    //   <button type="button" className="btn btn-primary">Place order</button>
    // </div>
    <></>
  );
};

export default Cart;