import { SiMicrosoftword } from "react-icons/si";
import { SiMicrosoftexcel } from "react-icons/si";
import { SiMicrosoftpowerpoint } from "react-icons/si";
export default [
  {
    title: "Word",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aut?",
    icon: <SiMicrosoftword className="w-full h-full"></SiMicrosoftword>,
  },
  {
    title: "Excel",
    icon: <SiMicrosoftexcel className="w-full h-full"></SiMicrosoftexcel>,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aut?",
  },
  {
    title: "Power point",
    icon: (
      <SiMicrosoftpowerpoint className="w-full h-full"></SiMicrosoftpowerpoint>
    ),
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aut?",
  },
];
