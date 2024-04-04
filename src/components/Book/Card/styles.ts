import styled from "styled-components";

export const CardBookStyles = styled.li`
  width: 175px;
  height: 294.38px;
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
    }
    .Manga {
      background-color: var(--random1);
    }
    .Manhwa {
      background-color: var(--random3);
    }
    .Manhua {
      background-color: var(--random4);
    }
    .Conto {
      background-color: var(--random6);
    }
    .Livro {
      background-color: var(--random7);
    }
    .Gibis {
      background-color: var(--random9);
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
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 0.5rem;

    cursor: pointer;
    a {
      color: var(--whiteFixed);
      &:hover {
        transition: color 200ms ease, background-color 200ms ease;
        color: var(--brand1);
      }
    }
  }
`;

export const AsideCardBookStyles = styled.div`
  border-radius: 15px;
  border-bottom: 1px solid var(--grey11);
  padding-bottom: 20px;
  margin-bottom: 20px;
  box-sizing: border-box;

  figure {
    width: 25%;
    overflow: hidden;
    float: left;
    margin-right: 20px;
    max-width: 65px;
    border-radius: 5px;

    a {
      img {
        max-width: 100%;
        height: auto;
        border-style: none;
        vertical-align: middle;
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
    }
  }

  div {
    overflow: hidden;
    h5 {
      display: block;
      font-size: 12px;
      font-weight: 600;
      margin-top: 0;
      line-height: 1.2;
      a {
        color: var(--grey12);
        &:hover {
          transition: color 200ms ease, background-color 200ms ease;
          color: var(--brand1);
        }
      }
    }
    p {
      display: block;
      font-size: 11px;
      font-weight: 600;
      margin-top: 0;
      line-height: 1.2;
      margin-block-start: 1.67em;
      margin-block-end: 1.67em;
      color: var(--grey12);
    }
    span {
      font-size: 1.3rem;
    }
  }
`;
