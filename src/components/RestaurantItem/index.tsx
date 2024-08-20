import { useNavigate } from "react-router-dom";
import "./style.css";
import { Restaurant } from "../../models/types"


type RestaurantItemProps = {
  restaurant: Restaurant;
};

const RestaurantItem: React.FC<RestaurantItemProps> = ({ restaurant }) => {
  const navigate = useNavigate();

  const onPress = () => {
    navigate(`/restaurant/${restaurant.id}`);
  };

  return (
    <div className="restaurantContainer" onClick={onPress}>
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="image"
      />
      <div className="row">
        <div>
          <h2 className="title">{restaurant.name}</h2>
          <p className="subtitle">
            $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
            {restaurant.maxDeliveryTime} minutes
          </p>
        </div>

        <div className="rating">
          <span>{restaurant.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
