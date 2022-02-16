import ProductOne from '../../../assets/images/hero/green-chair.png';
import ProductTwo from '../../../assets/images/hero/white-sofa.png';
import {
  Hero,
  PromotionContainer,
  PromotionLeftSquare,
  PromotionIndent,
  PromotionHeadline,
  PromotionalPrice,
  LeftPromoImage,
  PromotionMiddle,
  HeroPromo,
  HeroLargeText,
  HeroSmallText,
  RightPromoImage,
  PromotionRightSquare,
  PromotionRightHeadline,
} from './Styles';

const HeroHome = () => {
  return (
    <section>
      <Hero>
        <PromotionContainer>
          <PromotionLeftSquare>
            <PromotionIndent>
              <PromotionHeadline>Office Chairs from</PromotionHeadline>
              <PromotionalPrice>$100</PromotionalPrice>
            </PromotionIndent>
            <LeftPromoImage src={ProductOne} alt="Green Chair" />
          </PromotionLeftSquare>
          <PromotionMiddle>
            <HeroPromo>
              <HeroLargeText>2 great furniture sales!</HeroLargeText>
              <HeroSmallText>Sale ends in 2 days </HeroSmallText>
            </HeroPromo>
          </PromotionMiddle>
          <PromotionRightSquare>
            <PromotionIndent>
              <PromotionHeadline>
                <PromotionRightHeadline>
                  Sofas & sectionals from
                </PromotionRightHeadline>
                <PromotionalPrice>$200 </PromotionalPrice>
              </PromotionHeadline>
            </PromotionIndent>
            <RightPromoImage src={ProductTwo} alt="Sofa" />
          </PromotionRightSquare>
        </PromotionContainer>
      </Hero>
    </section>
  );
};

export default HeroHome;
