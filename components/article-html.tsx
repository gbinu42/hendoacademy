"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import parse from "html-react-parser";
import { X } from "lucide-react";

/** Match syr app - do not force init/medi/fina (breaks joining). */
const SYRIAC_FEATURES =
  '"liga" 1, "clig" 1, "calt" 1, "ccmp" 1, "locl" 1, "mark" 1, "mkmk" 1';

const FONT_BY_VALUE: Record<string, string> = {
  "East Syriac Malankara": "East Syriac Malankara",
  "East Syriac Malankara Classical": "East Syriac Malankara Classical",
  "East Syriac Adiabene": "East Syriac Adiabene",
  Karshon: "East Syriac Adiabene",
  "east-syriac-malankara": "East Syriac Malankara",
  "east-syriac-malankara-classical": "East Syriac Malankara Classical",
  karshon: "East Syriac Adiabene",
  adiabene: "East Syriac Adiabene",
};

const CLASS_BY_VALUE = [
  "east-syriac-malankara",
  "east-syriac-malankara-classical",
  "karshon",
  "adiabene",
] as const;

const SYRIAC_RE = /[\u0700-\u074F\u0860-\u086F]/;

function applyShaping(el: HTMLElement, fontFamily?: string) {
  if (fontFamily) {
    el.style.setProperty(
      "font-family",
      `"${fontFamily}", "East Syriac Adiabene", "Karshon", serif`,
      "important"
    );
  }
  el.style.setProperty("font-feature-settings", SYRIAC_FEATURES, "important");
  el.style.setProperty(
    "-webkit-font-feature-settings",
    SYRIAC_FEATURES,
    "important"
  );
  el.style.setProperty("unicode-bidi", "isolate", "important");
  if (!el.style.direction) {
    el.style.setProperty("direction", "rtl");
  }
  if (!el.getAttribute("lang")) {
    el.setAttribute("lang", "syr");
  }
}

type LightboxState = {
  src: string;
  alt: string;
} | null;

type ArticleHtmlProps = {
  html: string;
};

export function ArticleHtml({ html }: ArticleHtmlProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<LightboxState>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!lightbox) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const applyFamily = (fontFamily: string) => {
      root
        .querySelectorAll<HTMLElement>(
          ".syriac-text, .syriac, .syriac-title, .syriac-header, .syriac-quote, .syriac-sample, .syriac-char, .suriyani-letter, .suriyani-example"
        )
        .forEach((el) => applyShaping(el, fontFamily));
    };

    const applyClassValue = (value: string) => {
      root.querySelectorAll<HTMLElement>(".syriac").forEach((el) => {
        CLASS_BY_VALUE.forEach((c) => el.classList.remove(c));
        if (CLASS_BY_VALUE.includes(value as (typeof CLASS_BY_VALUE)[number])) {
          el.classList.add(value);
        }
        applyShaping(el);
      });
    };

    // Inline-styled Syriac (font launch character maps, etc.) - ensure shaping
    root.querySelectorAll<HTMLElement>("[style*='font-family']").forEach((el) => {
      const style = el.getAttribute("style") || "";
      if (
        /East Syriac|Karshon|EastSyriac/i.test(style) ||
        SYRIAC_RE.test(el.textContent || "")
      ) {
        applyShaping(el);
        const match = style.match(/font-family\s*:\s*([^;]+)/i);
        if (match) {
          const family = match[1].replace(/['"]/g, "").split(",")[0].trim();
          if (family) {
            el.style.setProperty(
              "font-family",
              `"${family}", "East Syriac Adiabene", "Karshon", serif`,
              "important"
            );
          }
        }
      }
    });

    root
      .querySelectorAll<HTMLElement>(
        ".syriac-text, .syriac, .syriac-title, .syriac-header, .syriac-quote, .syriac-sample, .syriac-char, .suriyani-letter, .suriyani-example"
      )
      .forEach((el) => {
        const isSuriyani =
          el.classList.contains("suriyani-letter") ||
          el.classList.contains("suriyani-example");
        applyShaping(
          el,
          isSuriyani ? "East Syriac Malankara" : "East Syriac Adiabene"
        );
      });

    // Mark content images as zoomable
    root.querySelectorAll<HTMLImageElement>("img[src]").forEach((img) => {
      img.classList.add("article-zoomable");
      img.setAttribute("tabindex", "0");
      img.setAttribute("role", "button");
      const label = img.alt?.trim() || "View larger image";
      img.setAttribute("aria-label", label);
    });

    const selects = root.querySelectorAll<HTMLSelectElement>(
      "#syriac-font, #syriac-font-selector"
    );

    const onChange = (e: Event) => {
      const select = e.target as HTMLSelectElement;
      const value = select.value;
      const family = FONT_BY_VALUE[value] ?? value;
      if (select.id === "syriac-font-selector") {
        applyClassValue(value);
        applyFamily(family);
      } else {
        applyFamily(family);
      }
    };

    selects.forEach((select) => {
      const value = select.value;
      const family = FONT_BY_VALUE[value] ?? value;
      if (select.id === "syriac-font-selector") {
        applyClassValue(value);
        applyFamily(family);
      } else {
        applyFamily(family);
      }
      select.addEventListener("change", onChange);
    });

    const openFromImg = (img: HTMLImageElement) => {
      const src = img.currentSrc || img.src;
      if (!src) return;
      setLightbox({ src, alt: img.alt || "" });
    };

    const onClick = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof HTMLImageElement)) return;
      if (!root.contains(target)) return;
      e.preventDefault();
      e.stopPropagation();
      openFromImg(target);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const target = e.target;
      if (!(target instanceof HTMLImageElement)) return;
      if (!root.contains(target)) return;
      e.preventDefault();
      openFromImg(target);
    };

    root.addEventListener("click", onClick);
    root.addEventListener("keydown", onKeyDown);

    return () => {
      selects.forEach((select) =>
        select.removeEventListener("change", onChange)
      );
      root.removeEventListener("click", onClick);
      root.removeEventListener("keydown", onKeyDown);
    };
  }, [html]);

  return (
    <>
      <div ref={rootRef} className="article-body prose-article">
        {parse(html)}
      </div>

      {mounted &&
        lightbox &&
        createPortal(
          <div
            className="article-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.alt || "Enlarged image"}
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              className="article-lightbox-close"
              aria-label="Close"
              onClick={() => setLightbox(null)}
            >
              <X className="size-5" />
            </button>
            <figure
              className="article-lightbox-figure"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="article-lightbox-img"
              />
              {lightbox.alt ? (
                <figcaption className="article-lightbox-caption">
                  {lightbox.alt}
                </figcaption>
              ) : null}
            </figure>
          </div>,
          document.body
        )}
    </>
  );
}
