import React from 'react';
import Dishes from "../../components/Dishes/Dishes";
import Cart from "../../components/Cart/Cart";

const MainPage = () => {
  return (
    <div className="container">
      <div className="row justify-space-between">
        <Dishes/>
        <Cart/>
      </div>
    </div>
  );
};

export default MainPage;