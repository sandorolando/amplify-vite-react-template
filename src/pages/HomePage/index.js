import React from 'react';
import RestaurantItem from "../../components/RestaurantItem";
import restaurants from "../../assets/restaurants.json";
import Navbar from '../../components/Navbar';


export default function HomePage() {
  return (
    <div style={styles.page}>
      <Navbar/>
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

const styles = {
  page: {
    padding: '10px',
  },
};
