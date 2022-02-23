import { useState, useContext } from 'react';
import { UserCart } from '../../../context/UserCart';
import Cart from '../../../assets/images/icons/checkout/cart.png';
import UpArrow from '../../../assets/images/icons/checkout/up-blue.png';
import DownArrow from '../../../assets/images/icons/checkout/down-blue.png';

import {
  AccordianContainer,
  CartImage,
  StyledSummary,
  TitleContainer,
  Title,
  ArrowIcon,
  TotalOrder,
  AccordianContent,
} from './Styles';

const OrderSummary = () => {
  const [accordianOpen, setAccordianOpen] = useState(false);

  const { cart, subTotal } = useContext(UserCart);

  const handleAccordianClick = () => {
    setAccordianOpen(!accordianOpen);
  };

  return (
    <>
      <AccordianContainer>
        <details>
          <StyledSummary onClick={handleAccordianClick}>
            <CartImage src={Cart} alt="cart-icon" />
            {accordianOpen ? (
              <TitleContainer>
                <Title>Show Order Summary</Title>
                <ArrowIcon src={DownArrow} alt="up-arrow" />
              </TitleContainer>
            ) : (
              <TitleContainer>
                <Title>Hide Order Summary </Title>
                <ArrowIcon src={UpArrow} alt="down-arrow" />
              </TitleContainer>
            )}
            <TotalOrder>{`$${subTotal()}.00`}</TotalOrder>
          </StyledSummary>
          <AccordianContent></AccordianContent>
        </details>
      </AccordianContainer>
    </>
  );
};

export default OrderSummary;
