import { Rating } from "@mui/material";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";
import {
  BookPageStyles,
  CommentTitle,
  ContainerBookInfo,
  ContainerBookTitle,
  ContainerSummary,
  ContainerSvg,
  DisqusContainer,
  DivRating,
  SummaryContent,
  SummaryImg,
  TextContainer,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { FaComments } from "react-icons/fa6";
import { FaBookmark, FaStar } from "react-icons/fa";
import DisqusComments from "../../components/DisqusComments";
import { Link, useParams } from "react-router-dom";
import { BookContext } from "../../providers/BookProvider";
import { reduceRating } from "../../utils/reduceRating";
import { AuthContext } from "../../providers/AuthProvider";
import { Loading } from "../../components/Loading";

export const BookPage = () => {
  const { getBook, book, newRating, loading } = useContext(BookContext);
  const { user } = useContext(AuthContext);
  const [value, setValue] = useState<number>(0);
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const { bookId } = useParams();
  useEffect(() => {
    const get = async () => {
      await getBook(bookId!);
    };
    get();
    setValue(reduceRating(book?.assessments));
  }, []);
  useEffect(() => {
    if (book) {
      if (book.user?.id === user?.id) {
        setIsOwner(true);
      }
    }
  }, [book]);

  return (
    <>
      <Header />
      <NavBar />
      <BookPageStyles>
        {loading ? (
          <Loading />
        ) : (
          <>
            <ContainerBookInfo>
              <ContainerBookTitle>
                <div>
                  <span className={`${book?.type}`}>{book?.type}</span>
                  <h1>{book?.title}</h1>
                </div>
                {isOwner ? <Link to={"edit"}>Editar</Link> : <></>}
              </ContainerBookTitle>
              <ContainerSummary>
                <SummaryImg>
                  <img src={book?.cover} alt="Capa do Livro" />
                </SummaryImg>
                <SummaryContent>
                  <DivRating>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue!);
                        newRating({ rating: newValue!, bookId: book!.id });
                      }}
                    />
                    <p>{value}</p>
                  </DivRating>
                  <TextContainer>
                    <h5>Avaliação</h5>
                    <span>
                      Média {book ? reduceRating(book.assessments) : ""} - Votos
                      totais : {book ? book.assessments.length : ""}
                    </span>
                  </TextContainer>
                  <TextContainer>
                    <h5>Visualizações</h5>
                    <span> {book?.views} Visualizações</span>
                  </TextContainer>
                  <TextContainer>
                    <h5>Gênero(s)</h5>
                    <span>{book?.genres.map((gen) => `${gen}, `)}</span>
                  </TextContainer>
                  <TextContainer>
                    <h5>Tipo</h5>
                    <span> {book?.type}</span>
                  </TextContainer>
                  <TextContainer>
                    <h5>Lançado em</h5>
                    <span> {book?.launched_in}</span>
                  </TextContainer>
                  <TextContainer>
                    <h5>Status</h5>
                    <span> {book?.status}</span>
                  </TextContainer>
                  <TextContainer className="containerSvg">
                    <ContainerSvg>
                      <a href="#comment">
                        <FaComments />
                      </a>
                      <p>Comentários</p>
                    </ContainerSvg>
                    <ContainerSvg className="bordernone">
                      <FaBookmark />
                      <p>0 Usuários favoritaram</p>
                    </ContainerSvg>
                    <FaBookmark />
                  </TextContainer>
                  <TextContainer>
                    <p>{book?.description}</p>
                  </TextContainer>
                </SummaryContent>
              </ContainerSummary>
            </ContainerBookInfo>

            <CommentTitle id="comment">
              <FaStar />
              <h4>COMENTÁRIOS</h4>
            </CommentTitle>
          </>
        )}
      </BookPageStyles>
      <DisqusContainer>
        <DisqusComments
          post={{
            id: "dsq-count-scr",
            title: "New Books",
          }}
        />
      </DisqusContainer>

      <Footer />
    </>
  );
};
