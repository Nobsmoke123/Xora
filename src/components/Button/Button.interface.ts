// import { JSX } from "react";

export interface ButtonProps {
  icon: string;
  children?: React.ReactNode;
  classNames: string;
  href?: string;
  onClick: () => void;
  markerFill: string;
}
