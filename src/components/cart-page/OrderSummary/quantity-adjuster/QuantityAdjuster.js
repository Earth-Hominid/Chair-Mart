import { useState, useContext } from 'react';
import { UserCart } from '../../UserCart';
import plusIcon from '../../../../assets/images/icons/cart-counter/plus-black.png';
import minusIcon from '../../../../assets/images/icons/cart-counter/minus-black.png';
import { QuantityContainer, QuantityButton } from './Styles';

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
        <img className="quantity__icon" src={minusIcon} alt="minus-icon"></img>
      </QuantityButton>
      <input
        type="number"
        name="quantity"
        onChange={onChangeHandler}
        className="quantity__input"
        value={product.quantity}
        min="1"
      />
      <button className="quantity__button" onClick={increase}>
        <img className="quantity__icon" src={plusIcon} alt="plus-icon"></img>
      </button>
    </QuantityContainer>
  );
};

export default QuantityAdjuster;
