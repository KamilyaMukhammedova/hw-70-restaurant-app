import React from 'react';
import Dishes from "../../components/Dishes/Dishes";
import Cart from "../../components/Cart/Cart";

const MainPage = () => {
  return (
    <div className="container p-5">
      <div className="row justify-space-between">
        <div className="col-7">
          <Dishes/>
        </div>
        <div className="col-5">
          <Cart/>
        </div>
      </div>
    </div>
  );
};

export default MainPage;