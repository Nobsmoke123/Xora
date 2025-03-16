import { JSX } from "react";
import Android from "../../components/Android/Android";
import Ios from "../../components/Ios/Ios";
import Web from "../../components/Web/Web";
import Windows from "../../components/Windows/Windows";

export interface Link {
  id: string;
  title: string;
  icon: JSX.Element;
  url: string;
}

export const links: Link[] = [
  {
    id: "0",
    title: "Ios",
    url: "#",
    icon: <Ios />,
  },
  {
    id: "1",
    title: "Android",
    url: "#",
    icon: <Android />,
  },
  {
    id: "2",
    title: "Windows",
    url: "#",
    icon: <Windows />,
  },
  {
    id: "3",
    title: "Web",
    url: "#",
    icon: <Web />,
  },
];

export interface Logo {
  id: string;
  title: string;
  url: string;
  width: number;
  height: number;
}

export const logos: Logo[] = [
  {
    id: "0",
    title: "Afterpay",
    url: "/images/logos/afterpay.svg",
    width: 156,
    height: 48,
  },
  {
    id: "1",
    title: "Amplitude",
    url: "/images/logos/amplitude.svg",
    width: 194,
    height: 48,
  },
  {
    id: "2",
    title: "Sonos",
    url: "/images/logos/sonos.svg",
    width: 115,
    height: 48,
  },
  {
    id: "3",
    title: "Maze",
    url: "/images/logos/maze.svg",
    width: 142,
    height: 48,
  },
  {
    id: "4",
    title: "Drips",
    url: "/images/logos/drips.svg",
    width: 77,
    height: 48,
  },
];
