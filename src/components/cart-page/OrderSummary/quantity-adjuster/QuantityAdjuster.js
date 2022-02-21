import { useContext } from 'react';
import { UserCart } from '../../../../context/UserCart';
import plusIcon from '../../../../assets/images/icons/cart-counter/plus-black.png';
import minusIcon from '../../../../assets/images/icons/cart-counter/minus-black.png';
import {
  QuantityContainer,
  QuantityButton,
  QuantityIcon,
  QuantityInput,
} from './Styles';

const QuantityAdjuster = ({ product }) => {
  const { quantity, setQuantity } = useContext(UserCart);

  const onChangeHandler = (event) => {
    setQuantity(product, parseInt(Math.round(Number(event.target.value))));
  };

  const decrease = (event) => {
    if (product.quantity <= 1) {
      return;
    }
    setQuantity(product, product.quantity - 1);
  };

  const increase = (event) => {
    if (product.quantity <= 0) {
      return;
    }
    setQuantity(product, product.quantity + 1);
  };

  return (
    <QuantityContainer>
      <QuantityButton onClick={decrease} name="minus" type="button">
        <QuantityIcon src={minusIcon} alt="minus-icon"></QuantityIcon>
      </QuantityButton>
      <QuantityInput
        type="number"
        name="quantity"
        onChange={onChangeHandler}
        value={product.quantity}
        min="1"
        max="8"
      />
      <QuantityButton onClick={increase}>
        <QuantityIcon src={plusIcon} alt="plus-icon"></QuantityIcon>
      </QuantityButton>
    </QuantityContainer>
  );
};

export default QuantityAdjuster;
