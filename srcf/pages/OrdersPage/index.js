import React from 'react';
import './style.css'; //
import OrderListItem from '../../components/OrderListItem';
import orders from '../../assets/orders.json';

const OrderPage = () => {
  return (
    <div className="container">
      {orders.map((order) => (
        <OrderListItem key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderPage;