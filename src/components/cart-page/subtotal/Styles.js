import styled from 'styled-components';

export const SubtotalHolder = styled.div`
 @media (min-width: 1rem) {
   display: flex;
   justify-content: center
 }
  @media (min-width: 40rem) {
    display: flex
    justify-content: flex-end;
  }
`;

export const SubtotalContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100% @media (min-width: 40rem) {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
  }
`;

export const SubtotalTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 1rem;
  margin-top: 1.5rem;
`;

export const SubtotalTitle = styled.h3`
  font-size: 1rem;
`;

export const SubtotalValue = styled.p`
  font-size: 1.125rem;
  letter-spacing: 0.06rem;
  color: #121212bf;
`;

export const SubtotalNote = styled.small`
  margin: 2.2rem 0 1.6rem auto;
  text-align: center;
  display: block;
  font-size: 0.813rem;
  color: #121212bf;
`;

export const ButtonContainer = styled.div`
  width: 25rem;
`;

export const CheckOutButton = styled.button`
  background-color: black;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  min-height: 2.875rem;
  width: 100%;
  font-size: 0.938rem;
  font-weight: 600;
  font-stretch: 100%;
  letter-spacing: 0.1rem;
  color: white;
  line-height: 1.125rem;
  padding: 1em 2em;
  transition: background 0.2s ease-in-out;
  &:hover {
    background-color: #f5f459;
    color: black;
  }
`;
