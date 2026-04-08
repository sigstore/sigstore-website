"use client";

import { Navigation } from "@/components/layout/Navigation";
import Logo from "@/assets/icons/logo.svg";

interface FooterProps {
  navigation: Array<{ name: string; footerMenuLink: string }>;
  socialLinks: Array<{ name: string; url: string }>;
}

export function Footer({ navigation, socialLinks }: FooterProps) {
  return (
    <footer className="footer py-32 md:py-64 bg-pastel-orange">
      <div className="flex flex-wrap justify-between items-start container">
        <div className="w-full md:w-1/2">
          <Logo />
          <Navigation navType="footer" navList={navigation} />
        </div>
        <div className="w-full md:w-1/2 md:mt-0 mt-32">
          <Navigation navType="social" navList={socialLinks} />
        </div>
        <p className="text-17 text-gray-dark mt-32">
          Copyright &copy; {new Date().getFullYear()} The Linux Foundation
          &reg;. All rights reserved.{" "}
          <a href="https://linuxfoundation.org/">The Linux Foundation</a> has
          registered trademarks and uses trademarks. For a list of trademarks
          of The Linux Foundation, please see our{" "}
          <a href="https://www.linuxfoundation.org/trademark-usage/">
            Trademark Usage
          </a>{" "}
          page. Linux is a registered trademark of Linus Torvalds.{" "}
          <a href="https://lfprojects.org/policies/privacy-policy/">
            Privacy Policy
          </a>
          ,{" "}
          <a href="https://lfprojects.org/policies/terms-of-use/">
            Terms of Use
          </a>
          ,{" "}
          <a href="https://lfprojects.org/policies/hosted-project-tools-terms-of-use/">
            Hosted Project Tools Terms of Use
          </a>{" "}
          and{" "}
          <a href="https://lfprojects.org/policies/hosted-project-tools-immutable-records/">
            Immutable Record notice
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
