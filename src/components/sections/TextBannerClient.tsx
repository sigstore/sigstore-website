"use client";

import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";

interface StatsInfo {
  commits: number;
  members: number;
  organizations: number;
}

interface CtaData {
  title: string;
  link: string;
  ctaicon?: string;
}

interface TextBannerClientProps {
  header?: string;
  text?: string;
  ctaButtons?: string[];
  ctaStyle?: string;
  bgColour?: string;
  textAlign?: string;
  textColour?: string;
  isScreenHeight?: boolean;
  showSupportedBy?: boolean;
  showStatsBanner?: boolean;
  info?: StatsInfo | null;
  ctaDataList?: (CtaData | null)[];
  slug?: string;
}

function headerTextClass(bgColour?: string): string {
  if (bgColour === "bg-purple-dark") return "text-white";
  if (bgColour === "bg-pastel-blue") return "text-purple-dark";
  return "text-gray-dark";
}

function renderCta(ctaStyle: string | undefined, ctaData: CtaData) {
  if (ctaStyle === "solidCtaBlue" || ctaStyle === "solidCtaPurple") {
    return (
      <a
        className="button text-white border border-blue-medium bg-blue-medium"
        href={ctaData.link || "#"}
      >
        {ctaData.ctaicon && (
          <img className="w-[20%] mr-5" src={ctaData.ctaicon} alt="CTA icon" />
        )}
        {ctaData.title}
      </a>
    );
  }

  if (ctaStyle === "transparentCta") {
    return (
      <a
        className="button flex items-center text-purple-dark p-14 text-12 rounded-full"
        href={ctaData.link || "#"}
      >
        {ctaData.ctaicon && (
          <span className="w-20 mr-14 inline-block">
            <img src={ctaData.ctaicon} alt="CTA icon" />
          </span>
        )}
        {ctaData.title}
      </a>
    );
  }

  return null;
}

export function TextBannerClient({
  header,
  text,
  ctaStyle,
  bgColour,
  textAlign,
  textColour,
  isScreenHeight = true,
  showSupportedBy = false,
  showStatsBanner = false,
  info,
  ctaDataList,
}: TextBannerClientProps) {
  const animRef1 = useAnimateOnScroll();
  const animRef2 = useAnimateOnScroll();
  const animRef3 = useAnimateOnScroll();
  const animRef4 = useAnimateOnScroll();

  return (
    <section>
      <div
        className={`text_banner md:flex justify-center items-center relative ${bgColour || ""} ${
          isScreenHeight ? "min-h-screen md:flex-col" : "h-auto py-128"
        }`}
        data-header-text={headerTextClass(bgColour)}
        data-bg-color={bgColour || ""}
      >
        <div
          className={`flex items-center justify-center ${
            showSupportedBy ? "h-screen" : ""
          } ${isScreenHeight ? "h-screen" : "h-auto"}`}
        >
          <div
            className={`container inner relative ${
              showSupportedBy ? "md:h-180" : ""
            } ${textAlign === "center" ? "text-left md:text-center" : "text-left"}`}
          >
            {header && (
              <h1
                ref={animRef1}
                className={`delay-step_1 mb-30 ${textColour || ""}`}
              >
                {header}
              </h1>
            )}
            {text && (
              <h2
                ref={animRef2}
                className={`subheading md:text-24 delay-step_3 mb-26 ${
                  textAlign === "center" ? "md:max-w-690 w-full mx-auto" : ""
                } ${textColour || ""}`}
              >
                {text}
              </h2>
            )}
            {ctaDataList && ctaDataList.length > 0 && (
              <div ref={animRef3} className="delay-step_5">
                {ctaDataList.map(
                  (cta, index) =>
                    cta && (
                      <div
                        key={index}
                        className={
                          textAlign === "center"
                            ? "flex justify-center items-center"
                            : "flex justify-start items-center"
                        }
                      >
                        {renderCta(ctaStyle, cta)}
                      </div>
                    )
                )}
              </div>
            )}
          </div>
        </div>
        {showSupportedBy && (
          <div
            ref={animRef4}
            className="absolute bottom-0 mb-24 w-full delay-step_5"
          >
            <div className="container inner text-center">
              <p className="h mb-16 text-gray-dark">In collaboration with</p>
              <div className="flex items-center justify-center flex-nowrap">
                {[
                  { src: "/img/openssf-horizontal-color.svg", alt: "OpenSSF", wide: true },
                  { src: "/img/chainguard.svg", alt: "Chainguard", wide: true },
                  { src: "/img/cisco.png", alt: "Cisco", wide: true },
                  { src: "/img/github-logo.svg", alt: "GitHub", wide: false },
                  { src: "/img/googlelogo.png", alt: "Google", wide: true },
                  { src: "/img/hpe.png", alt: "HPE", wide: true },
                  { src: "/img/purdueunilogo.png", alt: "Purdue University", wide: true },
                  { src: "/img/redhatlogo.png", alt: "RedHat", wide: true },
                  { src: "/img/stacklok.png", alt: "Stacklok", wide: true },
                  { src: "/img/vmware.png", alt: "VMware", wide: true },
                ].map((logo) => (
                  <img
                    key={logo.alt}
                    className={`mr-[10px] md:mr-20 pb-[7px] ${
                      logo.wide
                        ? "w-[55px] md:w-[74px] lg:w-[88px] xl:w-122"
                        : "w-[20px] md:w-[35px] lg:w-[35px] xl:w-50"
                    }`}
                    src={logo.src}
                    alt={`${logo.alt} sponsor logo`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {showStatsBanner && info && (
        <div className="bg-pastel-orange w-full">
          <div className="container container--card relative lg:py-64">
            <div className="lg:flex flex-wrap items-center justify-between bg-orange-medium py-50 px-20 lg:p-64 stat_banner">
              <div className="w-full md:w-full lg:w-1/2 lg:max-w-440">
                <div className="flex items-center justify-start">
                  <div className="md:pr-24">
                    <h2 className="text-21 lg:text-54 text-orange-dark mb-10 lg:mb-16">
                      {info.commits}+
                    </h2>
                    <h4 className="h4 text-orange-dark uppercase">Commits</h4>
                  </div>
                  <div className="md:pr-24 pl-24">
                    <h2 className="text-21 lg:text-54 text-orange-dark mb-10 lg:mb-16">
                      {info.members}+
                    </h2>
                    <h4 className="h4 text-21 text-orange-dark uppercase">Members</h4>
                  </div>
                  <div className="md:pr-24 pl-24">
                    <h2 className="text-21 lg:text-54 text-orange-dark mb-10 lg:mb-16">
                      {info.organizations}+
                    </h2>
                    <h4 className="h4 text-orange-dark uppercase">Orgs</h4>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-full lg:w-1/2 lg:max-w-[470px] mt-28">
                <div className="bg-white rounded-full p-28 text-gray-dark flex items-center justify-around">
                  <p className="text-11 md:text-12 pr-22 md:w-auto w-1/2">
                    Now generally available!
                  </p>
                  <a
                    href="https://docs.sigstore.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button--transparent-border md:w-auto w-1/2"
                  >
                    Find out more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
