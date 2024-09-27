"use client";

import { useThemeContext } from "@/utils/context/ThemeContext";
import Button from "@mui/material/Button";

const ThemeToggle = () => {
  const { toggleTheme } = useThemeContext();

  return <Button onClick={toggleTheme}>Toggle Theme</Button>;
};

export default ThemeToggle;
