import { IoIosArrowBack } from "react-icons/io";
import {
  ContainerForm,
  ContainerImg,
  LinkReturn,
  LoginImg,
  NavReturn,
} from "../LoginPage/styles";
import { RegisterContainer, RegisterStyles } from "./styles";
import { FormStyles } from "../../components/FormLogin/styles";
import background from "../../../public/backgroundRegister.jpg";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const [viewPass, setViewPass] = useState(false);
  const [viewConfirm, setViewConfirm] = useState(false);
  const navigate = useNavigate();
  return (
    <RegisterStyles>
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
      <RegisterContainer>
        <ContainerImg>
          <LoginImg src={background} alt="" />
          <span>
            Imagem de{" "}
            <a href="https://www.freepik.com/vectors/background">Freepik</a>
          </span>
        </ContainerImg>
        <ContainerForm>
          <FormStyles>
            <h2>Cadastro</h2>
            <label htmlFor="name">Nome:</label>
            <input type="text" placeholder="Seu nome" id="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder="Seu email" id="email" />
            <label htmlFor="birthday">Data de nascimento:</label>
            <input type="text" placeholder="00/00/0000" id="birthday" />
            <label htmlFor="password">Senha:</label>
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
            <label htmlFor="confirm-password">Confirmar senha:</label>
            <section>
              {viewConfirm ? (
                <>
                  <FaRegEyeSlash onClick={() => setViewConfirm(!viewConfirm)} />
                  <input
                    type="text"
                    placeholder="Confirmar senha"
                    id="confirm-password"
                  />
                </>
              ) : (
                <>
                  <FaRegEye onClick={() => setViewConfirm(!viewConfirm)} />
                  <input
                    type="password"
                    placeholder="Confirmar senha"
                    id="confirm-password"
                  />
                </>
              )}
            </section>

            <button>Finalizar cadastro</button>
            <div>
              <Link to={"/login"}>Já tem conta?</Link>
            </div>
          </FormStyles>
        </ContainerForm>
      </RegisterContainer>
    </RegisterStyles>
  );
};
