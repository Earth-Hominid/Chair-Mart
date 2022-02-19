import { useNavigate } from 'react-router-dom';
import BagIcon from '../../assets/images/icons/navbar/Bag.svg';
import { StyledBagIcon, StyledBagContainer } from './Navigation.styles';

const Bag = () => {
  const navigate = useNavigate();

  const routeChange = () => {
    let path = `/cart`;
    navigate(path);
  };
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
