import styled from "styled-components";

export const BookPageStyles = styled.main`
  margin-top: 90px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0px 1rem;
  max-width: 75rem;
  margin: 0px auto;
`;

export const ContainerBookInfo = styled.section`
  width: 100%;
`;

export const ContainerBookTitle = styled.div`
  margin-top: 50px;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  text-align: center;
  align-items: end;
  span {
    background-color: var(--random1);
    width: auto;
    height: auto;
    border-radius: 2px;
    padding: 8px 8px 8px 8px;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 600;
    text-align: center;
    display: inline-block;
    margin-right: 7px;
    color: var(--whiteFixed);
    box-sizing: border-box;
  }
  h1 {
    color: var(--brand1);
    font-size: 20px;
    font-weight: normal;
    font-weight: 600;
  }
`;

export const ContainerSummary = styled.div`
  padding: 15px 0 50px;
  width: 100%;
  display: flex;
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
`;

export const SummaryImg = styled.figure`
  border-radius: 15px;
  background-color: rgb(255 255 255 / 9%) !important;
  width: 425px;
  max-width: 100%;
  text-align: center;
  padding: 15px;
  background: var(--whiteFixed);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 5px;
    width: 500px;
    max-width: 100%;
    height: auto;
    object-fit: cover;
    vertical-align: middle;
  }
  @media (max-width: 950px) {
    margin-bottom: 3rem;
  }
`;

export const SummaryContent = styled.section`
  overflow: hidden;
  display: table-cell;
  vertical-align: middle;
  margin-left: 30px;
  position: relative;
  border-radius: 15px;
  background-color: rgb(255 255 255 / 9%) !important;
  padding: 20px 30px 30px;
  font-size: 0;
  min-height: 318px;
  width: 100%;
  @media (max-width: 950px) {
    margin-left: 0;
  }
  .containerSvg {
    flex-direction: row;
  }
`;

export const DivRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  span {
    font-size: 2rem;
    color: yellow;
  }
  p {
    font-size: 1rem;
    color: var(--whiteFixed);
    margin-left: 8px;
    font-weight: 600;
    font-size: 1.6rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3px;
  margin-bottom: 8px;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: start;
  }

  h5 {
    width: 115px;
    display: inline-block;
    font-size: 1rem;
    vertical-align: top;

    font-weight: 600;
    color: var(--whiteFixed);
    line-height: 1.2;
  }
  span {
    font-size: 14px;
    color: var(--grey12);
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    max-height: calc(2.7em);
  }
  .bordernone {
    border: none;
  }
  p {
    color: var(--grey12);
    font-size: 14px;
    margin-bottom: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
  }
`;

export const ContainerSvg = styled.div`
  margin-top: 16px;
  padding: 0 20px;
  border-right: 1px solid #e1e1e1;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;
  svg {
    text-align: center;
    line-height: 1.35;
    color: var(--brand1);
    font-size: 2rem;
    margin-bottom: 10px;
  }
  p {
    text-align: center;
    line-height: 1.35;
    font-size: 14px;
    color: var(--grey12);
    margin-bottom: 0;
  }
`;

export const CommentTitle = styled.div`
  border-bottom: 2px solid #7b7b7b;
  margin-bottom: 35px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  svg {
    margin-right: 6px;
    font-size: 18px;
    color: var(--grey9);
  }
  h4 {
    height: 100%;
    font-size: 18px;
    font-weight: 600;

    color: var(--grey9);
    width: 100%;
    text-align: start;
  }
`;

export const DisqusContainer = styled.div`
  padding: 0px 1rem;
  max-width: 75rem;
  margin: 0px auto;
`;
