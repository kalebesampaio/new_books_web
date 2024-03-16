import styled from "styled-components";

export const HeaderStyles = styled.header`
  background: var(--grey0);
  border-bottom: 2px solid var(--brand1);
  position: fixed;
  inset: 0;
  bottom: auto;
  padding: 1rem 0;
  width: 100%;
  z-index: 99999;
`;
export const HeaderContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;

  max-width: 75rem;
  margin: 0px auto;
  padding: 0px 1rem;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const HeaderMobileArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoTipo = styled.figure`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const LogoTipoImg = styled.img`
  max-width: 150px;
  cursor: pointer;
`;
export const ButtonHeader = styled.button`
  background-color: var(--grey1);
  border-color: var(--grey1);
  padding-inline: 1rem;
  height: 3rem;
  appearance: none;
  font-weight: 600;
  padding: 0px 2rem;
  border: 2px solid;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  white-space: nowrap;
  svg {
    fill: var(--grey3);
    font-size: 1rem;
  }
  &:hover {
    background-color: var(--grey1);
  }
`;

export const NavbarLinks = styled.nav`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media (max-width: 991px) {
    margin-top: 32px;
    flex-direction: column;
    align-items: flex-start;
    a {
      justify-content: flex-start;
      padding-left: 0;
    }
  }
`;
export const Link = styled.a`
  color: var(--grey9);
  background: transparent;
  border-color: transparent;
  height: 2rem;
  appearance: none;
  padding: 0px;
  margin-right: 2rem;
  position: relative;

  cursor: pointer;
  font-size: 1rem;
  font-family: "Inter", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  white-space: nowrap;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: var(--brand1);
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;
export const Flex = styled.div`
  display: flex;
  gap: 1;
  align-items: center;
`;
