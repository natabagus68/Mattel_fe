import React from "react";
import loader from "./../../assets/loader.png";
export const Loader = () => {
  return (
    <>
      <div className="bg-white-lightest absolute w-screen h-screen flex justify-center items-center z-10 opacity-90">
        <img className="animate-spin" src={loader} alt="" />
      </div>
    </>
  );
};
