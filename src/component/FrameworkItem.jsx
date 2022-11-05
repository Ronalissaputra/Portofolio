import React from "react";

function FrameworkItem({ title, icon, description }) {
  return (
    <div className="bg-slate-800 hover:bg-slate-700 p-5 rounded-md hover:-translate-y-2 transform transition">
      <div className="text-gray-300 w-6 h-6 mb-3">{icon}</div>
      <h1 className="font-semibold text-lg text-gray-200 mb-1">{title}</h1>
      <p className="text-md text-gray-600 ">{description}</p>
    </div>
  );
}

export default FrameworkItem;
