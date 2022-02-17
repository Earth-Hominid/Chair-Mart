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
