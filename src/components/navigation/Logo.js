import logo from '../../assets/images/logo/chair-mart-yellow.jpg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <img id="logo" src={logo} alt="RedeBs logo" />
    </Link>
  );
};

export default Logo;
