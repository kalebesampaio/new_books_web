import { ErroComponentStyles } from "./styles";
import { BiError } from "react-icons/bi";

export const ErroComponent = () => {
  const pathname = window.location.pathname;
  return (
    <ErroComponentStyles>
      <div>
        <BiError />
        <h4>
          Algo deu errado... <a href={pathname}> Tente Novamente</a> mais tarde.
        </h4>
      </div>
      <span>Se o problema persistir tente novamente em alguns minutos.</span>
    </ErroComponentStyles>
  );
};
