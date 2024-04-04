import { useContext } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";
import { BookContext, IBookCreate } from "../../providers/BookProvider";
import { NewBookContainer, NewBookPageStyles } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newSchema } from "./newSchema";
import { FormStyles } from "../../components/FormLogin/styles";

export const NewBookPage = () => {
  const { newBook } = useContext(BookContext);

  const onSubmit = (formData: IBookCreate) => {
    newBook(formData);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newSchema),
  });
  return (
    <>
      <Header />
      <NavBar />
      <NewBookPageStyles>
        <NewBookContainer>
          <FormStyles onSubmit={handleSubmit(onSubmit)}>
            <h2>Adicionar Livro</h2>
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              placeholder={"Título do livro"}
              id="title"
              {...register("title")}
            />
            <p>{errors.title?.message?.toString()}</p>
            <label htmlFor="author">Autor:</label>
            <input
              type="text"
              placeholder="Nome do Autor"
              id="author"
              {...register("author")}
            />
            <p>{errors.author?.message?.toString()}</p>
            <label htmlFor="description">Descrição:</label>
            <input
              type="text"
              placeholder="Descrição..."
              id="description"
              {...register("description")}
            />
            <p>{errors.description?.message?.toString()}</p>
            <label htmlFor="type">Tipo:</label>
            <input
              type="text"
              placeholder="Livro"
              id="type"
              {...register("type")}
            />
            <p>{errors.type?.message?.toString()}</p>
            <label htmlFor="cover">URL da Capa do livro:</label>
            <input
              type="text"
              placeholder="httphttps://www.suaurl.com"
              id="cover"
              {...register("cover")}
            />
            <p>{errors.cover?.message?.toString()}</p>
            <label htmlFor="launched_in">Ano de lançamento do livro:</label>
            <input
              type="text"
              placeholder="2009"
              id="launched_in"
              {...register("launched_in")}
            />
            <p>{errors.launched_in?.message?.toString()}</p>
            <label htmlFor="status">Status:</label>
            <input
              type="text"
              placeholder="Finalizado"
              id="status"
              {...register("status")}
            />
            <p>{errors.status?.message?.toString()}</p>
            <label htmlFor="genres">Gêneros:</label>
            <input
              type="text"
              placeholder="Ação, Aventura, Romance..."
              id="genres"
              {...register("genres")}
            />
            <p>{errors.genres?.message?.toString()}</p>
            <button>Adicionar</button>
          </FormStyles>
        </NewBookContainer>
      </NewBookPageStyles>
      <Footer />
    </>
  );
};
