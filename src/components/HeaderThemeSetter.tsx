"use client";

import { useEffect } from "react";
import { useHeaderTheme } from "@/contexts/HeaderThemeContext";

interface HeaderThemeSetterProps {
  bgColour: string;
  textColour: string;
}

export function HeaderThemeSetter({
  bgColour,
  textColour,
}: HeaderThemeSetterProps) {
  const { setHeaderColour } = useHeaderTheme();

  useEffect(() => {
    setHeaderColour({ bg: bgColour, text: textColour });
  }, [bgColour, textColour, setHeaderColour]);

  return null;
}
