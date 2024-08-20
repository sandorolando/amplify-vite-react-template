import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'; 


const OrderListItem = ({ order }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/order/${order.id}`);
  };

  return (
    <div className="container" onClick={handleClick}>
      <img
        src={order.Restaurant.image}
        alt={order.Restaurant.name}
        className="image"
      />
      <div className="textContainer">
        <h2 className="title">{order.Restaurant.name}</h2>
        <p className="details">3 items &#8226; $38.45</p>
        <p className="status">2 days ago &#8226; {order.status}</p>
      </div>
    </div>
  );
};

export default OrderListItem;