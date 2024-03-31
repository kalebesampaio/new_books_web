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
import { useState } from "react";
import { FaComments } from "react-icons/fa6";
import { FaBookmark, FaStar } from "react-icons/fa";
import DisqusComments from "../../components/DisqusComments";

export const BookPage = () => {
  const [value, setValue] = useState<number | null>(4.5);
  return (
    <>
      <Header />
      <NavBar />
      <BookPageStyles>
        <ContainerBookInfo>
          <ContainerBookTitle>
            <span>MANHUA</span>
            <h1>Liberte Aquela Bruxa</h1>
          </ContainerBookTitle>
          <ContainerSummary>
            <SummaryImg>
              <img
                src="https://cover.nexoscans.com/wp-content/uploads/2022/05/Release-That-Witch.jpg"
                alt=""
              />
            </SummaryImg>
            <SummaryContent>
              <DivRating>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  precision={0.5}
                />
                <p>{value}</p>
              </DivRating>
              <TextContainer>
                <h5>Avaliação</h5>
                <span>Média 4.5 / 5 - Votos totais : 302</span>
              </TextContainer>
              <TextContainer>
                <h5>Visualizações</h5>
                <span> 3.9M Visualizações</span>
              </TextContainer>
              <TextContainer>
                <h5>Gênero(s)</h5>
                <span>
                  Ação, Aventura, Drama, Fantasia, Física, Harém, Isekai,
                  Shounen, Sobrenatural, Sobrevivência
                </span>
              </TextContainer>
              <TextContainer>
                <h5>Tipo</h5>
                <span> Manhua</span>
              </TextContainer>
              <TextContainer>
                <h5>Lançado em</h5>
                <span> 2019</span>
              </TextContainer>
              <TextContainer>
                <h5>Status</h5>
                <span> Em lançamento</span>
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
                  <p>2.9K Usuários favoritaram</p>
                </ContainerSvg>
                <FaBookmark />
              </TextContainer>
              <TextContainer>
                <p>
                  Um engenheiro reencarnou em outro mundo e se tornou um
                  príncipe. Esse lugar se assemelha muito à Idade Média
                  Europeia, mas, ao mesmo tempo parece ser diferente. Bruxas
                  existem de verdade e até mesmo possuem poderes mágicos!
                  Poderes mágicos são forças de produção! Salvem as bruxas,
                  libertem as forças de produção! Abram o mapa, lutem contra
                  demônios, acabem com as conspirações, escalem a árvore da
                  ciência e tecnologia e abram o caminho para o “farming
                  hardcore”!
                </p>
              </TextContainer>
            </SummaryContent>
          </ContainerSummary>
        </ContainerBookInfo>

        <CommentTitle id="comment">
          <FaStar />
          <h4>COMENTÁRIOS</h4>
        </CommentTitle>
      </BookPageStyles>
      <DisqusContainer>
        <DisqusComments
          post={{
            id: "dsq-count-scr",
            title: "//newbooks-1.disqus.com/count.js",
          }}
        />
      </DisqusContainer>

      <Footer />
    </>
  );
};
