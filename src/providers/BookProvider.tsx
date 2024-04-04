import { createContext, ReactNode, useState } from "react";
import { bookAPI } from "../services/api";
import { toast } from "react-toastify";

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
}

export const BookContext = createContext({} as IBookContext);

const BookProvider = ({ children }: ListProvaiderProps) => {
  const tokenLocal = localStorage.getItem("@TOKEN");
  const [books, setBooks] = useState<IBook[]>([]);
  const [book, setBook] = useState<IBook | null>(null);
  const getBooks = async () => {
    try {
      const response = await bookAPI.get("books");
      setBooks(response.data);
    } catch (error) {
      toast.error("Algo deu errado, tente novamente mais tarde.");
      console.error(error);
    }
  };
  const getBook = async (bookId: string) => {
    try {
      const response = await bookAPI.get(`books/${bookId}`);
      setBook(response.data);
    } catch (error) {
      toast.error("Algo deu errado, tente novamente mais tarde.");
      console.error(error);
    }
  };
  const newRating = async (data: DataRating) => {
    try {
      await bookAPI.post(
        `books/${data.bookId}/assessments`,
        { rating: data.rating },
        {
          headers: {
            Authorization: `Bearer ${tokenLocal}`,
          },
        }
      );
      toast.success("Nota Adicionada com sucesso!");
    } catch (error) {
      toast.error("Algo deu errado, tente novamente mais tarde.");
      console.error(error);
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
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
