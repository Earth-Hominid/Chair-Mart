import ProductSummary from './product-summary/ProductSummary.js';
import { useState, useEffect, useContext } from 'react';
import { UserCart } from '../../../context/UserCart';
import {
  SummaryContainer,
  EmptyCartContainer,
  EmptyCartTitle,
} from './Styles.js';

const OrderSummary = () => {
  const [empty, setEmpty] = useState(true);

  const { cart } = useContext(UserCart);

  const isCartEmpty = () => {
    if (cart.length <= 0) {
      setEmpty(true);
    } else if (cart.length > 0) {
      setEmpty(false);
    }
  };

  useEffect(() => {
    isCartEmpty();
  }, []);

  const EmptyOrderSummary = () => {
    return (
      <>
        <EmptyCartContainer>
          <EmptyCartTitle>Cart is empty.</EmptyCartTitle>
        </EmptyCartContainer>
      </>
    );
  };

  return (
    <>
      <SummaryContainer>
        {empty ? <EmptyOrderSummary /> : <ProductSummary cart={cart} />}
      </SummaryContainer>
    </>
  );
};

export default OrderSummary;
