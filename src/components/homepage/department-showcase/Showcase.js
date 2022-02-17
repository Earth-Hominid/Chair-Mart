import { useState } from 'react';
import Chairs from './Chairs';
import PreviousFade from '../../../assets/images/icons/carousel/PreviousFade';
import Previous from '../../../assets/images/icons/carousel/Previous';
import ForwardFade from '../../../assets/images/icons/carousel/ForwardFade';
import Forward from '../../../assets/images/icons/carousel/Forward';
import {
  ProductShowcase,
  Headline,
  CarouselButtons,
  PreviousButton,
  NextButton,
  CarouselContainer,
  ShowcaseCarousel,
} from './Styles';

const ShowcaseHome = ({ chairs, forward, backward }) => {
  const [carouselForwardIcons, setCarouselForwardIcons] = useState(true);
  const switchCarouselIcons = () => {
    setCarouselForwardIcons(!carouselForwardIcons);
  };

  const handleBackwardClick = () => {
    backward();
    switchCarouselIcons();
  };

  const handleForwardClick = () => {
    forward();
    switchCarouselIcons();
  };

  return (
    <section>
      <ProductShowcase>
        <Headline>New In</Headline>
        <CarouselButtons>
          <PreviousButton onClick={handleBackwardClick}>
            {carouselForwardIcons ? <PreviousFade /> : <Previous />}
          </PreviousButton>
          <NextButton onClick={handleForwardClick}>
            {carouselForwardIcons ? <Forward /> : <ForwardFade />}
          </NextButton>
        </CarouselButtons>
      </ProductShowcase>
      <CarouselContainer>
        <Chairs chairs={chairs} />
      </CarouselContainer>
    </section>
  );
};

export default ShowcaseHome;
