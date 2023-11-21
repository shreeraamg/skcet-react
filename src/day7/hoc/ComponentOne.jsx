import React from "react";
import myFunction from "./myFucntion";

const ComponentOne = () => {
  console.log("from Component One");
  return <div>ComponentOne</div>;
};

export default myFunction(ComponentOne);
