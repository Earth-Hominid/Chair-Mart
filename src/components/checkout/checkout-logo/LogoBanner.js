import Logo from '../../../assets/images/logo/chair-mart-yellow.jpg';

import { Header, CheckoutLogo } from './Styles';

const LogoBanner = () => {
  return (
    <Header>
      <CheckoutLogo src={Logo} alt="Chair-Mart logo" />
    </Header>
  );
};

export default LogoBanner;
