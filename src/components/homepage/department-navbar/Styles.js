import styled from 'styled-components';

export const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Muli-Regular;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 92px;
  background-color: #f4b9b8;
`;

export const CategoryList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 28rem;
  a {
    color: inherit;
    text-decoration: inherit;
  }
`;

export const DepartmentIcon = styled.img`
  height: 2rem;
  width: 2rem;
  margin-bottom: 4px;
  &:hover {
    height: 2.5rem;
    width: 2.5rem;
  }
`;
