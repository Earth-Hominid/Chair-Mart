import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  max-height: 8rem;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
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
  margin-right: 3.813rem;`

export const NavigationIcons = styled.img` cursor: not-allowed;`

.nav__icons {
  cursor: not-allowed;
}

#search {
  height: 20px;
  width: 20px;
  margin: 1.25rem;
}

#log-in {
  height: 24px;
  width: 20px;
  margin: 1.25rem;
}

#bag {
  height: 24px;
  width: 20px;
  margin: 1.25rem;
  cursor: pointer;
}
