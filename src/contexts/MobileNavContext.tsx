"use client";

import { createContext, useContext, useState, useCallback } from "react";
import type { ReactNode } from "react";

interface MobileNavContextValue {
  mobileNavOpen: boolean;
  openNavigation: (open: boolean) => void;
  toggleNavigation: () => void;
}

const MobileNavContext = createContext<MobileNavContextValue>({
  mobileNavOpen: false,
  openNavigation: () => {},
  toggleNavigation: () => {},
});

export function MobileNavProvider({ children }: { children: ReactNode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const openNavigation = useCallback((open: boolean) => {
    setMobileNavOpen(open);
  }, []);

  const toggleNavigation = useCallback(() => {
    setMobileNavOpen((prev) => !prev);
  }, []);

  return (
    <MobileNavContext.Provider
      value={{ mobileNavOpen, openNavigation, toggleNavigation }}
    >
      {children}
    </MobileNavContext.Provider>
  );
}

export function useMobileNav() {
  return useContext(MobileNavContext);
}
