import { CardStyles } from "./styles";
interface Props {
  title: string;
  change: React.Dispatch<React.SetStateAction<string>>;
}
export const Card = ({ title, change }: Props) => {
  return (
    <CardStyles>
      <button
        onClick={() => {
          if (title === "Todos") {
            change("");
          } else {
            change(title);
          }
        }}
      >
        {title}
      </button>
    </CardStyles>
  );
};
