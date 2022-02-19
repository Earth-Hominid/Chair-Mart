import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  max-height: 8rem;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
`;

export const StyledNavigationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 1rem;
`;

export const StyledLogoImage = styled.img`
  max-width: 4rem;
  @media screen and (min-width: 20rem) {
    max-width: 8rem;
    height: auto;
    cursor: pointer;
    margin-left: 0.25rem;
  }

  @media screen and (min-width: 30rem) {
    max-width: 6rem;
    height: auto;
    cursor: pointer;
    margin-left: 0.5rem;
  }

  @media screen and (min-width: 37.5rem) {
    max-width: 7rem;
    height: auto;
    cursor: pointer;
    margin-left: 0.75rem;
  }

  @media screen and (min-width: 48rem) {
    max-width: 7rem;
    height: auto;
    cursor: pointer;
    margin-left: 1rem;
  }

  @media screen and (min-width: 62rem) {
    max-width: 7rem;
    height: auto;
    cursor: pointer;
  }

  @media screen and (min-width: 75rem) {
    max-width: 8rem;
    height: auto;
    cursor: pointer;
    margin-left: 2rem;
  }
`;

export const NavigationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 3.813rem;
`;

export const NavigationIcons = styled.img`
  cursor: not-allowed;
`;

export const StyledSearchIcon = styled.img`
  cursor: not-allowed;
  height: 20px;
  width: 20px;
  margin: 1.25rem;
`;

export const StyledLogInIcon = styled.img`
  cursor: not-allowed;
  height: 24px;
  width: 20px;
  margin: 1.25rem;
`;

export const StyledBagIcon = styled.img`
  height: 24px;
  width: 20px;
  margin: 1.25rem;
  cursor: pointer;
`;

export const StyledCartQuantity = styled.p`
  text-decoration: none;
  background-color: #ff7b54;
  color: white;
  position: relative;
  left: -2.2em;
  top: -1.5em;
  border-radius: 1.75rem;
  white-space: nowrap;
  font-size: 0.844rem;
  font-weight: 500;
  line-height: 1.25em;
  text-align: center;
  padding: 0 0.3em;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 3;
  height: 1.25em;
  min-width: 1.25em;
`;

export const StyledBagContainer = styled.div`
  .bag {
    position: absolute;
  }
`;
