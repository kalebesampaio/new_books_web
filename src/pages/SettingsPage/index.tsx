import { useContext, useState } from "react";
import { Footer } from "../../components/Footer";
import { FormStyles } from "../../components/FormLogin/styles";
import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";
import { SettingsContainer, SettingsPageStyles } from "./styles";
import { AuthContext, IUserRegister } from "../../providers/AuthProvider";
import { settingSchema } from "./settingSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export const SettingsPage = () => {
  const [viewPass, setViewPass] = useState(false);
  const { patchUser, user } = useContext(AuthContext);

  const onSubmit = (formData: IUserRegister) => {
    formData.name ? formData : delete formData.name;
    formData.email ? formData : delete formData.email;
    formData.birthday ? formData : delete formData.birthday;
    formData.password ? formData : delete formData.password;
    patchUser(formData);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(settingSchema),
  });
  return (
    <>
      <Header />
      <NavBar />
      <SettingsPageStyles>
        <SettingsContainer>
          <FormStyles onSubmit={handleSubmit(onSubmit)}>
            <h2>Atualizar Usuário</h2>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              placeholder={user?.name}
              id="name"
              {...register("name")}
            />
            <p>{errors.name?.message?.toString()}</p>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder={user?.email}
              id="email"
              {...register("email")}
            />
            <p>{errors.email?.message?.toString()}</p>
            <label htmlFor="birthday">Data de nascimento:</label>
            <input
              type="text"
              placeholder={user?.birthday}
              id="birthday"
              {...register("birthday")}
            />
            <p>{errors.birthday?.message?.toString()}</p>
            <label htmlFor="password">Senha:</label>
            <section>
              {viewPass ? (
                <>
                  <FaRegEyeSlash onClick={() => setViewPass(!viewPass)} />
                  <input
                    type="text"
                    placeholder="Sua senha"
                    id="password"
                    {...register("password")}
                  />
                  <p>{errors.password?.message?.toString()}</p>
                </>
              ) : (
                <>
                  <FaRegEye onClick={() => setViewPass(!viewPass)} />
                  <input
                    type="password"
                    placeholder="Sua senha"
                    id="password"
                    {...register("password")}
                  />
                  <p>{errors.password?.message?.toString()}</p>
                </>
              )}
            </section>

            <button>Atualizar</button>
          </FormStyles>
        </SettingsContainer>
      </SettingsPageStyles>
      <Footer />
    </>
  );
};
