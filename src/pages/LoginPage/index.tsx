import {
  ContainerForm,
  ContainerImg,
  LinkReturn,
  LoginContainer,
  LoginImg,
  LoginStyles,
  NavReturn,
} from "./styles";
import background from "../../../public/background.png";
import { IoIosArrowBack } from "react-icons/io";
import { FormStyles } from "../../components/FormLogin/styles";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [viewPass, setViewPass] = useState(false);
  const navigate = useNavigate();
  return (
    <LoginStyles>
      <NavReturn>
        <LinkReturn
          onClick={() => {
            if (window.history.state && window.history.state.idx > 0) {
              navigate(-1);
            } else {
              navigate("/", { replace: true });
            }
          }}
        >
          <IoIosArrowBack /> Voltar
        </LinkReturn>
      </NavReturn>
      <LoginContainer>
        <ContainerImg>
          <LoginImg src={background} alt="" />
          <span>
            Imagem de{" "}
            <a href="https://www.freepik.com/vectors/background">Freepik</a>
          </span>
        </ContainerImg>
        <ContainerForm>
          <FormStyles>
            <h2>Iniciar sessão</h2>
            <label htmlFor="email">Email *</label>
            <input type="text" placeholder="Seu email" id="email" />
            <label htmlFor="password">Senha *</label>
            <section>
              {viewPass ? (
                <>
                  <FaRegEyeSlash onClick={() => setViewPass(!viewPass)} />
                  <input type="text" placeholder="Sua senha" id="password" />
                </>
              ) : (
                <>
                  <FaRegEye onClick={() => setViewPass(!viewPass)} />
                  <input
                    type="password"
                    placeholder="Sua senha"
                    id="password"
                  />
                </>
              )}
            </section>
            <button>Entrar</button>
            <div>
              <Link to={"/"}>Esqueceu a senha?</Link>
              <Link to={"/register"}>Não tem conta?</Link>
            </div>
          </FormStyles>
        </ContainerForm>
      </LoginContainer>
    </LoginStyles>
  );
};
