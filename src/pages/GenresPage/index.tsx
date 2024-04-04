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
import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../providers/BookProvider";
import { Loading } from "../../components/Loading";

export const GenresPage = () => {
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
      <GenresPageStyles>
        {loading ? (
          <Loading />
        ) : (
          <>
            <GenresTitleDiv>
              <h5>GÊNEROS</h5>
            </GenresTitleDiv>
            <List>
              <Card title="Todos" change={setFilter} />
              <Card title="Ação" change={setFilter} />
              <Card title="Adulto" change={setFilter} />
              <Card title="Artes Marciais" change={setFilter} />
              <Card title="Aventura" change={setFilter} />
              <Card title="Bizarro" change={setFilter} />
              <Card title="Comédia" change={setFilter} />
              <Card title="Comida" change={setFilter} />
              <Card title="Culinária" change={setFilter} />
              <Card title="Demônios" change={setFilter} />
              <Card title="Distopia" change={setFilter} />
              <Card title="Doujinshi" change={setFilter} />
              <Card title="Drama" change={setFilter} />
              <Card title="Esporte" change={setFilter} />
              <Card title="Fantasia" change={setFilter} />
              <Card title="Física" change={setFilter} />
              <Card title="Guerra" change={setFilter} />
              <Card title="Harém" change={setFilter} />
              <Card title="Histórico" change={setFilter} />
              <Card title="Homenagem" change={setFilter} />
              <Card title="Horror" change={setFilter} />
              <Card title="Isekai" change={setFilter} />
              <Card title="Jogos" change={setFilter} />
              <Card title="Josei" change={setFilter} />
              <Card title="Kamen Rider" change={setFilter} />
              <Card title="Magia" change={setFilter} />
              <Card title="Mecha" change={setFilter} />
              <Card title="Médico" change={setFilter} />
              <Card title="Medieval" change={setFilter} />
              <Card title="Mistério" change={setFilter} />
              <Card title="Mitologia" change={setFilter} />
              <Card title="Ninja" change={setFilter} />
              <Card title="Non-sense" change={setFilter} />
              <Card title="Novel" change={setFilter} />
              <Card title="Obra Nacional" change={setFilter} />
              <Card title="One Shot" change={setFilter} />
              <Card title="Psicológico" change={setFilter} />
              <Card title="Reencarnação" change={setFilter} />
              <Card title="Regressão" change={setFilter} />
              <Card title="Romanece" change={setFilter} />
              <Card title="Saint Seiya" change={setFilter} />
              <Card title="Sci-fi" change={setFilter} />
              <Card title="Seinen" change={setFilter} />
              <Card title="Shoujo" change={setFilter} />
              <Card title="Shoujo Ai" change={setFilter} />
              <Card title="Shounen" change={setFilter} />
              <Card title="Shounen BL" change={setFilter} />
              <Card title="Slice of Life" change={setFilter} />
              <Card title="Sobrenatural" change={setFilter} />
              <Card title="Sobrevivência" change={setFilter} />
              <Card title="Stardew Valley" change={setFilter} />
              <Card title="Suspense" change={setFilter} />
              <Card title="Tokusatsu" change={setFilter} />
              <Card title="Torre" change={setFilter} />
              <Card title="Tragédia" change={setFilter} />
              <Card title="Ultraman" change={setFilter} />
              <Card title="Vampiro" change={setFilter} />
              <Card title="Viagem no tempo" change={setFilter} />
              <Card title="Vida Escolar" change={setFilter} />
              <Card title="Wuxia" change={setFilter} />
              <Card title="Yaoi" change={setFilter} />
              <Card title="Yuri" change={setFilter} />
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
                    console.log(
                      book.genres.filter((gen) => gen === filter)
                        ? "sim"
                        : "não"
                    );
                    if (book.genres.filter((gen) => gen === filter)) {
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
      </GenresPageStyles>
      <Footer />
    </>
  );
};
