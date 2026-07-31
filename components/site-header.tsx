"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export type NavVariant = "home" | "articles" | "books";

type NavItem = {
  href: string;
  label: string;
  external?: boolean;
};

const YOUTUBE_URL = "https://www.youtube.com/@hendo.academy";

function navItemsFor(variant: NavVariant): NavItem[] {
  if (variant === "articles") {
    return [
      { href: "/", label: "Home" },
      { href: "/articles", label: "Articles" },
      { href: "/editor", label: "Syriac Editor" },
    ];
  }

  if (variant === "books") {
    return [
      { href: "/#about", label: "About" },
      { href: "/#activities", label: "Activities" },
      { href: "/editor", label: "Syriac Editor" },
      { href: "/articles", label: "Articles" },
      { href: "/#books", label: "Books" },
      { href: "/#hudra", label: "Hudra" },
      { href: YOUTUBE_URL, label: "Videos", external: true },
      { href: "/#contact", label: "Contact" },
    ];
  }

  return [
    { href: "#about", label: "About" },
    { href: "#activities", label: "Activities" },
    { href: "/editor", label: "Syriac Editor" },
    { href: "/articles", label: "Articles" },
    { href: "#books", label: "Books" },
    { href: "#hudra", label: "Hudra" },
    { href: YOUTUBE_URL, label: "Videos", external: true },
    { href: "#contact", label: "Contact" },
  ];
}

function NavLink({
  item,
  onNavigate,
  className,
}: {
  item: NavItem;
  onNavigate?: () => void;
  className?: string;
}) {
  const classes =
    className ??
    "font-semibold text-white transition-colors hover:text-brand-gold";

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onNavigate}
      >
        {item.label}
      </a>
    );
  }

  if (item.href.startsWith("#")) {
    return (
      <a href={item.href} className={classes} onClick={onNavigate}>
        {item.label}
      </a>
    );
  }

  return (
    <Link href={item.href} className={classes} onClick={onNavigate}>
      {item.label}
    </Link>
  );
}

export function SiteHeader({ variant = "home" }: { variant?: NavVariant }) {
  const [open, setOpen] = useState(false);
  const items = navItemsFor(variant);

  return (
    <nav className="sticky top-0 z-50 bg-brand-dark text-white shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
      <div className="container-site flex items-center justify-between py-2">
        <Link href="/" className="flex items-center text-white no-underline">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/logo.jpg"
            alt="Hendo Academy Logo"
            className="h-[50px] w-auto"
          />
          <span className="ml-2.5 text-xl font-semibold">Hendo Academy</span>
        </Link>

        <ul className="hidden list-none items-center gap-8 md:flex">
          {items.map((item) => (
            <li key={`${item.href}-${item.label}`}>
              <NavLink item={item} />
            </li>
          ))}
        </ul>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="inline-flex size-10 items-center justify-center rounded-md text-white hover:bg-white/10 hover:text-brand-gold md:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-6" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-brand-dark text-white border-brand-dark"
          >
            <SheetHeader>
              <SheetTitle className="text-white">Menu</SheetTitle>
            </SheetHeader>
            <ul className="mt-6 flex list-none flex-col gap-4 px-4">
              {items.map((item) => (
                <li key={`mobile-${item.href}-${item.label}`}>
                  <NavLink
                    item={item}
                    onNavigate={() => setOpen(false)}
                    className="block py-2 text-lg font-semibold text-white hover:text-brand-gold"
                  />
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export { YOUTUBE_URL };
