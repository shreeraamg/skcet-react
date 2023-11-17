import React from "react";
import { counterFunction } from "./WrapperFunction";

const CounterComponent = ({ count, increase }) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default counterFunction(CounterComponent);
