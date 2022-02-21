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
const AirlieDetails = () => {
  const [favorite, setFavorite] = useState(false);

  const { cart, setCart } = useContext(UserCart);

  const navigate = useNavigate();

  const routeChange = () => {
    let path = `/Checkout`;
    navigate(path);
  };

  const buyNow = () => {
    const product = chairProducts[0];
    setCart([...cart, { product: product, product_quantity: 1 }]);
    routeChange();
  };

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
  };

  return (
    <>
      <ProductDetailsContainer>
        <ProductTitle>{chairProducts[0].name}</ProductTitle>
        <ProductPrice>{chairProducts[0].amount}</ProductPrice>
        <ProductSubtitle>Color</ProductSubtitle>
        <ColorContainer>
          <ColorButton> {chairProducts[0].color}</ColorButton>
          <SecondaryColorButton>
            {chairProducts[0].colorTwo}
          </SecondaryColorButton>
        </ColorContainer>
        <ProductSubtitle>Quantity</ProductSubtitle>
        <QuantityAdjuster product={chairProducts[0]} />
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
          <BuyNowButton onClick={() => buyNow()}>Buy it now </BuyNowButton>
        </ButtonContainer>
        <ProductDescriptionContainer>
          <ProductDescription>
            {chairProducts[0].description}
          </ProductDescription>
        </ProductDescriptionContainer>
        <MaterialSection />
      </ProductDetailsContainer>
    </>
  );
};

export default AirlieDetails;
