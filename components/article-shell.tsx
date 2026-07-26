import Link from "next/link";
import { ArrowLeft, BookOpen, Calendar, User } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Utterances } from "@/components/utterances";
import { ArticleHtml } from "@/components/article-html";
import type { ArticleMeta } from "@/lib/articles";

type ArticleShellProps = {
  meta: ArticleMeta;
  html: string;
  styles?: string;
  showHeaderMeta?: boolean;
};

export function ArticleShell({
  meta,
  html,
  styles,
  showHeaderMeta = true,
}: ArticleShellProps) {
  const pathname = `/articles/${meta.slug}`;

  return (
    <>
      <SiteHeader variant="articles" />
      <main className="article-page flex-1">
        <div className="container-site py-10 md:py-14">
          {styles ? (
            <style dangerouslySetInnerHTML={{ __html: styles }} />
          ) : null}
          <article className="article-sheet article-content mx-auto max-w-3xl rounded-sm px-5 py-8 sm:px-8 sm:py-10">
            {showHeaderMeta ? (
              <header className="mb-8 border-b border-brand/10 pb-6 text-center">
                <h1 className="article-shell-title mb-3 text-3xl font-semibold leading-tight sm:text-4xl">
                  {meta.title}
                </h1>
                {(meta.author || meta.date) && (
                  <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-sans text-sm text-[#6b6460]">
                    {meta.author ? (
                      <span className="inline-flex items-center gap-1.5">
                        <User className="size-3.5" />
                        {meta.author}
                      </span>
                    ) : null}
                    {meta.date ? (
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="size-3.5" />
                        {meta.date}
                      </span>
                    ) : null}
                  </div>
                )}
              </header>
            ) : null}

            <ArticleHtml html={html} />

            {meta.hasComments !== false ? (
              <div className="mt-12 border-t border-brand/10 pt-8">
                <Utterances pathname={pathname} />
              </div>
            ) : null}

            <div className="article-nav-links mt-10 flex flex-wrap gap-6 border-t border-brand/10 pt-8">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 font-semibold text-brand no-underline transition-colors hover:text-brand-blue"
              >
                <BookOpen className="size-4" /> All Articles
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-semibold text-brand no-underline transition-colors hover:text-brand-blue"
              >
                <ArrowLeft className="size-4" /> Back to Home
              </Link>
            </div>
          </article>
        </div>
      </main>
      <SiteFooter variant="articles" />
    </>
  );
}
