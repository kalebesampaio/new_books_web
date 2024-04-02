import styled from "styled-components";

export const FormStyles = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;

  h2 {
    font-weight: 700;
    font-size: 2.25rem;
    margin: 0 auto;
    margin-bottom: 2rem;
    line-height: 1.1;
    font-family: "Inter", sans-serif;
    color: var(--grey9);
    @media (max-width: 650px) {
      font-size: 1.3rem;
    }
  }

  label {
    width: 90%;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    color: var(--grey9);
    margin-bottom: 5px;
    margin-top: 10px;
  }
  input {
    width: 90%;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    color: var(--grey0);

    stroke: var(--grey6);
    background-color: var(--grey6);
    border: 6px solid var(--grey6);
    border-radius: 0;
    display: block;
    background-clip: padding-box;
    border: none;
    min-height: 60px;
    padding: 12px 12px;
    margin-bottom: 10px;
    @media (max-width: 991px) {
      width: 100%;
    }
    @media (max-width: 650px) {
      min-height: 40px;
      border: none;
    }
  }

  p {
    font-size: 14px;
    font-family: "Inter", sans-serif;
    color: var(--alert1);
    min-height: 17px;
  }

  button {
    width: 90%;
    min-height: 60px;

    background-color: var(--brand1);
    border: 1px solid var(--brand1);

    font-size: 1.25rem;
    line-height: 1.1;
    font-family: "Inter", sans-serif;
    color: var(--grey9);

    &:hover {
      background-color: var(--brand2);
      border-color: var(--brand2);
    }

    @media (max-width: 991px) {
      width: 100%;
    }
    @media (max-width: 650px) {
      min-height: 40px;
      font-size: 1rem;
    }
  }

  section {
    width: 90%;
    @media (max-width: 991px) {
      width: 100%;
    }
    position: relative;
    input {
      width: 100%;
    }

    svg {
      position: absolute;
      bottom: 50%;
      right: 5%;
      cursor: pointer;
      font-size: 1.3rem;
    }
  }

  div {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
    @media (max-width: 991px) {
      width: 100%;
      margin-bottom: 2rem;
    }
    @media (max-width: 650px) {
      flex-direction: column;
      align-items: start;
      margin-bottom: 0px;
    }
  }
  a {
    font-size: 14px;
    color: var(--grey9);
    font-weight: 600;

    font-family: "Inter", sans-serif;

    &:hover {
      color: var(--brand1);
    }
    @media (max-width: 650px) {
      margin-bottom: 10px;
    }
  }
`;
