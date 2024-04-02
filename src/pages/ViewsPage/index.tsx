import { FaStar } from "react-icons/fa";
import { ListBook } from "../../components/Book/List";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";
import { ListHeading } from "../HomePage/styles";
import { ViewsPageStyles } from "./styles";
import { Title1 } from "../TypePage/styles";
import { CardBook } from "../../components/Book/Card";
import { useContext, useEffect } from "react";
import { BookContext } from "../../providers/BookProvider";
import { mostViewed } from "../../utils/mostViewed";

export const ViewsPage = () => {
  const { getBooks, books } = useContext(BookContext);
  useEffect(() => {
    getBooks();
  }, []);
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
          {books ? (
            mostViewed(books).map((book) => (
              <CardBook
                title={book.title}
                type={book.type}
                cover={book.cover}
                key={book.id}
                id={book.id}
              />
            ))
          ) : (
            <></>
          )}
        </ListBook>
      </ViewsPageStyles>
      <Footer />
    </>
  );
};
