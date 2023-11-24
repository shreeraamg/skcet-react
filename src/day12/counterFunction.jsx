// counterFunction.jsx

import { useState } from "react";

function counterFunction(Component) {
  function NewComponent() {
    const [count, setCount] = useState(0);

    function increase() {
      setCount(count + 1);
    }

    return <Component count={count} increase={increase} />;
  }

  return NewComponent;
}

export default counterFunction;
