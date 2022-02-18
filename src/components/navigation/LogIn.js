import LogInIcon from '../../assets/images/icons/navbar/Log-in.svg';
import { StyledLogInIcon } from './Navigation.styles';

const LogIn = () => {
  return (
    <StyledLogInIcon
      src={LogInIcon}
      alt="log-in"
      id="log-in"
      className="nav__icons"
    />
  );
};

export default LogIn;
