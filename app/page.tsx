import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  ExternalLink,
  FileText,
  Keyboard,
  Smartphone,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SyriacText } from "@/components/syriac-text";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.hendoacademy.org/",
  },
};

const latestArticles = [
  {
    href: "/articles/hendo-academy-launches-kerala's-first-indigenous-east-syriac-and-karshon-unicode-font-east-syriac-malankara",
    label: "East Syriac Malankara: India's First Indigenous Syriac & Karshon Font",
  },
  {
    href: "/articles/suriyani-malayalam-script-correspondence",
    label: "Malayalam - Suriyani Malayalam script correspondence",
  },
  {
    href: "/articles/typing-karshon-in-libreoffice-writer-on-macos",
    label: "Typing Karshon in LibreOffice Writer on macOS",
  },
  {
    href: "/articles/typing-karshon-in-libreoffice-writer-on-windows",
    label: "Typing Karshon in LibreOffice Writer on Windows",
  },
  {
    href: "/articles/parishudhathmave-nee-ezhunnalli-karshon",
    label: "Parishudhathmave nee ezhunnalli",
  },
  {
    href: "/articles/turgama",
    label: "Turgama d'evangelion",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader variant="home" />

      <header className="bg-gradient-to-br from-brand-dark via-[#3a322a] to-brand py-16 text-white md:py-20">
        <div className="container-site flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-12">
          <div className="w-[220px] overflow-hidden text-center md:w-[300px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/logo.jpg"
              alt="Hendo Academy Logo"
              className="w-full rounded-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="mb-3 text-2xl font-bold leading-snug md:text-4xl">
              മലങ്കര{" "}
              <SyriacText
                className="font-normal"
                fontFamily='"Estrangelo Qenneshrin", serif'
              >
                ܒܝܬ ܐܦܪܝܡ
              </SyriacText>{" "}
              നസ്രാണി യോഗം - ഹെന്ദോ അക്കാദമി
            </h1>
            <h2 className="syriac mb-3 text-3xl leading-relaxed md:text-5xl">
              ܡܲܠܲܢܟܲࡧܲܐ ܒܹܝܬ݂ ܐܲܦܪܹܝܡ ܢܲܣܪܵࡤܝܼ ܝܘܿܓܲܡ - ܗܸࡥܕܘܿ ܐܲܟ̱ܵܕܲܡܝܼ
            </h2>
            <h3 className="mb-4 text-lg font-semibold text-brand-gold md:text-2xl">
              Malankara{" "}
              <SyriacText
                className="font-normal"
                fontFamily='"Estrangelo Qenneshrin", serif'
              >
                ܒܝܬ ܐܦܪܝܡ
              </SyriacText>{" "}
              Nasrani Yogam - Hendo Academy
            </h3>
            <p className="text-base text-white/90 md:text-lg">
              Heritage of the Saint Thomas Christians of India
            </p>
          </div>
        </div>
      </header>

      <section id="about" className="bg-brand-light py-16">
        <div className="container-site">
          <h2 className="mb-6 text-3xl font-bold text-brand">About Us</h2>
          <p className="mb-4 max-w-4xl text-lg leading-relaxed">
            Hendo Academy studies Syriac, Syro Malabar history, and the
            traditions of the Nasranies (Saint Thomas Christians) of India.
          </p>
          <p className="max-w-4xl text-lg leading-relaxed">
            Research, teaching, and public notes on Kerala&apos;s East Syriac
            Christian heritage.
          </p>
        </div>
      </section>

      <section id="activities" className="py-16">
        <div className="container-site">
          <h2 className="mb-8 text-3xl font-bold text-brand">Our Activities</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: (
                  <>
                    Weekly Syriac Classes <SyriacText>ܣܘܪܝܝܐ</SyriacText>
                  </>
                ),
                body: "Weekly classes in the liturgical language of the Syro Malabar Church.",
              },
              {
                title: "Field Visits",
                body: "Churches, manuscripts, and Nasrani heritage sites.",
              },
              {
                title: "Paper Presentations",
                body: "Research talks on Nasrani history, culture, and tradition.",
              },
              {
                title: "History Lecture Series",
                body: "Lectures on Syro Malabar and Nasrani history in India.",
              },
            ].map((item) => (
              <div
                key={typeof item.title === "string" ? item.title : "syriac"}
                className="rounded-md border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="mb-3 text-xl font-semibold text-brand">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-foreground/90">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="bg-brand-light py-16">
        <div className="container-site">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-brand">
                Articles <SyriacText>ܡܐܡܪ̈ܐ</SyriacText>
              </h2>
              <p className="mb-6 font-serif text-lg leading-relaxed">
                Articles on Syriac, Karshon, and Nasrani history.
              </p>
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 rounded bg-brand px-5 py-3 font-semibold text-white no-underline transition hover:bg-brand-blue"
              >
                Browse Articles <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="overflow-hidden rounded-lg border border-border bg-white shadow-md">
              <div className="flex items-center justify-between border-b border-border bg-muted px-4 py-3">
                <span className="font-semibold text-brand">Latest Articles</span>
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="size-2.5 rounded-full bg-[#27c93f]" />
                </div>
              </div>
              <ul className="list-none divide-y divide-border p-0">
                {latestArticles.map((article) => (
                  <li key={article.href}>
                    <Link
                      href={article.href}
                      className="block px-4 py-3 text-foreground no-underline transition hover:bg-brand-light hover:text-brand"
                    >
                      {article.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="books" className="py-16">
        <div className="container-site">
          <h2 className="mb-4 text-3xl font-bold text-brand">
            Books <SyriacText>ܟܬܵܒܹܐ</SyriacText>
          </h2>
          <p className="mb-8 max-w-3xl text-lg">
            Liturgical texts and historical works for Syro Malabar and Nasrani study.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-md border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-brand">
                Taksa d&apos;Raze Editio Typica 2003
              </h3>
              <p className="mb-6">
                Digital Taksa d&apos;Raze Editio Typica 2003.
              </p>
              <Link
                href="/books/taksa-draze-editio-typica"
                className="inline-flex items-center gap-2 rounded bg-brand px-5 py-3 font-semibold text-white no-underline transition hover:bg-brand-blue"
              >
                Read Taksa d&apos;Raze <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="rounded-md border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-brand">
                Gospel according to Mathai - Mosul Peshitta Syriac
              </h3>
              <p className="mb-6">
                Matthew in Syriac from the Mosul Peshitta.
              </p>
              <Link
                href="/books/gospel-of-mathew-mosul-peshitta-syriac"
                className="inline-flex items-center gap-2 rounded bg-brand px-5 py-3 font-semibold text-white no-underline transition hover:bg-brand-blue"
              >
                Read Gospel <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="hudra" className="bg-brand-light py-16">
        <div className="container-site">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-2 text-3xl font-bold text-brand">
                Hudra{" "}
                <SyriacText className="text-[0.9em]">ܚܘܼܕܪܵܐ</SyriacText>
              </h2>
              <p className="mb-2 font-serif text-xl text-brand-blue">
                hudra.day
              </p>
              <p className="mb-6 max-w-xl text-lg leading-relaxed">
                A Hendo Academy initiative to digitize and freely share East
                Syriac liturgical texts - books, hymns, recordings, and tools for
                scholars, clergy, and communities.
              </p>
              <ul className="mb-8 list-none space-y-3 p-0">
                <li className="flex items-start gap-3">
                  <BookOpen className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span>Digitized East Syriac liturgical books</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span>Hymns and recordings with translations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Keyboard className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span>Online East Syriac and Karshon editor</span>
                </li>
              </ul>
              <a
                href="https://hudra.day"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded bg-brand px-5 py-3 font-semibold text-white no-underline transition hover:bg-brand-blue"
              >
                Visit hudra.day <ExternalLink className="size-4" />
              </a>
            </div>
            <div className="overflow-hidden rounded-lg border border-border bg-white p-8 shadow-md">
              <p className="syriac mb-4 text-center text-3xl leading-relaxed text-brand md:text-4xl">
                ܚܘܼܕܪܵܐ
              </p>
              <p className="mb-4 text-center font-serif text-lg text-brand">
                Digital Archive of East Syriac Liturgical Texts
              </p>
              <p className="syriac mb-2 text-center text-base leading-relaxed text-brand-blue md:text-lg">
                ܡܲܓܵܢ ܢܣܲܒ݂ܬܘܿܢ ܡܲܓܵܢ ܗܲܒ݂ܘ܀
              </p>
              <p className="text-center text-sm italic text-foreground/70">
                Freely you have received; freely give. - Matthew 10:8
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="editor" className="py-16">
        <div className="container-site">
          <h2 className="mb-8 text-3xl font-bold text-brand">
            Syriac Editor <SyriacText>ܡܲܟܬܒܵܢܵܐ ܣܘܼܪܝܵܝܵܐ</SyriacText>
          </h2>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-6 text-lg leading-relaxed">
                Type Syriac with the Karshon font in the browser.
              </p>
              <h3 className="mb-4 text-xl font-semibold text-brand">
                Features
              </h3>
              <ul className="mb-8 list-none space-y-3 p-0">
                <li className="flex items-start gap-3">
                  <Keyboard className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span>On-screen Syriac keyboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span>Karshon font rendering</span>
                </li>
                <li className="flex items-start gap-3">
                  <BookOpen className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span>Download text as an image</span>
                </li>
                <li className="flex items-start gap-3">
                  <Smartphone className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span>Works on phones</span>
                </li>
              </ul>
              <Link
                href="/editor"
                className="inline-flex items-center gap-2 rounded bg-brand px-5 py-3 font-semibold text-white no-underline transition hover:bg-brand-blue"
              >
                Try the Syriac Editor <SyriacText>ܣܘܪܝܝܐ</SyriacText>
              </Link>
            </div>
            <div className="overflow-hidden rounded-lg border border-border bg-white shadow-md">
              <div className="flex items-center justify-between border-b border-border bg-muted px-4 py-3">
                <span className="font-semibold text-brand">Syriac Editor</span>
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="size-2.5 rounded-full bg-[#27c93f]" />
                </div>
              </div>
              <div className="bg-brand-light p-6">
                <div className="syriac text-right text-lg leading-loose text-brand md:text-xl">
                  ܐܲܒ݂ܘܼܢ ܕܒܲܫܡܲܝܵܐ ܢܸـܬ݂ܩܲܕܲܫ ܫܡܵـܟ݂ ܬܹܐܬܸܐ ܡܲܠܟܘܼܬ݂ܵܟ݂
                  ܢܸܗܘܸܐ ܨܸܒ݂ܝܵـܢܵـܟ݂: ܐܲܝܟܲܢܵܐ ܕܒܲܫܡܲܝܵܐ ܐܵܦ ܒܐܲܪܥܵܐ.
                  ܗܲܒ݂ܠܲܢ ܠܲܚܡܵܐ ܕܣܘܼܢܩܵܢܲܢ ܝܲܘܡܵܢܵܐ: ܘܲܫܒ݂ܘܿܩ ܠܲܢ
                  ܚܲܘ̈ܒܲܝܢ ܘܲܚܛܵܗܲܝ̈ܢ: ܐܲܝܟܲܢܵܐ ܕܐܵܦ ܚܢܲܢ ܫܒܲܩܢ
                  ܠܚܲܝܵܒܲܝ̈ܢ. ܘܠܵܐ ܬܲܥܠܲܢ ܠܢܸܣܝܘܿܢܵܐ: ܐܸܠܵܐ ܦܲـܨܵܢ ܡ̣ܢ
                  ܒܝܼܫܵܐ: ܡܸܛܠ ܕܕ݂ܝܼܠܵܟ݂ ܗ݇ܝܼ ܡܲܠܟܘܼܬ݂ܵܐ ܘܚܲܝܠܵܐ
                  ܘܬ݂ܸܫܒܘܿܚܬܵܐ ܠܥܵܠܲܡ ܥܵܠܡܝܼܢ: ܐܵܡܹܝܢ.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="videos" className="bg-brand-light py-16">
        <div className="container-site">
          <h2 className="mb-4 text-3xl font-bold text-brand">
            Educational Videos
          </h2>
          <p className="mb-8 max-w-3xl text-lg">
            Videos on Syro Malabar history, Syriac, and Nasrani tradition.
          </p>
          <div className="mb-8 grid gap-6 md:grid-cols-3">
            {[
              "https://www.youtube.com/embed/20hxafzZFwc?si=1CHvOc9rcIcB5X4F",
              "https://www.youtube.com/embed/WXfnEsYS8zQ?si=pLANSEidPgNbrPRB",
              "https://www.youtube.com/embed/KDcpJpDx7ms?si=yrjc8GZlcGgnJwLy",
            ].map((src) => (
              <div
                key={src}
                className="overflow-hidden rounded-md border border-border shadow-sm"
              >
                <iframe
                  width="100%"
                  height="315"
                  src={src}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="block w-full"
                />
              </div>
            ))}
          </div>
          <a
            href="https://www.youtube.com/@hendo.academy"
            className="inline-flex rounded bg-brand px-5 py-3 font-semibold text-white no-underline transition hover:bg-brand-blue"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Our YouTube Channel
          </a>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="container-site">
          <h2 className="mb-6 text-3xl font-bold text-brand">Contact Us</h2>
          <div className="max-w-2xl">
            <h3 className="mb-3 text-xl font-semibold text-brand-blue">
              Get in Touch
            </h3>
            <p className="mb-4 text-lg">
              If you&apos;re interested in our programs or would like to learn
              more about the Nasrani heritage, please contact us:
            </p>
            <p className="mb-2">
              <strong>Email:</strong> hendoacademy@gmail.com
            </p>
            <p>
              <strong>Location:</strong> Kerala, India
            </p>
          </div>
        </div>
      </section>

      <SiteFooter variant="home" />
    </>
  );
}
