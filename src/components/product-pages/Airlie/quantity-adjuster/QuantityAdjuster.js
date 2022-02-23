import plusIcon from '../../../../assets/images/icons/cart-counter/plus-black.png';
import minusIcon from '../../../../assets/images/icons/cart-counter/minus-black.png';
import {
  QuantityContainer,
  QuantityButton,
  QuantityIcon,
  QuantityInput,
} from './Styles';

const QuantityAdjuster = ({
  onChange,
  inputValue,
  handleDecreaseClick,
  handleIncreaseClick,
}) => {
  return (
    <QuantityContainer>
      <QuantityButton onClick={handleDecreaseClick} name="minus" type="button">
        <QuantityIcon src={minusIcon} alt="minus-icon"></QuantityIcon>
      </QuantityButton>
      <QuantityInput
        type="tel"
        name="quantity"
        value={inputValue}
        onChange={onChange}
        min="1"
        max="8"
      />
      <QuantityButton onClick={handleIncreaseClick}>
        <QuantityIcon src={plusIcon} alt="plus-icon"></QuantityIcon>
      </QuantityButton>
    </QuantityContainer>
  );
};

export default QuantityAdjuster;
