import { ImHtmlFive2 } from "react-icons/im";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { SiPhp } from "react-icons/si";
export default [
  {
    title: "Html",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aut?",
    icon: <ImHtmlFive2 className="w-full h-full"></ImHtmlFive2>,
    progres: (
      <progress
        className="progress progress-error w-full"
        value="85"
        max="100"
      ></progress>
    ),
  },
  {
    title: "Css",
    icon: <DiCss3 className="w-full h-full"></DiCss3>,
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
    title: "Javascript",
    icon: <SiJavascript className="w-full h-full"></SiJavascript>,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aut?",
    progres: (
      <progress
        className="progress progress-warning w-full"
        value="70"
        max="100"
      ></progress>
    ),
  },
  {
    title: "Php",
    icon: <SiPhp className="w-full h-full"></SiPhp>,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aut?",
    progres: (
      <progress
        className="progress progress-info w-full"
        value="40"
        max="100"
      ></progress>
    ),
  },
];
