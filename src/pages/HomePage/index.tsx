import { AsideCardBook, CardBook } from "../../components/Book/Card";
import { ListBook } from "../../components/Book/List";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import {
  Aside,
  AsideDivTitle,
  AsideFooter,
  AsideTitle,
  HomeContainer,
  HomePageStyles,
  ListHeading,
  Title1,
} from "./styles";
import Pagination from "@mui/material/Pagination";
import { FaStar } from "react-icons/fa";
import { NavBar } from "../../components/NavBar";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <HomePageStyles>
        <HomeContainer>
          <ListBook>
            <ListHeading>
              <FaStar />
              <Title1>ATUALIZADOS RECENTEMENTE</Title1>
            </ListHeading>
            <CardBook />
            <CardBook />
            <CardBook />
            <CardBook />
            <CardBook />
            <CardBook />
            <CardBook />
            <CardBook />
            <CardBook />
            <CardBook />
            <CardBook />
            <CardBook />
            <CardBook />
            <CardBook />
            <CardBook />
          </ListBook>
          <Aside>
            <AsideDivTitle>
              <AsideTitle>Mais Lidos Da Semana</AsideTitle>
            </AsideDivTitle>
            <AsideCardBook />
            <AsideCardBook />
            <AsideCardBook />
            <AsideCardBook />
            <AsideFooter>
              <Link to="/">Mostrar os mais lidos</Link>
            </AsideFooter>
          </Aside>
        </HomeContainer>

        <Pagination count={10} color="secondary" />
      </HomePageStyles>

      <Footer />
    </>
  );
};
