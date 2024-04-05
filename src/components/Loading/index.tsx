import { LoadingStyles } from "./styles";
import Img from "../../../public/loading.svg";

export const Loading = () => {
  return (
    <LoadingStyles>
      <img src={Img} alt="" />
    </LoadingStyles>
  );
};
