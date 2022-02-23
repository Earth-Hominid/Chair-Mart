import styled from 'styled-components';

export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 40vw;
  margin-right: 1.5rem;
  margin-left: 3rem;
`;

export const ProductTitle = styled.h1`
  margin: 0px 0px 15px;
  color: #000000;
  word-break: break-word;
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  letter-spacing: 0.06rem;
  opacity: 1;
  font-family: Muli-Bold;
`;

export const ProductPrice = styled.h3`
  font-family: Muli-Regular;
  font-size: 1.125rem;
  color: #000000;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const ProductSubtitle = styled.h4`
  font-size: 0.813rem;
  margin-bottom: 0.2rem;
  letter-spacing: 0.025rem;
  font-weight: 400;
  line-height: 1.219rem;
  padding-inline-end: 0.125rem;
`;

export const ColorContainer = styled.div`
  display: flex;
  margin-bottom: 2.5rem;
`;

export const ColorButton = styled.button`
  color: white;
  background-color: black;
  font-weight: 400;
  line-height: 0.875rem;
  margin: 0.7rem 0.5rem 0.2rem 0;
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  letter-spacing: 0.06rem;
  border: none;
  border-radius: 4rem;
`;

export const SecondaryColorButton = styled.button`
  color: black;
  background: #ffffff;
  border: 0.1rem solid black;
  border-radius: 4rem;
  margin: 0.7rem 0.5rem 0.2rem 0;
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  letter-spacing: 0.06rem;
  line-height: 0.875rem;
  text-align: center;
  transition: border var(--duration-short) ease;
`;

export const ButtonContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 3.688rem;
  min-width: 12.5rem;
`;

export const AddToBagButton = styled.button`
  background-color: #ffb26b;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  min-height: 2.875rem;
  width: 100%;
  font-size: 0.938rem;
  font-stretch: 100%;
  font-weight: 600;
  letter-spacing: 0.1rem;
  margin-right: 0.5rem;
  line-height: 1.125rem;
  padding: 1em 2em;
`;

export const BuyNowButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  min-height: 2.875rem;
  width: 100%;
  font-size: 0.938rem;
  font-weight: 600;
  font-stretch: 100%;
  letter-spacing: 0.1rem;
  line-height: 1.125rem;
  padding: 1em 2em;
  transition: background 0.2s ease-in-out;
`;

export const ProductDescriptionContainer = styled.div`
  margin: 2.5rem 0;
  margin-right: 3.688rem;
`;

export const ProductDescription = styled.p`
  font-size: 0.925rem;
  font-family: Muli-Regular;
  letter-spacing: 0.06rem;
  line-height: 1.8;
`;

export const FavoriteButton = styled.button`
  min-width: 4rem;
  height: 3.063rem;
  border: none;
  border-radius: 4px;
  opacity: 1;
  background: #ffffff 0% 0% no-repeat padding-box;
  cursor: pointer;
`;
