import Logo from '../../../assets/images/logo/chair-mart-yellow.jpg';

const LogoBanner = () => {
  return (
    <div className="checkout__header">
      <img className="checkout__logo" src={Logo} alt="RedeBs logo" />
    </div>
  );
};

export default LogoBanner;
