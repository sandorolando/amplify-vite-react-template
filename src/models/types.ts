// Define the type for Dish
export type Dish = {
    id: string;
    name: string;
    description: string;
    price: number;
    image?: string;
  };
  
  // Define the type for Restaurant
  export type Restaurant = {
    id: string; // Use string to match your JSON data
    name: string;
    image: string;
    deliveryFee: number;
    minDeliveryTime: number;
    maxDeliveryTime: number;
    rating: number;
    dishes: Dish[]; // Include dishes if used in components
  };
  