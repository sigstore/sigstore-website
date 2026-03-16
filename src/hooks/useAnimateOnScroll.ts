"use client";

import { useEffect, useRef } from "react";

export function useAnimateOnScroll<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("before-enter");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
            entry.target.classList.add("enter");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px", threshold: [0.2, 0.6] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
