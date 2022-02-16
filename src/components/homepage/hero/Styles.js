import styled from 'styled-components';

export const Hero = styled.div`
  display: flex;
  align-items: center;
  min-height: 320px;
  background-color: #ffe0c3;
  justify-content: center;
  }
`;

export const PromotionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 15rem;
  max-width: 79.5rem;
`;

export const PromotionLeftSquare = styled.div`
  background-color: #fff4bd;
  opacity: 1;
  border-radius: 6px;
  min-height: 15rem;
  max-width: 25rem;
  display: flex;
  justify-content: space-around;
  @media (max-width: 48rem) {
    flex-direction: column;
    background-color: #f4b9b8;
    border-radius: 0px;
  }
`;

export const PromotionIndent = styled.div`
  padding-top: 2.5rem;
`;

export const PromotionHeadline = styled.h2`
  font-family: Muli-Regular;
  font-size: 1.375rem;
  text-align: left;
  line-height: 1.75rem;
  margin-left: min(1.5rem);
  @media (max-width: 48rem) {
    text-align: center;
    margin: 0;
  }
`;

export const PromotionalPrice = styled.div`
  text-align: left;
  font-size: 1.375rem;
  font-family: Muli-Bold;
  line-height: 1.75rem;
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-top: 0.3em;
  margin-left: min(24px);
  @media (max-width: 48rem) {
    text-align: center;
    margin: 0;
  }
`;

export const LeftPromoImage = styled.img`
  max-width: 13.25rem;
  max-height: 15rem;
  padding-right: 0.938rem;
  @media (max-width: 48rem) {
    padding: 0;
  }
`;

export const PromotionMiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff7f0 0% 0% no-repeat padding-box;
  border: 3px solid #ff7b54;
  opacity: 1;
  min-width: 25rem;
  min-height: 10rem;
  @media (max-width: 64rem) {
    display: none;
  }
`;

export const HeroPromo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  max-height: 75px;
  max-width: 240px;
`;

export const HeroLargeText = styled.h2`
  font-size: 1.938rem;
  line-height: 2.25rem;
  margin-bottom: 0.5em;
  font-family: Muli-Regular;
`;
export const HeroSmallText = styled.h3`
  font-family: Muli-Regular;
  font-size: 1em;
  line-height: 1.313em;
`;

export const RightPromoImage = styled.img`
  max-width: 13.25rem;
  max-height: 15rem;
  overflow: hidden;
`;

export const PromotionRightSquare = styled.div`
  background-color: #ffe0c3;
  opacity: 1;
  min-height: 240px;
  max-width: 400px;
  display: flex;
  justify-content: space-around;
  @media (max-width: 48rem) {
    flex-direction: column;
    background-color: #f4b9b8;
    border-radius: 0px;
  }
`;

export const PromotionRightHeadline = styled.h2`
  font-family: Muli-Regular;
  font-size: 1.375rem;
  text-align: left;
  line-height: 1.75rem;
  margin-left: min(24px);
`;
