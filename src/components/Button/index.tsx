import { ReactNode, ButtonHTMLAttributes } from "react";
import { Btn, BtnSecond } from "./styles";

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function Button({ children, ...rest }: IButtonProps) {
  return <Btn {...rest}>{children}</Btn>;
}

export function ButtonSecondary({ children, ...rest }: IButtonProps) {
  return <BtnSecond {...rest}>{children}</BtnSecond>;
}
