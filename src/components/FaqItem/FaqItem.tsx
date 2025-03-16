import { useState } from "react";
import { FaqItemProps } from "./FaqItem.interface";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const FaqItem: React.FC<FaqItemProps> = ({ item, index }) => {
  const [activeId, setActiveId] = useState("");
  const active = activeId === item.id;

  return (
    <div className="relative z-2 mb-16">
      <div
        className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
        onClick={() => {
          setActiveId(activeId === item.id ? "" : item.id);
        }}
      >
        <div className="flex-1">
          <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
            {index < 10 ? "0" : ""}
            {index}
          </div>
          <div
            className={`h6 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center ${
              active ? "max-lg:text-p1" : "text-p4"
            }`}
          >
            {item.question}
          </div>
        </div>
        <div
          className={`faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-s2 shadow-400 transition-all duration-500 group-hover:border-s4 ${
            active ? "before:bg-p1 after:rotate-0 after:bg-p1" : ""
          }`}
        >
          <div className="g4 size-11/12 rounded-full shadow-500"></div>
        </div>
      </div>
      <SlideDown>
        {activeId === item.id && (
          <div className="body-3 px-7 py-3.5 ">{item.answer}</div>
        )}
      </SlideDown>
      <div
        className={`g5 -bottom-7 -top-7 left-0 right-0 -z-1 rounded-3xl opacity-0 transition-opacity duration-500 absolute ${
          active ? "opacity-100" : ""
        }`}
      >
        <div className="g4 absolute inset-0.5 -z-1 rounded-3xl"></div>
        <div className="absolute left-8 top-0 h-0.5 w-40 bg-p1"></div>
      </div>
    </div>
  );
};

export default FaqItem;
