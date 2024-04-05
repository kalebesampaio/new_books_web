import styled from "styled-components";

export const Page404Styles = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 75vh;
  img {
    width: 50%;
  }
  @media (max-width: 750px) {
    img {
      width: 80%;
    }
  }
`;
