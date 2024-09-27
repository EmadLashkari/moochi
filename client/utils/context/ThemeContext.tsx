"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { lightTheme, darkTheme } from "@/styles/theme";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";

const ThemeContext = createContext({ toggleTheme: () => {} });

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState(lightTheme); // default theme

  const toggleTheme = () => {
    setTheme((prev) =>
      prev.palette.mode === "light" ? darkTheme : lightTheme
    );
    document.cookie = `theme=${
      theme.palette.mode === "light" ? "dark" : "light"
    }; path=/`;
  };

  useEffect(() => {
    const currentTheme = document.cookie
      .split("; ")
      .find((row) => row.startsWith("theme="));
    if (currentTheme) {
      const themeMode = currentTheme.split("=")[1];
      setTheme(themeMode === "dark" ? darkTheme : lightTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
