import { Link } from "react-router-dom";
import { ButtonNav, Flex, NavItem, NavList, NavbarStyler } from "./styles";
import { IoClose, IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut, IoMdLogIn } from "react-icons/io";
import { useMedia } from "use-media";
import { useContext, useState } from "react";
import { MdMoreVert } from "react-icons/md";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUserPlus } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";

export const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
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
      ) : user ? (
        <NavList>
          <NavItem>
            <Link to={"/book/new"}>Adicionar Livro</Link>
            <FaBookOpen />
          </NavItem>
          <NavItem>
            <Link to={"/user/settings"}>Configurações de usuário</Link>
            <IoSettingsOutline />
          </NavItem>
          <NavItem>
            <button onClick={() => logout()}>Desconectar</button>
            <IoMdLogOut />
          </NavItem>
        </NavList>
      ) : (
        <NavList>
          <NavItem>
            <Link to={"/login"}>Login</Link>
            <IoMdLogIn />
          </NavItem>
          <NavItem>
            <Link to={"/register"}>Cadastrar</Link>
            <FaUserPlus />
          </NavItem>
        </NavList>
      )}

      {isWide ? (
        open ? (
          user ? (
            <Flex>
              <NavList>
                <NavItem>
                  <Link to={"/book/new"}>Adicionar Livro</Link>
                  <FaBookOpen />
                </NavItem>
                <NavItem>
                  <Link to={"/user/settings"}>Configurações de usuário</Link>
                  <IoSettingsOutline />
                </NavItem>
                <NavItem>
                  <button onClick={() => logout()}>Desconectar</button>
                  <IoMdLogOut />
                </NavItem>
              </NavList>
            </Flex>
          ) : (
            <Flex>
              <NavList>
                <NavItem>
                  <Link to={"/login"}>Login</Link>
                  <IoMdLogIn />
                </NavItem>
                <NavItem>
                  <Link to={"/register"}>Cadastrar</Link>
                  <FaUserPlus />
                </NavItem>
              </NavList>
            </Flex>
          )
        ) : (
          <></>
        )
      ) : (
        <> </>
      )}
    </NavbarStyler>
  );
};
