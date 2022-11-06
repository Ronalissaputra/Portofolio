import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
export default [
  {
    title: "React Js",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aut?",
    icon: <FaReact className="w-full h-full"></FaReact>,
    progres: (
      <progress
        className="progress progress-accent w-full"
        value="70"
        max="100"
      ></progress>
    ),
  },
  {
    title: "Laravel",
    icon: <FaLaravel className="w-full h-full"></FaLaravel>,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aut?",
    progres: (
      <progress
        className="progress progress-warning w-full"
        value="40"
        max="100"
      ></progress>
    ),
  },
  {
    title: "TailwindCss",
    icon: <SiTailwindcss className="w-full h-full"></SiTailwindcss>,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aut?",
    progres: (
      <progress
        className="progress progress-info w-full"
        value="85"
        max="100"
      ></progress>
    ),
  },
  {
    title: "Bootstrap",
    icon: <FaBootstrap className="w-full h-full"></FaBootstrap>,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aut?",
    progres: (
      <progress
        className="progress progress-primary w-full"
        value="90"
        max="100"
      ></progress>
    ),
  },
  {
    title: "Node Js",
    icon: <FaNodeJs className="w-full h-full"></FaNodeJs>,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aut?",
    progres: (
      <progress
        className="progress progress-success w-full"
        value="70"
        max="100"
      ></progress>
    ),
  },
];
