import ProductSummary from './product-summary/ProductSummary.js';
import { useContext } from 'react';
import { UserCart } from '../../../context/UserCart';
import {
  SummaryContainer,
  EmptyCartContainer,
  EmptyCartTitle,
} from './Styles.js';

const OrderSummary = () => {
  const { cart, bagFilled } = useContext(UserCart);

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
        {bagFilled ? <ProductSummary cart={cart} /> : <EmptyOrderSummary />}
      </SummaryContainer>
    </>
  );
};

export default OrderSummary;
