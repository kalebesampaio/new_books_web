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
import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../providers/BookProvider";
import { pageFunc } from "../../utils/pageFunc";
import { numberPage } from "../../utils/numberPage";
import { mostViewed } from "../../utils/mostViewed";

export const HomePage = () => {
  const { getBooks, books } = useContext(BookContext);
  const [sli, setSli] = useState<number[]>([0, 9]);

  useEffect(() => {
    getBooks();
  }, []);

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
            {books ? (
              books
                .slice(sli[0], sli[1])
                .map((book) => (
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
          <Aside>
            <AsideDivTitle>
              <AsideTitle>Livros Mais Lidos</AsideTitle>
            </AsideDivTitle>
            {books ? (
              mostViewed(books)
                .slice(0, 5)
                .map((book) => (
                  <AsideCardBook
                    title={book.title}
                    assessments={book.assessments}
                    cover={book.cover}
                    key={book.id}
                    views={book.views}
                    id={book.id}
                  />
                ))
            ) : (
              <></>
            )}
            <AsideFooter>
              <Link to="/">Mostrar os mais lidos</Link>
            </AsideFooter>
          </Aside>
        </HomeContainer>
        <Pagination
          count={numberPage(books)}
          color="secondary"
          onChange={(e, page) => {
            e.preventDefault();
            setSli(pageFunc(page));
          }}
        />
      </HomePageStyles>

      <Footer />
    </>
  );
};
