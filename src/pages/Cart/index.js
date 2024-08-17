import React from "react";
import CartDishItem from "../../components/CartDishItem";
import restaurants from "../../assets/restaurants.json";
import "./style.css"; 

const restaurant = restaurants[0];

const Cart = () => {
  return (
    <div className="page">
      <h1 className="name">{restaurant.name}</h1>

      <p className="itemHeader">Your items</p>

      <div>
        {restaurant.dishes.map((item) => (
          <CartDishItem key={item.id} cartDish={item} />
        ))}
      </div>

      <div className="separator" />

      <div className="button">
        <span className="buttonText">Create Order</span>
      </div>
    </div>
  );
};

export default Cart;

