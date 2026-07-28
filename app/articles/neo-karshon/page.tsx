import type { Metadata } from "next";
import { ArticleShell } from "@/components/article-shell";
import { getArticle } from "@/lib/articles";
import { prayerLines } from "./prayer";
import { creedLines } from "./creed";

const slug = "neo-karshon";
const meta = getArticle(slug) ?? {
  slug,
  title: "Neo Malayalam Karshon",
  description:
    "Hendo Academy's proposal for writing modern Malayalam in East Syriac script - supplying the letters classical Karshon lacked without asking for new Unicode code points.",
  author: "Binu George",
  date: "July 27, 2026",
  excerpt:
    "Classical Karshon was shaped for an older stage of Malayalam. Neo Malayalam Karshon is our proposal for the missing modern letters - especially Sanskrit loan aspirates and ഡ - built from characters Unicode already provides.",
  listed: true,
  hasComments: true,
};

export const metadata: Metadata = {
  title: "Neo Malayalam Karshon",
  description:
    "Hendo Academy's proposal for writing modern Malayalam in East Syriac script - supplying the letters classical Karshon lacked without asking for new Unicode code points.",
  keywords: [
    "Neo Malayalam Karshon",
    "Neo Karshon",
    "Neo Malayalam Garshuni",
    "Karshon",
    "Karshoni",
    "Garshuni Malayalam",
    "Suriyani Malayalam",
    "East Syriac",
    "Malayalam",
    "Syriac Supplement",
    "majliyana",
    "Hendo Academy",
  ],
  authors: [{ name: "Binu George" }],
  creator: "Hendo Academy",
  publisher: "Hendo Academy",
  category: "Orthography",
  openGraph: {
    type: "article",
    url: `https://www.hendoacademy.org/articles/${slug}`,
    title: "Neo Malayalam Karshon",
    description:
      "Hendo Academy's proposal for writing modern Malayalam in East Syriac script - supplying the letters classical Karshon lacked without asking for new Unicode code points.",
    siteName: "Hendo Academy",
    locale: "en_IN",
    images: [
      {
        url: "/assets/images/logo.jpg",
        alt: "Hendo Academy",
      },
    ],
    publishedTime: "2026-07-27T00:00:00.000Z",
    modifiedTime: "2026-07-27T00:00:00.000Z",
    authors: ["Binu George"],
    section: "Articles",
    tags: [
      "Neo Karshon",
      "Karshon",
      "Garshuni Malayalam",
      "Suriyani Malayalam",
      "East Syriac",
      "Malayalam orthography",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neo Malayalam Karshon",
    description:
      "Hendo Academy's proposal for writing modern Malayalam in East Syriac script - supplying the letters classical Karshon lacked without asking for new Unicode code points.",
    images: ["/assets/images/logo.jpg"],
  },
  alternates: {
    canonical: `https://www.hendoacademy.org/articles/${slug}`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

type Letter = { ml: string; syr: string; neo?: boolean; dot?: boolean };
type Cell = Letter | Letter[] | null;
type Row = { cells: Cell[] };

function letterCell(c: Cell) {
  if (!c) return `<td class="empty-cell"></td>`;
  const letters = Array.isArray(c) ? c : [c];
  const parts = letters
    .map((letter) => {
      const mark = letter.neo ? " neo-new" : letter.dot ? " neo-dot" : "";
      const title = letter.neo
        ? ' title="Newly proposed in Neo Karshon"'
        : letter.dot
          ? ' title="Disambiguated with a dot in Neo Karshon"'
          : "";
      return `<span class="letter-pair${mark}"${title}><span class="cell-ml">${letter.ml}</span><span class="cell-syr syr-letter" dir="rtl" lang="syr">${letter.syr}</span></span>`;
    })
    .join("");
  const cellMark = letters.some((l) => l.neo)
    ? " neo-new"
    : letters.some((l) => l.dot)
      ? " neo-dot"
      : "";
  return `<td class="letter-cell${cellMark}">${parts}</td>`;
}

function letterTable(label: string, rows: Row[], columns?: string[]) {
  const head = columns
    ? `<thead>
        <tr>${columns
          .map((c) => `<th class="col-label" scope="col">${c}</th>`)
          .join("")}</tr>
      </thead>
      `
    : "";
  const body = rows
    .map((r) => `<tr>${r.cells.map(letterCell).join("")}</tr>`)
    .join("\n        ");
  return `<div class="chart-block">
  <p class="chart-label">${label}</p>
  <div class="table-scroll">
    <table class="alphabet-table">
      ${head}<tbody>
        ${body}
      </tbody>
    </table>
  </div>
</div>`;
}

const vargaColumns = ["ഖരം", "അതിഖരം", "മൃദു", "ഘോഷം", "അനുനാസികം"];

const consonantRows: Row[] = [
  {
    cells: [
      { ml: "ക", syr: "ܟ" },
      { ml: "ഖ", syr: "ܩ" },
      { ml: "ഗ", syr: "ܓ" },
      { ml: "ഘ", syr: "ܓ̃", neo: true },
      { ml: "ങ", syr: "ࡠ" },
    ],
  },
  {
    cells: [
      { ml: "ച", syr: "ܫ݁", dot: true },
      { ml: "ഛ", syr: "ܫ̃", neo: true },
      { ml: "ജ", syr: "ࡡ" },
      { ml: "ഝ", syr: "ࡡ̃", neo: true },
      { ml: "ഞ", syr: "ࡢ" },
    ],
  },
  {
    cells: [
      { ml: "ട", syr: "ࡣ" },
      { ml: "ഠ", syr: "ࡣ̃", neo: true },
      { ml: "ഡ", syr: "ܖ", neo: true },
      { ml: "ഢ", syr: "ܖ̃", neo: true },
      { ml: "ണ", syr: "ࡤ" },
    ],
  },
  {
    cells: [
      { ml: "ത", syr: "ܬ" },
      { ml: "ഥ", syr: "ܛ" },
      { ml: "ദ", syr: "ܕ" },
      { ml: "ധ", syr: "ܕ̃", neo: true },
      [
        { ml: "ന", syr: "ࡥ" },
        { ml: "ഩ", syr: "ܢ" },
      ],
    ],
  },
  {
    cells: [
      { ml: "പ", syr: "ܦ" },
      { ml: "ഫ", syr: "ܦ݂" },
      { ml: "ബ", syr: "ܒ" },
      { ml: "ഭ", syr: "ࡦ" },
      { ml: "മ", syr: "ܡ" },
    ],
  },
  {
    cells: [
      { ml: "യ", syr: "ܝ" },
      { ml: "ര", syr: "ࡧ" },
      { ml: "ല", syr: "ܠ" },
      { ml: "വ", syr: "ܒ݂", dot: true },
      null,
    ],
  },
  {
    cells: [
      { ml: "ശ", syr: "ܫ" },
      { ml: "ഷ", syr: "ࡪ" },
      { ml: "സ", syr: "ܣ" },
      null,
      null,
    ],
  },
  {
    cells: [{ ml: "ഹ", syr: "ܗ" }, null, null, null, null],
  },
  {
    cells: [
      { ml: "ള", syr: "ࡨ" },
      { ml: "ഴ", syr: "ࡩ" },
      { ml: "റ", syr: "ܪ" },
      null,
      null,
    ],
  },
  {
    cells: [
      { ml: "റ്റ", syr: "ܪ̱" },
      null,
      null,
      null,
      null,
    ],
  },
];

const alphabetChart = [
  letterTable("Consonants (വ്യഞ്ജനങ്ങൾ)", consonantRows, vargaColumns),
  letterTable("Vowels (സ്വരങ്ങൾ)", [
    {
      cells: [
        { ml: "അ", syr: "ܐܲ" },
        { ml: "ആ", syr: "ܐܵ" },
        { ml: "ഇ", syr: "ܐܝܼ" },
        { ml: "ഈ", syr: "ܐܝܼ" },
        { ml: "ഉ", syr: "ܐܘܼ" },
        { ml: "ഊ", syr: "ܐܘܼ" },
        { ml: "ഋ", syr: "ܪ" },
      ],
    },
    {
      cells: [
        { ml: "എ", syr: "ܐܸ" },
        { ml: "ഏ", syr: "ܐܹ" },
        { ml: "ഐ", syr: "ܐܲܝ" },
        { ml: "ഒ", syr: "ܐܘܿ" },
        { ml: "ഓ", syr: "ܐܘܿ" },
        { ml: "ഔ", syr: "ܐܲܘ" },
        null,
      ],
    },
  ]),
  letterTable("Vowel signs on a base, here ക (സ്വരചിഹ്നങ്ങൾ)", [
    {
      cells: [
        { ml: "ക", syr: "ܟܲ" },
        { ml: "കാ", syr: "ܟܵ" },
        { ml: "കി", syr: "ܟܝܼ" },
        { ml: "കീ", syr: "ܟܝܼ" },
        { ml: "കു", syr: "ܟܘܼ" },
        { ml: "കൂ", syr: "ܟܘܼ" },
        { ml: "കൃ", syr: "ܟܪ" },
      ],
    },
    {
      cells: [
        { ml: "കെ", syr: "ܟܸ" },
        { ml: "കേ", syr: "ܟܹ" },
        { ml: "കൈ", syr: "ܟܲܝ" },
        { ml: "കൊ", syr: "ܟܘܿ" },
        { ml: "കോ", syr: "ܟܘܿ" },
        { ml: "കൗ", syr: "ܟܲܘ" },
        null,
      ],
    },
  ]),
  letterTable("Chillu letters (ചില്ലുകൾ)", [
    {
      cells: [
        { ml: "ൺ", syr: "ࡤ" },
        { ml: "ൻ", syr: "ܢ" },
        { ml: "ർ", syr: "ܪ" },
        { ml: "ൽ", syr: "ܠ" },
        { ml: "ൾ", syr: "ࡨ" },
      ],
    },
  ]),
].join("\n");

const prayerRows = prayerLines
  .map(
    ({ ml, syr }) => `<div class="prayer-row">
      <p class="prayer-ml">${ml}</p>
      <p class="prayer-syr syr-block" dir="rtl" lang="syr">${syr}</p>
    </div>`,
  )
  .join("\n");

const creedRows = creedLines
  .map(
    ({ ml, syr }) => `<div class="prayer-row">
      <p class="prayer-ml">${ml}</p>
      <p class="prayer-syr syr-block" dir="rtl" lang="syr">${syr}</p>
    </div>`,
  )
  .join("\n");

const html = `<p class="lead">Hendo Academy's proposal for writing modern Malayalam in East Syriac script - a finished design, not yet an established practice. Also called Neo Malayalam Garshuni.</p>

            <div class="font-selector">
                <label for="syriac-font">Syriac font:</label>
                <select id="syriac-font">
                    <option value="East Syriac Adiabene" selected>East Syriac Adiabene</option>
                    <option value="East Syriac Malankara">East Syriac Malankara</option>
                    <option value="East Syriac Malankara Classical">East Syriac Malankara Classical</option>
                </select>
            </div>

            <section class="article-section">
                <h2 class="section-title">Related Articles</h2>
                <ul class="related-list">
                    <li><a href="/articles/suriyani-malayalam-script-correspondence">Malayalam - Suriyani Malayalam script correspondence</a></li>
                    <li><a href="/articles/hendo-academy-launches-kerala's-first-indigenous-east-syriac-and-karshon-unicode-font-east-syriac-malankara">East Syriac Malankara font</a></li>
                    <li><a href="/articles/syriac-phonetic-karshon-keyboard-layout-and-usage">Syriac Phonetic - Karshon keyboard</a></li>
                </ul>
            </section>

            <section class="article-section">
                <h2 class="section-title">The problem</h2>
                <p>Karshon - also called Karshoni, Garshuni Malayalam, or Suriyani Malayalam - means writing the Malayalam language in East Syriac script. Saint Thomas Christians in Kerala used it for liturgy, letters, and literature into the early twentieth century.</p>
                <p>Classical Syriac has only twenty-two consonants. Malayalam needs far more. Historical Karshon solved much of that gap by adding special letter shapes - originally drawn from older Malayalam scripts - for sounds such as <span class="ml">ങ</span>, <span class="ml">ജ</span>, <span class="ml">ട</span>, <span class="ml">ണ</span>, <span class="ml">ഭ</span>, <span class="ml">ള</span>, <span class="ml">ഴ</span>, and <span class="ml">ഷ</span>. Eleven of those Garshuni letters are now in Unicode as the Syriac Supplement (U+0860-U+086A).</p>
                <p>Even so, classical Karshon was shaped for an older stage of Malayalam. Modern Malayalam has letters and distinctions that classical Karshon simply did not cover - especially several letters borrowed from Sanskrit in the last few centuries. In particular, a set of aspirates (<span class="ml">ഘ</span>, <span class="ml">ഛ</span>, <span class="ml">ഝ</span>, <span class="ml">ഠ</span>, <span class="ml">ഢ</span>, <span class="ml">ധ</span>) and the retroflex voiced stop <span class="ml">ഡ</span> have no dedicated classical Karshon letter.</p>
                <p>Nobody has settled how to write those letters. Manuscript practice stopped before the question became pressing, and no modern authority has ruled on it, so anyone typing contemporary Malayalam in Syriac script has had to improvise. Our proposal, which we call <strong>Neo Karshon</strong>, keeps the classical inventory - ordinary Syriac letters plus the Syriac Supplement - and builds the missing modern values from characters Unicode already provides. The aim is to write present-day Malayalam in Suriyani Malayalam without abandoning older texts or asking for new code points.</p>
            </section>

            <section class="article-section">
                <h2 class="section-title">The name</h2>
                <p>We chose the name ourselves; it is not a traditional term, and no one used it before this proposal. The full title is <em>Neo Malayalam Karshon</em>; <em>Neo Karshon</em> is the short form used below. The <em>Neo</em> follows the usage of Neo-Aramaic, where a living stage of the language is written with the inherited script plus a few extra marks for sounds Classical Syriac never had. That is exactly the relationship we intend here: <em>Karshon</em> remains the historical orthography of the manuscripts, and <em>Neo Karshon</em> names the extended version for modern Malayalam. Where the Garshuni form is clearer, we also write <em>Neo Malayalam Garshuni</em>.</p>
            </section>

            <section class="article-section">
                <h2 class="section-title">Constraints</h2>
                <p>Three hard limits shaped every choice in the proposal:</p>
                <ul>
                    <li><strong>No raw Malayalam letters.</strong> Historical manuscripts could draw extra shapes borrowed from Malayalam. In digital Unicode text that shortcut fails. Karshon is right-to-left, and Syriac vowels and marks attach only to Syriac letter bases. A Malayalam character dropped into the line cannot take those vowels and marks correctly.</li>
                    <li><strong>No new Unicode letters.</strong> We did not want the proposal to depend on new code points, since encoding fresh Karshon consonants would mean years of committee work and fonts that cannot render the text meanwhile. So we allow only letters already in the Syriac and Syriac Supplement blocks, together with combining marks Unicode already defines.</li>
                    <li><strong>No underline for new shapes.</strong> Classical Karshon already uses a horizontal line under a letter to mark doubling (gemination). That under-line is reserved. It cannot also invent new consonant values, or the two meanings would collide.</li>
                </ul>
                <p>So the missing modern letters had to be built from existing Syriac letters - by adding a mark above, or by assigning a clear Malayalam value to a rare Syriac letter that ordinary Karshon almost never used.</p>
            </section>

            <section class="article-section">
                <h2 class="section-title">Aspiration: Combining Tilde (majliyana)</h2>
                <p>Where classical Karshon had no letter for an aspirated consonant, we take the matching unaspirated base and add <strong>Combining Tilde</strong> (U+0303, <span class="mark-sample">◌̃</span>). In Syriac tradition this mark is called <strong>majliyana</strong> (<span class="syr-inline" dir="rtl" lang="syr">ܡܲܓ̰ܠܝܼܵܢܵܐ</span>). The same majliyana is already used in Neo-Aramaic orthography to write sounds that Classical Syriac lacks, so we are borrowing an established East Syriac device rather than inventing a private mark.</p>
                <p>Malayalam grammar, following Sanskrit, divides each varga row five ways, and those five categories are the columns of the chart below:</p>
                <ul class="example-pairs">
                    <li><strong><span class="ml">ഖരം</span></strong> (kharam) - voiceless unaspirated: <span class="ml">ക ച ട ത പ</span></li>
                    <li><strong><span class="ml">അതിഖരം</span></strong> (atikharam) - voiceless aspirated: <span class="ml">ഖ ഛ ഠ ഥ ഫ</span></li>
                    <li><strong><span class="ml">മൃദു</span></strong> (mṛdu) - voiced unaspirated: <span class="ml">ഗ ജ ഡ ദ ബ</span></li>
                    <li><strong><span class="ml">ഘോഷം</span></strong> (ghōṣam) - voiced aspirated: <span class="ml">ഘ ഝ ഢ ധ ഭ</span></li>
                    <li><strong><span class="ml">അനുനാസികം</span></strong> (anunāsikam) - nasal: <span class="ml">ങ ഞ ണ ന മ</span></li>
                </ul>
                <p>The aspirates are therefore two columns rather than one: <strong><span class="ml">അതിഖരം</span></strong> for the voiceless ones and <strong><span class="ml">ഘോഷം</span></strong> for the voiced, each standing beside an unaspirated partner in <span class="ml">ഖരം</span> or <span class="ml">മൃദു</span>. Every majliyana letter we propose falls in those two columns: <span class="ml">ഛ</span> and <span class="ml">ഠ</span> are <span class="ml">അതിഖരം</span>, while <span class="ml">ഘ</span>, <span class="ml">ഝ</span>, <span class="ml">ഢ</span>, and <span class="ml">ധ</span> are <span class="ml">ഘോഷം</span>.</p>
                <p>The tilde sits above the letter, so the gemination under-line stays free, and Syriac vowels can still attach to the same base. The aspirate also remains visibly related to the <span class="ml">ഖരം</span> or <span class="ml">മൃദു</span> letter it is built on.</p>
                <p>The six aspirates we propose are:</p>
                <ul class="example-pairs">
                    <li><span class="ml">ഘ</span> ← <span class="syr-inline" dir="rtl" lang="syr">ܓ̃</span> (from <span class="ml">ഗ</span> / <span class="syr-inline" dir="rtl" lang="syr">ܓ</span>)</li>
                    <li><span class="ml">ഛ</span> ← <span class="syr-inline" dir="rtl" lang="syr">ܫ̃</span> (related to <span class="ml">ച</span> / <span class="syr-inline" dir="rtl" lang="syr">ܫ݁</span>; written on plain <span class="syr-inline" dir="rtl" lang="syr">ܫ</span>)</li>
                    <li><span class="ml">ഝ</span> ← <span class="syr-inline" dir="rtl" lang="syr">ࡡ̃</span> (from <span class="ml">ജ</span> / <span class="syr-inline" dir="rtl" lang="syr">ࡡ</span>)</li>
                    <li><span class="ml">ഠ</span> ← <span class="syr-inline" dir="rtl" lang="syr">ࡣ̃</span> (from <span class="ml">ട</span> / <span class="syr-inline" dir="rtl" lang="syr">ࡣ</span>)</li>
                    <li><span class="ml">ധ</span> ← <span class="syr-inline" dir="rtl" lang="syr">ܕ̃</span> (from <span class="ml">ദ</span> / <span class="syr-inline" dir="rtl" lang="syr">ܕ</span>)</li>
                    <li><span class="ml">ഢ</span> ← <span class="syr-inline" dir="rtl" lang="syr">ܖ̃</span> (from <span class="ml">ഡ</span> / <span class="syr-inline" dir="rtl" lang="syr">ܖ</span>)</li>
                </ul>
                <p>The remaining <span class="ml">അതിഖരം</span> and <span class="ml">ഘോഷം</span> letters need no tilde, because classical Karshon already gave them values. Three <span class="ml">അതിഖരം</span> letters were covered by ordinary Syriac consonants - <span class="ml">ഖ</span> as <span class="syr-inline" dir="rtl" lang="syr">ܩ</span>, <span class="ml">ഥ</span> as <span class="syr-inline" dir="rtl" lang="syr">ܛ</span>, and <span class="ml">ഫ</span> as <span class="syr-inline" dir="rtl" lang="syr">ܦ݂</span> (pe with rukkakha, exactly as East Syriac writes soft pe) - and <span class="ml">ഭ</span> is the one <span class="ml">ഘോഷം</span> letter with its own Garshuni letter in the Syriac Supplement, <span class="syr-inline" dir="rtl" lang="syr">ࡦ</span>.</p>
            </section>

            <section class="article-section">
                <h2 class="section-title">ഡ: Dotless Dalath Rish</h2>
                <p>That still left <span class="ml">ഡ</span>, which is not an aspirate at all: it sits in the <span class="ml">മൃദു</span> column, voiced and unaspirated. A tilde can mark aspiration on an existing base; it cannot by itself create a new place of articulation. And no ordinary Karshon consonant was free to take the retroflex voiced stop.</p>
                <p>We therefore assign a rarely used Syriac letter, <strong>Syriac Letter Dotless Dalath Rish</strong> (U+0716, <span class="syr-inline" dir="rtl" lang="syr">ܖ</span>), to <span class="ml">ഡ</span>. Because Karshon texts effectively never call on that letter, giving it a Malayalam value costs nothing in older readings. Its aspirated partner <span class="ml">ഢ</span> then follows the same majliyana rule as the other proposed aspirates: <span class="syr-inline" dir="rtl" lang="syr">ܖ̃</span>.</p>
            </section>

            <section class="article-section">
                <h2 class="section-title">Dots for clarity: ച / ശ, ബ / വ, and പ / ഫ</h2>
                <p>Missing letters were not the only gap. Classical Karshon also let two different Malayalam sounds share one Syriac letter, leaving the reader to decide from context which was meant:</p>
                <ul class="example-pairs">
                    <li><span class="ml">ച</span> and <span class="ml">ശ</span> both written with shin, <span class="syr-inline" dir="rtl" lang="syr">ܫ</span></li>
                    <li><span class="ml">ബ</span> and <span class="ml">വ</span> both written with beth, <span class="syr-inline" dir="rtl" lang="syr">ܒ</span></li>
                </ul>
                <p>We separate each pair with a dot that Syriac already uses for exactly this kind of hard-soft contrast: <strong>qushshaya</strong>, the dot above (U+0741), and <strong>rukkakha</strong>, the dot below (U+0742).</p>
                <ul class="example-pairs">
                    <li><span class="ml">ച</span> = <span class="syr-inline" dir="rtl" lang="syr">ܫ݁</span> (shin with dot above)</li>
                    <li><span class="ml">ശ</span> = <span class="syr-inline" dir="rtl" lang="syr">ܫ</span> (plain shin)</li>
                    <li><span class="ml">ബ്</span> = <span class="syr-inline" dir="rtl" lang="syr">ܒ</span> (plain beth)</li>
                    <li><span class="ml">വ്</span> = <span class="syr-inline" dir="rtl" lang="syr">ܒ݂</span> (beth with dot below)</li>
                </ul>
                <p><span class="ml">ഫ</span> belongs with these dotted letters, but it needs no new decision of ours. East Syriac already writes the soft value of pe with rukkakha, and we keep that same form for Malayalam <span class="ml">ഫ</span>:</p>
                <ul class="example-pairs">
                    <li><span class="ml">പ്</span> = <span class="syr-inline" dir="rtl" lang="syr">ܦ</span> (plain pe)</li>
                    <li><span class="ml">ഫ്</span> = <span class="syr-inline" dir="rtl" lang="syr">ܦ݂</span> (pe with dot below - the ordinary East Syriac soft pe)</li>
                </ul>
                <p>As with majliyana, nothing new is encoded and no under-line is touched. The marks are ordinary Syriac dots put to a Malayalam use. For <span class="ml">ച</span> / <span class="ml">ശ</span> and <span class="ml">ബ്</span> / <span class="ml">വ്</span>, a classical spelling written without the Neo dots still renders correctly - it simply carries the older ambiguity. For <span class="ml">ഫ</span>, the dotted pe is already the classical East Syriac reading.</p>
            </section>

            <section class="article-section">
                <h2 class="section-title">Advantages</h2>
                <p>We think the approach has a few practical strengths, and they are the reasons we settled on it:</p>
                <ul>
                    <li><strong>Works with existing Unicode.</strong> No new letters are required. Any font and keyboard stack that already supports Syriac, the Syriac Supplement, and Combining Tilde can render it today, with no wait for encoding decisions.</li>
                    <li><strong>No clash with doubling.</strong> In Malayalam, aspirated consonants are not doubled. A letter that carries majliyana never also needs the gemination under-line, so no form ends up with a tilde above and a doubling line below at once.</li>
                    <li><strong>Familiar in the Syriac world.</strong> Majliyana is already used in Neo-Aramaic writing for sounds absent from Classical Syriac, so the mark is not a private invention of ours - a Syriac reader meets it in a role it already plays.</li>
                </ul>
            </section>

            <section class="article-section">
                <h2 class="section-title">Alphabet chart</h2>
                <p>The consonant table below is the standard Malayalam grid: the five varga rows first, with the columns named <span class="ml">ഖരം</span>, <span class="ml">അതിഖരം</span>, <span class="ml">മൃദു</span>, <span class="ml">ഘോഷം</span>, and <span class="ml">അനുനാസികം</span>, and then the rows that fall outside the vargas - <span class="ml">അന്തസ്ഥം</span> (<span class="ml">യ ര ല വ</span>), <span class="ml">ഊഷ്മാവ്</span> (<span class="ml">ശ ഷ സ</span>), <span class="ml">ഘോഷി</span> (<span class="ml">ഹ</span>), <span class="ml">ദ്രാവിഡമധ്യമം</span> (<span class="ml">ള ഴ റ</span>), and <span class="ml">റ്റ</span>. Dental <span class="ml">ന</span> and alveolar <span class="ml">ഩ</span> share the nasal cell of the <span class="ml">ത</span> row. Column names apply to the varga rows only; below them the letters simply fill the grid from the left, as they do in printed grammars.</p>
                <p>Every cell gives the Malayalam letter above and its Neo Karshon value below. This chart is the proposal in full: only the seven gold cells and the two blue ones are new, and everything else is the ordinary Syriac and Syriac Supplement inventory. Use the font selector at the top to switch among Adiabene, Malankara, and Malankara Classical. Gold marks what we propose - the six majliyana aspirates, and <span class="ml">ഡ</span> / <span class="ml">ഢ</span> on Dotless Dalath Rish. Blue marks the letters classical Karshon left ambiguous and we separate with a dot.</p>
                <div class="chart-legend">
                    <span class="legend-item"><span class="legend-swatch"></span> Classical / Unicode Karshon inventory</span>
                    <span class="legend-item"><span class="legend-swatch neo"></span> Newly proposed in Neo Karshon</span>
                    <span class="legend-item"><span class="legend-swatch dot"></span> Disambiguated with a dot in Neo Karshon</span>
                </div>
                <div class="alphabet-chart">
${alphabetChart}
                </div>
                <p>Two independent vowels depart from traditional Karshon on purpose. Classical practice, following Syriac spelling habits more closely, wrote <span class="ml">ഐ</span> as <span class="syr-inline" dir="rtl" lang="syr">ܐܵܝ</span> and <span class="ml">ഔ</span> as <span class="syr-inline" dir="rtl" lang="syr">ܐܵܘ</span> - alaph with zqapha before yodh or waw. Neo Karshon uses ptaha instead: <span class="ml">ഐ</span> = <span class="syr-inline" dir="rtl" lang="syr">ܐܲܝ</span>, <span class="ml">ഔ</span> = <span class="syr-inline" dir="rtl" lang="syr">ܐܲܘ</span>. That matches the dependent signs <span class="ml">ൈ</span> / <span class="ml">ൗ</span> (<span class="syr-inline" dir="rtl" lang="syr">ܲܝ</span> / <span class="syr-inline" dir="rtl" lang="syr">ܲܘ</span>) and sits closer to Malayalam phonetics than to Syriac orthographic convention.</p>
                <p>The remaining signs are marks rather than letters:</p>
                <ul class="example-pairs">
                    <li>anusvāra <span class="ml">ം</span> = <span class="syr-inline" dir="rtl" lang="syr">ܡ</span>, as in <span class="ml">നാമം</span> = <span class="syr-inline" dir="rtl" lang="syr">ࡥܵܡܲܡ</span></li>
                    <li>visarga <span class="ml">ഃ</span> = <span class="syr-inline" dir="rtl" lang="syr">ܐ݈</span></li>
                    <li>virama <span class="ml">്</span> = no vowel mark on the letter</li>
                    <li>doubling <span class="ml">ക്ക</span> = one letter with the line below, <span class="syr-inline" dir="rtl" lang="syr">ܟ̱</span></li>
                    <li>aspiration <span class="ml">ഘ</span> = majliyana above, <span class="syr-inline" dir="rtl" lang="syr">ܓ̃</span></li>
                </ul>
                <p class="chart-note">For word-level examples and compound letters, see the <a href="/articles/suriyani-malayalam-script-correspondence">script correspondence</a> table.</p>
            </section>

            <section class="article-section">
                <h2 class="section-title">A whole text: the Our Father</h2>
                <p>A chart proves little on its own, so here is the proposal carrying a real text. The Our Father is a useful test, because a single short prayer touches most of the inventory. Malayalam is on the left, Neo Karshon on the right.</p>
                <div class="prayer-text">
                    <div class="prayer-heads">
                        <span>Malayalam</span>
                        <span>Neo Karshon</span>
                    </div>
${prayerRows}
                </div>
                <p>A few things worth watching in these lines:</p>
                <ul>
                    <li><span class="ml">ഞങ്ങൾ</span> as <span class="syr-inline" dir="rtl" lang="syr">ࡢܲࡠ̱ܲࡨ</span> uses three Syriac Supplement letters in one word - <span class="ml">ഞ</span>, <span class="ml">ങ</span>, and <span class="ml">ൾ</span> - with <span class="ml">ങ്ങ</span> written as a single <span class="syr-inline" dir="rtl" lang="syr">ࡠ</span> carrying the gemination line rather than as two letters. Between them, these ten lines use all eleven Supplement letters.</li>
                    <li><span class="ml">ക്ഷമിച്ചതുപോലെ</span> shows both marks stacking on one base: the <span class="ml">ച്ച</span> in the middle is <span class="syr-inline" dir="rtl" lang="syr">ܫ̱݁</span>, a shin with the qushshaya dot above for <span class="ml">ച</span> and the doubling line below.</li>
                    <li><span class="ml">ആമ്മേൻ</span> is not spelled phonetically but as <span class="syr-inline" dir="rtl" lang="syr">ܐܵܡܹܝܢ</span>. Words that came into Malayalam from Syriac in the first place keep their classical Syriac spelling.</li>
                    <li>No majliyana appears anywhere in the prayer, since it happens to contain none of <span class="ml">ഘ ഛ ഝ ഠ ഢ ധ</span>. The dotted letters do turn up constantly, as in <span class="ml">വരണമേ</span> = <span class="syr-inline" dir="rtl" lang="syr">ܒ݂ܲࡧܲࡤܲܡܹܐ</span>.</li>
                </ul>
            </section>

            <section class="article-section">
                <h2 class="section-title">Another text: the Creed</h2>
                <p>The Our Father happens to omit every majliyana letter and every use of Dotless Dalath Rish. The Nicene Creed in Malayalam does not - it brings in <span class="ml">ധ</span>, <span class="ml">ഡ</span>, and several Syriac loanwords that keep their classical spellings. Malayalam is again on the left, Neo Karshon on the right.</p>
                <div class="prayer-text">
                    <div class="prayer-heads">
                        <span>Malayalam</span>
                        <span>Neo Karshon</span>
                    </div>
${creedRows}
                </div>
                <p>A few things worth watching here that the prayer did not show:</p>
                <ul>
                    <li><span class="ml">പീഡകൾ</span> as <span class="syr-inline" dir="rtl" lang="syr">ܦܝܼܖܲܟܲࡨ</span> uses Dotless Dalath Rish for <span class="ml">ഡ</span>, the letter the Our Father never needed.</li>
                    <li>Majliyana appears in words such as <span class="ml">സംവിധാനം</span> = <span class="syr-inline" dir="rtl" lang="syr">ܣܲܡܒ݂ܝܼܕ̃ܵܢܲܡ</span>, <span class="ml">വിധിക്കാൻ</span> = <span class="syr-inline" dir="rtl" lang="syr">ܒ݂ܝܼܕ̃ܝܼܟ̱ܵܢ</span>, and <span class="ml">പരിശുദ്ധാത്മാവ്</span> = <span class="syr-inline" dir="rtl" lang="syr">ܦܲࡧܝܼܫܘܼܕܕ̃ܵܬܡܵܒ݂</span>, where <span class="ml">ധ</span> is written on dalath with the tilde.</li>
                    <li>Syriac loans keep classical spellings again: <span class="ml">ഈശോമിശിഹാ</span> as <span class="syr-inline" dir="rtl" lang="syr">ܝܼܫܘܿܥ ܡܫܝܼܚܵܐ</span>, <span class="ml">സ്ലീവാ</span> as <span class="syr-inline" dir="rtl" lang="syr">ܨܠܝܼܒܵܐ</span>, <span class="ml">പന്തിയോസ്</span> as <span class="syr-inline" dir="rtl" lang="syr">ܦܲܢܛܝܼܘܿܣ</span>, <span class="ml">പീലാത്തോസ്</span> as <span class="syr-inline" dir="rtl" lang="syr">ܦܝܼܠܵܛܘܿܣ</span>, <span class="ml">മാമോദീസാ</span> as <span class="syr-inline" dir="rtl" lang="syr">ܡܲܥܡܘܿܕܝܼܬ݂ܵܐ</span>, and <span class="ml">ആമ്മേൻ</span> as <span class="syr-inline" dir="rtl" lang="syr">ܐܵܡܹܝܢ</span>.</li>
                </ul>
            </section>

            <section class="article-section">
                <h2 class="section-title">Backwards compatibility</h2>
                <p>Neo Karshon extends classical Karshon; it does not replace it, and we would consider the proposal a failure if it did. Shared letters keep their values, so older spellings remain readable in the same fonts. The new forms appear only for modern letters that classical practice lacked. A reader of classical Karshon still recognizes the base shapes; a writer of modern Malayalam gets a complete map into Syriac script.</p>
            </section>

            <section class="article-section">
                <h2 class="section-title">Status of the proposal</h2>
                <p>The design is complete. Every letter of modern Malayalam has a value, the chart above is the whole inventory, and the rules are specified tightly enough to run as code - which is how the Our Father and Creed above were transliterated. It is also implemented rather than merely described: our font renders it, our keyboard types it, and our converter applies it.</p>
                <p>What it is not is settled. There is no corpus written in Neo Karshon yet, no institution has adopted it, and we are not asking Unicode for anything - the whole point of the constraints was to avoid needing to. Individual choices are open to argument, and we would rather revise a letter now than defend it later, so corrections from Syriac and Malayalam scholars are genuinely welcome. If a better value can be shown for <span class="ml">ഡ</span>, or for any of the six aspirates, we will change it.</p>
            </section>

            <section class="article-section">
                <h2 class="section-title">Tools</h2>
                <p>These resources on this site implement the proposal, so it can be typed and published today:</p>
                <ul>
                    <li><a href="/articles/hendo-academy-launches-kerala's-first-indigenous-east-syriac-and-karshon-unicode-font-east-syriac-malankara">East Syriac Malankara</a> - Unicode East Syriac and Karshon font based on Kerala manuscript forms.</li>
                    <li><a href="/articles/syriac-phonetic-karshon-keyboard-layout-and-usage">Syriac Phonetic - Karshon keyboard</a> - phonetic layouts for Windows and macOS.</li>
                    <li><a href="/editor">Syriac Editor</a> - type East Syriac and Karshon in the browser.</li>
                </ul>
            </section>

            <section class="article-section">
                <h2 class="section-title">References</h2>
                <ul>
                    <li>Perczel, István. "Garshuni Malayalam: A Witness to an Early Stage of Indian Christian Literature." <em>Hugoye: Journal of Syriac Studies</em> 17, no. 1 (2015): 263-324. <a href="https://doi.org/10.31826/hug-2015-170115" target="_blank" rel="noopener noreferrer">https://doi.org/10.31826/hug-2015-170115</a></li>
                    <li>Kathanar, Koonammakkal Thoma. "An Introduction to Malayalam Karshon." In <em>The Harp</em>, vol. 15, 99-106. Gorgias Press, 2011. <a href="https://doi.org/10.31826/9781463233037-010" target="_blank" rel="noopener noreferrer">https://doi.org/10.31826/9781463233037-010</a></li>
                    <li>Pandey, Anshuman. "Proposal to Encode Syriac Letters for Garshuni Malayalam." Unicode Technical Committee, 2015 (encoded in Unicode 10.0 as Syriac Supplement U+0860-U+086A).</li>
                    <li>Unicode Consortium. Combining Tilde (U+0303); Syriac Letter Dotless Dalath Rish (U+0716); Syriac Qushshaya (U+0741); Syriac Rukkakha (U+0742).</li>
                </ul>
            </section>`;

const styles = `
        .lead {
            text-align: center;
            font-size: 1.05rem;
            line-height: 1.65;
            color: #4a4540;
            margin: 0 auto 2rem;
            max-width: 38rem;
        }

        .article-section {
            margin-bottom: 2rem;
        }

        .article-section > p,
        .article-section > ul {
            max-width: 42rem;
        }

        .related-list {
            list-style: none !important;
            padding: 0 !important;
            margin: 0.5rem 0 0 !important;
            max-width: none !important;
        }

        .related-list li {
            margin-bottom: 0.65rem !important;
            list-style: none !important;
        }

        .related-list a {
            display: inline-block;
            padding: 0.5rem 1rem;
            background-color: var(--light-bg, #f3efe8);
            border-radius: 4px;
            text-decoration: none;
            color: var(--primary-color, #8a3c3c);
            font-weight: 600;
        }

        .ml {
            font-family: "Noto Sans Malayalam", var(--font-noto-malayalam), sans-serif !important;
        }

        .font-selector {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 0.5rem 0.75rem;
            margin: 0 0 1.5rem;
            padding: 0.65rem 0.85rem;
            border: 1px solid rgba(138, 60, 60, 0.18);
            background: rgba(138, 60, 60, 0.04);
            font-family: var(--font-sans), system-ui, sans-serif;
        }

        .font-selector label {
            margin: 0;
            font-weight: 600;
            font-size: 0.9rem;
            color: var(--primary-color, #8a3c3c);
        }

        .font-selector select {
            padding: 0.35rem 0.6rem;
            border: 1px solid rgba(138, 60, 60, 0.35);
            border-radius: 0.25rem;
            background: #fff;
            color: #2a2622;
            font-size: 0.9rem;
            cursor: pointer;
            max-width: 100%;
        }

        .font-selector select:focus {
            outline: none;
            border-color: var(--secondary-color, #d4a445);
            box-shadow: 0 0 0 2px rgba(212, 164, 69, 0.25);
        }

        .mark-sample {
            font-size: 1.5em;
            font-family: "East Syriac Adiabene", "Karshon", serif;
        }

        .syr-inline,
        .syr-letter {
            font-family: "East Syriac Adiabene", "Karshon", serif !important;
            direction: rtl;
            unicode-bidi: isolate;
            font-feature-settings: "liga" 1, "clig" 1, "calt" 1, "ccmp" 1, "locl" 1, "mark" 1, "mkmk" 1;
        }

        .syr-inline {
            font-size: 1.65em;
            line-height: 1.2;
            vertical-align: -0.08em;
            white-space: nowrap;
        }

        .example-pairs {
            list-style: none !important;
            padding: 0 !important;
            margin: 0.75rem 0 1.25rem !important;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
            gap: 0.5rem;
            max-width: 42rem !important;
        }

        .example-pairs li {
            margin: 0 !important;
            padding: 0.55rem 0.75rem;
            background: rgba(138, 60, 60, 0.05);
            border-radius: 0.35rem;
            list-style: none !important;
            font-size: 1rem;
            line-height: 1.5;
        }

        .chart-legend {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.75rem 1.5rem;
            margin: 0 0 1.25rem;
            font-family: var(--font-sans), system-ui, sans-serif;
            font-size: 0.85rem;
            color: #4a4540;
        }

        .legend-item {
            display: inline-flex;
            align-items: center;
            gap: 0.45rem;
        }

        .legend-swatch {
            width: 1rem;
            height: 1rem;
            border: 1px solid #bbb;
            background: #fff;
            flex-shrink: 0;
        }

        .legend-swatch.neo {
            background: #f7e8c4;
        }

        .legend-swatch.dot {
            background: #e4ebf3;
        }

        .alphabet-chart {
            margin: 0 0 1rem;
        }

        .chart-block {
            margin: 0 0 1.5rem;
        }

        .chart-label {
            margin: 0 0 0.4rem !important;
            font-family: var(--font-sans), system-ui, sans-serif;
            font-size: 0.85rem;
            font-weight: 600;
            color: #4a4540;
            text-align: left;
        }

        .table-scroll {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            max-width: 100%;
        }

        .alphabet-table {
            border-collapse: collapse;
            margin: 0;
            width: 100%;
            table-layout: fixed;
            border: 1px solid #bbb;
        }

        .alphabet-table th,
        .alphabet-table td {
            border: 1px solid #bbb;
            padding: 0.55rem 0.35rem;
            text-align: center;
            vertical-align: middle;
        }

        .alphabet-table th.col-label {
            font-family: "Noto Sans Malayalam", var(--font-noto-malayalam), sans-serif !important;
            font-size: 0.8rem;
            font-weight: 600;
            line-height: 1.25;
            color: #333;
            background: #f5f5f5;
        }

        .alphabet-table td.letter-cell {
            background: #fff;
        }

        .alphabet-table td.empty-cell {
            background: #fafafa;
        }

        .letter-pair {
            display: inline-block;
            vertical-align: top;
            margin: 0 0.2rem;
        }

        .letter-cell .cell-ml {
            display: block;
            font-family: "Noto Sans Malayalam", var(--font-noto-malayalam), sans-serif !important;
            font-size: 1.15rem;
            font-weight: 600;
            line-height: 1.3;
            color: #222;
        }

        .letter-cell .cell-syr {
            display: block;
            font-size: 1.85rem !important;
            line-height: 1.3;
            color: #222;
        }

        .alphabet-table td.neo-new {
            background: #f7e8c4;
        }

        .alphabet-table td.neo-dot {
            background: #e4ebf3;
        }

        .chart-note {
            font-size: 0.9rem;
            color: #4a4540;
            margin-top: 0.75rem;
        }

        .prayer-text {
            margin: 1rem 0 1.5rem;
            border: 1px solid rgba(138, 60, 60, 0.14);
            border-radius: 0.35rem;
            background: #fffefb;
        }

        .prayer-heads,
        .prayer-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0 1.25rem;
        }

        .prayer-heads {
            padding: 0.5rem 1rem;
            background: rgba(138, 60, 60, 0.05);
            font-family: var(--font-sans), system-ui, sans-serif;
            font-size: 0.75rem;
            font-weight: 600;
            letter-spacing: 0.03em;
            text-transform: uppercase;
            color: var(--primary-color, #8a3c3c);
        }

        .prayer-heads span:last-child {
            text-align: right;
        }

        .prayer-row {
            align-items: start;
            padding: 0.7rem 1rem;
            border-top: 1px solid rgba(138, 60, 60, 0.1);
        }

        .prayer-text .prayer-ml,
        .prayer-text .prayer-syr {
            margin: 0 !important;
            max-width: none !important;
        }

        .prayer-ml {
            font-family: "Noto Sans Malayalam", var(--font-noto-malayalam), sans-serif !important;
            font-size: 1rem;
            line-height: 1.75;
            color: #2a2622;
        }

        .prayer-syr {
            font-size: 1.8rem;
            line-height: 1.45;
            text-align: right;
            color: #222;
        }

        .syr-block {
            font-family: "East Syriac Adiabene", "Karshon", serif !important;
            direction: rtl;
            unicode-bidi: isolate;
            font-feature-settings: "liga" 1, "clig" 1, "calt" 1, "ccmp" 1, "locl" 1, "mark" 1, "mkmk" 1;
        }

        @media (max-width: 768px) {
            .prayer-heads {
                display: none;
            }

            .prayer-row {
                grid-template-columns: 1fr;
                gap: 0.35rem;
            }
        }
`;

export default function ArticlePage() {
  return (
    <ArticleShell meta={meta} html={html} styles={styles} showHeaderMeta />
  );
}
