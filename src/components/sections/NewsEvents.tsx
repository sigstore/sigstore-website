import { getContentFromDirectory } from "@/lib/content";
import { NewsEventsClient } from "./NewsEventsClient";

interface Article {
  title: string;
  link: string;
  pubDate: string;
  entryTag: string;
  date: string;
}

export function NewsEvents({ slug }: { slug?: string }) {
  const eventsData = getContentFromDirectory("events");

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const articles: Article[] = eventsData
    .map((event) => ({
      title: (event.title as string) || "",
      link: (event.link as string) || "",
      pubDate: (event.pubDate as string) || "",
      entryTag: (event.entryTag as string) || "Article",
      date: "",
    }))
    .sort(
      (a, b) =>
        new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    )
    .map((e) => ({
      ...e,
      date: new Date(e.pubDate).toLocaleDateString("en", options),
    }));

  return <NewsEventsClient articles={articles} slug={slug} />;
}
