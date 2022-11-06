import React from "react";
import SectionTitle from "./SectionTitle";
import desains from "../data/desain";
import DesainItem from "./DesainItem";

function Services() {
  return (
    <div className="py-2">
      <SectionTitle>Desain Tools</SectionTitle>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {desains.map((desain) => (
          <DesainItem
            key={desain.title}
            title={desain.title}
            icon={desain.icon}
            description={desain.description}
          ></DesainItem>
        ))}
      </div>
    </div>
  );
}

export default Services;
