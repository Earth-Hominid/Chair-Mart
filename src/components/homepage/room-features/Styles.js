import styled from 'styled-components';

export const SmallScreen = styled.div`
  @media (min-width: 48rem) {
    display: none;
  }
`;

export const BigScreen = styled.div`
  display: none;
  @media (min-width: 48rem) {
    display: block;
  }
`;

export const Display = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  @media (min-width: 1rem) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 37.5rem) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 48rem) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 1rem;
    margin-left: 1rem;
    margin-bottom: 3rem;
  }
  @media (min-width: 65.5rem) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
  }
`;

export const LeftCopy = styled.div`
  @media (min-width: 1rem) {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }
  @media (min-width: 37.5rem) {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }
  @media (min-width: 48rem) {
    display: flex;
    width: auto;
    height: auto;
    margin-left: 2rem;
    margin-right: 2rem;
  }
  @media (min-width: 65.5rem) {
    display: flex;
    max-width: 25rem;
    height: auto;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const LeftHeadline = styled.h2`
  @media (min-width: 1rem) {
    font-size: 2.25rem;
    font-family: Muli-Bold;
    text-align: left;
    margin-left: 0.5rem;
  }
  @media (min-width: 37.5rem) {
    font-size: 2.25rem;
  }
  @media (min-width: 48rem) {
    margin: 0;
    display: flex;
    justify-content: flex-start;
    font-size: 1.375rem;
    font-family: Muli-Bold;
    text-align: left;
    margin-bottom: 0.5rem;
  }
  @media (min-width: 65.5rem) {
    display: flex;
    justify-content: flex-start;
    font-size: 1.5rem;
    font-family: Muli-Bold;
    text-align: left;
  }
`;

export const LeftCopyParagraph = styled.p`
  @media (min-width: 1rem) {
    text-align: left;
    margin-left: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-family: Muli-Regular;
  }
  @media (min-width: 37.5rem) {
    font-size: 1.125rem;
    line-height: 1.5rem;
  }
  @media (min-width: 48rem) {
    font-size: 1rem;
    line-height: 1.25rem;
    margin-bottom: 1rem;
    margin-left: 0;
  }
  @media (min-width: 65.5rem) {
    text-align: left;
    font-size: 1.313rem;
    font-family: Muli-Regular;
    line-height: 1.8rem;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    margin-bottom: 1.5rem;
    margin-right: 2.188rem;
    min-width: 15.625rem;
  }
`;

export const CategoryList = styled.ul`
  a {
    color: inherit;
    margin-left: 0.5rem;
    font-family: Muli-Regular;
    @media (min-width: 48rem) {
      margin: 0;
    }
  }
`;

export const FeatureImage = styled.img`
  margin-right: 3.688rem;
  @media (min-width: 1rem) {
    width: 100%;
    margin: 0;
  }
  @media (min-width: 37.5rem) {
    width: 100%;
  }
  @media (min-width: 48rem) {
    max-width: 30rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
  @media (min-width: 65.5rem) {
    max-width: 40rem;
  }
`;

export const KitchenImage = styled.img`
  margin-top: 3rem;
  width: 100%;
  @media (min-width: 48rem) {
    min-height: 20rem;
    width: 100%;
  }
`;
