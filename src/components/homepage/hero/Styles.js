import styled from 'styled-components';

export const Hero = styled.div`
  display: flex;
  align-items: center;
  min-height: 320px;
  background-color: #fff4bd;
  justify-content: center;
`;

export const PromotionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 15rem;
  max-width: 79.5rem;
`;

export const PromotionLeftSquare = styled.div`
  background-color: #f4b9b8;
  opacity: 1;
  min-height: 15rem;
  max-width: 25rem;
  display: flex;
  justify-content: space-around;
  @media (max-width: 48rem) {
    flex-direction: column;
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
`;
