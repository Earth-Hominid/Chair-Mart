import React from 'react';
import { Link } from 'react-router-dom';
import { CartHeader, CartTitle, CartLinkTitle } from '../Cart.styles';

const ShoppingCartHeader = () => {
  return (
    <>
      <CartHeader>
        <CartTitle>Your Cart</CartTitle>
        <CartLinkTitle>
          <Link to="/landing">
            <h2>Continue shopping</h2>
          </Link>
        </CartLinkTitle>
      </CartHeader>
    </>
  );
};

export default ShoppingCartHeader;
