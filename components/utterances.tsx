"use client";

import { useEffect, useRef } from "react";

type UtterancesProps = {
  pathname: string;
};

export function Utterances({ pathname }: UtterancesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;

    // Defer past React Strict Mode's mount→cleanup→remount so utterances
    // never runs insertAdjacentHTML on a detached script node.
    const timer = window.setTimeout(() => {
      if (cancelled || !container.isConnected) return;
      if (container.querySelector("iframe.utterances-frame, .utterances")) {
        return;
      }

      container.replaceChildren();

      const script = document.createElement("script");
      script.src = "https://utteranc.es/client.js";
      script.async = true;
      script.crossOrigin = "anonymous";
      script.setAttribute("repo", "gbinu42/hendoacademy");
      script.setAttribute("issue-term", "pathname");
      script.setAttribute("theme", "github-light");
      container.appendChild(script);
    }, 100);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <div
      key={pathname}
      ref={containerRef}
      className="utterances-container mt-10"
    />
  );
}
