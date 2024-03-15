import styled from "styled-components";

export const FooterStyles = styled.footer`
  padding: 1rem 0;
  width: 100%;
  height: 80px;
  background-color: var(--grey0);
`;
export const FooterContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  max-width: 75rem;
  height: 100%;
  margin: 0px auto;
  padding: 0px 1rem;
  @media (max-width: 991px) {
    justify-content: start;
  }
`;

export const FooterText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  font-family: "IBM Plex Sans", sans-serif;
  color: var(--grey9);
  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;
export const ButtonFooter = styled.button`
  background-color: var(--grey1);
  border-color: var(--grey1);
  padding-inline: 1rem;
  height: 3rem;
  appearance: none;
  font-weight: 600;
  padding: 0px 1rem;
  border: 2px solid;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;

  position: absolute;
  right: 0;
  svg {
    fill: var(--grey3);
    font-size: 1.5rem;

    &:hover {
      fill: var(--brand1);
    }
  }
  &:hover {
    background-color: var(--grey1);
  }
`;
