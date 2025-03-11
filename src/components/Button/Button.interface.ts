import { JSX } from "react";

export interface ButtonProps {
  icon: string;
  children: JSX.Element;
  classNames: string;
  href?: string;
  onClick: () => void;
}
