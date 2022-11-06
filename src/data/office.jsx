import { SiMicrosoftword } from "react-icons/si";
import { SiMicrosoftexcel } from "react-icons/si";
import { SiMicrosoftpowerpoint } from "react-icons/si";
export default [
  {
    title: "Word",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aut?",
    icon: <SiMicrosoftword className="w-full h-full"></SiMicrosoftword>,
    progres: (
      <progress
        className="progress progress-error w-full"
        value="90"
        max="100"
      ></progress>
    ),
  },
  {
    title: "Excel",
    icon: <SiMicrosoftexcel className="w-full h-full"></SiMicrosoftexcel>,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aut?",
    progres: (
      <progress
        className="progress progress-error w-full"
        value="90"
        max="100"
      ></progress>
    ),
  },
  {
    title: "Power point",
    icon: (
      <SiMicrosoftpowerpoint className="w-full h-full"></SiMicrosoftpowerpoint>
    ),
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aut?",
    progres: (
      <progress
        className="progress progress-error w-full"
        value="90"
        max="100"
      ></progress>
    ),
  },
];
