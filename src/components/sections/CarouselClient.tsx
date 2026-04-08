"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface Slide {
  title?: string;
  brand?: string;
  caseColour?: string;
  caseStudyText?: string;
  caseStudyLink?: string;
  category?: string;
  name?: string;
  role?: string;
  body: string;
}

interface CarouselClientProps {
  slideData: Slide[];
}

function getTextColorClass(caseColour?: string): string {
  if (caseColour === "bg-purple-light") return "text-white";
  if (caseColour === "bg-pastel-blue") return "text-purple-dark";
  if (caseColour === "bg-orange-medium") return "text-orange-dark";
  return "";
}

function getStrokeClass(caseColour?: string): string {
  if (caseColour === "bg-purple-light") return "fill-white-stroke";
  if (caseColour === "bg-pastel-blue") return "fill-purple-dark-stroke";
  if (caseColour === "bg-orange-medium") return "fill-orange-dark-stroke";
  return "";
}

export function CarouselClient({ slideData }: CarouselClientProps) {
  const swiperRef = useRef<HTMLDivElement>(null);

  if (!slideData || slideData.length === 0) return null;

  return (
    <div ref={swiperRef} className="slider h-auto">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        centeredSlides
        speed={20000}
        autoplay={{ delay: 1, disableOnInteraction: true }}
        loop
        slidesPerView="auto"
        allowTouchMove={false}
        className="h-auto w-full"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`${slide.caseColour || ""} rounded-xl p-32 md:p-44 md:flex justify-between items-start !w-[80%] !max-w-[700px] min-h-[430px]`}
            style={{ textAlign: "left" }}
          >
            <div className="w-full md:w-85 md:mb-0 mb-20 flex md:flex-none justify-start items-center">
              {slide.brand && (
                <img
                  className="md:w-auto w-1/4"
                  src={slide.brand}
                  alt={`${slide.title} Logo`}
                />
              )}
              <p
                className={`text-12 uppercase h block md:hidden pl-16 ${getTextColorClass(
                  slide.caseColour
                )}`}
              >
                {slide.category}
              </p>
            </div>
            {(slide.caseStudyText || slide.category) && (
              <div
                className={`w-full text-left md:ml-40 flex flex-col justify-between items-start min-h-320 relative ${getTextColorClass(
                  slide.caseColour
                )}`}
              >
                <div>
                  <p className="text-12 uppercase h mb-16 hidden md:block">
                    {slide.category}
                  </p>
                  <div className="md:mb-40 mb-20 md:min-h-auto min-h-146">
                    <p className="subheading md:text-24 h">
                      {slide.caseStudyText}
                    </p>
                    {slide.name && (
                      <p className="text-12 h leading-15 mt-12">
                        {slide.name}
                        <br />
                        {slide.role}
                      </p>
                    )}
                  </div>
                </div>
                {slide.caseStudyLink && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-0 left-0 pt-22 flex items-center h text-12 md:text-16"
                    href={slide.caseStudyLink}
                  >
                    Learn more
                    <span className="ml-6">
                      <svg
                        className={getStrokeClass(slide.caseColour)}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                          stroke="#444444"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15 3H21V9"
                          stroke="#444444"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 14L21 3"
                          stroke="#444444"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                )}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
