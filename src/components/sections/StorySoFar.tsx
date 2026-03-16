import { getJsonContent } from "@/lib/content";
import { StorySoFarClient } from "./StorySoFarClient";

interface StoryData {
  header: string;
  textBlock: string;
  recentHeader?: string;
  recentTextBlock?: string;
  initiativesHeader?: string;
  initiativesTextBlock?: string;
}

export function StorySoFar() {
  const story = getJsonContent<StoryData>("story", "info");

  return <StorySoFarClient story={story} />;
}
