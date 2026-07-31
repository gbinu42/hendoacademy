import Link from "next/link";
import { YOUTUBE_URL, type NavVariant } from "@/components/site-header";

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.8 15.5v-7l6.3 3.5-6.3 3.5z" />
    </svg>
  );
}

type FooterLink = {
  href: string;
  label: React.ReactNode;
  external?: boolean;
};

function footerLinks(variant: NavVariant): FooterLink[] {
  if (variant === "articles") {
    return [
      { href: "/", label: "Home" },
      { href: "/articles", label: "Articles" },
      { href: "/editor", label: "Syriac Editor" },
    ];
  }

  const prefix = variant === "books" ? "/" : "";
  return [
    { href: `${prefix}#about`, label: "About" },
    { href: `${prefix}#activities`, label: "Activities" },
    { href: `${prefix}#editor`, label: "Syriac Editor" },
    { href: "/articles", label: "Articles" },
    { href: `${prefix}#books`, label: "Books" },
    { href: `${prefix}#hudra`, label: "Hudra" },
    { href: YOUTUBE_URL, label: "Videos", external: true },
    { href: `${prefix}#contact`, label: "Contact" },
  ];
}

export function SiteFooter({ variant = "home" }: { variant?: NavVariant }) {
  const links = footerLinks(variant);

  return (
    <footer className="bg-brand-dark py-10 text-white">
      <div className="container-site">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-brand-gold">
              Quick Links
            </h3>
            <ul className="list-none space-y-2">
              {links.map((link) => (
                <li key={`${link.href}-${String(link.label)}`}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/90 no-underline hover:text-brand-gold"
                    >
                      {link.label}
                    </a>
                  ) : link.href.startsWith("#") ||
                    (link.href.includes("#") && !link.href.startsWith("/articles")) ? (
                    <a
                      href={link.href}
                      className="text-white/90 no-underline hover:text-brand-gold"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-white/90 no-underline hover:text-brand-gold"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-brand-gold">
              Resources
            </h3>
            <ul className="list-none space-y-2">
              <li>
                <a href="#" className="text-white/90 hover:text-brand-gold">
                  Syriac Learning Materials{" "}
                  <span className="syriac">ܣܘܪܝܝܐ</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-brand-gold">
                  Nasrani Heritage
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-brand-gold">
                  Research Papers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-brand-gold">
                  Historical Archives
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-brand-gold">
              Connect With Us
            </h3>
            <p className="mb-4 text-white/90">
              Follow us on social media for updates on our activities and events.
            </p>
            <div className="flex gap-3">
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand hover:text-white"
                aria-label="YouTube"
              >
                <YoutubeIcon className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/70">
          <p>&copy; 2025 Hendo Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
