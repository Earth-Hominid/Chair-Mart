import styled from 'styled-components';

export const AccordianContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  border-top: 0.1rem solid #e6e6e6;
  border-bottom: 0.1rem solid #e6e6e6;
  padding: 0.5rem 0;
  background-color: #fafafa;
`;

export const StyledSummary = styled.summary`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 3rem;
  cursor: pointer;
`;

export const CartImage = styled.img`
  height: 3rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  color: #1878b9;
  font-size: 0.875rem;
`;

export const ArrowIcon = styled.img`
  height: 2rem;
`;

export const TotalOrder = styled.div`
  color: #333333;
  font-size: 1.25rem;
  letter-spacing: 0.06rem;
  font-family: Muli-Bold;
  margin-left: 10rem;
`;

export const AccordianContent = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  word-break: break-word;
  margin-left: 1.5rem;
`;
