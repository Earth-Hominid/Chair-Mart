import styled from 'styled-components';

export const BottomBorder = styled.div`
  margin-right: 3.688rem;
  margin-left: 3.688rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #e5e5e5;
`;
export const HeroContainer = styled.div`
  margin-top: 2rem;
  @media (min-width: 1rem) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }
  @media (min-width: 37.5rem) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }
  @media (min-width: 48rem) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 1rem;
    margin-left: 1rem;
    margin-bottom: 3rem;
    margin-top: 2rem;
  }
  @media (min-width: 65.5rem) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 0;
    margin-right: 0;
    margin-top: 2rem;
  }
  @media (min-width: 75rem) {
    display: flex;
    justify-content: space-around;
    margin-top: 4rem;
  }
`;

export const HeroImage = styled.img`
  @media (min-width: 1rem) {
    width: 100%;
    margin: 0;
  }
  @media (min-width: 37.5rem) {
    width: 100%;
  }
  @media (min-width: 48rem) {
    max-width: 20rem;
    margin-left: 2rem;
  }
  @media (min-width: 48rem) {
    max-width: 25rem;
  }
  @media (min-width: 65.5rem) {
    max-width: 30rem;
  }
  @media (min-width: 75rem) {
    max-width: 35rem;
  }
  @media (min-width: 80rem) {
    max-width: 40rem;
  }
`;

export const TextContainer = styled.div`
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
    height: auto;
    margin: 0;
    max-width: 30rem;
    margin-left: 4rem;
    margin-right: 2rem;
    max-width: 25rem;
  }
  @media (min-width: 75rem) {
    margin-right: 2rem;
    margin-left: 2rem;
    margin-top: 0;
    margin-left: 0;
    min-width: 30rem;
  }
  @media (min-width: 90rem) {
    margin-right: 6rem;
    margin-top: 0;
    margin-left: 0;
    min-width: 30rem;
  }
`;

export const HeroHeadline = styled.h1`
  @media (min-width: 1rem) {
    font-size: 1.5rem;
    font-family: Muli-Bold;
    text-align: left;
    margin-left: 0.5rem;
  }
  @media (min-width: 37.5rem) {
    font-size: 1.5rem;
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
    font-size: 1.375rem;
    font-family: Muli-Bold;
    text-align: left;
  }
  @media (min-width: 75rem) {
    margin: 0;
    font-size: 2rem;
  }
`;

export const HeroParagraph = styled.p`
  @media (min-width: 1rem) {
    text-align: left;
    margin-left: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
    font-family: Muli-Regular;
  }
  @media (min-width: 37.5rem) {
    font-size: 1rem;
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
    opacity: 1;
    margin-bottom: 1.5rem;
  }
`;
