import GitHubIcon from "@/assets/icons/github.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";

interface CardProps {
  header?: string;
  subHeader?: string;
  text?: string;
  isCardStyle?: boolean;
  socialLinks?: boolean;
  imageAsset?: string;
  bgColour?: string;
  ctaLink?: string;
  ctaText?: string;
  github?: string;
  twitter?: string;
  linkedIn?: string;
  slug?: string;
}

function ExternalLinkIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 3H21V9" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 14L21 3" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function Card({
  header,
  subHeader,
  text,
  isCardStyle,
  socialLinks,
  imageAsset,
  bgColour,
  ctaLink,
  ctaText,
  github,
  twitter,
  slug,
}: CardProps) {
  if (!header) return null;

  const isTrustSecurity = slug === "trust-security";
  const isCommunity = slug === "community";

  return (
    <article
      style={bgColour ? { backgroundColor: bgColour } : undefined}
      className={`w-full md:w-1/3 md:max-w-352 md:ml-30 mb-44 relative ${
        isCardStyle
          ? "rounded-xl px-40 py-40 md:min-h-440 min-h-400"
          : "md:px-10"
      }`}
    >
      {imageAsset && (
        <img src={imageAsset} alt={`${header} image`} className="mb-24" />
      )}
      {header && (
        <h4
          className={`text-24 leading-32 ${
            isCommunity
              ? "text-orange-dark mb-24"
              : isTrustSecurity
              ? "text-white"
              : "text-purple-dark mb-24"
          }`}
        >
          {header}
        </h4>
      )}
      {subHeader && (
        <p className="mb-24 text-18 leading-22 text-white">{subHeader}</p>
      )}
      {text && (
        <p className={isTrustSecurity ? "text-white" : "text-gray-dark"}>
          {text}
        </p>
      )}
      {ctaLink && (
        <a
          href={ctaLink}
          className={`pt-24 flex items-center h text-12 md:text-16 inline--button-grey ${
            isCardStyle ? "absolute mb-40 bottom-0" : ""
          }`}
        >
          {ctaText}
          <span className="ml-6">
            <ExternalLinkIcon />
          </span>
        </a>
      )}
      {socialLinks && (
        <div className="flex items-center justify-items-start mt-24">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-12 fill-white icon--link"
            >
              <GitHubIcon />
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-12 fill-white icon--link"
            >
              <TwitterIcon />
            </a>
          )}
        </div>
      )}
    </article>
  );
}
