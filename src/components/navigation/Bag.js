import { useContext, useState, useEffect } from 'react';
import { UserCart } from '../../context/UserCart';
import { useNavigate } from 'react-router-dom';
import BagIcon from '../../assets/images/icons/navbar/Bag.svg';
import {
  StyledBagIcon,
  StyledBagContainer,
  StyledCartQuantity,
} from './Navigation.styles';

const Bag = () => {
  const [bagFilled, setBagFilled] = useState(false);
  const { cart } = useContext(UserCart);
  const { totalQuantity } = useContext(UserCart);
  const navigate = useNavigate();

  const routeChange = () => {
    let path = `/cart`;
    navigate(path);
  };

  const checkBagQuantity = () => {
    if (cart.length <= 0) {
      setBagFilled(false);
    } else if (cart.length > 0) {
      setBagFilled(!bagFilled);
    }
    console.log(cart.length);
  };

  useEffect(() => {
    checkBagQuantity();
  }, []);

  const goToCart = () => {
    routeChange();
  };

  return (
    <>
      <StyledBagContainer onClick={goToCart}>
        <StyledBagIcon src={BagIcon} alt="shopping cart" />
      </StyledBagContainer>
    </>
  );
};

export default Bag;
