import { Link } from 'react-router-dom';
import BackArrow from '../../../assets/images/icons/checkout/back-grey.png';
import {
  CheckoutNavigation,
  CheckoutBackArrow,
  StyledLink,
  StyledLogoText,
} from './Styles';

const CheckoutNav = () => {
  return (
    <CheckoutNavigation>
      <Link to="/cart">
        <CheckoutBackArrow src={BackArrow} alt="back-arrow" />
      </Link>
      <Link to="/cart">
        <StyledLink>
          <StyledLogoText>Chair Mart</StyledLogoText>
        </StyledLink>
      </Link>
    </CheckoutNavigation>
  );
};

export default CheckoutNav;
