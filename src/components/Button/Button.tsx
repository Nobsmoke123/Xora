import { ButtonProps } from "./Button.interface";

const Button = ({ icon, href, children, classNames, onClick }: ButtonProps) => {
  return href ? (
    <a
      className={`relative p-0.5 g5 rounded-2xl shadow-500 group ${classNames}`}
      href={href}
    ></a>
  ) : (
    <button
      className={`relative p-0.5 g5 rounded-2xl shadow-500 group ${classNames}`}
    >
      {children}
    </button>
  );
};

export default Button;
