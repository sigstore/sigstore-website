"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useHeaderTheme } from "@/contexts/HeaderThemeContext";
import { useMobileNav } from "@/contexts/MobileNavContext";
import Logo from "@/assets/icons/logo.svg";
import MenuCloseButton from "@/assets/icons/menu-button-close.svg";

interface NavItem {
  name: string;
  menuLink?: string;
}

interface SocialLink {
  name: string;
  url: string;
}

interface MobileNavigationProps {
  navList: NavItem[];
  socialLinks: SocialLink[];
}

function ExternalLinkIcon({ strokeColor }: { strokeColor: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 3H21V9"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 14L21 3"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MobileNavigation({
  navList,
  socialLinks,
}: MobileNavigationProps) {
  const pathname = usePathname();
  const { bgColour, textColour } = useHeaderTheme();
  const { mobileNavOpen, openNavigation } = useMobileNav();

  const slug =
    (pathname || "/").replace(/^\//, "").replace(/\/$/, "") || "home";
  const isTrustSecurity = slug === "trust-security";
  const text = textColour || "";
  const bg = bgColour || "";
  const strokeColor = isTrustSecurity ? "#ffffff" : "#444444";

  if (!mobileNavOpen) return null;

  return (
    <nav
      className={`block md:hidden fixed top-0 left-0 w-full h-screen z-[60] flex flex-col justify-between max-[320px]:h-[610px] ${bg}`}
    >
      <div className="container">
        <div className="py-30 flex flex-wrap justify-between items-start">
          <Link href="/" title="Home link" className="logo z-20">
            <Logo
              className={isTrustSecurity ? "logo-white" : "logo-black"}
            />
          </Link>
          <button
            className={`block md:hidden w-32 h-32 z-20 relative ${
              isTrustSecurity ? "fill-white" : "fill-black"
            }`}
            onClick={() => openNavigation(false)}
            aria-label="Close navigation"
          >
            <MenuCloseButton />
          </button>
        </div>
      </div>
      <ul className="px-60 max-[320px]:px-30">
        <li className="mb-48">
          <Link
            className={`footer--nav-button mr-36 flex justify-between text-19 hover:text-purple-light h ${text}`}
            href="/"
            onClick={() => openNavigation(false)}
          >
            Overview
          </Link>
        </li>
        {navList.map((navItem, index) => (
          <li key={index} className="mb-48">
            <Link
              className={`footer--nav-button mr-36 flex justify-between text-19 hover:text-purple-light h ${text}`}
              href={`/${navItem.menuLink}`}
              onClick={() => openNavigation(false)}
            >
              {navItem.name}
            </Link>
          </li>
        ))}
        <li className="mb-48">
          <a
            className={`footer--nav-button mr-36 flex justify-between text-19 hover:text-purple-light h items-center ${text}`}
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.sigstore.dev"
          >
            Docs
            <span className="ml-6 h-20">
              <ExternalLinkIcon strokeColor={strokeColor} />
            </span>
          </a>
        </li>
        <li>
          <a
            className={`footer--nav-button mr-36 flex justify-between text-19 hover:text-purple-light h items-center ${text}`}
            target="_blank"
            rel="noopener noreferrer"
            href="https://status.sigstore.dev"
          >
            Status
            <span className="ml-6 h-20">
              <ExternalLinkIcon strokeColor={strokeColor} />
            </span>
          </a>
        </li>
      </ul>
      <ul
        className={`w-full px-60 max-[320px]:px-30 py-60 border-t-2 ${
          bg !== "bg-purple-dark" ? "border-gray-dark" : "border-white"
        }`}
      >
        {socialLinks.map((navItem, index) => (
          <li
            key={index}
            className={
              index === socialLinks.length - 1 ? "mb-0" : "mb-48"
            }
          >
            <a
              className={`footer--nav-button mr-8 flex justify-between text-19 hover:text-purple-light h ${text}`}
              href={navItem.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {navItem.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
