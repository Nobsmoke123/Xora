import Marker from "../Marker/Marker";
import { ButtonProps } from "./Button.interface";

const Button: React.FC<ButtonProps> = ({
  icon,
  href,
  classNames,
  onClick,
  markerFill,
  children,
}) => {
  const InnerText = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[1px]">
          {markerFill && <Marker fill={markerFill} />}
        </span>
        {icon && (
          <img
            src={icon}
            alt="circle"
            className="size-10 mr-5 object-contain z-10"
          />
        )}
        <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
          {children}
        </span>
      </span>
      <span className="glow-before glow-after"></span>
    </>
  );

  return href ? (
    <a
      className={`relative p-0.5 g5 rounded-2xl shadow-500 group ${classNames}`}
      href={href}
    >
      <InnerText />
    </a>
  ) : (
    <button
      className={`relative p-0.5 g5 rounded-2xl shadow-500 group ${classNames}`}
      onClick={onClick}
    >
      <InnerText />
    </button>
  );
};

export default Button;
