import styled from 'styled-components';

export const Display = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 1rem) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 20rem) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 48rem) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media (min-width: 65.5rem) {
    display: flex;
    flex-direction: row;
  }
`;

export const LeftCopy = styled.div`
  @media (min-width: 1rem) {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }
  @media (min-width: 20rem) {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }
  @media (min-width: 48rem) {
    display: flex;
    width: 16.5rem;
    height: auto;
    margin-left: 2.5rem;
  }
  @media (min-width: 65.5rem) {
  }
`;

export const LeftHeadline = styled.h2`
  @media (min-width: 1rem) {
    font-size: 2.25rem;
    font-family: Muli-Bold;
    text-align: left;
    margin-left: 0.5rem;
  }
  @media (min-width: 20rem) {
    font-size: 2.25rem;
    font-family: Muli-Bold;
  }
  @media (min-width: 48rem) {
    display: flex;
    justify-content: flex-start;
    font-size: 1.375rem;
    list-style: 1.75rem;
    font-family: Muli-Bold;
    text-align: left;
    opacity: 1;
    margin-top: 3rem;
    margin-bottom: 0.5rem;
  }
  @media (min-width: 65.5rem) {
    display: flex;
    justify-content: flex-start;
    font-size: 1.375rem;
    list-style: 1.75rem;
    font-family: Muli-Bold;
    text-align: left;
    opacity: 1;
    margin-top: 3.25rem;
    margin-bottom: 1.563rem;
  }
`;

export const LeftCopyParagraph = styled.p`
  @media (min-width: 1rem) {
    text-align: left;
    margin-left: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  @media (min-width: 20rem) {
  }
  @media (min-width: 48rem) {
  }
  @media (min-width: 65.5rem) {
    text-align: left;
    font: normal normal normal 16px/21px Muli;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    margin-right: 2.7894vw;
    margin-top: 3.0418vh;
    margin-bottom: 5.3231vh;
    min-width: 15.625rem;
  }
`;

export const CategoryList = styled.ul`
  a {
    color: inherit;
    text-decoration: inherit;
    margin-left: 0.5rem;
  }
`;

export const FeatureImage = styled.img`
  margin-right: 3.688rem;
  @media (min-width: 1rem) {
    width: 100%;
    margin: 0;
  }
  @media (min-width: 20rem) {
    width: 100%;
  }
  @media (min-width: 48rem) {
    max-width: 30rem;
  }
  @media (min-width: 65.5rem) {
    max-width: 40rem;
  }
`;
