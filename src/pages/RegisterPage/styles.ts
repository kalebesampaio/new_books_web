import styled from "styled-components";

export const RegisterStyles = styled.main`
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
export const RegisterContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 800px;
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
  @media (max-width: 650px) {
    min-height: 700px;
  }
`;
