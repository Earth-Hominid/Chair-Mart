import { useContext } from 'react';
import { UserCart } from '../../context/UserCart';
import Search from './Search';
import LogIn from './LogIn';
import Bag from './Bag';
import { StyledNavigationBar, StyledCartQuantity } from './Navigation.styles';

const NavLinkBar = () => {
  const { totalQuantity, bagFilled } = useContext(UserCart);

  return (
    <StyledNavigationBar>
      <Search />
      <LogIn />
      <Bag />
      {bagFilled ? (
        <StyledCartQuantity>{totalQuantity()} </StyledCartQuantity>
      ) : (
        ''
      )}
    </StyledNavigationBar>
  );
};

export default NavLinkBar;
