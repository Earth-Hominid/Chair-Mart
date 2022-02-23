import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserCart } from '../context/UserCart';
import Chairs from '../utils/chairProducts';
import Homepage from './Homepage';
import Checkout from './CheckoutPage';
import Cart from './CartPage';
import Landing from './LandingPage';
import AirliePage from './AirliePage';
import EvonPage from './EvonPage';
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
  const [bagFilled, setBagFilled] = useState(false);

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
    checkBagQuantity();
  };

  const addToBag = (product, quantity) => {
    let addedFruitQuantity = quantity;
    let newCart = [...cart];
    let addedFruit = newCart.find((item) => product.name === item.name);

    if (addedFruit) {
      addedFruit.quantity = parseInt(addedFruitQuantity);
    } else {
      addedFruit = {
        ...product,
        quantity: parseInt(addedFruitQuantity),
      };
      newCart.push(addedFruit);
    }
    setCart(newCart);
    checkBagQuantity();
  };

  const removeFromCart = (productToDelete) => {
    setCart([...cart.filter((product) => product !== productToDelete)]);
    checkBagQuantity();
  };

  const clearCart = () => {
    setCart([]);
    checkBagQuantity();
  };

  const subTotal = () => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  };

  const totalQuantity = useCallback(() => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  }, [cart]);

  const checkBagQuantity = useCallback(() => {
    let bagQuantity = totalQuantity;
    if (bagQuantity == null) return;
    if (bagQuantity <= 0) {
      setBagFilled(false);
    } else setBagFilled(true);
  }, [totalQuantity]);

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
          bagFilled,
          checkBagQuantity,
          addToBag,
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
            <Route path="/airlie" element={<AirliePage />} />
            <Route path="/evon" element={<EvonPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </UserCart.Provider>
    </BrowserRouter>
  );
};

export default RouteSwitch;
