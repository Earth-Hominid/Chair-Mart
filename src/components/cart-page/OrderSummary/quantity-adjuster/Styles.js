import styled from 'styled-components';

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid #e9e9e9;
  position: relative;
  height: 3rem;
  width: 9rem;
`;

export const QuantityButton = styled.button`
  width: 2.813rem;
  flex-shrink: 0;
  font-size: 1.8rem;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(var(--color-foreground));
  padding: 0;
`;
