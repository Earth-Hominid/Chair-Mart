import { useContext, useState, useEffect } from 'react';
import { UserCart } from '../../context/UserCart';
import Search from './Search';
import LogIn from './LogIn';
import Bag from './Bag';
import { StyledNavigationBar, StyledCartQuantity } from './Navigation.styles';

const NavLinkBar = () => {
  const [bagFilled, setBagFilled] = useState(false);
  const { cart, totalQuantity } = useContext(UserCart);

  const checkBagQuantity = () => {
    if (cart.length <= 0) {
      setBagFilled(false);
    } else if (cart.length > 0) {
      setBagFilled(!bagFilled);
    }
  };

  useEffect(() => {
    checkBagQuantity();
  }, []);

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
