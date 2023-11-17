/*
 * Create a ordinary function which takes a component as a parameter.
 * Return a react component from that function.
 * Implement your components logic inside that.
 * Return the component this a passed a parameter with your logic as props.
 */

import { useState } from "react";

export function counterFunction(Component) {
  return function WithLogic() {
    const [count, setCount] = useState(0);

    const increase = () => setCount(count + 1);

    return <Component count={count} increase={increase} />;
  };
}
