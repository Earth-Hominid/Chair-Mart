import styled from 'styled-components';

export const CartProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 2rem;
  margin-right: 2rem;
`;

export const CartProductBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #efefef;
  border-radius: 5px;
  height: 5rem;
  width: 5rem;
  &:hover {
    transform: scale(1.05);
    box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
`;

export const CartProductImage = styled.img`
  width: auto;
  height: 4rem;
  padding: 0.3rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProductStyledTitle = styled.h2`
  text-align: center;
  font-family: Muli-Bold;
  font-size: 1rem;
  line-height: 1.25rem;
  letter-spacing: 0px;
  color: #151515;
  opacity: 1;
  padding-top: 0.7rem;
`;

export const ProductStyledPrice = styled.h2`
  width: auto;
  height: 18px;
  text-align: center;
  font-family: Muli-Regular;
  font-size: 0.875rem;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  padding-top: 1vh;
  padding-bottom: 2vh;
  display: block;
`;

export const ProductStyledColor = styled.h2`
  width: auto;
  height: 18px;
  font-family: Muli-Regular;
  font-size: 0.875rem;
  color: #121212bf;
  padding-top: 1vh;
  padding-bottom: 2rem;
`;

export const AdjusterContainer = styled.div`
  display: flex;
`;
