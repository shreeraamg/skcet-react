import React from "react";
import { useRef } from "react";
import { useState } from "react";

const MyForm = () => {
  // const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={() => console.log(inputRef.current.value)}>
        Print Value
      </button>
    </>
  );
};

export default MyForm;
