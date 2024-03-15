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

export const LoginPage = () => {
  return (
    <LoginStyles>
      <NavReturn>
        <LinkReturn>
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
            <input type="password" placeholder="Sua senha" id="password" />
            <button>Entrar</button>
            <div>
              <a href="">Esqueceu a senha?</a>
              <a href="">Não tem conta?</a>
            </div>
          </FormStyles>
        </ContainerForm>
      </LoginContainer>
    </LoginStyles>
  );
};
