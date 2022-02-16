import ProductOne from '../../../assets/images/hero/green-chair.png';
import ProductTwo from '../../../assets/images/hero/white-sofa.png';
import {
  Hero,
  PromotionContainer,
  PromotionLeftSquare,
  PromotionIndent,
  PromotionHeadline,
  PromotionalPrice,
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
            <img src={ProductOne} id="left-promo-img" alt="Green Chair" />
          </PromotionLeftSquare>
          <div className="promo-middle">
            <div className="hero-promo">
              <h2 className="hero-large-text">2 great furniture sales!</h2>
              <h3 className="hero-small-text">Sale ends in 2 days </h3>
            </div>
          </div>
          <div className="promo-right-square">
            <div className="promo-indent">
              <div className="promo-headline">
                <h2 className="promo-right-headline">
                  Sofas & sectionals from
                </h2>
                <div className="promo-price">$200 </div>
              </div>
            </div>
            <img src={ProductTwo} id="right-promo-img" alt="Sofa" />
          </div>
        </PromotionContainer>
      </Hero>
    </section>
  );
};

export default HeroHome;
