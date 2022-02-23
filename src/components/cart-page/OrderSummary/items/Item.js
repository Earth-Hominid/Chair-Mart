import { NavLink } from 'react-router-dom';
import QuantityAdjuster from '../quantity-adjuster/QuantityAdjuster';
import DeleteButton from '../delete-button/DeleteButton';
import {
  CartProductContainer,
  CartProductBackground,
  CartProductImage,
  TextContainer,
  ProductStyledTitle,
  ProductStyledColor,
  ProductStyledPrice,
  AdjusterContainer,
} from './Styles';

const Item = ({ product, onClick, productSubtotal }) => {
  return (
    <CartProductContainer>
      <NavLink to={`/${product.name}`}>
        <CartProductBackground>
          <CartProductImage
            key={product.id}
            src={product.image}
            alt={product.name}
            data-id={product.id}
          />
        </CartProductBackground>
      </NavLink>

      <TextContainer>
        <ProductStyledTitle>{product.name}</ProductStyledTitle>
        <ProductStyledPrice>{product.amount}</ProductStyledPrice>
        <ProductStyledColor>{product.color}</ProductStyledColor>
      </TextContainer>
      <AdjusterContainer>
        <QuantityAdjuster product={product} />
        <DeleteButton onClick={onClick} />
      </AdjusterContainer>
      <h1>{`$${productSubtotal(product)}`}</h1>
    </CartProductContainer>
  );
};

export default Item;
