import { useState } from "react";
import useMedia from "use-media";
import Logo from "../../../public/logo.png";
import {
  ButtonHeader,
  Flex,
  HeaderContainer,
  HeaderMobileArea,
  HeaderStyles,
  LogoTipo,
  NavbarLinks,
  LogoTipoImg,
} from "./styles";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export interface MenuButtonOpen {
  open: boolean;
  setOpen: (value: boolean) => void;
}
export const Header = () => {
  const isWide = useMedia({ maxWidth: "991px" });
  const [open, setOpen] = useState(false);

  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <HeaderStyles>
      <HeaderContainer>
        <HeaderMobileArea>
          <LogoTipo>
            <Link to={"/"}>
              <LogoTipoImg src={Logo} alt="Logo" />
            </Link>
          </LogoTipo>
          {isWide && (
            <ButtonHeader
              onClick={OpenMenu}
              aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
            >
              {!open ? <FaBars /> : <IoClose />}
            </ButtonHeader>
          )}
        </HeaderMobileArea>
        <Flex>{isWide ? open && <NavLinks /> : <NavLinks />}</Flex>
      </HeaderContainer>
    </HeaderStyles>
  );
};

export const NavLinks = (): JSX.Element => {
  return (
    <NavbarLinks>
      <Link to={`/`}>Início</Link>
      <Link to={`/views`}>Mais Lidos</Link>
      <Link to={`/type`}>Tipos</Link>
      <Link to={`/genres`}>Gêneros</Link>
    </NavbarLinks>
  );
};
