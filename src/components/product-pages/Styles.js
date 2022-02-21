import styled from 'styled-components';

export const ProductPageSection = styled.section`
  margin-top: 5px;
  padding-top: 5px;
`;

export const ProductPageRow = styled.div`
  margin-top: 5px;
  margin-left: 20px;
  display: flex;
  justify-content: space-evenly;
`;

export const MainImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50vw;
  min-height: 60vh;
  margin-left: 3.688rem;
`;

export const MainImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  background-color: #efefef;
`;

export const MainProductImage = styled.img`
  height: 32rem;
  width: auto;
`;

export const SecondaryImageGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const SecondaryImageColumn = styled.div`
  flex-basis: 49%;
  background-color: #efefef;
`;
