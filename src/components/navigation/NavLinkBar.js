import { Link } from 'react-router-dom';
import Search from './Search';
import LogIn from './LogIn';
import Bag from './Bag';

const NavLinkBar = () => {
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
