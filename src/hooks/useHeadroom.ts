"use client";

import { useEffect, useRef } from "react";
import Headroom from "headroom.js";

export function useHeadroom<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const headroom = new Headroom(ref.current);
    headroom.init();

    return () => headroom.destroy();
  }, []);

  return ref;
}
