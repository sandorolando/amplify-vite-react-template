import { useAuthenticator } from '@aws-amplify/ui-react';
import RestaurantItem from '../RestaurantItem';

const ProtectedRoute = ({ children, restaurant }: { children: JSX.Element, restaurant: RestaurantItemProps }) => {
  const { authStatus } = useAuthenticator();

  if (authStatus === 'authenticated') {
    return children;
  }

  return (
    <div>
      <h1>hUCK</h1>
      <RestaurantItem restaurant={restaurant} />
    </div>
  );
};

export default ProtectedRoute;
