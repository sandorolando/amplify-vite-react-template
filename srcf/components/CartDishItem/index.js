import React from "react";
import "./style.css"; 

const CartDishItem = ({ cartDish }) => {
  return (
    <div className="row">
      <div className="quantityContainer">
        <span>1</span>
      </div>
      <span className="name">{cartDish.name}</span>
      <span className="price">$ {cartDish.price}</span>
    </div>
  );
};

export default CartDishItem;