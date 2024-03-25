import styled from "styled-components";

export const NavbarStyler = styled.nav`
  margin-top: 88.8px;
  border-bottom: 1px solid var(--grey1);
  background-color: var(--brand3);
  width: 100%;
  min-height: 61px;
  display: flex;
  align-items: center;
  justify-content: end;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: end;
  }
`;

export const NavList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0px 1rem;
  max-width: 75rem;
  margin: 0px auto;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    a {
      justify-content: flex-start;
      padding-left: 0;
    }
  }
`;

export const NavItem = styled.li`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  svg {
    color: var(--grey3);
  }
  a {
    color: var(--grey3);
    font-weight: 600;
    font-family: "IBM Plex Sans", sans-serif;
    margin-right: 4px;
  }
  &:hover {
    a,
    svg {
      transition: 0.5s;
      color: var(--whiteFixed);
    }
  }
`;

export const ButtonNav = styled.button`
  background-color: inherit;
  padding-inline: 1rem;
  height: 3rem;
  appearance: none;
  font-weight: 600;
  padding: 0px 1rem;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    fill: var(--grey3);
    font-size: 1.4rem;
  }
`;
export const Flex = styled.div`
  display: flex;
  gap: 1;
  align-items: center;
  margin: 10px 0px 10px 0px;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  a {
    justify-content: flex-start;
    padding-left: 0;
  }
  @media (min-width: 600px) {
    display: none;
  }
`;
