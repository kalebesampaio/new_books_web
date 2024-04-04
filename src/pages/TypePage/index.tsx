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
import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../providers/BookProvider";
import { Loading } from "../../components/Loading";

export const TypePage = () => {
  const { getBooks, books, loading } = useContext(BookContext);
  const [filter, setFilter] = useState<string>("");
  const [total, setTotal] = useState<number>(books.length);
  useEffect(() => {
    getBooks();
  }, []);
  useEffect(() => {
    if (filter) {
      setTotal(books.filter((book) => book.type === filter).length);
    } else {
      setTotal(books.length);
    }
  }, [filter]);
  return (
    <>
      <Header />
      <NavBar />
      <TypePageStyles>
        {loading ? (
          <Loading />
        ) : (
          <>
            <TypeTitleDiv>
              <h5>Tipos</h5>
            </TypeTitleDiv>
            <List>
              <Card title="Todos" change={setFilter} />
              <Card title="Manga" change={setFilter} />
              <Card title="Manhwa" change={setFilter} />
              <Card title="Manhua" change={setFilter} />
              <Card title="Conto" change={setFilter} />
              <Card title="One Shot" change={setFilter} />
              <Card title="Religiosos" change={setFilter} />
              <Card title="Livro" change={setFilter} />
              <Card title="Livros didáticos" change={setFilter} />
              <Card title="Livros infantis" change={setFilter} />
              <Card title="Livros de poesia" change={setFilter} />
              <Card title="Gibis" change={setFilter} />
              <Card title="Biografias e autobiografias" change={setFilter} />
              <Card title="Autoajuda" change={setFilter} />
              <Card title="Ficção" change={setFilter} />
              <Card title="True crime" change={setFilter} />
            </List>
            <Title1>Livros</Title1>
            <ListBook>
              <ListHeading>
                <FaStar />
                <Title1>{total} RESULTS</Title1>
              </ListHeading>
              {books ? (
                filter ? (
                  books.map((book) => {
                    if (book.type == filter) {
                      return (
                        <CardBook
                          title={book.title}
                          type={book.type}
                          cover={book.cover}
                          key={book.id}
                          id={book.id}
                        />
                      );
                    }
                  })
                ) : (
                  books.map((book) => (
                    <CardBook
                      title={book.title}
                      type={book.type}
                      cover={book.cover}
                      key={book.id}
                      id={book.id}
                    />
                  ))
                )
              ) : (
                <></>
              )}
            </ListBook>
          </>
        )}
      </TypePageStyles>
      <Footer />
    </>
  );
};
