import type { Metadata } from "next";

const dest = "/articles/neo-malayalam-karshon";

export const metadata: Metadata = {
  title: "Neo Malayalam Karshon",
  robots: { index: false, follow: true },
  alternates: {
    canonical: `https://www.hendoacademy.org${dest}`,
  },
};

/** Old slug - keep a redirect so existing links still work. */
export default function NeoKarshonRedirectPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <meta httpEquiv="refresh" content={`0;url=${dest}`} />
      <p>
        This article has moved to{" "}
        <a href={dest}>Neo Malayalam Karshon</a>.
      </p>
      <script
        dangerouslySetInnerHTML={{
          __html: `location.replace(${JSON.stringify(dest)});`,
        }}
      />
    </main>
  );
}
