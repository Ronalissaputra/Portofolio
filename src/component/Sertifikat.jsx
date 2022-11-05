import React from "react";
import SectionTitle from "./SectionTitle";
import sertifikat1 from "../img/Sertifikat1.png";
import sertifikat2 from "../img/Sertifikat2.png";

function Framework() {
  return (
    <div className="py-2">
      <SectionTitle>Sertifikat</SectionTitle>
      <div className="grid grid-col-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
        <img src={sertifikat1} alt="sertifikat1" className="rounded-xl" />
        <img src={sertifikat2} alt="sertifikat2" className="rounded-xl" />
      </div>
    </div>
  );
}

export default Framework;
