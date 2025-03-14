import { Link as LinkScroll } from "react-scroll";
import { NavLinkProps } from "./NavLink.interface";

const NavLink = ({ title, onClick }: NavLinkProps) => {
  return (
    <LinkScroll
      to={title}
      offset={-100}
      onClick={onClick}
      spy
      smooth
      activeClass="!nav-active"
      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
    >
      {title}
    </LinkScroll>
  );
};

export default NavLink;
