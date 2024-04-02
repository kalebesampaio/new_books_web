export const pageFunc = (page: number) => {
  return page == 1
    ? [0, 9]
    : page == 2
    ? [9, 18]
    : page == 3
    ? [18, 27]
    : page == 4
    ? [27, 36]
    : page == 5
    ? [36, 45]
    : page == 6
    ? [45, 54]
    : [54, 63];
};

