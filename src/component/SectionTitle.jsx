import React from "react";

function SectionTitle({ children, id }) {
  return (
    <h1 id={id} className="text-2xl font-bold mb-5 text-indigo-600">
      {children}
    </h1>
  );
}

export default SectionTitle;
