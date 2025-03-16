import { useEffect, useState } from "react";
import NavLink from "../../components/NavLink/NavLink";
import { Link as LinkScroll } from "react-scroll";
import { handleScroll, toggleIsOpen } from "./Header.handlers";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (() => handleScroll(setHasScrolled))());

    // To remove the eventListeners when it's done.
    return () => {
      window.removeEventListener(
        "scroll",
        (() => handleScroll(setHasScrolled))()
      );
    };
  }, [hasScrolled]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 ${
        hasScrolled ? "py-2 bg-black-100 backdrop-blur-[8px]" : ""
      }`}
    >
      <div className="container flex h-14 items-center max-lg:py-5">
        <a href="#" className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/xora.svg" alt="App Logo" height={55} width={115} />
        </a>

        <div
          className={`w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0 ${
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          }`}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink
                    title="features"
                    onClick={(() => toggleIsOpen(setIsOpen))()}
                  />
                  <div className="dot" />
                  <NavLink
                    title="pricing"
                    onClick={(() => toggleIsOpen(setIsOpen))()}
                  />
                </li>

                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className={`max-lg:hidden transition-transform duration-500 cursor-pointer`}
                  >
                    <img
                      src="/images/xora.svg"
                      alt="logo"
                      width={160}
                      height={55}
                    />
                  </LinkScroll>
                </li>

                <li className="nav-li">
                  <NavLink
                    title="faq"
                    onClick={(() => toggleIsOpen(setIsOpen))()}
                  />
                  <div className="dot" />
                  <NavLink
                    title="download"
                    onClick={(() => toggleIsOpen(setIsOpen))()}
                  />
                </li>
              </ul>
            </nav>

            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="bg-outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="bg-outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>

        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="hamburger menu"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
