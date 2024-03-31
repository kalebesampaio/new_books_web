import { FaStar } from "react-icons/fa";
import { ListBook } from "../../components/Book/List";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { List } from "../../components/List";
import { NavBar } from "../../components/NavBar";
import { ListHeading } from "../HomePage/styles";
import { Title1, TypePageStyles, TypeTitleDiv } from "./styles";
import { CardBook } from "../../components/Book/Card";

export const TypePage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <TypePageStyles>
        <TypeTitleDiv>
          <h5>Tipos</h5>
        </TypeTitleDiv>
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
      </TypePageStyles>
      <Footer />
    </>
  );
};
