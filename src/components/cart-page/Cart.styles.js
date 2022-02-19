import styled from 'styled-components';

export const CartHeader = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartTitle = styled.div`
  font-size: 1.875rem;
  font-weight: 400;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1.688rem;
  padding-bottom: 1.688rem;
`;

export const CartLinkTitle = styled.div`
  font-size: 0.938rem;
  font-weight: 400;
  color: inherit;
  text-underline-offset: 0.3rem;
  text-decoration-thickness: 0.1rem;
  transition: text-decoration-thickness ease 0.1s;
  margin-right: 2rem;
  a {
    color: inherit;
  }
`;
