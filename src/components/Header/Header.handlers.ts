import { SetStateAction } from "react";

export const handleScroll =
  (setHasScrolled: React.Dispatch<SetStateAction<boolean>>) => () => {
    setHasScrolled(window.scrollY > 32);
  };

export const toggleIsOpen =
  (setIsOpen: React.Dispatch<SetStateAction<boolean>>) => () => {
    setIsOpen((prev) => !prev);
  };
