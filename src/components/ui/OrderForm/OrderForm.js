import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createOrder, setPlacingOrder} from "../../../store/actions/cartActions";

const OrderForm = () => {
  const dispatch = useDispatch();
  const orderedDishes = useSelector(state => state.cart.orderedDishes);

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const onCloseHandler = () => {
    setUserData({
      name: '',
      email: '',
      phoneNumber: '',
    });
    dispatch(setPlacingOrder(false));
  };

  const onChangeHandler = (name, value) => {
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (userData.name === '' || userData.email === '' || userData.phoneNumber === '') {
      return;
    }

    const orderData = {};

    orderedDishes.forEach(orderedDish => {
      orderData[orderedDish.title] = {amount: orderedDish.amount};
    });

    orderData.user = {...userData};

    dispatch(createOrder(orderData));
  };

  return (
    <>
      <div className="text-right">
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={() => onCloseHandler()}
        >
          <i className="bi bi-x-circle-fill"/>
        </button>
      </div>
      <div className='p-3'>
        <h3 className="text-center mb-3">Enter your contact data</h3>
        <form onSubmit={(e) => onSubmitForm(e)}>
          <div className="form-group row align-items-center">
            <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={userData.name}
                onChange={(e) => onChangeHandler(e.target.name, e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label htmlFor="email" className="col-sm-2 col-form-label">E-mail</label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={userData.email}
                onChange={(e) => onChangeHandler(e.target.name, e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label htmlFor="phoneNumber" className="col-sm-2 col-form-label">Phone number</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                value={userData.phoneNumber}
                onChange={(e) => onChangeHandler(e.target.name, e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-outline-info w-100"
            disabled={userData.name === '' || userData.email === '' || userData.phoneNumber === ''}
          >
            Add order
          </button>
        </form>
      </div>
    </>
  );
};

export default OrderForm;