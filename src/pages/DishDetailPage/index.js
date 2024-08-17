import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import './style.css'; 

import restaurants from '../../assets/restaurants.json';
const dish = restaurants[0].dishes[0];

const DishDetailsPage = () => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  const getTotal = () => {
    return (dish.price * quantity).toFixed(2);
  };

  return (
    <div className="page">
      <h1 className="name">{dish.name}</h1>
      <p className="description">{dish.description}</p>
      <div className="separator" />

      <div className="row">
        <FaMinusCircle size={60} color="black" onClick={onMinus} />
        <span className="quantity">{quantity}</span>
        <FaPlusCircle size={60} color="black" onClick={onPlus} />
      </div>

      <button
        onClick={() => navigate('/cart')}
        className="button"
      >
        Add {quantity} to basket &#8226; ${getTotal()}
      </button>
    </div>
  );
};

export default DishDetailsPage;