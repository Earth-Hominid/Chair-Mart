import styled from 'styled-components';

export const SectionContainer = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;

export const SummaryContainer = styled.div`
  width: 90%;
  border-top: 1px solid rgba(18, 18, 18, 0.08);
  border-bottom: 1px solid rgba(18, 18, 18, 0.08);
`;

export const EmptyCartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const EmptyCartTitle = styled.h2`
  font-size: 2.5rem;
  letter-spacing: 0.06rem;
  color: #121212bf;
`;
