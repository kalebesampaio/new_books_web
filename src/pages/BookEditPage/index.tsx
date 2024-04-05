import { useContext } from "react";
import { Footer } from "../../components/Footer";
import { FormStyles } from "../../components/FormLogin/styles";
import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";
import { BookContext, IBookCreate } from "../../providers/BookProvider";
import { BookEditContainer, BookEditPageStyles } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editSchema } from "./editSchema";

export const BookEditPage = () => {
  const { book, patchBook } = useContext(BookContext);

  const onSubmit = (formData: IBookCreate) => {
    formData.title ? formData : delete formData.title;
    formData.author ? formData : delete formData.author;
    formData.description ? formData : delete formData.description;
    formData.type ? formData : delete formData.type;
    formData.cover ? formData : delete formData.cover;
    formData.launched_in ? formData : delete formData.launched_in;
    formData.status ? formData : delete formData.status;
    formData.genres ? formData : delete formData.genres;
    patchBook(formData);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editSchema),
  });
  return (
    <>
      <Header />
      <NavBar />
      <BookEditPageStyles>
        <BookEditContainer>
          <FormStyles onSubmit={handleSubmit(onSubmit)}>
            <h2>Atualizar Livro</h2>
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              placeholder={book?.title}
              id="title"
              {...register("title")}
            />
            <p>{errors.title?.message?.toString()}</p>
            <label htmlFor="author">Autor:</label>
            <input
              type="text"
              placeholder={book?.author}
              id="author"
              {...register("author")}
            />
            <p>{errors.author?.message?.toString()}</p>
            <label htmlFor="description">Descrição:</label>
            <input
              type="text"
              placeholder={book?.description}
              id="description"
              {...register("description")}
            />
            <p>{errors.description?.message?.toString()}</p>
            <label htmlFor="type">Tipo:</label>
            <input
              type="text"
              placeholder={book?.type}
              id="type"
              {...register("type")}
            />
            <p>{errors.type?.message?.toString()}</p>
            <label htmlFor="cover">URL da Capa do livro:</label>
            <input
              type="text"
              placeholder={book?.cover}
              id="cover"
              {...register("cover")}
            />
            <p>{errors.cover?.message?.toString()}</p>
            <label htmlFor="launched_in">Data de lançamento do livro:</label>
            <input
              type="text"
              placeholder={book?.launched_in}
              id="launched_in"
              {...register("launched_in")}
            />
            <p>{errors.launched_in?.message?.toString()}</p>
            <label htmlFor="status">Status:</label>
            <input
              type="text"
              placeholder={book?.status}
              id="status"
              {...register("status")}
            />
            <p>{errors.status?.message?.toString()}</p>
            <label htmlFor="genres">Gêneros:</label>
            <input
              type="text"
              placeholder={book?.genres.toString()}
              id="genres"
              {...register("genres")}
            />
            <p>{errors.genres?.message?.toString()}</p>
            <button>Atualizar</button>
          </FormStyles>
        </BookEditContainer>
      </BookEditPageStyles>
      <Footer />
    </>
  );
};
