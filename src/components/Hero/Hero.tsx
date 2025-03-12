import { Element } from "react-scroll";
import { Link as LinkScroll } from "react-scroll";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container flex justify-between">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Video Editing
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase  max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly Simple
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              We designed XORA AI Video Editorto be an easy to use, quick to
              learn, and surprisingly power.
            </p>
            <LinkScroll to="feature" offset={-100} spy smooth>
              <Button
                icon="/images/zap.svg"
                classNames=""
                markerFill=""
                onClick={() => {}}
              >
                Try it now
              </Button>
            </LinkScroll>
          </div>
          <div className="asolute -top-32 left-[calc(50% - 340px)] w-[1230px] pointer-events-none">
            <img
              src="/images/hero.png"
              alt="Hero Image"
              className="size-[1230px] max-lg:h-auto"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
