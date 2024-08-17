import React from 'react';

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import RestaurantDetailsPage from './pages/RestaurantDetailsPage';
import DishDetailPage from './pages/DishDetailPage';
import OrdersPage from "./pages/OrdersPage";
import OrderDetails from "./pages/OrderDetails";
import SplashPage from "./pages/SplashPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/restaurant/:id" element={ <RestaurantDetailsPage/> } />
      <Route path="/dish/:id" element={ <DishDetailPage/> } />
      <Route path="/cart" element={ <Cart/> } /> 
      <Route path="/orders" element={ <OrdersPage/> } />
      <Route path="/order/:id" element={ <OrderDetails/> } />
      <Route path="profile" element={ <ProfilePage/> } />


      <Route path="" element={ <SplashPage/> } />


    </Routes>


  );
   
}

export default App;
