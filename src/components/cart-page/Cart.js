import Header from './header/Header';
import OrderSummary from './OrderSummary/OrderSummary';
import Subtotal from './subtotal/Subtotal';
import Footer from '../footer/Footer';

const Cart = () => {
  return (
    <>
      <Header />
      <OrderSummary />
      <Subtotal />
      <Footer />
    </>
  );
};

export default Cart;
