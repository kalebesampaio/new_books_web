import { createContext, ReactNode, useState } from "react";
import { bookAPI } from "../services/api";
import { toast } from "react-toastify";
import { IUser } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

interface ListProvaiderProps {
  children: ReactNode;
}
export interface Assessments {
  id: number;
  rating: number;
}

export interface IBook {
  id: string;
  title: string;
  author: string;
  description: string;
  type: string;
  views: number;
  cover: string;
  launched_in: string;
  isActive: string;
  status: string;
  genres: string[];
  assessments: Assessments[];
  user?: IUser;
}

export interface IBookCreate {
  title?: string;
  author?: string;
  description?: string;
  type?: string;
  cover?: string;
  launched_in?: string;
  status?: string;
  genres?: string;
}

interface DataRating {
  bookId?: string;
  rating?: number;
}

export interface IBookContext {
  getBooks: () => void;
  books: IBook[];
  getBook: (bookId: string) => void;
  book: IBook | null;
  newRating: (data: DataRating) => void;
  patchBook: (data: IBookCreate) => void;
  newBook: (data: IBookCreate) => void;
  loading: boolean;
  err: boolean;
}

export const BookContext = createContext({} as IBookContext);

const BookProvider = ({ children }: ListProvaiderProps) => {
  const tokenLocal = localStorage.getItem("@TOKEN");
  const [books, setBooks] = useState<IBook[]>([]);
  const [book, setBook] = useState<IBook | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const authHeader = { headers: { Authorization: `Bearer ${tokenLocal}` } };

  const navigate = useNavigate();

  const getBooks = async () => {
    try {
      setLoading(true);
      const response = await bookAPI.get("books");
      setLoading(false);
      setErr(false);
      setBooks(response.data);
    } catch (error) {
      setLoading(false);
      setErr(true);
      toast.error("Algo deu errado, tente novamente mais tarde.");
      console.error(error);
    }
  };
  const getBook = async (bookId: string) => {
    try {
      setLoading(true);
      const response = await bookAPI.get(`books/${bookId}`);
      setBook(response.data);
      setErr(false);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErr(true);
      toast.error("Algo deu errado, tente novamente mais tarde.");
      console.error(error);
    }
  };
  const newRating = async (data: DataRating) => {
    try {
      setLoading(true);
      await bookAPI.post(
        `books/${data.bookId}/assessments`,
        { rating: data.rating },
        {
          headers: {
            Authorization: `Bearer ${tokenLocal}`,
          },
        }
      );
      setLoading(false);
      setErr(false);
      toast.success("Nota Adicionada com sucesso!");
    } catch (error) {
      setLoading(false);
      setErr(true);
      toast.error("Algo deu errado, tente novamente mais tarde.");
      console.error(error);
    }
  };

  const patchBook = async (payload: IBookCreate) => {
    try {
      setLoading(true);
      const res = await bookAPI.patch(
        `books/${book?.id}`,
        {
          ...payload,
          genres: payload.genres?.trim().split(", "),
        },
        authHeader
      );
      toast.success("Livro atualizado com sucesso!");
      setLoading(false);
      navigate(`/book/${res.data.id}`);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Não foi possível atualizar o livro");
    }
  };

  const newBook = async (payload: IBookCreate) => {
    try {
      setLoading(true);
      const res = await bookAPI.post(
        `books`,
        {
          ...payload,
          genres: payload.genres?.trim().split(", "),
        },
        authHeader
      );
      setLoading(false);
      toast.success("Livro criado com sucesso!");
      navigate(`/book/${res.data.id}`);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Não foi possível criar o livro");
    }
  };

  return (
    <BookContext.Provider
      value={{
        getBooks,
        books,
        getBook,
        book,
        newRating,
        patchBook,
        newBook,
        loading,
        err,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
