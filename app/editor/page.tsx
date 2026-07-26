import type { Metadata } from "next";
import { IframeEmbed } from "@/components/iframe-page";

export const metadata: Metadata = {
  title: "Syriac Editor - Hendo Academy",
  description:
    "Use our specialized Syriac editor with Karshon font for typing and working with Syriac text. An essential tool for students and researchers of Syriac language and Nasrani heritage.",
  keywords: [
    "Syriac Editor",
    "Karshon font",
    "Syriac typing",
    "Syro Malabar",
    "Nasrani",
    "online editor",
  ],
  openGraph: {
    type: "website",
    url: "https://www.hendoacademy.org/editor",
    title: "Syriac Editor - Hendo Academy",
    description:
      "Use our specialized Syriac editor with Karshon font for typing and working with Syriac text.",
    images: ["/assets/images/logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syriac Editor - Hendo Academy",
    description:
      "Use our specialized Syriac editor with Karshon font for typing and working with Syriac text.",
    images: ["/assets/images/logo.jpg"],
  },
  alternates: {
    canonical: "https://www.hendoacademy.org/editor",
  },
};

export default function EditorPage() {
  return (
    <main className="fixed inset-0 overflow-hidden bg-white">
      <IframeEmbed
        src="https://hudra.day/type"
        title="Syriac Editor"
        fullViewport
      />
    </main>
  );
}
