import styled from "styled-components";

export const CardStyles = styled.li`
  padding-top: 7px;
  padding-bottom: 7px;
  position: relative;
  width: 100%;
  max-width: 16.666667%;

  @media (max-width: 668px) {
    max-width: 33.333333%;
  }

  button {
    font-weight: 600;
    transition: all 200ms ease;
    color: #cccccc;
    background-color: transparent;
    border: none;
    &::before {
      content: ">";
      display: inline-block;
      font-size: 16px;
      margin-right: 10px;
      color: #666666;
      transition: all 200ms ease;
    }

    span {
      margin-left: 5px;
      font-size: 12px;

      color: #cccccc;
      transition: all 200ms ease;
    }
  }
  &:hover {
    button,
    span,
    ::before {
      color: var(--brand1);
    }
  }
`;
