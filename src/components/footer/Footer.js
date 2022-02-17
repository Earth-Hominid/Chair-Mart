import BackToTopArrow from '../../assets/images/icons/up-arrow.svg';
import {
  FooterHolder,
  FooterContainer,
  FooterButton,
  FooterImage,
  FooterHeadline,
} from './Styles';

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterHolder>
      <FooterContainer>
        <FooterButton onClick={scrollTop}>
          <FooterImage src={BackToTopArrow} alt="back-to=top" />
        </FooterButton>
        <FooterHeadline>BACK TO TOP</FooterHeadline>
      </FooterContainer>
    </FooterHolder>
  );
};

export default Footer;
