import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserCart } from '../context/UserCart';
import Chairs from '../utils/chairProducts';
import Homepage from './Homepage';
import Checkout from './CheckoutPage';
import Cart from './CartPage';
import Landing from './LandingPage';
import NotFound from './NotFound';
import WithNav from '../outlet/WithNav';
import WithOutNav from '../outlet/WithOutNav';
import '../styles/styles.css';

const getCartFromLocalStorage = JSON.parse(
  localStorage.getItem('cart') || '[]'
);

const RouteSwitch = () => {
  const [cart, setCart] = useState(getCartFromLocalStorage);
  const [products] = useState(Chairs);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    let newShoppingCart = [...cart];
    let itemAddedToCart = newShoppingCart.find(
      (item) => product.id === item.id
    );

    if (itemAddedToCart) {
      itemAddedToCart.quantity++;
    } else {
      itemAddedToCart = {
        ...product,
        quantity: 1,
      };
      newShoppingCart.push(itemAddedToCart);
    }
    setCart(newShoppingCart);
  };

  const removeFromCart = (productToDelete) => {
    setCart([...cart.filter((product) => product !== productToDelete)]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const subTotal = () => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  };

  const totalQuantity = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  const decrement = (product, quantity) => {
    if (quantity <= 1) return;
    if (quantity > 1) {
      const newShoppingCart = [...cart];
      newShoppingCart.find((item) => item.id === product.id).quantity =
        quantity - 1;
    }
  };

  const setQuantity = (product, quantity) => {
    const newShoppingCart = [...cart];
    newShoppingCart.find((item) => item.id === product.id).quantity = quantity;
    setCart(newShoppingCart);
  };

  const increaseQuantity = (product, quantity) => {
    const newShoppingCart = [...cart];
    newShoppingCart.find((item) => item.id === product.id).quantity =
      quantity + 1;
    setCart(newShoppingCart);
  };

  return (
    <BrowserRouter>
      <UserCart.Provider
        value={{
          cart,
          addToCart,
          removeFromCart,
          products,
          clearCart,
          subTotal,
          totalQuantity,
          setQuantity,
          increaseQuantity,
          decrement,
        }}
      >
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
