import React from "react";
import "./styles.css"; 

const RestaurantHeader = ({ restaurant }) => {
  return (
    <div className="page">
      <img src={restaurant.image} alt={restaurant.name} className="image" />

      <div className="container">
        <h1 className="title">{restaurant.name}</h1>
        <p className="subtitle">
          $ {restaurant.deliveryFee} • {restaurant.minDeliveryTime}-
          {restaurant.maxDeliveryTime} minutes
        </p>

        <h2 className="menuTitle">Menu</h2>
      </div>
    </div>
  );
};

export default RestaurantHeader;
