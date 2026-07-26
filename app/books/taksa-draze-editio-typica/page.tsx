import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { IframeEmbed } from "@/components/iframe-page";

export const metadata: Metadata = {
  title: "Taksa Draze Editio Typica - ഹെന്ദോ അക്കാദമി | Hendo Academy",
  description: "Taksa d'Raze Editio Typica 2003 (digital).",
  keywords: [
    "Taksa Draze",
    "Editio Typica",
    "Syriac",
    "Liturgy",
    "Hendo Academy",
    "Nasrani",
  ],
  openGraph: {
    type: "website",
    url: "https://www.hendoacademy.org/books/taksa-draze-editio-typica",
    title: "Taksa Draze Editio Typica - ഹെന്ദോ അക്കാദമി | Hendo Academy",
    description: "Taksa d'Raze Editio Typica 2003 (digital).",
    images: ["/assets/images/logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taksa Draze Editio Typica - ഹെന്ദോ അക്കാദമി | Hendo Academy",
    description: "Taksa d'Raze Editio Typica 2003 (digital).",
    images: ["/assets/images/logo.jpg"],
  },
  alternates: {
    canonical: "https://www.hendoacademy.org/books/taksa-draze-editio-typica",
  },
};

export default function TaksaDrazePage() {
  return (
    <>
      <SiteHeader variant="books" />
      <main className="min-h-[80vh]">
        <IframeEmbed
          src="https://hudra.day/books/taksa-draze-edition-typica-2003?whitelabel=1"
          title="Taksa d'Raze Editio Typica 2003"
        />
      </main>
      <SiteFooter variant="books" />
    </>
  );
}
