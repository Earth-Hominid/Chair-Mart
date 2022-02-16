import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserCart } from '../context/UserCart';
import Homepage from './Homepage';
import Checkout from './CheckoutPage';
import Cart from './CartPage';
import Landing from './LandingPage';
import NotFound from './NotFound';
import WithNav from '../outlet/WithNav';
import WithOutNav from '../outlet/WithOutNav';
import '../styles/styles.css';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <UserCart.Provider value={UserCart}>
        <Routes>
          <Route element={<WithOutNav />}>
            <Route path="/Checkout" element={<Checkout />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </UserCart.Provider>
    </BrowserRouter>
  );
};

export default RouteSwitch;
