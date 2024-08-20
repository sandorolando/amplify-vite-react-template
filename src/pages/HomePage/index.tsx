import Carousel from "../../components/Carousel";
import restaurantsData from "../../assets/restaurants.json";
import { Restaurant } from "../../models/types"; // Import the type


export default function HomePage() {
  const restaurants: Restaurant[] = restaurantsData as Restaurant[];

  return (
    <div>
      <Carousel restaurants={restaurants} />
    </div>
  );
}
