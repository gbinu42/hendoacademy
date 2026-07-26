import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { IframeEmbed } from "@/components/iframe-page";

export const metadata: Metadata = {
  title:
    "Gospel according to Mathai - Mosul Peshitta Syriac - ഹെന്ദോ അക്കാദമി | Hendo Academy",
  description: "Matthew in Syriac from the Mosul Peshitta.",
  openGraph: {
    type: "website",
    url: "https://www.hendoacademy.org/books/gospel-of-mathew-mosul-peshitta-syriac",
    title:
      "Gospel according to Mathai - Mosul Peshitta Syriac - ഹെന്ദോ അക്കാദമി | Hendo Academy",
    description: "Matthew in Syriac from the Mosul Peshitta.",
    images: ["/assets/images/logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Gospel according to Mathai - Mosul Peshitta Syriac - ഹെന്ദോ അക്കാദമി | Hendo Academy",
    description: "Matthew in Syriac from the Mosul Peshitta.",
    images: ["/assets/images/logo.jpg"],
  },
  alternates: {
    canonical:
      "https://www.hendoacademy.org/books/gospel-of-mathew-mosul-peshitta-syriac",
  },
};

export default function GospelMathaiPage() {
  return (
    <>
      <SiteHeader variant="books" />
      <main className="min-h-[80vh]">
        <IframeEmbed
          src="https://hudra.day/books/gospel-according-to-mathai?whitelabel=1"
          title="Gospel according to Mathai - Mosul Peshitta Syriac"
        />
      </main>
      <SiteFooter variant="books" />
    </>
  );
}
