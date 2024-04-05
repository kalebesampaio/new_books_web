import { Link } from "react-router-dom";
import { AsideCardBookStyles, CardBookStyles } from "./styles";
import Rating from "@mui/material/Rating";
import { reduceRating } from "../../../utils/reduceRating";
interface Props {
  title: string;
  cover: string;
  type: string;
  id: string;
}
interface Assessments {
  id: number;
  rating: number;
}

interface Props2 {
  title: string;
  assessments: Assessments[];
  cover: string;
  views: number;
  id: string;
}
export const CardBook = ({ title, cover, type, id }: Props) => {
  return (
    <CardBookStyles>
      <div>
        <Link to={`/book/${id}`}>
          <img src={cover} alt="" />
        </Link>
        <span className={`${type}`}>{type}</span>
      </div>
      <h3>
        <Link to={`/book/${id}`}>{title}</Link>
      </h3>
    </CardBookStyles>
  );
};

export const AsideCardBook = ({
  title,
  cover,
  assessments,
  views,
  id,
}: Props2) => {
  return (
    <AsideCardBookStyles>
      <figure>
        <Link to={`/book/${id}`}>
          <img src={cover} alt="Capa do Livro" />
        </Link>
      </figure>
      <div>
        <h5>
          <Link to={`/book/${id}`}>{title}</Link>
        </h5>
        <p>Views: {views}</p>
        <Rating name="read-only" value={reduceRating(assessments)} readOnly />
      </div>
    </AsideCardBookStyles>
  );
};
