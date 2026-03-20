import { getJsonContent } from "@/lib/content";
import { TextBannerClient } from "./TextBannerClient";

interface StatsInfo {
  commits: number;
  members: number;
  organizations: number;
  sitename: string;
  sitedescription: string;
}

interface CtaData {
  title: string;
  link: string;
  ctaicon?: string;
}

interface TextBannerProps {
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
  slug?: string;
}

export function TextBanner(props: TextBannerProps) {
  let info: StatsInfo | null = null;
  if (props.showStatsBanner) {
    try {
      info = getJsonContent<StatsInfo>("setup", "info");
    } catch {
      info = null;
    }
  }

  let ctaDataList: (CtaData | null)[] = [];
  if (props.ctaButtons && props.ctaButtons.length > 0) {
    ctaDataList = props.ctaButtons.map((slug) => {
      try {
        return getJsonContent<CtaData>("ctas", slug);
      } catch {
        return null;
      }
    });
  }

  return (
    <TextBannerClient {...props} info={info} ctaDataList={ctaDataList} />
  );
}
