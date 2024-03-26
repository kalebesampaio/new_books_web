import styled from "styled-components";

export const ListBookStyles = styled.ul`
  width: 75%;
  margin-top: 20px;
  margin-bottom: 50px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 50px 50px;

  @media (max-width: 950px) {
    width: 65%;
  }
  @media (max-width: 750px) {
    width: 90%;
  }
`;
