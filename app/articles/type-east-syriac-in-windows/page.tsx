import type { Metadata } from "next";
import { ArticleShell } from "@/components/article-shell";
import { getArticle } from "@/lib/articles";

const slug = "type-east-syriac-in-windows";
const meta = getArticle(slug) ?? {
  slug,
  title: "Type East Syriac in Windows",
  description: "Type East Syriac in Windows.",
  author: "Hendo Academy",
  date: "",
  excerpt: "Type East Syriac in Windows.",
  listed: false,
  hasComments: true,
};

export const metadata: Metadata = {
  title: "Type East Syriac in Windows",
  description: "Type East Syriac in Windows.",
  openGraph: {
    type: "article",
    url: `https://www.hendoacademy.org/articles/${slug}`,
    title: "Type East Syriac in Windows",
    description: "Type East Syriac in Windows.",
    images: ["/assets/images/logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Type East Syriac in Windows",
    description: "Type East Syriac in Windows.",
    images: ["/assets/images/logo.jpg"],
  },
  alternates: {
    canonical: `https://www.hendoacademy.org/articles/${slug}`,
  },
};

const html = ``;

const styles = ``;

export default function ArticlePage() {
  return (
    <ArticleShell
      meta={meta}
      html={html}
      styles={styles}
      showHeaderMeta={true}
    />
  );
}
