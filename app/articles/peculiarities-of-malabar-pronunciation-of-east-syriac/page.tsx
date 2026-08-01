import type { Metadata } from "next";
import { ArticleShell } from "@/components/article-shell";
import { getArticle } from "@/lib/articles";

const slug = "peculiarities-of-malabar-pronunciation-of-east-syriac";

const meta = getArticle(slug) ?? {
  slug,
  title: "Peculiarities of the Malabar Pronunciation of East Syriac",
  description:
    "Notes on how the East Syrians of Malabar pronounce Classical East Syriac, drawn from Rev. Fr. Thomas Arayathinal's Syriac Grammar.",
  author: "Binu George",
  date: "August 1, 2026",
  excerpt:
    "The East Syrians of Malabar do not always follow Middle Eastern East Syriac pronunciation.",
  listed: true,
  hasComments: true,
};

export const metadata: Metadata = {
  title: "Peculiarities of the Malabar Pronunciation of East Syriac",
  description: meta.description,
  keywords: [
    "East Syriac",
    "Malabar pronunciation",
    "Syriac phonology",
    "Arayathinal",
    "Saint Thomas Christians",
    "Syro Malabar",
    "zqapha",
    "ptaha",
    "zlama",
    "Hendo Academy",
  ],
  authors: [{ name: "Binu George" }],
  creator: "Hendo Academy",
  publisher: "Hendo Academy",
  category: "Phonology",
  openGraph: {
    type: "article",
    url: `https://www.hendoacademy.org/articles/${slug}`,
    title: "Peculiarities of the Malabar Pronunciation of East Syriac",
    description: meta.description,
    siteName: "Hendo Academy",
    locale: "en_IN",
    publishedTime: "2026-08-01T00:00:00.000Z",
    authors: ["Binu George"],
    section: "Articles",
    tags: [
      "East Syriac",
      "Malabar",
      "pronunciation",
      "Arayathinal",
      "phonology",
    ],
  },
  twitter: {
    card: "summary",
    title: "Peculiarities of the Malabar Pronunciation of East Syriac",
    description: meta.description,
  },
  alternates: {
    canonical: `https://www.hendoacademy.org/articles/${slug}`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

function syr(text: string) {
  return `<span class="syr-inline" dir="rtl" lang="syr">${text}</span>`;
}

function ml(text: string) {
  return `<span class="ml" lang="ml">${text}</span>`;
}

function tr(text: string) {
  return `<span class="tr">${text}</span>`;
}

function gloss(en: string) {
  return `<span class="gloss">- ${en}</span>`;
}

/** Syriac · transliteration · Malayalam - English gloss */
function pair(s: string, t: string, m: string, en: string) {
  const parts = [syr(s), tr(t)];
  if (m) parts.push(ml(m));
  parts.push(gloss(en));
  return parts.join(" ");
}

function pairLi(s: string, t: string, m: string, en: string) {
  return `<li>${pair(s, t, m, en)}</li>`;
}

function examples(items: string) {
  return `<ul class="examples">${items}</ul>`;
}

const html = `
<header class="article-header">
  <h1 class="article-title">Peculiarities of the Malabar Pronunciation of East Syriac</h1>
  <p class="article-subtitle-line">as per Rev. Fr. Thomas Arayathinal&rsquo;s <em>Syriac Grammar</em></p>
  <div class="article-meta">
    <span>Binu George</span>
    <span>August 1, 2026</span>
  </div>
</header>

<div class="article-body">
  <section class="article-section">
    <p class="wip-note"><strong>Work in progress.</strong> These notes are incomplete and will be revised.</p>
    <p>
      These notes collect the main points where the East Syrians of Malabar differ
      from (or selectively apply) the Classical East Syriac pronunciation used
      in the Middle East, following Rev. Fr. Thomas Arayathinal&rsquo;s
      <em>Aramaic (Syriac) Grammar</em>, Vol.&nbsp;1. Page references are to that volume.
      Each example gives Syriac, academic transliteration, Malayalam, and a short gloss.
    </p>
  </section>

  <section class="article-section">
    <h2 class="article-section-title">1. Short reading of ptaha and zlama pšiqa</h2>
    <p class="source-note">Vol.&nbsp;1, p.&nbsp;9</p>
    <p>
      The East Syrians of Malabar do not pronounce the ptaha and zlama pšiqa vowels
      long in the following positions, as the Middle Easterners do - they read
      them as written:
    </p>
    <ul>
      <li>when they are on the penultimate, or</li>
      <li>in monosyllabic words followed by a single non-vocalised consonant</li>
    </ul>
    ${examples(`
      ${pairLi("ܡܵܪܲܢ", "māran", "മാറൻ", "our Lord")}
      ${pairLi("ܠܲܢ", "lan", "ലൻ\u200c", "to us")}
      ${pairLi("ܡܲܢ", "man", "മൻ\u200c", "who")}
      ${pairLi("ܩܪܸܒ݂", "qrew", "ക്രെവ്", "draw near")}
    `)}
    <p>Exception:</p>
    ${examples(`
      ${pairLi("ܟܸܢ", "kēn", "കേൻ\u200c", "then")}
      ${pairLi("ܒܵܬܲܪܟܸܢ", "bāṯarkēn", "ബാസർകേൻ", "afterwards")}
    `)}
  </section>

  <section class="article-section">
    <h2 class="article-section-title">2. Short vowels in closed syllables</h2>
    <p>
      All vowels are supposed to be pronounced short when they stand at the beginning
      of a closed syllable except the final, or when they terminate a word (general
      rule in East Syriac).
    </p>
    ${examples(`
      ${pairLi("ܒܵܝܫܵܐ", "bayšā", "ബയ്ശാ", "evil")}
      ${pairLi("ܪܵܚܡܵܐ", "raḥmā", "റഹ്\u200cമാ", "mercy")}
      ${pairLi("ܣܵܘܦܵܐ", "sawpā", "സൗപാ", "end")}
    `)}
    <p>
      However, the East Syrians of Malabar do not stick hard and fast to this rule
      with regard to the zqapha, except for a few words like:
    </p>
    ${examples(`
      ${pairLi("ܡܵܪܝܵܐ", "maryā", "മർയാ", "the Lord")}
      ${pairLi("ܥܵܠܡܵܐ", "almā", "അൽമാ", "world")}
    `)}
  </section>

  <section class="article-section">
    <h2 class="article-section-title">3. Doubling after a short vowel</h2>
    <p class="source-note">Vol.&nbsp;1, p.&nbsp;11</p>
    <p>
      Doubling happens for vocalized letters immediately followed by a short vowel:
    </p>
    ${examples(`
      ${pairLi("ܩܲܛܸܠ", "qaṭṭel", "കത്തെൽ\u200c", "kill")}
      ${pairLi("ܙܲܟܵܝܵܐ", "sakkāyā", "സക്കായാ", "righteous")}
      ${pairLi("ܚܸܟܵܐ", "ḥekkā", "ഹെക്കാ", "palate")}
    `)}
    <p>Doubling does not happen in the following cases:</p>

    <h3 class="article-subtitle">Gutturals and resh</h3>
    <p>
      When a short vowel is followed by a guttural or ${syr("ܪ")}, no doubling
      happens - the short vowel is lengthened instead.
    </p>
    ${examples(`
      ${pairLi("ܫܲܪܝܼ", "šārī", "ശാറീ", "begin")}
      ${pairLi("ܚܲܪܲܪ", "ḥārar", "ഹാറർ", "set free")}
      ${pairLi("ܪܲܚܸܡ", "rāḥem", "റാഹെം", "have mercy")}
      ${pairLi("ܐܲܚܸܒ݂", "āḥew", "ആഹെവ്", "love")}
      ${pairLi("ܪܲܥܝܼ", "rāʿī", "റാഈ", "shepherd")}
    `)}

    <h3 class="article-subtitle">Initial alap with ptaha or zlama</h3>
    <p>
      When the vocalized letter follows an initial alap with ${syr("ܐܲ")} or
      ${syr("ܐܸ")} which (vowels) other letters in such a position do not admit.
    </p>
    ${examples(`
      ${pairLi("ܐܲܠܵܗܵܐ", "ālāhā", "ആലാഹാ", "God")}
      ${pairLi("ܐܲܒ݂ܵܐ", "āwā", "ആവാ", "father")}
      ${pairLi("ܐܲܕܘܿܡ", "ādōm", "ആദോം", "Adam")}
      ${pairLi("ܐܸܒܲܕ", "ēwad", "ഏവദ്", "he perished")}
      <li>${pair("ܐܸܡܲܪ", "ēmar", "ഏമർ", "he said")} <span class="uncertain">(?)</span></li>
    `)}

    <h3 class="article-subtitle">Waw after a short vowel</h3>
    <p>
      When the vocalised letter following a short vowel (especially ptaha
      ${syr("ܐܲ")}) is waw (${syr("ܘ")}), the East Syrians even change
      ${syr("ܐܲ")} into ${syr("ܐܵ")} before ${syr("ܘ")}.
    </p>
    <p>In writing (pronunciation unchanged):</p>
    ${examples(`
      <li>${syr("ܚܵܘܝܼ")} for ${syr("ܚܲܘܝܼ")} ${tr("ḥawi")} ${ml("ഹവി")} ${gloss("show")} <span class="uncertain">(?)</span></li>
      <li>${syr("ܫܵܘܝܼ")} for ${syr("ܫܲܘܝܼ")} ${tr("šawi")} ${ml("ശവി")} ${gloss("make equal")}</li>
    `)}
    <p>
      They indiscriminately make this change of ${syr("ܐܲ")} into ${syr("ܐܵ")}
      (in writing, not in pronouncing) even when ${syr("ܘ")} is not vocalised:
    </p>
    ${examples(`
      <li>${syr("ܚܵܘܒܵܐ")} for ${syr("ܚܲܘܒܵܐ")} ${tr("ḥawbā")} ${ml("ഹവ്ബാ")} ${gloss("debt")}</li>
      <li>${syr("ܪܵܘܡܵܐ")} for ${syr("ܪܲܘܡܵܐ")} ${tr("rawmā")} ${ml("റവ്മാ")} ${gloss("height")}</li>
    `)}

    <h3 class="article-subtitle">Analogy of form</h3>
    <p>
      There takes place no doubling if the vowel on the consonant following the
      short vowel is not due to it according to the analogy of words of the same
      form.
    </p>
    ${examples(`
      <li>${syr("ܚܲܕܘܼܬ݂ܵܐ")} for ${syr("ܚܲܕܘ̱ܬ݂ܵܐ")} ${tr("ḥādūsā")} ${ml("ഹാദൂസാ")} ${gloss("joy")}</li>
      <li>${syr("ܐܸܬ݂ܝܼܠܸܕ")} for ${syr("ܐܸܬ݂ܝ̱ܠܸܕ")} ${tr("esīled")} ${ml("എസീലെദ്")} ${gloss("he was born")}</li>
    `)}
  </section>

  <section class="article-section">
    <h2 class="article-section-title">4. Nasal affection of duplicated beth, gamal, dalath</h2>
    <p class="source-note">Vol.&nbsp;1, p.&nbsp;12</p>
    <p>
      The East Syrians of Malabar give a nasal sound to the letters
      ${syr("ܒ")} ${syr("ܓ")} ${syr("ܕ")} when duplicated:
    </p>
    ${examples(`
      ${pairLi("ܩܲܕܝܼܫܵܐ", "qandīšā", "കന്ദീശാ", "holy")}
      ${pairLi("ܐܲܒ݁ܝܼܕܵܐ", "ambīdā", "അമ്പീദാ", "lost")}
      ${pairLi("ܣܲܓ݁ܝܼܐܵܐ", "sangīā", "സങ്കീആ", "many")}
    `)}
  </section>

  <section class="article-section">
    <h2 class="article-section-title">5. After ḥbaṣa or rbaṣa of waw</h2>
    <p>
      The vocalized letter following ${syr("ܘܼ")} or ${syr("ܘܿ")} is not
      doubled; but it may be pronounced hard or soft according to its
      etymological nature.
    </p>
    <h3 class="article-subtitle">Soft or plain (no nasal)</h3>
    ${examples(`
      ${pairLi("ܩܘܼܒܵܠܵܐ", "qūbālā", "കൂബാലാ", "reception")}
      ${pairLi("ܣܘܼܬܵܪܵܐ", "sūtārā", "സൂതാറാ", "protection")}
      ${pairLi("ܟܪܘܼܒ݂ܵܐ", "krōwā", "ക്റോവാ", "cherub")}
      ${pairLi("ܟܘܼܒܹܐ", "kūbē", "കുവേ", "thorn")}
      ${pairLi("ܩܘܼܒܵܠܛܲܝܒ݁ܘܼܬ݂ܵܐ", "qūwālṭaybūṯā", "കൂവാൽതയ്ബൂസാ", "thanksgiving")}
    `)}
    <h3 class="article-subtitle">Exceptions (nasal or doubled)</h3>
    ${examples(`
      ${pairLi("ܚܘܼܒܵܐ", "ḥumbā", "ഹുമ്പാ", "love")}
      ${pairLi("ܥܘܼܒܵܐ", "umbā", "ഉമ്പാ", "bosom")}
      ${pairLi("ܐܸܣܦܘܼܓܵܐ", "espungā", "എസ്പുങ്കാ", "sponge")}
      ${pairLi("ܛܪܘܼܓܵܐ", "ṭrungā", "ത്രുങ്കാ", "citron")}
      ${pairLi("ܟܠܵܐ", "kollā", "കൊല്ലാ", "all")}
      ${pairLi("ܟܘܿܬ݁ܝܼܢܵܐ", "kottīnā", "കൊത്തീനാ", "tunic")}
    `)}
  </section>

  <section class="article-section">
    <h2 class="article-section-title">6. Loss of vowel on a duplicated letter</h2>
    <p>
      When the duplicated letter, in the course of inflexion, loses its vowel, it
      remains hard, having only šwa without doubling and nasal affection.
    </p>
    ${examples(`
      <li>${pair("ܡܠܲܒ݁ܒ݂ܵܐ", "mlabwā", "മ്\u200cലബ്\u200cവാ\u200c", "encouraged")}
        <span class="from">(from ${syr("ܡܠܲܒܸ݁ܒ݂")} ${tr("mlambew")} ${ml("മ്\u200cലമ്പെവ്")} ${gloss("encourage")})</span></li>
      <li>${pair("ܠܸܒ̇ܗܘܿܢ", "lebhōn", "ലെബ്\u200cഹോൻ", "their heart")}
        <span class="from">(from ${syr("ܠܸܒܵܐ")} ${tr("lembā")} ${ml("ലെമ്പാ")} ${gloss("heart")})</span></li>
      <li>${pair("ܡܩܲܕܫܝܼܢ", "mqadšīn", "മ്കദ്\u200cശീൻ\u200c", "they sanctify")}
        <span class="from">(from ${syr("ܡܩܲܕܸܫ")} ${tr("mqandeš")} ${ml("മ്കന്ദെശ്")} ${gloss("he sanctifies")})</span></li>
    `)}
    <p>
      However, the East Syrians of Malabar retain the nasal together with the hard
      aspirate if no syllable comes after it:
    </p>
    ${examples(`
      ${pairLi("ܠܹܒ݁ܝ", "lēmb", "ലേമ്പ്", "my heart")}
      ${pairLi("ܚܘܼܒ݁ܝ", "ḥumb", "ഹുമ്പ്", "my love")}
    `)}
    <p>Counter example:</p>
    ${examples(`
      <li>${syr("ܠܸܒ݁ܟ݂ܘܿܢ")} ${tr("lebḵōn")} ${gloss("your (pl.) heart")} <span class="uncertain">(?)</span></li>
    `)}
  </section>

  <section class="article-section">
    <h2 class="article-section-title">Special cases</h2>
    <p>Words still under closer consideration:</p>
    ${examples(`
      ${pairLi("ܓܵܘܵܐ", "gāwā", "", "inside")}
            <li>${syr("ܚܵܘܵܐ")} ${tr("ḥawwā")} ${ml("ഹവ്വാ")} ${gloss("Eve")}
        <span class="from">(traditionally pronounced with doubled w)</span></li>
      <li>${syr("ܐܵܕܵܡ")} ${tr("ādam")} ${ml("ആദം")} ${gloss("Adam")}
        <span class="from">(traditional Malabar form)</span></li>
      <li>${syr("ܓܵܘܵܝܵܐ")} ${tr("gāwāyā")} ${gloss("inner")}
        <span class="from">(supposedly said ${tr("gawwaya")})</span></li>
            <li>${syr("ܚܲܕܝܼ")} ${tr("ḥādī")} ${gloss("rejoice")}
        <span class="from">(written with ptaha; long by the lengthening rule. Fr.&nbsp;Thelly, Fr.&nbsp;Kattakayam, and Malpan Fr.&nbsp;Mathew Vellanickal sometimes say ${tr("handi")} in recordings.)</span></li>
      ${pairLi("ܣܸܓܕܬ݂ܵܐ", "segdṯā", "സെഗ്\u200cദ്സാ", "worship")}
      <li>${syr("ܗܘ̤ܝܼ")} ${tr("hawī")} ${ml("ഹവീ")} ${gloss("be")}
        <span class="from">(${syr("ܗ")} is not silent; and not read as ${ml("ഹ്വീ")})</span></li>
    `)}
  </section>

  <section class="article-section">
    <h2 class="article-section-title">References</h2>
    <ol class="refs">
      <li>
        Thomas Arayathinal,
        <em>Aramaic (Syriac) Grammar</em>, Vol.&nbsp;1,
        St.&nbsp;Joseph&rsquo;s Press, Mannanam, 1957.
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
      margin: 0 0 0.5rem;
    }

    .article-content .article-title::after {
      display: none;
    }

    .article-content .article-subtitle-line {
      margin: 0 0 0.75rem;
      font-family: var(--font-serif), Georgia, serif;
      font-size: 1.05rem;
      font-style: italic;
      color: #6b6460;
      line-height: 1.5;
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

    .article-content .wip-note {
      margin: 0 0 1.25rem;
      padding: 0.75rem 1rem;
      background: rgba(212, 164, 69, 0.12);
      border-left: 3px solid rgba(212, 164, 69, 0.7);
      font-size: 0.98rem;
      line-height: 1.6;
    }

    .article-content .article-section-title {
      margin: 0 0 0.35rem;
      padding-bottom: 0.45rem;
      border-bottom: 1px solid rgba(212, 164, 69, 0.4);
    }

    .article-content .source-note {
      margin: 0 0 1rem;
      font-size: 0.88rem;
      color: #6b6460;
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

    .article-content .article-section ul {
      margin: 0 0 1.15rem;
      padding-left: 1.35rem;
    }

    .article-content ul.examples {
      list-style: none;
      margin: 0.75rem 0 1.5rem;
      padding: 0;
      border: 1px solid rgba(138, 60, 60, 0.12);
      background: #fff;
    }

    .article-content ul.examples li {
      margin: 0;
      padding: 0.55rem 0.85rem;
      border-bottom: 1px solid rgba(138, 60, 60, 0.08);
      line-height: 1.75;
    }

    .article-content ul.examples li:last-child {
      border-bottom: none;
    }

    .article-content .gloss {
      color: #6b6460;
      font-size: 0.95em;
    }

    .article-content .from {
      display: inline;
      color: #6b6460;
      font-size: 0.92em;
    }

    .article-content .syr-inline {
      font-family: "East Syriac Adiabene", "Karshon", serif;
      font-size: 1.65em;
      direction: rtl;
      unicode-bidi: isolate;
      white-space: nowrap;
      font-feature-settings: "liga" 1, "clig" 1, "calt" 1, "ccmp" 1, "locl" 1, "mark" 1, "mkmk" 1;
      line-height: 1.2;
      vertical-align: -0.08em;
    }

    .article-content .tr {
      margin-left: 0.55em;
      font-style: italic;
      white-space: nowrap;
    }

    .article-content .ml {
      margin-left: 0.7em;
      font-family: var(--font-malayalam), "Noto Sans Malayalam", sans-serif !important;
    }

    .article-content .gloss {
      margin-left: 0.7em;
    }

    .article-content .uncertain {
      color: #8b1a1a;
      font-size: 0.95em;
    }

    .article-content ol.refs {
      margin: 0;
      padding-left: 1.35rem;
    }

    .article-content ol.refs li {
      margin: 0 0 0.75rem;
      line-height: 1.7;
    }

    .article-content a {
      color: var(--brand-blue);
    }

    @media (max-width: 720px) {
      .article-content .article-meta {
        flex-direction: column;
        gap: 0.25rem;
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
