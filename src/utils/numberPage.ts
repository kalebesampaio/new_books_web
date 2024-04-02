import { IBook } from "../providers/BookProvider";

export const numberPage = (books: IBook[]) => {
  const count = books.length;
  return Math.ceil(count / 10);
};
