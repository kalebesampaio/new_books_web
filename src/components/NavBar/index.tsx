import { Link } from "react-router-dom";
import { ButtonNav, Flex, NavItem, NavList, NavbarStyler } from "./styles";
import { CiBookmark } from "react-icons/ci";
import { IoClose, IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { useMedia } from "use-media";
import { useState } from "react";
import { MdMoreVert } from "react-icons/md";

export const NavBar = () => {
  const isWide = useMedia({ maxWidth: "600px" });
  const [open, setOpen] = useState(false);
  const OpenMenu = () => {
    setOpen(!open);
  };
  return (
    <NavbarStyler>
      {isWide ? (
        <ButtonNav
          onClick={OpenMenu}
          aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
        >
          {!open ? <MdMoreVert /> : <IoClose />}
        </ButtonNav>
      ) : (
        <NavList>
          <NavItem>
            <Link to={"/"}>Meus Favoritos</Link>
            <CiBookmark />
          </NavItem>
          <NavItem>
            <Link to={"/"}>Configurações de usuário</Link>
            <IoSettingsOutline />
          </NavItem>
          <NavItem>
            <Link to={"/"}>Desconectar</Link>
            <IoMdLogOut />
          </NavItem>
        </NavList>
      )}

      {isWide ? (
        open && (
          <Flex>
            <NavList>
              <NavItem>
                <Link to={"/"}>Meus Favoritos</Link>
                <CiBookmark />
              </NavItem>
              <NavItem>
                <Link to={"/"}>Configurações de usuário</Link>
                <IoSettingsOutline />
              </NavItem>
              <NavItem>
                <Link to={"/"}>Desconectar</Link>
                <IoMdLogOut />
              </NavItem>
            </NavList>
          </Flex>
        )
      ) : (
        <> </>
      )}
    </NavbarStyler>
  );
};
