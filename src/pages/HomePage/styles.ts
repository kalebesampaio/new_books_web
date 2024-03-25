import styled from "styled-components";

export const HomePageStyles = styled.main`
  margin-top: 90px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0px 1rem;
  max-width: 75rem;
  margin: 0px auto;
  button,
  div {
    color: var(--grey9);
  }
`;

export const ListHeading = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #7b7b7b;
  svg {
    margin-right: 6px;
    font-size: 18px;
  }
`;

export const Title1 = styled.h1`
  height: 100%;
  font-size: 18px;
  font-weight: 600;

  font-family: "IBM Plex Sans", sans-serif;
  color: var(--grey9);
  width: 100%;
  text-align: start;
`;
