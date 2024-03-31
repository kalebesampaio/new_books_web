import { ListStyles } from "./styles";
interface Props {
  children: React.ReactNode;
}
export const List = ({ children }: Props) => {
  return <ListStyles>{children}</ListStyles>;
};
