import { useContext } from 'react';
import { UserCart } from '../../../../context/UserCart';
import Items from '../items/Items';
import { CartHeader, CartSmallTitle } from '/Styles.js';

const ProductSummary = () => {
  const { cart } = useContext(UserCart);
  return (
    <>
      <CartHeader>
        <CartSmallTitle>PRODUCT</CartSmallTitle>
        <CartSmallTitle>TOTAL</CartSmallTitle>
      </CartHeader>
      <Items cart={cart} />
    </>
  );
};

export default ProductSummary;
