#!/usr/bin/env node
/**
 * Converts legacy articles/*.html into Next.js TSX pages under app/articles/<slug>/
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const ARTICLES_DIR = path.join(ROOT, "articles");
const OUT_DIR = path.join(ROOT, "app", "articles");

const SKIP = new Set(["index.html"]);

function extractBetween(html, startRe, endRe) {
  const start = html.search(startRe);
  if (start === -1) return null;
  const afterStart = html.slice(start);
  const openEnd = afterStart.indexOf(">");
  const contentStart = start + openEnd + 1;
  const endMatch = html.slice(contentStart).search(endRe);
  if (endMatch === -1) return null;
  return html.slice(contentStart, contentStart + endMatch).trim();
}

function metaContent(html, name) {
  const re = new RegExp(
    `<meta\\s+name=["']${name}["']\\s+content=["']([^"']*)["']`,
    "i"
  );
  const m = html.match(re);
  return m ? m[1] : "";
}

function ogContent(html, prop) {
  const re = new RegExp(
    `<meta\\s+property=["']${prop}["']\\s+content=["']([^"']*)["']`,
    "i"
  );
  const m = html.match(re);
  return m ? m[1] : "";
}

function titleTag(html) {
  const m = html.match(/<title>([^<]*)<\/title>/i);
  return m ? m[1].trim() : "";
}

function rewritePaths(s) {
  return s
    .replace(/url\(['"]?\.\.\/assets\//g, "url('/assets/")
    .replace(/url\(['"]?assets\//g, "url('/assets/")
    .replace(/src=["']\.\.\/assets\//g, 'src="/assets/')
    .replace(/src=["']assets\//g, 'src="/assets/')
    .replace(/src=["']images\//g, 'src="/articles/images/')
    .replace(/src=["']\.\/images\//g, 'src="/articles/images/')
    .replace(/href=["']\.\.\/assets\//g, 'href="/assets/')
    .replace(/href=["']\.\/files\//g, 'href="/articles/files/')
    .replace(/href=["']files\//g, 'href="/articles/files/')
    .replace(/href=["']\.\.\/["']/g, 'href="/"')
    .replace(/href=["']\.\.\/editor["']/g, 'href="/editor/"')
    .replace(/href=["']\.\.\/articles["']/g, 'href="/articles/"')
    .replace(/onchange=["']changeSyriacFont\(this\.value\)["']/g, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "");
}

function extractStyles(html) {
  const styles = [];
  const re = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let m;
  while ((m = re.exec(html))) {
    let css = rewritePaths(m[1]);
    // Drop full-page chrome that fights the Next.js shell
    css = css
      .replace(/@font-face\s*\{[\s\S]*?\}/gi, "")
      .replace(/:root\s*\{[\s\S]*?\}/gi, "")
      .replace(/\*\s*\{[\s\S]*?\}/gi, "")
      .replace(/body\s*\{[\s\S]*?\}/gi, "")
      .replace(/html\s*,\s*body\s*\{[\s\S]*?\}/gi, "")
      .replace(/nav\s*\{[\s\S]*?\}/gi, "")
      .replace(/\.nav-[a-z0-9-]+\s*\{[\s\S]*?\}/gi, "")
      .replace(/\.nav-links[\s\S]*?\{[\s\S]*?\}/gi, "")
      .replace(/\.mobile-menu-btn\s*\{[\s\S]*?\}/gi, "")
      .replace(/footer\s*\{[\s\S]*?\}/gi, "")
      .replace(/\.footer-[a-z0-9-]+\s*\{[\s\S]*?\}/gi, "")
      .replace(/\.social-links[\s\S]*?\{[\s\S]*?\}/gi, "")
      .replace(/\.logo-[a-z0-9-]+\s*\{[\s\S]*?\}/gi, "")
      .replace(/\.container\s*\{[\s\S]*?\}/gi, "");
    styles.push(css);
  }
  return styles.join("\n");
}

function extractArticleBody(html) {
  // Prefer <article class="article-content">...</article>
  let body = extractBetween(
    html,
    /<article\b[^>]*class=["'][^"']*article-content[^"']*["'][^>]*>/i,
    /<\/article>/i
  );
  if (body) {
    // Remove nested header if present - shell may re-render title; keep body content including header for fidelity
    return rewritePaths(body);
  }

  body = extractBetween(html, /<main\b[^>]*>/i, /<\/main>/i);
  if (body) {
    return rewritePaths(body);
  }

  // Stub / minimal pages
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (bodyMatch) {
    return rewritePaths(
      bodyMatch[1]
        .replace(/<script[\s\S]*?<\/script>/gi, "")
        .replace(/<nav[\s\S]*?<\/nav>/gi, "")
        .replace(/<footer[\s\S]*?<\/footer>/gi, "")
        .trim()
    );
  }
  return "";
}

function esc(s) {
  return s
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
}

function toSlug(filename) {
  return filename.replace(/\.html$/i, "");
}

function buildPage({ slug, title, description, html, styles }) {
  const hasTitleInBody = /<h1[\s>]/i.test(html);
  return `import type { Metadata } from "next";
import { ArticleShell } from "@/components/article-shell";
import { getArticle } from "@/lib/articles";

const slug = ${JSON.stringify(slug)};
const meta = getArticle(slug) ?? {
  slug,
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  author: "Hendo Academy",
  date: "",
  excerpt: ${JSON.stringify(description)},
  listed: false,
  hasComments: true,
};

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  openGraph: {
    type: "article",
    url: \`https://www.hendoacademy.org/articles/\${slug}\`,
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    images: ["/assets/images/logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    images: ["/assets/images/logo.jpg"],
  },
  alternates: {
    canonical: \`https://www.hendoacademy.org/articles/\${slug}\`,
  },
};

const html = \`${esc(html)}\`;

const styles = \`${esc(styles)}\`;

export default function ArticlePage() {
  return (
    <ArticleShell
      meta={meta}
      html={html}
      styles={styles}
      showHeaderMeta={${!hasTitleInBody}}
    />
  );
}
`;
}

function main() {
  const files = fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".html") && !SKIP.has(f));

  for (const file of files) {
    const slug = toSlug(file);
    const src = fs.readFileSync(path.join(ARTICLES_DIR, file), "utf8");
    const title =
      titleTag(src).replace(/\s*\|\s*Hendo Academy\s*$/i, "") || slug;
    const description =
      metaContent(src, "description") ||
      ogContent(src, "og:description") ||
      title;
    let html = extractArticleBody(src);
    const styles = extractStyles(src);

    // Strip utterances leftover markup if any
    html = html.replace(/<div[^>]*class=["'][^"']*utterances[^"']*["'][^>]*>[\s\S]*?<\/div>/gi, "");

    const outDir = path.join(OUT_DIR, slug);
    fs.mkdirSync(outDir, { recursive: true });
    const page = buildPage({ slug, title, description, html, styles });
    fs.writeFileSync(path.join(outDir, "page.tsx"), page, "utf8");
    console.log("Wrote", path.relative(ROOT, path.join(outDir, "page.tsx")));
  }
}

main();
