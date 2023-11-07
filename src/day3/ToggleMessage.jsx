/*
 * Thomas is working on a dashboard for a messaging application,
 * where users can toggle the display of an additional message content.
 * The requirement is to create a react component named ToggleMessage.
 * The component initially shows a button labeled as "Show Message".
 * Upon clicking the button, it should reveal a section containing a friendly message.
 * Your task is to help Thomas implement the condition component using react.
 * This component should render a button labeled "Show Component".
 * When the button is clicked, it toggles its text to "Hide Component" and
 * reveals a friendly greeting message, represented by the text "Hi! How are You!!!"
 */

import { useState } from "react";

const ToggleMessage = () => {
  const [isVisible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible(!isVisible)}>
        {isVisible ? "Hide Message" : "Show Message"}
      </button>
      {isVisible && <p>Hi! How are You!!!</p>}
    </div>
  );
};

export default ToggleMessage;
