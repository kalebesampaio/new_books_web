interface Assessments {
  id: number;
  rating: number;
}

export const reduceRating = (ass: Assessments[]) => {
  const initialValue = 0;
  const sumWithInitial = ass.reduce(
    (accumulator, ass) => accumulator + ass.rating,
    initialValue
  );
  if (sumWithInitial === 0) return 1;
  return sumWithInitial;
};
