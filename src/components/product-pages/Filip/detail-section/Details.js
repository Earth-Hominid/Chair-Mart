import { useState, useContext } from 'react';
import { UserCart } from '../../../../context/UserCart';
import { useNavigate } from 'react-router-dom';
import QuantityAdjuster from '../quantity-adjuster/QuantityAdjuster';
import BlankFavorite from '../../../../assets/images/icons/fav.png';
import Favorite from '../../../../assets/images/icons/fav-color.png';
import {
  ProductDetailsContainer,
  ProductPrice,
  ProductTitle,
  ProductSubtitle,
  ColorContainer,
  ColorButton,
  SecondaryColorButton,
  ButtonContainer,
  AddToBagButton,
  BuyNowButton,
  FavoriteButton,
  ProductDescriptionContainer,
  ProductDescription,
} from './Styles';
import chairProducts from '../../../../utils/chairProducts';
import MaterialSection from '../materials/Materials';
import FinishSection from '../materials/FinishSection';
import DimensionSection from '../materials/DimensionSection';

const Details = () => {
  const [favorite, setFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addToBag, onInputChange } = useContext(UserCart);

  const navigate = useNavigate();
  const { checkBagQuantity } = useContext(UserCart);

  const routeChange = () => {
    let path = `/cart`;
    navigate(path);
  };

  const goToCart = () => {
    routeChange();
    checkBagQuantity();
  };

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
  };

  const handleIncreaseClick = () => {
    setQuantity((quantity) => parseInt(quantity + 1));
  };

  const handleDecreaseClick = () => {
    if (quantity <= 1) return;
    if (quantity > 1) {
      setQuantity((quantity) => parseInt(quantity - 1));
    }
  };

  return (
    <>
      <ProductDetailsContainer>
        <ProductTitle>{chairProducts[5].name}</ProductTitle>
        <ProductPrice>{chairProducts[5].amount}</ProductPrice>
        <ProductSubtitle>Color</ProductSubtitle>
        <ColorContainer>
          <ColorButton> {chairProducts[5].color}</ColorButton>
          <SecondaryColorButton>
            {chairProducts[5].colorTwo}
          </SecondaryColorButton>
        </ColorContainer>
        <ProductSubtitle>Quantity</ProductSubtitle>
        <QuantityAdjuster
          onChange={onInputChange}
          inputValue={quantity}
          handleDecreaseClick={handleDecreaseClick}
          handleIncreaseClick={handleIncreaseClick}
        />
        <ButtonContainer>
          <AddToBagButton
            onClick={() => addToBag(chairProducts[5], `${quantity}`)}
          >
            Add to bag
          </AddToBagButton>
          <FavoriteButton onClick={handleFavoriteClick}>
            {favorite ? (
              <img src={Favorite} alt="favorite" />
            ) : (
              <img src={BlankFavorite} alt="favorite-icon" />
            )}
          </FavoriteButton>
        </ButtonContainer>
        <ButtonContainer>
          <BuyNowButton onClick={goToCart}>Check out</BuyNowButton>
        </ButtonContainer>
        <ProductDescriptionContainer>
          <ProductDescription>
            {chairProducts[5].description}
          </ProductDescription>
        </ProductDescriptionContainer>
        <MaterialSection />
        <FinishSection />
        <DimensionSection />
      </ProductDetailsContainer>
    </>
  );
};

export default Details;
