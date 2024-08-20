import React from "react";
import { useNavigate } from "react-router-dom"; // Use `useNavigate` from react-router-dom
import "./styles.css"; // Assuming styles have been converted to CSS

const DishListItem = ({ dish }) => {
  const navigate = useNavigate(); // useNavigate hook for navigation

  return (
    <div
      onClick={() => navigate(`/dish/${dish.id}`)} // Navigate to the dish page
      className="container"
      role="button" // Makes the div accessible as a button
      tabIndex={0} // Ensures it can be focused
      onKeyPress={(e) => e.key === 'Enter' && navigate(`/dish/${dish.id}`)} // Handle Enter key for accessibility
    >
      <div style={{ flex: 1 }}>
        <h2 className="name">{dish.name}</h2>
        <p className="description">{dish.description}</p>
        <p className="price">$ {dish.price}</p>
      </div>
      {dish.image && (
        <img src={dish.image} alt={dish.name} className="image" />
      )}
    </div>
  );
};

export default DishListItem;
