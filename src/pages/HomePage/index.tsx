import { CardBook } from "../../components/Book/Card";
import { ListBook } from "../../components/Book/List";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { HomePageStyles, ListHeading, Title1 } from "./styles";
import Pagination from "@mui/material/Pagination";
import { FaStar } from "react-icons/fa";
import { NavBar } from "../../components/NavBar";

export const HomePage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <HomePageStyles>
        <ListHeading>
          <FaStar />
          <Title1>ATUALIZADOS RECENTEMENTE</Title1>
        </ListHeading>
        <ListBook>
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
        <Pagination count={10} color="secondary" />
      </HomePageStyles>

      <Footer />
    </>
  );
};
