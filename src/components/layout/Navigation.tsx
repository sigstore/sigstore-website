"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useHeaderTheme } from "@/contexts/HeaderThemeContext";
import GitHubLogo from "@/assets/icons/github.svg";
import SlackLogo from "@/assets/icons/slack.svg";

interface NavItem {
  name: string;
  menuLink?: string;
  footerMenuLink?: string;
  url?: string;
  externalLink?: string;
}

interface NavigationProps {
  navType: "header" | "footer" | "social";
  navList: NavItem[];
  scrolled?: boolean;
  className?: string;
}

function ExternalLinkIcon({ strokeColor }: { strokeColor: string }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 20"
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

export function Navigation({
  navType,
  navList,
  className,
}: NavigationProps) {
  const pathname = usePathname();
  const { textColour } = useHeaderTheme();

  const slug =
    (pathname || "/").replace(/^\//, "").replace(/\/$/, "") || "home";
  const isTrustSecurity = slug === "trust-security";
  const text = navType === "header" ? textColour || "" : "";
  const strokeColor = isTrustSecurity ? "#ffffff" : "#444444";

  const isActive = (link: string) => {
    const normalizedPath = (pathname || "/").replace(/\/$/, "") || "/";
    const normalizedLink = link.startsWith("/")
      ? link.replace(/\/$/, "")
      : `/${link}`.replace(/\/$/, "");
    return normalizedPath === normalizedLink;
  };

  if (navType === "header") {
    return (
      <nav className={className}>
        <ul className="flex items-start justify-start flex-wrap">
          <li>
            <Link
              href="/"
              className={`mr-16 lg:mr-36 flex justify-between relative ${text} ${
                isActive("/") ? "nav-link-active" : ""
              }`}
            >
              Overview
            </Link>
          </li>
          {navList.map((navItem, index) => (
            <li key={index}>
              <Link
                href={`/${navItem.menuLink}`}
                className={`mr-16 lg:mr-36 flex justify-between relative ${text} ${
                  isActive(navItem.menuLink || "") ? "nav-link-active" : ""
                }`}
              >
                {navItem.name}
              </Link>
            </li>
          ))}
          <li>
            <a
              className={`mr-16 lg:mr-36 flex justify-between ${text}`}
              target="_blank"
              rel="noopener noreferrer"
              href="https://blog.sigstore.dev"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className={`mr-16 lg:mr-36 flex justify-between items-center ${text}`}
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.sigstore.dev"
            >
              Docs
              <span className="ml-6 h-16">
                <ExternalLinkIcon strokeColor={strokeColor} />
              </span>
            </a>
          </li>
          <li>
            <a
              className={`mr-16 lg:mr-36 flex justify-between items-center ${text}`}
              target="_blank"
              rel="noopener noreferrer"
              href="https://status.sigstore.dev"
            >
              Status
              <span className="ml-6 h-16">
                <ExternalLinkIcon strokeColor={strokeColor} />
              </span>
            </a>
          </li>
          <li>
            <a
              className={text}
              href="https://github.com/sigstore"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub profile link"
            >
              <GitHubLogo
                className={
                  isTrustSecurity ? "fill-white" : "fill-black"
                }
              />
            </a>
          </li>
        </ul>
      </nav>
    );
  }

  if (navType === "footer") {
    return (
      <nav className={className}>
        <ul className="flex items-start justify-start flex-wrap">
          {navList.map((navItem, index) => (
            <li key={index}>
              <Link
                href={`/${navItem.footerMenuLink}`}
                className="footer--nav-button mr-16 lg:mr-36 flex justify-between h text-16 leading-24 text-gray-dark"
              >
                {navItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav className={className}>
      <ul className="flex items-start justify-start md:justify-end w-full">
        {navList.map((navItem, index) => (
          <li key={index}>
            <a
              className="footer--nav-button md:mr-30 mr-16 flex justify-between h text-16 leading-24 text-gray-dark"
              target="_blank"
              rel="noopener noreferrer"
              href={navItem.url || navItem.externalLink || "#"}
            >
              {navItem.name === "GitHub" && (
                <span className="mr-4 lg:mr-12">
                  <GitHubLogo className="fill-grey w-20 h-20 lg:w-24 lg:h-24" />
                </span>
              )}
              {navItem.name === "Slack" && (
                <span className="mr-4 lg:mr-12">
                  <SlackLogo className="fill-grey w-20 h-20 lg:w-24 lg:h-24" />
                </span>
              )}
              {navItem.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
