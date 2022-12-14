import { MainButton } from "./styles";

interface ButtonProps {
  children: string;
}

export function Button({ children, ...props }: ButtonProps) {
  return <MainButton {...props}>{children}</MainButton>;
}
