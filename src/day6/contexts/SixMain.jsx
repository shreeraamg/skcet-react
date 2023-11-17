import React, { useState } from "react";
import SixFooter from "./SixFooter";
import SixHome from "./SixHome";
import SixNavbar from "./SixNavbar";
import { ThemeContext } from "./themeContext";

const SixMain = () => {
  const [theme, setTheme] = useState({
    bgColor: "white",
    textColor: "black",
  });

  function changeTheme() {
    theme.bgColor === "white"
      ? setTheme({ bgColor: "black", textColor: "white" })
      : setTheme({ bgColor: "white", textColor: "black" });
  }

  return (
    <>
      <h1>Hello</h1>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <SixNavbar />
        <SixHome />
        <SixFooter />
        <SixFooter />
        <SixFooter />
        <SixFooter />
        <SixFooter />
        <SixFooter />
        <SixFooter />
        <SixFooter />
        <SixFooter />
      </ThemeContext.Provider>
    </>
  );
};

export default SixMain;
