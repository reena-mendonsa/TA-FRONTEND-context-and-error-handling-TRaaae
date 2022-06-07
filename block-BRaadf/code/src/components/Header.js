import React, { useContext } from "react";
import ModeContext from "./ModeContext";
function Header() {
  const Mode = useContext(ModeContext);

  return (
    <h1
      className={`heading ${
        Mode.isDarkMode ? "heading-dark" : "heading-light"
      }`}
    >
      {Mode.isDarkMode ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;
