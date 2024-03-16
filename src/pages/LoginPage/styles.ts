import styled from "styled-components";

export const LoginStyles = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 5rem;

  background-color: var(--grey0);
  @media (max-width: 991px) {
    padding: 1rem 2rem;
  }
  @media (max-width: 650px) {
    padding: 1rem 1rem;
  }
`;
export const NavReturn = styled.nav`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 1rem;
`;
export const LinkReturn = styled.a`
  color: var(--grey9);
  cursor: pointer;
  font-size: 1rem;
  font-family: "Inter", sans-serif;
  display: flex;
  align-items: center;
  &:hover {
    color: var(--brand1);
  }
`;
export const LoginContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background-color: var(--grey2);
  overflow: hidden;
  @media (max-width: 991px) {
    flex-direction: column;
    height: auto;
  }
`;
export const ContainerImg = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 432px;
  position: relative;
  @media (max-width: 991px) {
    margin-top: 2rem;
    width: 80%;
  }
  @media (max-width: 800px) {
    margin-top: 2rem;
    width: 100%;
  }
  @media (max-width: 600px) {
    display: none;
  }

  span {
    position: absolute;
    bottom: 10px;
    right: 10;
    color: var(--grey4);
    font-family: "Inter", sans-serif;
    font-size: 12px;

    @media (max-width: 991px) {
      bottom: 0px;
    }

    a {
      color: var(--grey4);
      &:hover {
        color: var(--brand1);
      }
    }
  }
`;

export const LoginImg = styled.img`
  width: 100%;
`;

export const ContainerForm = styled.div`
  width: 50%;
  @media (max-width: 991px) {
    width: 90%;
    margin-top: 2rem;
  }
`;
