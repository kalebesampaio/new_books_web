import styled from "styled-components";

export const SettingsPageStyles = styled.main`
  width: 100%;
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

export const SettingsContainer = styled.div`
  width: 100%;
`;
