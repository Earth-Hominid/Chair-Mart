import CheckoutNav from './checkout-nav/CheckoutNav';
import LogoBanner from './checkout-logo/LogoBanner';
import OrderSummary from './order-summary/OrderSummary';

const Checkout = () => {
  return (
    <>
      <CheckoutNav />
      <LogoBanner />
      <OrderSummary />
    </>
  );
};

export default Checkout;
