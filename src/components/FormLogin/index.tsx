import { FormStyles } from "./styles";

export interface Props {
  children: React.ReactNode;
}

export const Form = ({ children }: Props) => {
  return <FormStyles>{children}</FormStyles>;
};
