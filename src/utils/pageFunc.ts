export const pageFunc = (page: number) => {
  return page == 1
    ? [0, 12]
    : page == 2
    ? [12, 24]
    : page == 3
    ? [24, 36]
    : page == 4
    ? [36, 48]
    : page == 5
    ? [48, 60]
    : page == 6
    ? [60, 72]
    : [72, 84];
};
