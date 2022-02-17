import styled from 'styled-components';

export const ProductShowcase = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.875rem;
`;

export const Headline = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 3.688rem;
  font-size: 1.375rem;
  font-family: Muli-Bold;
`;

export const CarouselButtons = styled.div`
  margin-right: 3.688rem;
`;

export const PreviousButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const NextButton = styled.button`
  background-color: transparent;
  margin-left: 1rem;
  border: none;
  cursor: pointer;
`;

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 22.813rem;
  justify-content: center;
`;

export const ShowcaseCarousel = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-left: 3.688rem;
  margin-right: 3.688rem;
  max-height: 22.813rem;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-left: 1rem;
  max-width: 18.375rem;
  max-height: 22.813rem;
`;

export const ProductBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #efefef;
  opacity: 1;
  height: 18.375rem;
  width: 18.375rem;
  border-radius: 5px;
`;

export const ShowcaseImage = styled.img`
  width: 15rem;
  height: 15rem;
  padding: 1.688rem;
`;

export const ProductName = styled.h2`
  text-align: center;
  font-family: Muli-Bold;
  font-size: 1rem;
  line-height: 1.25rem;
  color: #151515;
  opacity: 1;
  padding-top: 0.7rem;
`;

export const ProductPrice = styled.h2`
  width: auto;
  height: 1.125rem;
  text-align: center;
  font: normal normal normal 14px/20px Muli-Regular;
  color: #000000;
  opacity: 1;
  padding-top: 0.5rem;
  padding-bottom: 1.25rem;
  margin-bottom: 1rem;
  display: block;
`;

export const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  a {
    color: inherit;
    text-decoration: inherit;
  }
`;
