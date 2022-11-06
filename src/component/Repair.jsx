import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Repair() {
  const Removed = () => {
    const repair = document.getElementById("repair");
    repair.remove();
  };
  return (
    <div
      className="shadow-md dark:bg-slate-500 w-full h-20 bg-slate-800 rounded-md flex justify-between items-center px-5"
      id="repair"
    >
      <div className="pesan flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info flex-shrink-0 w-6 h-6 mr-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div className="message">
          <h1 className="font-bold">Repair Software</h1>
          <p>
            Update fitur <span className="font-bold">Download CV</span> &{" "}
            <span className="font-bold">Bahasa</span>
          </p>
        </div>
      </div>
      <div className="">
        <button className="cursor-pointer" onClick={Removed}>
          <AiOutlineCloseCircle></AiOutlineCloseCircle>
        </button>
      </div>
    </div>
  );
}

export default Repair;
