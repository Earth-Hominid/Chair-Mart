import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserCart } from '../../context/UserCart';
import { useNavigate } from 'react-router-dom';
import Search from './Search';
import LogIn from './LogIn';
import Bag from './Bag';

const NavLinkBar = () => {
  // const { totalQuantity } = useContext(UserCart);
  // const navigate = useNavigate();

  // const routeChange = () => {
  //   let path = `/shoppingcart`;
  //   navigate(path);
  // };

  // const goToCart = () => {
  //   routeChange();
  // };

  return (
    <div className="nav__bar">
      <Search />
      <LogIn />
      <Link to="/cart">
        <Bag />
      </Link>
    </div>
  );
};

export default NavLinkBar;
