import { useContext } from 'react';
import { UserCart } from '../../../../context/UserCart';
import Items from '../items/Items';
import { CartHeader, CartSmallTitle, CartContainer } from './Styles';

const ProductSummary = () => {
  const { cart } = useContext(UserCart);
  return (
    <>
      <CartContainer>
        <CartHeader>
          <CartSmallTitle>PRODUCT</CartSmallTitle>
          <CartSmallTitle>TOTAL</CartSmallTitle>
        </CartHeader>
        <Items cart={cart} />
      </CartContainer>
    </>
  );
};

export default ProductSummary;
