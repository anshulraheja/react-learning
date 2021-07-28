import React from "react";
import { useTheme, useThemeUpdate } from "./ChangeThemeContext";

export default function ChangeTheme() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "black" : "grey",
    color: darkTheme ? "grey" : "black",
    width: "50%",
    padding: "2rem",
    margin: "2rem auto",
    borderRadius: "50px",
    fontWeight: "700"
  };

  const buttonStyling = {
    margin: "2rem 0 0 0 ",
    padding: "10px 30px",
    border: "4px solid",
    borderRadius: "60px",
    color: "#fff",
    background: "#226fbe",
    cursor: "pointer",
    fontWeight: "200"
  };
  return (
    <>
      <button onClick={toggleTheme} style={buttonStyling}>
        Toggle Theme
      </button>
      <div style={themeStyles}>Testing useContext Hook</div>
    </>
  );
}
