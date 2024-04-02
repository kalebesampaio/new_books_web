import { createContext, ReactNode, useState } from "react";
import { bookAPI } from "../services/api";
import { toast } from "react-toastify";

interface ListProvaiderProps {
  children: ReactNode;
}
interface Assessments {
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

export interface IBookContext {
  getBooks: () => void;
  books: IBook[];
  getBook: (bookId: string) => void;
  book: IBook | null;
}

export const BookContext = createContext({} as IBookContext);

const BookProvider = ({ children }: ListProvaiderProps) => {
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

  return (
    <BookContext.Provider
      value={{
        getBooks,
        books,
        getBook,
        book,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
