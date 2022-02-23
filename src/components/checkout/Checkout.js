import CheckoutNav from './checkout-nav/CheckoutNav';
import LogoBanner from './checkout-logo/LogoBanner';
import OrderSummary from './order-summary/OrderSummary';
import Construction from '../../assets/images/icons/checkout/construction.png';
import RoadConstruction from '../../assets/images/icons/checkout/cons1.png';
import { ConstructionImage, ConstructionContainer, SmallImage } from './Styles';

const Checkout = () => {
  return (
    <>
      <CheckoutNav />
      <LogoBanner />
      <OrderSummary />
      <ConstructionContainer>
        <SmallImage src={RoadConstruction} />
        <ConstructionImage src={Construction} />
        <SmallImage src={RoadConstruction} />
      </ConstructionContainer>
    </>
  );
};

export default Checkout;
