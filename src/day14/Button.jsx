import { useState } from "react";

const Button = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!isVisible)}>App</button>
      {isVisible ? <p>Text is Visible</p> : null}
    </div>
  );
};

export default Button;
