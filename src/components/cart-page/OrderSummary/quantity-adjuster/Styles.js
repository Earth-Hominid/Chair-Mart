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

export const QuantityIcon = styled.img`
  width: 3rem;
  height: auto;
`;

export const QuantityInput = styled.input`
  color: #575757;
  font-family: Muli-Regular;
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  background-color: transparent;
  border: 0;
  padding: 0 0.5rem;
  width: 100%;
  flex-grow: 1;
  -moz-appearance: textfield;
  -webkit-appearance: none;
  margin: 0;
`;
