export interface Feature {
  id: string;
  icon: string;
  caption: string;
  title: string;
  text: string;
  button: {
    icon: string;
    title: string;
  };
}

export const features: Array<Feature> = [
  {
    id: "0",
    icon: "/images/feature-1.png",
    caption: "Demo Caption",
    title: "Feature 1",
    text: "text 1",
    button: {
      icon: "/images/magictouch.svg",
      title: "Watch the demo",
    },
  },
  {
    id: "1",
    icon: "/images/feature-2.png",
    caption: "Demo Caption",
    title: "Feature 2",
    text: "text 2",
    button: {
      icon: "/images/magictouch.svg",
      title: "Try it out",
    },
  },
];
