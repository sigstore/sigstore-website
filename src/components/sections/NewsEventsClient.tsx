"use client";

import { useState } from "react";

interface Article {
  title: string;
  link: string;
  pubDate: string;
  entryTag: string;
  date: string;
}

interface NewsEventsClientProps {
  articles: Article[];
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

function ArrowRightIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.25 12.4971H0.75" stroke="#444444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.5 16.2471L23.25 12.4971L19.5 8.74707" stroke="#444444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function NewsEventsClient({ articles, slug }: NewsEventsClientProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;
  const total = articles.length;
  const totalPages = Math.ceil(total / perPage);
  const isCommunity = slug === "community";

  const start = (currentPage - 1) * perPage;
  const end = Math.min(currentPage * perPage, total);
  const paginatedArticles = articles.slice(start, end);

  return (
    <section
      className="py-64 md:py-128 bg-pastel-orange"
      data-header-text="text-gray-dark"
    >
      <div className="md:flex justify-between container inner">
        <div className="relative flex flex-col h-auto w-full md:w-1/2 text-gray-dark md:mb-0 mb-64 pb-12 border-b-2 border-gray-medium md:border-none">
          <h3>News &amp; Events</h3>
          {!isCommunity && (
            <a
              className="absolute bottom-10 hidden md:flex items-center inline--button-grey h md:text-16 text-12"
              href="/community"
            >
              View more news
              <span className="ml-12">
                <ArrowRightIcon />
              </span>
            </a>
          )}
        </div>
        {total > 0 && (
          <div className="w-full md:w-1/2">
            {paginatedArticles.map((article, index) => (
              <article
                key={index}
                className="text-gray-dark border-b-2 border-gray-medium pb-6 mb-32"
              >
                <p className="text-24 leading-32 text-gray-dark h">
                  {article.title}
                </p>
                <div className="flex justify-start items-center">
                  <div className="tag bg-white text-gray-dark rounded-lg md:px-8 px-10 py-12 md:py-12 text-12 h my-12 capitalize mr-14 leading-none">
                    {article.entryTag}
                  </div>
                  <p className="mr-14 md:text-16 text-12">{article.date}</p>
                  <span>&bull;</span>
                  <a
                    className="ml-12 flex items-center inline--button-grey md:text-16 text-12"
                    href={article.link}
                  >
                    See more
                    <span className="ml-6">
                      <ExternalLinkIcon />
                    </span>
                  </a>
                </div>
              </article>
            ))}
            {isCommunity && totalPages > 1 && (
              <ul className="flex items-center justify-center h-full">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (i) => (
                    <li
                      key={i}
                      className={`p-[1em] m-[1em] border-b-2 cursor-pointer ${
                        i === currentPage
                          ? "font-bold border-gray-medium"
                          : "border-transparent"
                      }`}
                      onClick={() => setCurrentPage(i)}
                    >
                      {i}
                    </li>
                  )
                )}
              </ul>
            )}
            {!isCommunity && (
              <a
                className="flex md:hidden items-center inline--button-grey h md:text-16 text-12"
                href="/community"
              >
                View more news
                <span className="ml-12">
                  <ArrowRightIcon />
                </span>
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
