import styled from 'styled-components';

export const Hero = styled.div`
  display: flex;
  align-items: center;
  min-height: 20rem;
  background-color: #fff7f0;
  justify-content: center;
  }
`;

export const PromotionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 15rem;
  max-width: 79.5rem;
  @media (max-width: 48rem) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;

export const PromotionLeftSquare = styled.div`
  background-color: #ffe0c3;
  opacity: 1;
  border-radius: 6px;
  max-width: 25rem;
  display: flex;
  justify-content: space-around;
  @media (min-width: 1rem) {
    background-color: #ffe0c3;
    margin-top: 1.5rem;
  }
  @media (min-width: 48rem) {
    background-color: #ffe0c3;
    margin: 1rem;
  }
  @media (min-width: 65.5rem) {
    background-color: #ffe0c3;
    margin: 1rem;
    min-width: 25rem;
  }
`;

export const PromotionRightSquare = styled.div`
  background-color: #ffe0c3;
  opacity: 1;
  max-width: 25rem;
  border-radius: 6px;
  display: flex;
  justify-content: space-around;
  @media (min-width: 20rem) {
    background-color: #ffe0c3;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }
  @media (min-width: 48rem) {
    background-color: #ffe0c3;
    margin: 1rem;
  }
  @media (min-width: 65.5rem) {
    background-color: #ffe0c3;
    margin: 1rem;
    min-width: 25rem;
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
  margin-left: min(1.5rem);
`;

export const LeftPromoImage = styled.img`
  min-width: 13.25rem;
  min-height: 15rem;
  padding-right: 0.938rem;
  @media (max-width: 48rem) {
    padding: 0;
  }
`;
export const RightPromoImage = styled.img`
  min-width: 13.25rem;
  min-height: 15rem;
  overflow: hidden;
`;

export const PromotionMiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff7f0 0% 0% no-repeat padding-box;
  border: 3px solid #ef7c8e;
  opacity: 1;
  min-width: 20rem;
  min-height: 10rem;
  @media (min-width: 1rem) {
    display: none;
  }
  @media (min-width: 65.5rem) {
    display: flex;
    min-width: 15rem;
  }
  @media (min-width: 67.188rem) {
    display: flex;
    min-width: 17rem;
  }
  @media (min-width: 75rem) {
    display: flex;
    min-width: 25rem;
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
