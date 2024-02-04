import React from "react";
import MainText from "./MainText";
import MainCards from "./MainCards";

const Main = () => {
  return (
    <>
      <div className="h-[846px] border-b-2">
        <MainText />
        <MainCards />
      </div>
    </>
  );
};

export default Main;
