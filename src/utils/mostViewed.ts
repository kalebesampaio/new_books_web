import { IBook } from "../providers/BookProvider";

export const mostViewed = (books: IBook[]) => {
  const newBooks = books;
  newBooks.sort(function (a, b) {
    if (a.views > b.views) {
      return 1;
    }
    if (a.views < b.views) {
      return -1;
    }
    return 0;
  });
  return newBooks.reverse();
};
