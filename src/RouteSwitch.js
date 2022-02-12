import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserCart } from './UserCart';
import Homepage from './routes/Homepage';
import Checkout from './routes/CheckoutPage';
import Cart from './routes/CartPage';
import Landing from './routes/LandingPage';
import NotFound from './routes/NotFound';
import WithNav from './WithNav';
import WithOutNav from './WithOutNav';
import './styles.css';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <UserCart.Provider>
        <Routes>
          <Route element={<WithOutNav />}>
            <Route path="/Checkout" element={<Checkout />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/landing" element={<Landing />} />

            <Route path="/ShoppingCart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </UserCart.Provider>
    </BrowserRouter>
  );
};

export default RouteSwitch;
