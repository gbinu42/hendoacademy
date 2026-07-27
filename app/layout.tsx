import type { Metadata } from "next";
import { Fraunces, Noto_Sans_Malayalam, Open_Sans, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@/components/analytics";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-serif",
  display: "swap",
});

const notoMalayalam = Noto_Sans_Malayalam({
  subsets: ["malayalam"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-malayalam",
  display: "swap",
});

const siteUrl = "https://www.hendoacademy.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "മലങ്കര ܒܝܬ ܐܦܪܝܡ നസ്രാണി യോഗം - ഹെന്ദോ അക്കാദമി | Hendo Academy",
    template: "%s | Hendo Academy",
  },
  description:
    "Promoting the study of Syriac and the history of the Nasranies of India (Hendo) and the Syro Malabar Church. Learn about our Syriac classes, field visits, and historical research.",
  keywords: [
    "Hendo Academy",
    "Nasrani",
    "Syriac",
    "Syro Malabar Church",
    "Saint Thomas Christians",
    "Kerala",
    "Christian heritage",
  ],
  authors: [{ name: "Hendo Academy" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title:
      "മലങ്കര ܒܝܬ ܐܦܪܝܡ നസ്രാണി യോഗം - ഹെന്ദോ അക്കാദമി | Hendo Academy",
    description:
      "Promoting the study of Syriac and the history of the Nasranies of India (Hendo) and the Syro Malabar Church.",
    images: [
      {
        url: "/assets/images/logo.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "മലങ്കര ܒܝܬ ܐܦܪܝܡ നസ്രാണി യോഗം - ഹെന്ദോ അക്കാദമി | Hendo Academy",
    description:
      "Promoting the study of Syriac and the history of the Nasranies of India (Hendo) and the Syro Malabar Church.",
    images: ["/assets/images/logo.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/images/logo.jpg", type: "image/jpeg" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${fraunces.variable} ${sourceSerif.variable} ${notoMalayalam.variable} h-full`}
    >
      <head>
        <link
          rel="preload"
          href="/assets/fonts/SyrCOMAdiabene.ttf?v=12"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
