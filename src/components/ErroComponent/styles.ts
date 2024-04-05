import styled from "styled-components";

export const ErroComponentStyles = styled.div`
  text-align: center;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: var(--alert2);
      margin-right: 5px;
    }
    h4 {
      font-size: 1rem;
      color: var(--alert2);
      a {
        color: var(--alert2);
        &:hover {
          color: var(--alert1);
        }
      }
    }
  }
  span {
    font-size: 12px;
    color: var(--alert3);
  }
`;
