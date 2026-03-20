"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useHeadroom } from "@/hooks/useHeadroom";
import { useHeaderTheme } from "@/contexts/HeaderThemeContext";
import { useMobileNav } from "@/contexts/MobileNavContext";
import { Navigation } from "@/components/layout/Navigation";
import Logo from "@/assets/icons/logo.svg";
import MenuButton from "@/assets/icons/menu-button.svg";

interface HeaderProps {
  navigation: Array<{ name: string; position: string; menuLink: string }>;
}

export function Header({ navigation }: HeaderProps) {
  const headerRef = useHeadroom<HTMLElement>();
  const { bgColour } = useHeaderTheme();
  const { openNavigation } = useMobileNav();
  const pathname = usePathname();
  const [isScrolling, setIsScrolling] = useState(false);

  const slug =
    (pathname || "/").replace(/^\//, "").replace(/\/$/, "") || "home";
  const isTrustSecurity = slug === "trust-security";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`headroom py-30 fixed w-full z-50 ${bgColour || ""} ${
        isScrolling ? "scrolled" : ""
      }`}
    >
      <div className="container">
        <div className="flex flex-wrap justify-between items-start">
          <Link href="/" title="Home link" className="logo">
            <Logo
              className={isTrustSecurity ? "logo-white" : "logo-black"}
            />
          </Link>
          <Navigation
            className="hidden md:block"
            navType="header"
            navList={navigation}
          />
          <button
            className={`block md:hidden w-32 h-32 z-20 relative ${
              isTrustSecurity ? "fill-white" : "fill-black"
            }`}
            onClick={() => openNavigation(true)}
            aria-label="Open navigation"
          >
            <MenuButton />
          </button>
        </div>
      </div>
    </header>
  );
}
