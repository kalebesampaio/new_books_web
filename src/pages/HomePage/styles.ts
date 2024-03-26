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
export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const ListHeading = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid var(--grey11);
  svg {
    margin-right: 6px;
    font-size: 18px;
  }
`;

export const Title1 = styled.h1`
  height: 100%;
  font-size: 18px;
  font-weight: 600;

  color: var(--grey9);
  width: 100%;
  text-align: start;
`;

export const Aside = styled.aside`
  width: 25%;
  @media (max-width: 950px) {
    width: 35%;
  }
  @media (max-width: 750px) {
    width: 90%;
  }
`;

export const AsideDivTitle = styled.div`
  background: linear-gradient(to right, var(--brand1) 40%, var(--brand2));
  border-radius: 10px;
  margin-top: 70px;
  box-sizing: border-box;
  display: inline-block;
  padding: 0 20px;

  position: relative;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 26px;
`;

export const AsideTitle = styled.h3`
  font-size: 14px;
  margin: 7px 0;
  color: var(--whiteFixed);
`;

export const AsideFooter = styled.span`
  box-sizing: border-box;

  a {
    background-color: var(--brand1);
    border-radius: 10px;
    color: var(--whiteFixed);
    font-size: 12px;
    font-weight: 600;
    display: block;
    text-align: center;
    margin-top: 20px;
    padding: 6px 0px;
    transition: background-color 200ms ease;
    cursor: pointer;
  }
`;
