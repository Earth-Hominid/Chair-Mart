import styled from 'styled-components';

export const AccordianContainer = styled.div`
  margin-right: 3.688rem;
  border-top: 0.1rem solid #9f9f9f;
  border-bottom: 0.1rem solid #9f9f9f;
  padding: 0.5rem 0;
`;

export const AccordianSummary = styled.summary`
  display: flex;
  align-items: center;
  height: 2rem;
  cursor: pointer;
  list-style: none;
`;

export const ImageIcon = styled.img`
  width: 3.2rem;
  height: auto;
`;

export const SummaryTitle = styled.h2`
  display: flex;
  flex: 1;
`;

export const AccordianContent = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  word-break: break-word;
  margin-left: 1.5rem;
`;

export const AccordianText = styled.p`
  font-size: 0.925rem;
  font-family: Muli-Regular;
  letter-spacing: 0.06rem;
  line-height: 1.8;
`;

export const AccordianNoBorderContainer = styled.div`
  margin-right: 3.688rem;
  padding: 0.5rem 0;
`;
