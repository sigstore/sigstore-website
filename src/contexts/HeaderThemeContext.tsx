"use client";

import { createContext, useContext, useState, useCallback } from "react";
import type { ReactNode } from "react";

interface HeaderTheme {
  bgColour: string | null;
  textColour: string | null;
}

interface HeaderThemeContextValue extends HeaderTheme {
  setHeaderColour: (theme: { bg: string; text: string }) => void;
}

const HeaderThemeContext = createContext<HeaderThemeContextValue>({
  bgColour: null,
  textColour: null,
  setHeaderColour: () => {},
});

export function HeaderThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<HeaderTheme>({
    bgColour: null,
    textColour: null,
  });

  const setHeaderColour = useCallback(
    ({ bg, text }: { bg: string; text: string }) => {
      setTheme({ bgColour: bg, textColour: text });
    },
    []
  );

  return (
    <HeaderThemeContext.Provider
      value={{ ...theme, setHeaderColour }}
    >
      {children}
    </HeaderThemeContext.Provider>
  );
}

export function useHeaderTheme() {
  return useContext(HeaderThemeContext);
}
