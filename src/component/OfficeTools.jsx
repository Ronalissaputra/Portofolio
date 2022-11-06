import React from "react";
import SectionTitle from "./SectionTitle";
import offices from "../data/office";
import DesainItem from "./DesainItem";

function Services() {
  return (
    <div className="py-2">
      <SectionTitle>Office Tools</SectionTitle>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {offices.map((office) => (
          <DesainItem
            key={office.title}
            title={office.title}
            icon={office.icon}
            description={office.description}
            progres={office.progres}
          ></DesainItem>
        ))}
      </div>
    </div>
  );
}

export default Services;
