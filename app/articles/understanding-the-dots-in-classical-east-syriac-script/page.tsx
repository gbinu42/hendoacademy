import type { Metadata } from "next";
import { ArticleShell } from "@/components/article-shell";
import { getArticle } from "@/lib/articles";

const slug = "understanding-the-dots-in-classical-east-syriac-script";
const img = "/articles/images/east-syriac-dots";

const meta = getArticle(slug) ?? {
  slug,
  title: "Understanding the Dots in Classical East Syriac Script",
  description:
    "A guide to East Syriac diacritics (nūqze): vowel points, qushaya and rukkakha, syāmē, and sublinear/supralinear points - how to tell them apart visually and type them correctly.",
  author: "Binu George",
  date: "August 1, 2026",
  excerpt:
    "East Syriac uses a sophisticated system of dots for pronunciation, vocalization, and grammar.",
  listed: true,
  hasComments: true,
};

export const metadata: Metadata = {
  title: "Understanding the Dots in Classical East Syriac Script",
  description: meta.description,
  keywords: [
    "East Syriac",
    "Syriac diacritics",
    "nūqze",
    "qushaya",
    "rukkakha",
    "syāmē",
    "zqāpā",
    "pṯāḥā",
    "zlāmā",
    "Syriac Phonetic keyboard",
    "Hendo Academy",
  ],
  authors: [{ name: "Binu George" }],
  creator: "Hendo Academy",
  publisher: "Hendo Academy",
  category: "Orthography",
  openGraph: {
    type: "article",
    url: `https://www.hendoacademy.org/articles/${slug}`,
    title: "Understanding the Dots in Classical East Syriac Script",
    description: meta.description,
    siteName: "Hendo Academy",
    locale: "en_IN",
    images: [
      {
        url: `https://www.hendoacademy.org${img}/feature.png`,
        alt: "Understanding the Dots in Classical East Syriac Script",
        width: 1200,
        height: 675,
      },
    ],
    publishedTime: "2026-08-01T00:00:00.000Z",
    authors: ["Binu George"],
    section: "Articles",
    tags: [
      "East Syriac",
      "diacritics",
      "nūqze",
      "qushaya",
      "rukkakha",
      "orthography",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Understanding the Dots in Classical East Syriac Script",
    description: meta.description,
    images: [`https://www.hendoacademy.org${img}/feature.png`],
  },
  alternates: {
    canonical: `https://www.hendoacademy.org/articles/${slug}`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const FONTS = [
  { label: "Estrangela", family: "Estrangelo Edessa" },
  { label: "ES Adiabene", family: "East Syriac Adiabene" },
  { label: "ES Malankara", family: "East Syriac Malankara" },
  { label: "ES Malankara Classical", family: "East Syriac Malankara Classical" },
] as const;

function kbd(keys: string) {
  return `<kbd class="key">${keys}</kbd>`;
}

function syr(text: string, extraClass = "") {
  return `<span class="syr-inline ${extraClass}" dir="rtl" lang="syr">${text}</span>`;
}

function fontCell(text: string, family: string) {
  const esClass = family.startsWith("East Syriac") ? " font-sample-es" : "";
  return `<td class="font-sample${esClass}" style="font-family: '${family}', 'East Syriac Adiabene', serif;" dir="rtl" lang="syr">${text}</td>`;
}

function vowelBlock(
  name: string,
  syriacName: string,
  keys: string,
  description: string,
  sample: string
) {
  const head = FONTS.map((f) => `<th scope="col">${f.label}</th>`).join("");
  const cells = FONTS.map((f) => fontCell(sample, f.family)).join("");
  return `
    <h3 class="article-subtitle">${name} ${syr(syriacName)} ${kbd(keys)}</h3>
    <p>${description}</p>
    <p class="examples-label">Examples across fonts:</p>
    <div class="table-scroll">
      <table class="font-compare">
        <thead><tr>${head}</tr></thead>
        <tbody><tr>${cells}</tr></tbody>
      </table>
    </div>`;
}

type ConsRow = { label: string; sample: string };

function consonantTable(rows: ConsRow[]) {
  const head =
    `<th scope="col">Letter</th>` +
    FONTS.map((f) => `<th scope="col">${f.label}</th>`).join("");
  const body = rows
    .map((r) => {
      const cells = FONTS.map((f) => fontCell(r.sample, f.family)).join("");
      return `<tr><th scope="row" class="row-label">${r.label}</th>${cells}</tr>`;
    })
    .join("\n");
  return `
    <div class="table-scroll">
      <table class="font-compare consonant-table">
        <thead><tr>${head}</tr></thead>
        <tbody>${body}</tbody>
      </table>
    </div>`;
}

const qushayaRows: ConsRow[] = [
  { label: "Beth", sample: "ܒ݁" },
  { label: "Gamal (terminal non-joining)", sample: "ܓ݁" },
  { label: "Gamal (terminal joining)", sample: "‍ܓ݁" },
  { label: "Gamal (medial)", sample: "‍ܓ݁‍" },
  { label: "Dalath", sample: "ܕ݁" },
  { label: "Kap (terminal non-joining)", sample: "ܟ݁" },
  { label: "Kap (initial)", sample: "ܟ݁‍" },
  { label: "Kap (terminal joining)", sample: "‍ܟ݁" },
  { label: "Pe", sample: "ܦ݁" },
  { label: "Taw", sample: "ܬ݁" },
];

const rukkakhaRows: ConsRow[] = [
  { label: "Beth", sample: "ܒ݂" },
  { label: "Gamal (terminal non-joining)", sample: "ܓ݂" },
  { label: "Gamal (terminal joining)", sample: "‍ܓ݂" },
  { label: "Gamal (medial)", sample: "‍ܓ݂‍" },
  { label: "Dalath", sample: "ܕ݂" },
  { label: "Kap (terminal non-joining)", sample: "ܟ݂" },
  { label: "Kap (initial)", sample: "ܟ݂‍" },
  { label: "Kap (terminal joining)", sample: "‍ܟ݂" },
  { label: "Pe", sample: "ܦ݂" },
  { label: "Taw", sample: "ܬ݂" },
];

function printExample(
  n: number,
  caption: string,
  filename: string,
  alt: string
) {
  return `
    <figure class="print-example">
      <figcaption><strong>${n}.</strong> ${caption}</figcaption>
      <img src="${img}/${filename}" alt="${alt}" class="print-scan" />
    </figure>`;
}

const html = `
<header class="article-header">
  <h1 class="article-title">Understanding the Dots in Classical East Syriac Script</h1>
  <div class="article-meta">
    <span>Binu George</span>
    <span>August 1, 2026</span>
  </div>
</header>

<div class="article-body">
  <section class="article-section">
    <p>
      East Syriac uses a sophisticated system of dots known as diacritics for pronunciation,
      vocalization, and grammatical understanding. This system of dots, known in Syriac as
      <em>nūqze</em> ${syr("ܢܘܼܩܙܹ̈ܐ")}, was largely standardized by the 8th and 9th centuries.
      Some of these dots were originally used with Estrangela, while others are unique to East
      Syriac - they can be broadly categorized into three groups: vowel markers, consonant
      modifiers, and grammatical indicators.
    </p>
    <p>
      This article focuses on how these dots can be distinguished visually (in manuscripts,
      print, and in digital fonts), and how they can be typed correctly. All key combinations
      mentioned are for the
      <a href="/articles/syriac-phonetic-karshon-keyboard-layout-and-usage">Syriac Phonetic keyboard</a>.
      Font samples below use faces available on this site; other Meltho and Noto faces show the
      same marks with their own placement conventions.
    </p>
  </section>

  <section class="article-section">
    <h2 class="article-section-title">The Vowel Dots</h2>
    <p>
      Unlike Arabic or Hebrew, or even Western Syriac which often use lines and small symbols,
      the East Syriac tradition primarily uses dots in specific positions and combinations to
      represent the seven full vowels of the language.
    </p>

    ${vowelBlock(
      "Zqāpā",
      "ܙܩܵܦܵܐ",
      "Shift + X",
      `Represented by two dots placed diagonally above a letter, it produces a long <em>ā</em> sound, similar to the <em>a</em> in &ldquo;father&rdquo;. The dots may slant to the right or to the left.`,
      "ܒܵܐ"
    )}

    ${vowelBlock(
      "Pṯāḥā",
      "ܦܬܵܚܵܐ",
      "Shift + Z",
      `A pair of dots arranged vertically above and below a letter, it signifies a short <em>a</em> sound, like the <em>a</em> in &ldquo;cat&rdquo;.`,
      "ܒܲܐ"
    )}

    ${vowelBlock(
      "Zlāmā qašyā",
      "ܙܠܵܡܵܐ ܩܲܫܝܵܐ",
      "Shift + N",
      `Two dots placed diagonally below a letter; this indicates a long <em>ē</em> sound, as in &ldquo;they&rdquo;. The dots might even appear vertically.`,
      "ܒܹܐ"
    )}

    ${vowelBlock(
      "Zlāmā pšīqā",
      "ܙܠܵܡܵܐ ܦܫܝܼܩܵܐ",
      "Shift + C",
      `Two dots placed horizontally below a letter, representing a short <em>e</em> sound, like in &ldquo;bed&rdquo;. It is also known as <em>Pṣāṣā</em>.`,
      "ܒܸܐ"
    )}

    ${vowelBlock(
      "Rwāhā",
      "ܪܘܵܚܵܐ",
      "Shift + B",
      `A single dot placed above the wav ${syr("ܘ")}, it produces a short <em>o</em> sound, similar to the <em>o</em> in &ldquo;lot&rdquo;.`,
      "ܒܘܿ"
    )}

    ${vowelBlock(
      "Rḇāṣā",
      "ܪܒ݂ܵܨܵܐ",
      "Shift + V",
      `A single dot placed below the wav ${syr("ܘ")}, it represents a long <em>ū</em> sound, as in &ldquo;goo&rdquo;.`,
      "ܒܘܼ"
    )}

    ${vowelBlock(
      "Ḥḇāṣā",
      "ܚܒ݂ܵܨܵܐ",
      "Shift + V",
      `The letter Yōḏ ${syr("ܝ")} with a dot underneath represents the <em>ī</em> sound, as in &ldquo;bee&rdquo;.`,
      "ܒܝܼ"
    )}

    <p class="note">The Rḇāṣā and the Ḥḇāṣā are the same dot.</p>
  </section>

  <section class="article-section">
    <h2 class="article-section-title">Consonant Modification Dots: Qushaya and Rukkakha</h2>
    <p>
      One of the most critical functions of the dots is to distinguish between the hard
      (plosive) and soft (fricative) pronunciations of six specific consonants, known
      collectively as <em>Begadkepat</em> letters ${syr("ܒܓܕܟܦܬ")}.
    </p>

    <h3 class="article-subtitle">Qushaya ${syr("ܩܘܼܫܵܝܵܐ")} (&ldquo;hardening&rdquo;) ${kbd("Shift + U")}</h3>
    <p>
      Qushaya is a dot placed above a letter indicating its hard, plosive sound
      (b, g, d, k, p, t). Notice how in the table below, the dot sometimes appears to the
      right side of the character and sometimes directly above it - this is a stylistic
      choice rather than an orthographic rule. Placing the dot to the side lessens the
      chance of overlap with other diacritical marks. In both manuscripts and print, these
      dots most commonly appear directly above the characters. If you want the Qushaya to
      appear directly above the character, choose an appropriate font rather than using the
      supralinear dot to achieve the same effect.
    </p>
    <p>
      Example: ${syr("ܒ݁")} (b), ${syr("ܓ݁")} (g), ${syr("ܕ݁")} (d),
      ${syr("ܟ݁")} (k), ${syr("ܦ݁")} (p), ${syr("ܬ݁")} (t).
    </p>
    ${consonantTable(qushayaRows)}

    <h3 class="article-subtitle">Rukkakha ${syr("ܪܘܼܟܵܟ݂ܵܐ")} (&ldquo;softening&rdquo;) ${kbd("Shift + M")}</h3>
    <p>
      A dot placed below the letter indicates its soft, fricative sound
      (v, gh, dh, ḥ, f, th/s). As with the Qushaya, the Rukkakha also appears below and to
      the right side of characters in certain fonts, and right below the character in others -
      this is a stylistic choice of the font makers rather than an orthographic rule,
      primarily to prevent overlap with vowel points if they exist together.
    </p>
    <p>
      Example: ${syr("ܒ݂")} (v), ${syr("ܓ݂")} (gh), ${syr("ܕ݂")} (dh),
      ${syr("ܟ݂")} (ḥ), ${syr("ܦ݂")} (f), ${syr("ܬ݂")} (th/s).
    </p>
    ${consonantTable(rukkakhaRows)}

    <p>
      Notice how the Rukkakha dot overlaps with Dalath&rsquo;s dot ${syr("ܕ݂")}, with Gamal&rsquo;s
      tail ${syr("‍ܓ݂")}, and with the terminal joining Kap ${syr("‍ܟ݂")} in the East Syriac
      Adiabene font - this is a (arguably bad) font design decision.
    </p>
    <p>
      The presence or absence of these dots is governed by strict phonological rules, often
      related to the letter&rsquo;s position in a word or whether it follows a vowel. For example,
      the word for &ldquo;king&rdquo; is <em>malkā</em> ${syr("ܡܲܠܟ݁ܵܐ")} with a hard <em>k</em>, but
      &ldquo;his king&rdquo; is <em>malkēh</em> ${syr("ܡܲܠܟ݂ܹܗ")} with a soft <em>ḥ</em> sound.
      However, since the modern pronunciations of soft and hard versions of some letters are
      quite similar (e.g. Gamal, Dalath, Pe), these dots are omitted quite often.
    </p>
  </section>

  <section class="article-section">
    <h2 class="article-section-title">Grammatical and Other Dots</h2>
    <p>Beyond vowels and consonants, dots serve other essential purposes:</p>

    <h3 class="article-subtitle">Syāmē ${syr("ܣܝܵܡܹ̈ܐ")} (&ldquo;placings&rdquo;) ${kbd("Shift + I")}</h3>
    <p>
      This is arguably one of the most distinctive features of the Syriac script. A pair of
      dots placed horizontally above a letter, known as the Syāmē, indicates that a noun is
      plural. It does not affect pronunciation but is a purely grammatical marker. It can also
      mark duals and some collective nouns. These dots are also called &ldquo;Combining Diaereses&rdquo;.
    </p>
    <p>
      Example: ${syr("ܡܲܠܟܵܐ")} (<em>malkā</em>, king) vs.
      ${syr("ܡܲܠܟܹ̈ܐ")} (<em>malkē</em>, kings).
    </p>

    <h3 class="article-subtitle">Sublinear / Supralinear points</h3>
    <p>
      Before the current system of East Syriac vocalisation (using the vowels and Rukkakha and
      Qushaya mentioned above) was developed, sublinear (below the line) and supralinear
      (above the line) points were used to distinguish homonyms (words which have the same
      spelling, but different pronunciation). These dots are also used as morphological markers
      to distinguish verbs.
    </p>
    <p>
      These dots are usually placed directly above or below the consonant before the vowel
      sound, and sometimes between two letters (in manuscripts as well as in old printed
      texts). Modern fonts, however, place these dots exclusively directly above or below a
      letter, and never in between letters.
    </p>
    <ul class="mark-list">
      <li>
        Supralinear dot - ${syr("ܗ̇")} ${kbd("Shift + P")} - also known as
        &ldquo;Combining Dot Above&rdquo;
      </li>
      <li>
        Sublinear dot - ${syr("ܗ̣")} ${kbd("Shift + ;")} - also known as
        &ldquo;Combining Dot Below&rdquo;
      </li>
    </ul>

    <ol class="example-list">
      <li>
        ${syr("ܥ̣ܒܕܐ")} ${syr("(ܥܲܒ݂ܕܵܐ)")} &lsquo;slave&rsquo; and
        ${syr("(ܥܵܒ݂ܕܵܐ)")} ${syr("ܥ̇ܒܕܐ")} &lsquo;she makes&rsquo;.
      </li>
      <li>
        ${syr("(ܣܸܦܪܵܐ)")} ${syr("ܣ̣ܦܪܐ")} &lsquo;book&rsquo; vs.
        ${syr("(ܣܵܦܪܵܐ)")} ${syr("ܣ̇ܦܪܐ")} &lsquo;scribe&rsquo;.
      </li>
      <li>
        ${syr("(ܗܸܢܘܿܢ)")} ${syr("ܗ̣ܢܘܢ")} &lsquo;these&rsquo; vs.
        ${syr("(ܗܵܢܘܿܢ)")} ${syr("ܗ̇ܢܘܢ")} &lsquo;those&rsquo;.
      </li>
      <li>
        ${syr("(ܡܲܠܟܵܐ)")} ${syr("ܡ̇ܠܟܐ")} &lsquo;king&rsquo; vs.
        ${syr("(ܡܸܠܟܵܐ)")} ${syr("ܡ̣ܠܟܐ")} &lsquo;advice&rsquo;.
      </li>
      <li>
        ${syr("ܡ̇ܢ")} &lsquo;who&rsquo; vs. ${syr("ܡ̣ܢ")} &lsquo;from&rsquo;.
      </li>
      <li>
        ${syr("(ܗܵܘ)")} ${syr("ܗ̇ܘ")} ${syr("ܗܘ̇")} &lsquo;that MASC&rsquo; vs.
        ${syr("(ܗܘܼ)")} ${syr("ܗܘ̣")} &lsquo;he&rsquo;.
      </li>
      <li>
        ${syr("(ܗܵ‌ܝ)")} ${syr("ܗ̇‌ܝ")} ${syr("ܗ‌ܝ̇")} &lsquo;that FEM&rsquo; vs.
        ${syr("(ܗ‌ܝܼ)")} ${syr("ܗ‌ܝ̣")} &lsquo;she&rsquo;.
      </li>
    </ol>

    <p class="note">
      In East Syriac, a pronounced ${syr("ܗ")} is marked with two sublinear points as in
      ${syr("ܗ̤ܘܐ")} /hwā/, ${syr("ܗ̤ܘ")} /hū/ &lsquo;he&rsquo;, and ${syr("ܗ̤‌ܝ")} /hī/
      &lsquo;she&rsquo;, while a silent ${syr("ܗ")} takes one sublinear point in enclitic
      ${syr("ܗ̣ܘܐ")} /wā/, ${syr("ܗ̣ܘ")} /ū/, and ${syr("ܗ̣‌ܝ")} /ī/. The two sublinear
      points can be typed using ${kbd("Shift + K")} (Combining Diaereses Below).
    </p>

    <ol class="example-list" start="8">
      <li>
        The supralinear point is also used on the feminine ${syr("ܗ")} ending -
        ${syr("ܟܬܒܗ̇")} &lsquo;she wrote&rsquo;.
      </li>
      <li>
        These points can also be used to mark tense - e.g. present tense
        ${syr("ܟ̇ܬܒ")} &lsquo;he is writing&rsquo;, past tense ${syr("ܟ̣ܬܒ")}
        &lsquo;he wrote&rsquo;, etc.
      </li>
      <li>
        The diacritic used to denote the third person feminine verb is two points under the
        terminal taw in East Syriac, e.g. ${syr("ܟܬܒܬ݀")} &lsquo;she wrote&rsquo;. The same,
        however, is a single dot above the taw in West Syriac as well as in Estrangela,
        e.g. ${syr("ܟܬܒܬ݀")} - it is available at ${kbd("Shift + Y")}.
      </li>
    </ol>

    <p class="note">
      The feminine marker and Combining Diaereses Below may look similar, but they are not
      the same character - using one in place of the other would result in incorrect behaviour
      when the font is changed.
    </p>

    <h3 class="article-subtitle">Print examples</h3>
    ${printExample(
      1,
      `From the Mosul Peshitta. Notice how the two dots are placed between the letters. A correct transcription would be ${syr("(ܕܗܘܼ)")} ${syr("ܕܗ̤ܘ")}. Also notice how the two dots indicate that ${syr("ܗ")} (he) has to be pronounced.`,
      "mosul-dha.png",
      "Mosul Peshitta: two sublinear points between letters"
    )}
    ${printExample(
      2,
      `Again from the Mosul Edition ${syr("ܠܲܒ݂ܪܵܗ̇")}.`,
      "mosul-labhra.png",
      "Mosul Edition: labhra with feminine ending mark"
    )}
    ${printExample(
      3,
      `${syr("ܗ݇ܘ̣ܵܘ")} - The single sublinear dot indicates that ${syr("ܗ")} (he) is silent, which is also indicated by the mṭalqānā above the ${syr("ܗ")} (he).`,
      "mosul-hwaw.png",
      "Silent he with mṭalqānā and sublinear point"
    )}
    ${printExample(
      4,
      `From Darmo&rsquo;s Hudra - ${syr("ܕܩܲܒܸ݁ܠ̣")}. Note how the dot above the beth is a Qushaya, and the dot below the lamad is a sublinear point.`,
      "darmo-dqabel.png",
      "Darmo Hudra: qushaya on beth and sublinear point on lamad"
    )}
    ${printExample(
      5,
      `Again from Darmo&rsquo;s Hudra - ${syr("ܚܲܒ݂ܪܹܗ")}. Note how the dot underneath is a Rukkakha, and not a sublinear dot.`,
      "darmo-habreh.png",
      "Darmo Hudra: rukkakha under beth"
    )}
    ${printExample(
      6,
      `From Darmo&rsquo;s Hudra - ${syr("ܡܦܲܠ̈ܓ݂ܵܬ݂ܵܐ")}. The dots underneath the taw and gamal are both Rukkakha.`,
      "darmo-mpalgatha.png",
      "Darmo Hudra: rukkakha under gamal and taw"
    )}
  </section>

  <section class="article-section">
    <h2 class="article-section-title">Common errors</h2>

    <h3 class="article-subtitle">Using supra/sublinear points instead of Qushaya/Rukkakha</h3>
    <p>
      This is very common in digital text which has not been professionally edited. A few
      people seem to have the incorrect notion that the Rukkakha/Qushaya need to always appear
      directly above/below a letter, and end up using the wrong dots for them (instead of using
      an appropriate font).
    </p>
    <ul class="error-list">
      <li>${syr("ܐܲܒ݂ܵܐ", "good")} is correct, ${syr("ܐܲܒ̣ܵܐ", "bad")} is incorrect.</li>
      <li>${syr("ܒܹܝܬ݂", "good")} is correct, ${syr("ܒܹܝܬ̣", "bad")} is incorrect.</li>
      <li>${syr("ܡܲܪܬ݁", "good")} is correct, ${syr("ܡܲܪܬ̇", "bad")} is incorrect.</li>
    </ul>

    <h3 class="article-subtitle">Using the vowel point instead of Qushaya/Rukkakha</h3>
    <p>
      Fairly common error in digital text obtained via OCR (Optical Character Recognition).
    </p>
    <ul class="error-list">
      <li>${syr("ܐܲܒ݂ܵܐ", "good")} is correct, ${syr("ܐܲܒܼܵܐ", "bad")} is incorrect.</li>
      <li>${syr("ܐܲܝܟ݂", "good")} is correct, ${syr("ܐܲܝܟܼ", "bad")} is incorrect.</li>
      <li>${syr("ܒܹܝܬ݂", "good")} is correct, ${syr("ܒܹܝܬܼ", "bad")} is incorrect.</li>
      <li>${syr("ܡ̣ܢ", "good")} is correct, ${syr("ܡܼܢ", "bad")} is incorrect.</li>
    </ul>

    <h3 class="article-subtitle">Using Qushaya/Rukkakha instead of supra/sublinear points</h3>
    <ul class="error-list">
      <li>
        ${syr("ܡ̇ܢ", "good")} is correct, ${syr("ܡ݁ܢ", "bad")} or ${syr("ܡܢ݁", "bad")} are incorrect.
      </li>
      <li>
        ${syr("ܡ̣ܢ", "good")} is correct, ${syr("ܡ݂ܢ", "bad")} or ${syr("ܡܢ݂", "bad")} are incorrect.
      </li>
    </ul>

    <p class="note">
      For a detailed treatment of the various marks used in Syriac, please refer to [1].
    </p>
  </section>

  <section class="article-section">
    <h2 class="article-section-title">References</h2>
    <ol class="refs">
      <li>
        George Kiraz, <em>Syriac Orthography (A Grammar of the Syriac Language, Volume&nbsp;1)</em>,
        Gorgias Press, 2012.
      </li>
      <li>Guide to Meltho Fonts, Beth Mardutho Syriac Institute.</li>
      <li>
        Richard Ishida,
        <a href="https://r12a.github.io/scripts/syrc/syr" target="_blank" rel="noopener noreferrer">Classical Syriac Orthography Notes</a>.
      </li>
    </ol>
  </section>
</div>
`;

const styles = `
    .article-content .article-header {
      padding: 0 0 1.5rem;
      text-align: center;
      border-bottom: 1px solid rgba(138, 60, 60, 0.12);
      background: transparent;
      margin: 0 0 2rem;
    }

    .article-content .article-title {
      margin: 0 0 0.75rem;
    }

    .article-content .article-title::after {
      display: none;
    }

    .article-content .article-meta {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.35rem 1.25rem;
      margin: 0.75rem 0 0;
      color: #6b6460;
      font-family: var(--font-sans), system-ui, sans-serif;
      font-size: 0.9rem;
    }

    .article-content .article-body {
      overflow: hidden;
    }

    .article-content .article-section {
      margin: 2rem 0;
    }

    .article-content .article-section-title {
      margin: 0 0 1rem;
      padding-bottom: 0.45rem;
      border-bottom: 1px solid rgba(212, 164, 69, 0.4);
    }

    .article-content .article-subtitle {
      margin: 1.75rem 0 0.75rem;
      font-size: 1.15rem;
      color: var(--brand);
      line-height: 1.5;
    }

    .article-content .article-section > p,
    .article-content .article-section li {
      margin: 0 0 1.15rem;
      line-height: 1.8;
    }

    .article-content .syr-inline {
      font-family: "East Syriac Adiabene", "Karshon", serif;
      font-size: 1.65em;
      direction: rtl;
      unicode-bidi: isolate;
      white-space: nowrap;
    }

    .article-content .syr-inline.good {
      color: #1b5e20;
    }

    .article-content .syr-inline.bad {
      color: #8b1a1a;
    }

    .article-content kbd.key {
      display: inline-block;
      margin: 0 0.15em;
      padding: 0.12em 0.45em;
      font-family: var(--font-sans), ui-monospace, monospace;
      font-size: 0.82em;
      font-weight: 600;
      color: #2b2620;
      background: #f0ebe3;
      border: 1px solid rgba(43, 38, 32, 0.18);
      border-radius: 3px;
      white-space: nowrap;
    }

    .article-content .examples-label {
      margin: 0.5rem 0 0.4rem;
      font-size: 0.92rem;
      color: #6b6460;
    }

    .article-content .table-scroll {
      overflow-x: auto;
      margin: 0 0 1.5rem;
      -webkit-overflow-scrolling: touch;
    }

    .article-content table.font-compare {
      width: 100%;
      min-width: 28rem;
      border-collapse: collapse;
      font-size: 0.9rem;
      background: #fff;
    }

    .article-content table.font-compare th,
    .article-content table.font-compare td {
      border: 1px solid rgba(138, 60, 60, 0.15);
      padding: 0.55rem 0.65rem;
      text-align: center;
      vertical-align: middle;
    }

    .article-content table.font-compare thead th {
      background: rgba(138, 60, 60, 0.06);
      font-family: var(--font-sans), system-ui, sans-serif;
      font-size: 0.78rem;
      font-weight: 600;
      color: #5a4540;
      white-space: nowrap;
    }

    .article-content table.font-compare .row-label {
      text-align: left;
      font-family: var(--font-sans), system-ui, sans-serif;
      font-size: 0.82rem;
      font-weight: 600;
      color: #5a4540;
      background: rgba(248, 245, 240, 0.7);
      white-space: nowrap;
    }

    .article-content table.font-compare td.font-sample {
      font-size: 1.55rem;
      line-height: 1.6;
      direction: rtl;
    }

    .article-content table.font-compare td.font-sample-es {
      font-size: 1.85rem;
      line-height: 1.75;
    }

    .article-content .note {
      padding: 0.85rem 1rem;
      background: rgba(212, 164, 69, 0.12);
      border-left: 3px solid var(--brand-gold);
      font-size: 0.95rem;
    }

    .article-content .mark-list,
    .article-content .example-list,
    .article-content .error-list,
    .article-content .refs {
      padding-left: 1.35rem;
      margin: 0 0 1.25rem;
    }

    .article-content .mark-list li,
    .article-content .example-list li,
    .article-content .error-list li,
    .article-content .refs li {
      margin-bottom: 0.65rem;
    }

    .article-content .print-example {
      margin: 0 0 1.5rem;
      padding: 1rem;
      background: #fff;
      border: 1px solid rgba(138, 60, 60, 0.12);
    }

    .article-content .print-example figcaption {
      margin: 0 0 0.75rem;
      font-size: 0.95rem;
      line-height: 1.65;
      color: #3a3530;
    }

    .article-content .print-scan {
      display: block;
      max-width: min(100%, 160px);
      max-height: 48px;
      width: auto;
      height: auto;
      margin: 0 auto;
      object-fit: contain;
      image-rendering: auto;
      background: #fafafa;
    }

    .article-content a {
      color: var(--brand-blue);
    }

    @media (max-width: 720px) {
      .article-content .article-meta {
        flex-direction: column;
        gap: 0.25rem;
      }

      .article-content table.font-compare td.font-sample {
        font-size: 1.35rem;
      }

      .article-content table.font-compare td.font-sample-es {
        font-size: 1.6rem;
      }
    }
`;

export default function ArticlePage() {
  return (
    <ArticleShell
      meta={meta}
      html={html}
      styles={styles}
      showHeaderMeta={false}
    />
  );
}
