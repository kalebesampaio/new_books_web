import { FaStar } from "react-icons/fa";
import { ListBook } from "../../components/Book/List";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { List } from "../../components/List";
import { NavBar } from "../../components/NavBar";
import { ListHeading } from "../HomePage/styles";
import { GenresPageStyles, GenresTitleDiv, Title1 } from "./styles";
import { CardBook } from "../../components/Book/Card";
import { Footer } from "../../components/Footer";

export const GenresPage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <GenresPageStyles>
        <GenresTitleDiv>
          <h5>Tipos</h5>
        </GenresTitleDiv>
        <List>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </List>
        <Title1>Livros</Title1>
        <ListBook>
          <ListHeading>
            <FaStar />
            <Title1>272 RESULTS</Title1>
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
      </GenresPageStyles>
      <Footer />
    </>
  );
};
