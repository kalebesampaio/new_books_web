import { FaStar } from "react-icons/fa";
import { ListBook } from "../../components/Book/List";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";
import { ListHeading } from "../HomePage/styles";
import { ViewsPageStyles } from "./styles";
import { Title1 } from "../TypePage/styles";
import { CardBook } from "../../components/Book/Card";

export const ViewsPage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <ViewsPageStyles>
        <ListBook>
          <ListHeading>
            <FaStar />
            <Title1>Mais Visualizações</Title1>
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
      </ViewsPageStyles>
      <Footer />
    </>
  );
};
