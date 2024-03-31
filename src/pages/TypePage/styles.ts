import styled from "styled-components";

export const TypePageStyles = styled.main`
  margin-top: 90px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0px 1rem;
  max-width: 75rem;
  margin: 0px auto;
  ul {
    width: 100%;
    div {
      margin-top: 0;
    }
  }
  svg {
    color: var(--whiteFixed);
  }
  h1 {
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

export const TypeTitleDiv = styled.div`
  margin-top: 50px;
  width: 100%;
  h5 {
    font-size: 14px;
    margin: 7px 0;
    line-height: 1.2;
    background: linear-gradient(to right, var(--brand1) 40%, var(--brand2));
    border-radius: 10px;
    width: auto;
    display: inline-block;
    color: var(--whiteFixed);
    padding: 8px 25px;
    margin-bottom: 26px;
    text-transform: uppercase;
    font-weight: 600;
  }
`;

export const Title1 = styled.h1`
  width: 100%;
  color: var(--whiteFixed);
  font-size: 18px;
  margin-bottom: 30px;
  margin-top: 30px;
`;
