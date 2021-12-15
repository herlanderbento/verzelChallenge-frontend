import { ReactNode, ButtonHTMLAttributes } from "react";
import { Btn } from "./styles";

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function Button({ children, ...rest }: IButtonProps) {
  return <Btn {...rest}>{children}</Btn>;
}
