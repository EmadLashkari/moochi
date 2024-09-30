"use client";

import { useThemeContext } from "@/utils/context/ThemeContext";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { BoxRow } from "@/utils/custom";

const ThemeToggler = () => {
  const { themeMode, toggleTheme } = useThemeContext();

  return (
    <BoxRow
      sx={{
        display: {
          xs: "none",
          sm: "flex",
        },
      }}
    >
      <IconButton onClick={toggleTheme} color="primary" size="large">
        {themeMode === "light" ? (
          <LightModeIcon fontSize="inherit" />
        ) : (
          <DarkModeIcon fontSize="inherit" />
        )}
      </IconButton>
    </BoxRow>
  );
};

export default ThemeToggler;
