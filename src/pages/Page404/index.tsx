import { Page404Styles } from "./styles";
import Logo from "../../../public/404.svg";
import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";

export const Page404 = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Page404Styles>
        <img src={Logo} alt="Página não encontrada" />
      </Page404Styles>
      <Footer />
    </>
  );
};
