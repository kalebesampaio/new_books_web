interface Assessments {
  id: number;
  rating: number;
}

export const reduceRating = (ass: Assessments[] | undefined) => {
  if (!ass) {
    return 1;
  }
  if (ass.length == 0) {
    return 1;
  }
  const initialValue = 0;
  const sumWithInitial = ass.reduce(
    (accumulator, ass) => accumulator + ass.rating,
    initialValue
  );
  if (sumWithInitial === 0) return 1;
  return sumWithInitial / ass.length;
};
