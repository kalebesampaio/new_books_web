import { ListBookStyles } from "./styles";
interface Props {
  children: React.ReactNode;
}
export const ListBook = ({ children }: Props) => {
  return <ListBookStyles>{children}</ListBookStyles>;
};
