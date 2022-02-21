import styled from 'styled-components';

export const ProductPageSection = styled.section`
  margin-top: 5px;
  padding-top: 5px;
`;

export const ProductPageRow = styled.div`
  ${
    '' /* @media (min-width: 20rem) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
  } */
  }
  @media (min-width: 40rem) {
    margin-top: 5px;
    margin-left: 20px;
    display: flex;
    justify-content: space-evenly;
  }
`;
