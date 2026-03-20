import type { Metadata } from "next";
import { getJsonContent } from "@/lib/content";
import { gtMaruMedium, inter } from "@/lib/fonts";
import { HeaderThemeProvider } from "@/contexts/HeaderThemeContext";
import { MobileNavProvider } from "@/contexts/MobileNavContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://sigstore.dev"
  ),
  title: {
    default: "Sigstore",
    template: "%s - Sigstore",
  },
  description: "Sigstore: sign, verify, and protect your software.",
  icons: {
    icon: "/favicon.ico",
  },
};

interface HeaderData {
  menu: Array<{ name: string; position: string; menuLink: string }>;
}

interface FooterData {
  footerMenu: Array<{ name: string; footerMenuLink: string }>;
}

interface SocialData {
  links: Array<{ name: string; url: string }>;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerData = getJsonContent<HeaderData>("header", "header");
  const footerData = getJsonContent<FooterData>("footer", "footer");
  const socialData = getJsonContent<SocialData>("setup", "connect");

  return (
    <html lang="en" className={`${gtMaruMedium.variable} ${inter.variable}`}>
      <body>
        <HeaderThemeProvider>
          <MobileNavProvider>
            <Header navigation={headerData.menu} />
            <main>{children}</main>
            <Footer
              navigation={footerData.footerMenu}
              socialLinks={socialData.links}
            />
            <MobileNavigation
              navList={headerData.menu}
              socialLinks={socialData.links}
            />
          </MobileNavProvider>
        </HeaderThemeProvider>
      </body>
    </html>
  );
}
