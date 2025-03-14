import { SetStateAction } from "react";

export const handleScroll =
  (setHasScrolled: React.Dispatch<SetStateAction<boolean>>) => () => {
    setHasScrolled(window.scrollY > 32);
  };
