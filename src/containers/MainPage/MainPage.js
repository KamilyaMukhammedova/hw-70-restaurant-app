import React from 'react';
import Dishes from "../../components/Dishes/Dishes";
import Cart from "../../components/Cart/Cart";

const MainPage = () => {
  return (
    <div className="container p-5">
      <div className="row justify-space-between">
        <div className="col-7">
          <h4 className="text-center">Dishes</h4>
          <Dishes/>
        </div>
        <div className="col-5">
          <h4 className="text-center">Cart</h4>
          <Cart/>
        </div>
      </div>
    </div>
  );
};

export default MainPage;