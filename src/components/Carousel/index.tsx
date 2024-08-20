import React, { useState } from "react";
import RestaurantItem from "../RestaurantItem";
import { Restaurant } from "../../models/types";
import './style.css';

interface CarouselProps {
  restaurants: Restaurant[];
}

const Carousel: React.FC<CarouselProps> = ({ restaurants }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % restaurants.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + restaurants.length) % restaurants.length
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>Previous</button>
      <div className="carousel-slide">
        <RestaurantItem restaurant={restaurants[currentIndex]} />
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
