import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, User } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SyriacText } from "@/components/syriac-text";
import { getListedArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "A collection of scholarly articles on Syriac language, culture, and the history of the Nasranies of India, exploring the rich heritage of Saint Thomas Christians.",
  keywords: [
    "Hendo Academy",
    "Nasrani",
    "Syriac",
    "Syro Malabar Church",
    "Articles",
    "Publications",
  ],
  openGraph: {
    type: "website",
    url: "https://www.hendoacademy.org/articles",
    title: "Articles | Hendo Academy",
    description:
      "A collection of scholarly articles on Syriac language, culture, and the history of the Nasranies of India, exploring the rich heritage of Saint Thomas Christians.",
    images: ["/assets/images/logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles | Hendo Academy",
    description:
      "A collection of scholarly articles on Syriac language, culture, and the history of the Nasranies of India, exploring the rich heritage of Saint Thomas Christians.",
    images: ["/assets/images/logo.jpg"],
  },
  alternates: {
    canonical: "https://www.hendoacademy.org/articles",
  },
};

export default function ArticlesIndexPage() {
  const listed = getListedArticles();
  const [featured, ...rest] = listed;

  return (
    <>
      <SiteHeader variant="articles" />
      <main className="bg-brand-light">
        <div className="container-site py-12 md:py-16">
          <header className="mb-12 max-w-3xl border-b border-brand/15 pb-8">
            <p className="mb-2 text-sm font-semibold tracking-wide text-brand-gold uppercase">
              Publications
            </p>
            <h1 className="mb-4 font-display text-4xl font-semibold tracking-tight text-brand md:text-5xl">
              Articles <SyriacText className="text-[0.85em]">ܡܐܡܪ̈ܐ</SyriacText>
            </h1>
            <p className="font-serif text-lg leading-relaxed text-foreground/80">
              A collection of scholarly articles on Syriac language, culture, and
              the history of the Nasranies of India, exploring the rich heritage
              of Saint Thomas Christians.
            </p>
          </header>

          {featured ? (
            <article className="mb-12 grid items-center gap-8 border-b border-brand/15 pb-12 lg:grid-cols-2">
              {featured.image ? (
                <Link
                  href={`/articles/${featured.slug}`}
                  className="group block overflow-hidden rounded-sm bg-white shadow-sm"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featured.image}
                    alt={featured.imageAlt || featured.title}
                    className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                </Link>
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center rounded-sm bg-brand-dark/5">
                  <SyriacText className="text-5xl text-brand/40">ܐ</SyriacText>
                </div>
              )}
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <User className="size-3.5" />
                    {featured.author}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="size-3.5" />
                    {featured.date}
                  </span>
                </div>
                <h2 className="mb-4 font-display text-2xl font-semibold leading-snug tracking-tight text-brand md:text-3xl">
                  <Link
                    href={`/articles/${featured.slug}`}
                    className="no-underline transition-colors hover:text-brand-blue"
                  >
                    {featured.title}
                  </Link>
                </h2>
                <p className="mb-6 font-serif text-base leading-relaxed text-foreground/85 md:text-lg">
                  {featured.excerpt}
                </p>
                <Link
                  href={
                    featured.readMoreHref
                      ? `/articles/${featured.readMoreHref}`
                      : `/articles/${featured.slug}`
                  }
                  className="inline-flex items-center gap-2 font-semibold text-brand no-underline transition-colors hover:text-brand-blue"
                >
                  Read article <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          ) : null}

          <ul className="m-0 list-none divide-y divide-brand/15 p-0">
            {rest.map((article) => {
              const href = `/articles/${article.slug}`;
              const readMoreHref = article.readMoreHref
                ? `/articles/${article.readMoreHref}`
                : href;

              return (
                <li key={article.slug} className="py-8 first:pt-0">
                  <article className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_200px] sm:items-start md:grid-cols-[minmax(0,1fr)_240px]">
                    <div className="order-2 sm:order-1">
                      <div className="mb-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <User className="size-3.5" />
                          {article.author}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="size-3.5" />
                          {article.date}
                        </span>
                      </div>
                      <h2 className="mb-3 font-display text-xl font-semibold leading-snug tracking-tight text-brand md:text-2xl">
                        <Link
                          href={href}
                          className="no-underline transition-colors hover:text-brand-blue"
                        >
                          {article.title}
                        </Link>
                      </h2>
                      <p className="mb-4 line-clamp-3 font-serif leading-relaxed text-foreground/80">
                        {article.excerpt}
                      </p>
                      <Link
                        href={readMoreHref}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-brand no-underline transition-colors hover:text-brand-blue"
                      >
                        Read article <ArrowRight className="size-3.5" />
                      </Link>
                    </div>

                    {article.image ? (
                      <Link
                        href={href}
                        className="order-1 block overflow-hidden rounded-sm bg-white shadow-sm sm:order-2"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={article.image}
                          alt={article.imageAlt || article.title}
                          className="aspect-[4/3] w-full object-cover transition duration-300 hover:scale-[1.02] sm:aspect-[3/2]"
                        />
                      </Link>
                    ) : (
                      <div className="order-1 flex aspect-[4/3] items-center justify-center rounded-sm bg-white/60 sm:order-2 sm:aspect-[3/2]">
                        <SyriacText className="text-3xl text-brand/30">
                          ܐ
                        </SyriacText>
                      </div>
                    )}
                  </article>
                </li>
              );
            })}
          </ul>

          <Link
            href="/"
            className="mt-12 inline-flex items-center gap-2 border-t border-brand/15 pt-8 font-semibold text-brand no-underline transition-colors hover:text-brand-blue"
          >
            <ArrowLeft className="size-4" /> Back to Home
          </Link>
        </div>
      </main>
      <SiteFooter variant="articles" />
    </>
  );
}
