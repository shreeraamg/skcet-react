import React, { useEffect, useState } from "react";

const EffectLifeCycle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);

    return () => {
      console.log("Component Unmounts");
    };
  }, [count]);

  // useEffect(function returns a function, dependancyList);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default EffectLifeCycle;
