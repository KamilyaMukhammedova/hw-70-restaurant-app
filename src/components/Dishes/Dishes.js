import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchDishes} from "../../store/actions/ dishesActions";

const Dishes = () => {
  const dispatch = useDispatch();
  const dishes = useSelector(state => state.dishes.dishes);

  useEffect(() => {
    dispatch(fetchDishes());
    console.log(dishes)
  }, [dispatch]);

  return dishes && (
    <div className="border p-5">
      {Object.keys(dishes).map(dish => (
        <div className="border p-3 row mb-3 justify-content-between align-items-center">
          <div>
            <img src={dishes[dish].image} alt={dishes[dish].title} style={{width: '100px', height: '70px'}}/>
          </div>
          <div className="column col-5">
            <div>{dishes[dish].title}</div>
            <div><strong>KGS {dishes[dish].price}</strong></div>
          </div>
          <div>
            <button type="button" className="btn btn-success">Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dishes;