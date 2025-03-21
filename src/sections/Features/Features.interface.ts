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
    caption: "Easy integration",
    title: "Work smarter not harder",
    text: "With Xora, tedious tasks are history. Automation and smart processes bring your productivity to new heights. It's like having an extra cup of coffee, but without the jitters.",
    button: {
      icon: "/images/magictouch.svg",
      title: "Watch the demo",
    },
  },
  {
    id: "1",
    icon: "/images/feature-2.png",
    caption: "Secure & trustworthy",
    title: "Sleep easy, we got your back",
    text: "Your data security is our priority. With state-of-the-art encryption and robust privacy controls, Xora helps keeps your information secure and locked up tighter than Fort Knox.",
    button: {
      icon: "/images/docs.svg",
      title: "Read the docs",
    },
  },
];

export interface FeatureDetail {
  id: string;
  icon: string;
  title: string;
}

export const details: Array<FeatureDetail> = [
  {
    id: "0",
    icon: "/images/detail-1.png",
    title: "AI automated video editing",
  },
  {
    id: "1",
    icon: "/images/detail-2.png",
    title: "Collaborate with your team",
  },
  {
    id: "2",
    icon: "/images/detail-3.png",
    title: "Ultra fast cloud-engine",
  },
  {
    id: "3",
    icon: "/images/detail-4.png",
    title: "24 / 7 Customer support",
  },
];
