import React from "react";
import { useTheme } from "../../processes/contextTheme";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return <div onClick={handleClick}>Switcher</div>;
};