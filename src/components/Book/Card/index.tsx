import { Link } from "react-router-dom";
import { AsideCardBookStyles, CardBookStyles } from "./styles";
import Rating from "@mui/material/Rating";

export const CardBook = () => {
  return (
    <CardBookStyles>
      <div>
        <Link to="/">
          <img
            src="https://cover.nexoscans.com/wp-content/uploads/2022/05/Release-That-Witch-175x238.jpg"
            alt=""
          />
        </Link>
        <span>Manhua</span>
      </div>
      <h3>
        <Link to="/">Liberte Aquela Bruxa</Link>
      </h3>
    </CardBookStyles>
  );
};

export const AsideCardBook = () => {
  return (
    <AsideCardBookStyles>
      <figure>
        <Link to="/">
          <img
            src="https://cover.nexoscans.com/wp-content/uploads/2022/05/Release-That-Witch-175x238.jpg"
            alt=""
          />
        </Link>
      </figure>
      <div>
        <h5>
          <Link to={"/"}>Liberte Aquela Bruxa</Link>
        </h5>
        <p>Views: 100</p>
        <Rating name="read-only" value={5} readOnly />
      </div>
    </AsideCardBookStyles>
  );
};
