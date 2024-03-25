import styled from "styled-components";

export const CardBookStyles = styled.li`
  width: 175px;

  div {
    width: 100%;
    height: 238px;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    display: block;
    unicode-bidi: isolate;
    box-shadow: 0px 0px 3px var(--whiteFixed);
    border-radius: 5px;
    margin-bottom: 10px;
    cursor: pointer;

    span {
      background-color: var(--brand1);
      display: inline-block;
      position: absolute;
      left: 0;
      top: 0;
      width: auto;
      height: auto;
      border-radius: 2px;
      padding: 10px 8px 10px 8px;
      text-transform: uppercase;
      line-height: 5px;
      font-size: 10px;
      font-weight: 600;
      text-align: center;
      margin-right: 7px;
      color: var(--whiteFixed);
      font-family: "IBM Plex Sans", sans-serif;
    }
  }
  img {
    max-width: 100%;
    height: auto;
    -webkit-transition: transform 0.5s, filter 0.5s;
    -moz-transition: transform 0.5s, filter 0.5s;
    -o-transition: transform 0.5s, filter 0.5s;
    transition: transform 0.5s, filter 0.5s;

    &:hover {
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -o-transform: scale(1.1);
      zoom: 1;
      -webkit-filter: brightness(0.7);
      filter: brightness(0.7);
    }
  }
  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: var(--whiteFixed);
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    font-family: "IBM Plex Sans", sans-serif;
    cursor: pointer;
    &:hover {
      transition: color 200ms ease, background-color 200ms ease;
      color: var(--brand1);
    }
  }
`;
