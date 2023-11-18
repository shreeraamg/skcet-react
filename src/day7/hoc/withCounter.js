import { useState } from "react";

function withCounter(OriginalComponent) {
  const NewComponent = () => {
    const [count, setCount] = useState(0);

    const increase = () => setCount(count + 1);

    return <OriginalComponent count={count} increase={increase} />;
  };

  return NewComponent;
}

export default withCounter;
