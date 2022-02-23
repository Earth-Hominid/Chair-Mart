import { useState } from 'react';
import { useContext } from 'react';
import { UserCart } from '../../../../context/UserCart';
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

  const { cart, setCart } = useContext(UserCart);

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
  };

  return (
    <>
      <ProductDetailsContainer>
        <ProductTitle>{chairProducts[1].name}</ProductTitle>
        <ProductPrice>{chairProducts[1].amount}</ProductPrice>
        <ProductSubtitle>Color</ProductSubtitle>
        <ColorContainer>
          <ColorButton> {chairProducts[1].color}</ColorButton>
          <SecondaryColorButton>
            {chairProducts[1].colorTwo}
          </SecondaryColorButton>
        </ColorContainer>
        <ProductSubtitle>Quantity</ProductSubtitle>
        <QuantityAdjuster />
        <ButtonContainer>
          <AddToBagButton>Add to bag</AddToBagButton>
          <FavoriteButton onClick={handleFavoriteClick}>
            {favorite ? (
              <img src={Favorite} alt="favorite" />
            ) : (
              <img src={BlankFavorite} alt="favorite-icon" />
            )}
          </FavoriteButton>
        </ButtonContainer>
        <ButtonContainer>
          <BuyNowButton>Buy it now </BuyNowButton>
        </ButtonContainer>
        <ProductDescriptionContainer>
          <ProductDescription>
            {chairProducts[1].description}
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
