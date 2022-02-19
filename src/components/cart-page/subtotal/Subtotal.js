import { useNavigate } from 'react-router-dom';
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
              <SubtotalTitle>Subtotal</SubtotalTitle>
              <SubtotalValue>1,250.00</SubtotalValue>
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
