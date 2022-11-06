import React from "react";
import SectionTitle from "./SectionTitle";
import frameworks from "../data/frameworks";
import FrameworkItem from "./FrameworkItem";

function Framework() {
  return (
    <div className="py-2">
      <SectionTitle>Framework & Library</SectionTitle>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {frameworks.map((framework) => (
          <FrameworkItem
            key={framework.title}
            title={framework.title}
            icon={framework.icon}
            description={framework.description}
            progres={framework.progres}
          ></FrameworkItem>
        ))}
      </div>
    </div>
  );
}

export default Framework;
