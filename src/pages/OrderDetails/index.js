import React from 'react';
import './style.css';

import CartDishItem from '../../components/CartDishItem'

import orders from '../../assets/orders.json';
import restaurants from '../../assets/restaurants.json';

const order = orders[0];

const OrderDetailsHeader = () => {
  return (
    <div className="header">
      <img
        src={order.Restaurant.image}
        alt={order.Restaurant.name}
        className="image"
      />
      <div className="container">
        <h1 className="title">{order.Restaurant.name}</h1>
        <p className="subtitle">
          {order.status} &#8226; 2 days ago
        </p>
        <h2 className="menuTitle">Your orders</h2>
      </div>
    </div>
  );
};

const OrderDetails = () => {
  return (
    <div>
      <OrderDetailsHeader />
      <div className="orderList">
        {restaurants[0].dishes.map(dish => (
          <CartDishItem key={dish.id} cartDish={dish} />
        ))}
      </div>
    </div>
  );
};

export default OrderDetails;