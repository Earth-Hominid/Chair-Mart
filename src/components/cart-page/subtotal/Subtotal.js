import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserCart } from '../../../context/UserCart';
import {
  ButtonContainer,
  CheckOutButton,
  SubtotalContainer,
  SubtotalNote,
  SubtotalTextContainer,
  SubtotalTitle,
  SubtotalValue,
  SubtotalHolder,
} from './Styles';

const Subtotal = () => {
  const { cart, subTotal } = useContext(UserCart);

  const navigate = useNavigate();

  const routeChange = () => {
    let path = `/Checkout`;
    navigate(path);
  };

  const handleSubmit = () => {
    routeChange();
  };

  return (
    <>
      <SubtotalHolder>
        <SubtotalContainer>
          <div>
            <SubtotalTextContainer>
              <SubtotalTitle>Subtotal:</SubtotalTitle>
              {cart.length > 0 ? (
                <SubtotalValue>{`$${subTotal()}.00 USD`}</SubtotalValue>
              ) : (
                ''
              )}
            </SubtotalTextContainer>
            <SubtotalNote>
              Taxes and shipping calculated at checkout
            </SubtotalNote>
          </div>

          <ButtonContainer>
            <CheckOutButton
              onClick={handleSubmit}
              id="checkout"
              className="cart__checkout__button"
              name="checkout"
            >
              Check out
            </CheckOutButton>
          </ButtonContainer>
        </SubtotalContainer>
      </SubtotalHolder>
    </>
  );
};

export default Subtotal;
