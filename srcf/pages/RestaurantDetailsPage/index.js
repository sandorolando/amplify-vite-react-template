import React from "react";
import { IoArrowBackCircle } from "react-icons/io5"; // Importing icon from react-icons
import DishListItem from "../../components/DishListItem";

import restaurants from "../../assets/restaurants.json"


import Header from "./Header";
import "./styles.css"; // Assuming styles have been converted to CSS

const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
  const id = "someId"; // Replace with actual logic to get the id

  console.warn(id);

  return (
    <div className="page">
      <Header restaurant={restaurant} />

      <div>
        {restaurant.dishes.map((dish) => (
          <DishListItem key={dish.name} dish={dish} />
        ))}
      </div>

      <IoArrowBackCircle
        onClick={() => window.history.back()} // Go back to the previous page
        size={45}
        color="white"
        className="iconContainer"
      />
    </div>
  );
};

export default RestaurantDetailsPage;
