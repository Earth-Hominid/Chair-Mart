import styled from 'styled-components';

export const ProductShowcase = styled.div`
   {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-height: 6.875;
  }
`;

export const HeadlineContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 2rem;
  font-size: 1.375rem;
  font-family: Muli-Bold;
  @media (min-width: 20rem) {
    margin-left: 1rem;
  }
`;

export const Headline = styled.h2`
  font-size: 0.7rem;
  line-height-step: 1.125rem;
  letter-spacing: 00.06rem;
  font-family: Muli-Regular;
  color: #575757;
  @media (min-width: 48rem) {
    font-size: 0.863rem;
  }
`;
