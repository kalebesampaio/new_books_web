import {
  ButtonFooter,
  FooterContainer,
  FooterStyles,
  FooterText,
} from "./styles";
import { IoIosArrowUp } from "react-icons/io";

export const Footer = () => {
  return (
    <FooterStyles>
      <FooterContainer>
        <FooterText>© 2024 - Todos os direitos reservados.</FooterText>
        <ButtonFooter>
          <IoIosArrowUp />
        </ButtonFooter>
      </FooterContainer>
    </FooterStyles>
  );
};
