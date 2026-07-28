import type { Metadata } from "next";
import { ArticleShell } from "@/components/article-shell";
import { getArticle } from "@/lib/articles";

const slug = "suriyani-malayalam-script-correspondence";
const meta = getArticle(slug) ?? {
  slug,
  title: "Malayalam - Suriyani Malayalam script correspondence",
  description:
    "Correspondence between Modern Malayalam and Suriyani Malayalam (Karshon / Malayalam Garshuni).",
  author: "Hendo Academy",
  date: "",
  excerpt:
    "Correspondence between Modern Malayalam and Suriyani Malayalam (Karshon / Malayalam Garshuni).",
  listed: false,
  hasComments: true,
};

export const metadata: Metadata = {
  title: "Malayalam - Suriyani Malayalam script correspondence",
  description:
    "Correspondence between Modern Malayalam and Suriyani Malayalam (Karshon / Malayalam Garshuni).",
  openGraph: {
    type: "article",
    url: `https://www.hendoacademy.org/articles/${slug}`,
    title: "Malayalam - Suriyani Malayalam script correspondence",
    description:
      "Correspondence between Modern Malayalam and Suriyani Malayalam (Karshon / Malayalam Garshuni).",
    images: ["/assets/images/logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malayalam - Suriyani Malayalam script correspondence",
    description:
      "Correspondence between Modern Malayalam and Suriyani Malayalam (Karshon / Malayalam Garshuni).",
    images: ["/assets/images/logo.jpg"],
  },
  alternates: {
    canonical: `https://www.hendoacademy.org/articles/${slug}`,
  },
};

const html = `<header class="article-header">
                <div class="title-container">
                    <h1 class="english-title">Malayalam - Suriyani Malayalam script correspondence</h1>
                </div>
                <div class="article-meta">
                    <span>Binu George</span>
                    <span>April 25, 2025</span>
                </div>
                <div class="subtitle-container">
                    <p class="subtitle">Correspondence between Modern Malayalam and Suriyani Malayalam (Karshon / Malayalam Garshuni).</p>
                </div>
            </header>
            
            
            
            <section class="article-section">
                <h2 class="section-title">Introduction</h2>
                <div class="section-content">
                    <p>Suriyani Malayalam (Karshon / Garshuni Malayalam) writes Malayalam in East Syriac script. It was used by Saint Thomas Christians in Kerala for liturgy and letters into the early 20th century.</p>
                    <p>This page lists letter values as rendered with East Syriac Malankara, with a Malayalam word and its Karshon spelling for each entry. The modern letters follow <a href="/articles/neo-malayalam-karshon">Neo Karshon</a>, Hendo Academy's proposal for the letters classical Karshon never covered.</p>
                </div>
            </section>

            <figure>
                <img src="/articles/images/suriyani-malayalam-script-correspondence/malayalam-karshon.jpg" alt="Malayalam Karshon script sample">
                <figcaption>Malayalam Karshon</figcaption>
            </figure>
            
            <section class="article-section">
                <h2 class="section-title">Script Correspondence Table</h2>
                <div class="section-content">
                    <p>Malayalam letters with their Karshon values under the Neo Karshon proposal, and sample words in both scripts.</p>
                    <div class="note-callout">
                        <p>Uses Unicode Syriac + Syriac Supplement (U+0860-086A) as in East Syriac Malankara. Aspiration: combining tilde (̃). ഡ/ഢ: ܖ. Dental ന: ࡥ; alveolar ഩ: ܢ. ം = anusvāram; ഃ = visargam.</p>
                    </div>

                    <div class="table-wrap"><table class="correspondence-table">
                        <thead>
                            <tr>
                                <th>Malayalam</th>
                                <th>Karshon</th>
                                <th>Example</th>
                                <th>Karshon example</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan="4" class="table-section">Vowels (സ്വരങ്ങൾ)</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">അ</td>
                                <td class="suriyani-letter">ܐܲ</td>
                                <td class="malayalam-example example-word">അമ്മ</td>
                                <td class="suriyani-example example-word">ܐܲܡ̱ܲܐ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ആ</td>
                                <td class="suriyani-letter">ܐܵ</td>
                                <td class="malayalam-example example-word">ആന</td>
                                <td class="suriyani-example example-word">ܐܵܢܲܐ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഇ</td>
                                <td class="suriyani-letter">ܐܝܼ</td>
                                <td class="malayalam-example example-word">ഇല</td>
                                <td class="suriyani-example example-word">ܐܝܼܠܲܐ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഈ</td>
                                <td class="suriyani-letter">ܐܝܼ</td>
                                <td class="malayalam-example example-word">ഈച്ച</td>
                                <td class="suriyani-example example-word">ܐܝܼܫ̱݁ܲܐ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഉ</td>
                                <td class="suriyani-letter">ܐܘܼ</td>
                                <td class="malayalam-example example-word">ഉപ്പ്</td>
                                <td class="suriyani-example example-word">ܐܘܼܦ̱</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഊ</td>
                                <td class="suriyani-letter">ܐܘܼ</td>
                                <td class="malayalam-example example-word">ഊഞ്ഞാൽ</td>
                                <td class="suriyani-example example-word">ܐܘܼࡢ̱ܵܠ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">എ</td>
                                <td class="suriyani-letter">ܐܸ</td>
                                <td class="malayalam-example example-word">എണ്ണ</td>
                                <td class="suriyani-example example-word">ܐܸࡤ̱ܲܐ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഏ</td>
                                <td class="suriyani-letter">ܐܹ</td>
                                <td class="malayalam-example example-word">ഏഴ്</td>
                                <td class="suriyani-example example-word">ܐܹࡩ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഐ</td>
                                <td class="suriyani-letter">ܐܵܝ</td>
                                <td class="malayalam-example example-word">ഐക്യം</td>
                                <td class="suriyani-example example-word">ܐܵܝܟܝܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഒ</td>
                                <td class="suriyani-letter">ܐܘܿ</td>
                                <td class="malayalam-example example-word">ഒരു</td>
                                <td class="suriyani-example example-word">ܐܘܿࡧܘܼ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഓ</td>
                                <td class="suriyani-letter">ܐܘܿ</td>
                                <td class="malayalam-example example-word">ഓണം</td>
                                <td class="suriyani-example example-word">ܐܘܿࡤܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഔ</td>
                                <td class="suriyani-letter">ܐܵܘ</td>
                                <td class="malayalam-example example-word">ഔഷധം</td>
                                <td class="suriyani-example example-word">ܐܵܘࡪܲܕ̃ܲܡ</td>
                            </tr>
                            <tr>
                                <td colspan="4" class="table-section">Special Symbols (ചിഹ്നങ്ങൾ)</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ം</td>
                                <td class="suriyani-letter">ܡ</td>
                                <td class="malayalam-example example-word">നാമം</td>
                                <td class="suriyani-example example-word">ࡥܵܡܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഃ</td>
                                <td class="suriyani-letter">ܐ݈</td>
                                <td class="malayalam-example example-word">ദുഃഖം</td>
                                <td class="suriyani-example example-word">ܕܘܼܐ݈ܩܲܡ</td>
                            </tr>
                            <tr>
                                <td colspan="4" class="table-section">Consonants (വ്യഞ്ജനങ്ങൾ)</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ക</td>
                                <td class="suriyani-letter">ܟ</td>
                                <td class="malayalam-example example-word">കടൽ</td>
                                <td class="suriyani-example example-word">ܟܲࡣܲܠ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഖ</td>
                                <td class="suriyani-letter">ܩ</td>
                                <td class="malayalam-example example-word">മുഖം</td>
                                <td class="suriyani-example example-word">ܡܘܼܩܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഗ</td>
                                <td class="suriyani-letter">ܓ</td>
                                <td class="malayalam-example example-word">ഗുരു</td>
                                <td class="suriyani-example example-word">ܓܘܼࡧܘܼ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഘ</td>
                                <td class="suriyani-letter">ܓ̃</td>
                                <td class="malayalam-example example-word">ഘോഷം</td>
                                <td class="suriyani-example example-word">ܓ̃ܘܿࡪܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ങ</td>
                                <td class="suriyani-letter">ࡠ</td>
                                <td class="malayalam-example example-word">അങ്കം</td>
                                <td class="suriyani-example example-word">ܐܲࡠܟܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ച</td>
                                <td class="suriyani-letter">ܫ݁</td>
                                <td class="malayalam-example example-word">ചോറ്</td>
                                <td class="suriyani-example example-word">ܫ݁ܘܿܪ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഛ</td>
                                <td class="suriyani-letter">ܫ̃</td>
                                <td class="malayalam-example example-word">ഛായ</td>
                                <td class="suriyani-example example-word">ܫ̃ܵܝܲܐ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ജ</td>
                                <td class="suriyani-letter">ࡡ</td>
                                <td class="malayalam-example example-word">ജലം</td>
                                <td class="suriyani-example example-word">ࡡܲܠܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഝ</td>
                                <td class="suriyani-letter">ࡡ̃</td>
                                <td class="malayalam-example example-word">ഝടിതി</td>
                                <td class="suriyani-example example-word">ࡡ̃ܲࡣܝܼܬܝܼ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഞ</td>
                                <td class="suriyani-letter">ࡢ</td>
                                <td class="malayalam-example example-word">ഞാൻ</td>
                                <td class="suriyani-example example-word">ࡢܵܢ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ട</td>
                                <td class="suriyani-letter">ࡣ</td>
                                <td class="malayalam-example example-word">കുടം</td>
                                <td class="suriyani-example example-word">ܟܘܼࡣܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഠ</td>
                                <td class="suriyani-letter">ࡣ̃</td>
                                <td class="malayalam-example example-word">പഠനം</td>
                                <td class="suriyani-example example-word">ܦܲࡣ̃ܲܢܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഡ</td>
                                <td class="suriyani-letter">ܖ</td>
                                <td class="malayalam-example example-word">ഡോക്ടർ</td>
                                <td class="suriyani-example example-word">ܖܘܿܟࡣࡧ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഢ</td>
                                <td class="suriyani-letter">ܖ̃</td>
                                <td class="malayalam-example example-word">ഗൂഢം</td>
                                <td class="suriyani-example example-word">ܓܘܼܖ̃ܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ണ</td>
                                <td class="suriyani-letter">ࡤ</td>
                                <td class="malayalam-example example-word">മണ്ണ്</td>
                                <td class="suriyani-example example-word">ܡܲࡤ̱</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ത</td>
                                <td class="suriyani-letter">ܬ</td>
                                <td class="malayalam-example example-word">തല</td>
                                <td class="suriyani-example example-word">ܬܲܠܲܐ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഥ</td>
                                <td class="suriyani-letter">ܛ</td>
                                <td class="malayalam-example example-word">കഥ</td>
                                <td class="suriyani-example example-word">ܟܲܛܲܐ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ദ</td>
                                <td class="suriyani-letter">ܕ</td>
                                <td class="malayalam-example example-word">ദിനം</td>
                                <td class="suriyani-example example-word">ܕܝܼܢܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ധ</td>
                                <td class="suriyani-letter">ܕ̃</td>
                                <td class="malayalam-example example-word">ധനം</td>
                                <td class="suriyani-example example-word">ܕ̃ܲܢܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ന</td>
                                <td class="suriyani-letter">ࡥ</td>
                                <td class="malayalam-example example-word">നദി</td>
                                <td class="suriyani-example example-word">ࡥܲܕܝܼ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഩ</td>
                                <td class="suriyani-letter">ܢ</td>
                                <td class="malayalam-example example-word">പഩ</td>
                                <td class="suriyani-example example-word">ܦܲܢܲܐ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">പ</td>
                                <td class="suriyani-letter">ܦ</td>
                                <td class="malayalam-example example-word">പക്ഷി</td>
                                <td class="suriyani-example example-word">ܦܲܟࡪܝܼ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഫ</td>
                                <td class="suriyani-letter">ܦ݂</td>
                                <td class="malayalam-example example-word">ഫലം</td>
                                <td class="suriyani-example example-word">ܦ݂ܲܠܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ബ</td>
                                <td class="suriyani-letter">ܒ</td>
                                <td class="malayalam-example example-word">ബാലൻ</td>
                                <td class="suriyani-example example-word">ܒܵܠܲܢ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഭ</td>
                                <td class="suriyani-letter">ࡦ</td>
                                <td class="malayalam-example example-word">ഭക്ഷണം</td>
                                <td class="suriyani-example example-word">ࡦܲܟࡪܲࡤܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">മ</td>
                                <td class="suriyani-letter">ܡ</td>
                                <td class="malayalam-example example-word">മരം</td>
                                <td class="suriyani-example example-word">ܡܲࡧܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">യ</td>
                                <td class="suriyani-letter">ܝ</td>
                                <td class="malayalam-example example-word">യാത്ര</td>
                                <td class="suriyani-example example-word">ܝܵܬܪܲܐ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ര</td>
                                <td class="suriyani-letter">ࡧ</td>
                                <td class="malayalam-example example-word">രാമൻ</td>
                                <td class="suriyani-example example-word">ࡧܵܡܲܢ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ല</td>
                                <td class="suriyani-letter">ܠ</td>
                                <td class="malayalam-example example-word">മല</td>
                                <td class="suriyani-example example-word">ܡܲܠܲܐ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">വ</td>
                                <td class="suriyani-letter">ܒ݂</td>
                                <td class="malayalam-example example-word">വീട്</td>
                                <td class="suriyani-example example-word">ܒ݂ܝܼࡣ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ശ</td>
                                <td class="suriyani-letter">ܫ</td>
                                <td class="malayalam-example example-word">ശബ്ദം</td>
                                <td class="suriyani-example example-word">ܫܲܒܕܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഷ</td>
                                <td class="suriyani-letter">ࡪ</td>
                                <td class="malayalam-example example-word">വിഷം</td>
                                <td class="suriyani-example example-word">ܒ݂ܝܼࡪܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">സ</td>
                                <td class="suriyani-letter">ܣ</td>
                                <td class="malayalam-example example-word">സമയം</td>
                                <td class="suriyani-example example-word">ܣܲܡܲܝܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഹ</td>
                                <td class="suriyani-letter">ܗ</td>
                                <td class="malayalam-example example-word">ഹരി</td>
                                <td class="suriyani-example example-word">ܗܲࡧܝܼ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ള</td>
                                <td class="suriyani-letter">ࡨ</td>
                                <td class="malayalam-example example-word">വള</td>
                                <td class="suriyani-example example-word">ܒ݂ܲࡨܲܐ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഴ</td>
                                <td class="suriyani-letter">ࡩ</td>
                                <td class="malayalam-example example-word">പഴം</td>
                                <td class="suriyani-example example-word">ܦܲࡩܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">റ</td>
                                <td class="suriyani-letter">ܪ</td>
                                <td class="malayalam-example example-word">കറി</td>
                                <td class="suriyani-example example-word">ܟܲܪܝܼ</td>
                            </tr>
                            
                            <!-- Start of Compound Letters Section -->
                            <tr>
                                <td colspan="4" class="table-section">Compound Letters (കൂട്ടക്ഷരങ്ങൾ)</td>
                            </tr>
                            <!-- Homogeneous compound letters -->
                            <tr>
                                <td colspan="4" class="table-section">Homogeneous Compound Letters (സ്വവർഗ്ഗകൂട്ടക്ഷരങ്ങൾ)</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ക്ക (ക് + ക)</td>
                                <td class="suriyani-letter">ܟ̱‍</td>
                                <td class="malayalam-example example-word">മുക്കുറ്റി</td>
                                <td class="suriyani-example example-word">ܡܘܼܟ̱ܘܼܪ̱ܝܼ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഗ്ഗ (ഗ് + ഗ)</td>
                                <td class="suriyani-letter">ܓ̱</td>
                                <td class="malayalam-example example-word">മാർഗ്ഗം</td>
                                <td class="suriyani-example example-word">ܡܵܪܓ̱ܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ങ്ങ (ങ് + ങ)</td>
                                <td class="suriyani-letter">ࡠ̱</td>
                                <td class="malayalam-example example-word">മാങ്ങ</td>
                                <td class="suriyani-example example-word">ܡܵࡠ̱ܲܐ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ച്ച (ച് + ച)</td>
                                <td class="suriyani-letter">ܫ̱݁</td>
                                <td class="malayalam-example example-word">കച്ചവടം</td>
                                <td class="suriyani-example example-word">ܟܲܫ̱݁ܲܒ݂ܲࡣܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ജ്ജ (ജ് + ജ)</td>
                                <td class="suriyani-letter">ࡡ̱</td>
                                <td class="malayalam-example example-word">ലജ്ജ</td>
                                <td class="suriyani-example example-word">ܠܲࡡ̱ܲܐ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഞ്ഞ (ഞ് + ഞ)</td>
                                <td class="suriyani-letter">ࡢ̱</td>
                                <td class="malayalam-example example-word">കഞ്ഞി</td>
                                <td class="suriyani-example example-word">ܟܲࡢ̱ܝܼ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ട്ട (ട് + ട)</td>
                                <td class="suriyani-letter">ࡣ̱</td>
                                <td class="malayalam-example example-word">വീട്ടിൽ</td>
                                <td class="suriyani-example example-word">ܒ݂ܝܼࡣ̱ܝܼܠ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഡ്ഡ (ഡ് + ഡ)</td>
                                <td class="suriyani-letter">ܖ̱</td>
                                <td class="malayalam-example example-word">ഇഡ്ഡലി</td>
                                <td class="suriyani-example example-word">ܐܝܼܖ̱ܲܠܝܼ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ണ്ണ (ണ് + ണ)</td>
                                <td class="suriyani-letter">ࡤ̱</td>
                                <td class="malayalam-example example-word">കണ്ണ്</td>
                                <td class="suriyani-example example-word">ܟܲࡤ̱</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ത്ത (ത് + ത)</td>
                                <td class="suriyani-letter">ܬ̱</td>
                                <td class="malayalam-example example-word">കത്ത്</td>
                                <td class="suriyani-example example-word">ܟܲܬ̱</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ദ്ദ (ദ് + ദ)</td>
                                <td class="suriyani-letter">ܕ̱</td>
                                <td class="malayalam-example example-word">അദ്ദേഹം</td>
                                <td class="suriyani-example example-word">ܐܲܕ̱ܹܗܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ന്ന (ന് + ന)</td>
                                <td class="suriyani-letter">ࡥ̱</td>
                                <td class="malayalam-example example-word">പിന്നെ</td>
                                <td class="suriyani-example example-word">ܦܝܼࡥ̱ܸܐ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">പ്പ (പ് + പ)</td>
                                <td class="suriyani-letter">ܦ̱</td>
                                <td class="malayalam-example example-word">അപ്പം</td>
                                <td class="suriyani-example example-word">ܐܲܦ̱ܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ബ്ബ (ബ് + ബ)</td>
                                <td class="suriyani-letter">ܒ̱</td>
                                <td class="malayalam-example example-word">റബ്ബർ</td>
                                <td class="suriyani-example example-word">ܪܲܒ̱ܪ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">മ്മ (മ് + മ)</td>
                                <td class="suriyani-letter">ܡ̱</td>
                                <td class="malayalam-example example-word">അമ്മ</td>
                                <td class="suriyani-example example-word">ܐܲܡ̱ܲܐ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">യ്യ (യ് + യ)</td>
                                <td class="suriyani-letter">ܝ̱</td>
                                <td class="malayalam-example example-word">അയ്യപ്പൻ</td>
                                <td class="suriyani-example example-word">ܐܲܝ̱ܲܦ̱ܲܢ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ല്ല (ല് + ല)</td>
                                <td class="suriyani-letter">ܠ̱</td>
                                <td class="malayalam-example example-word">നല്ല</td>
                                <td class="suriyani-example example-word">ࡥܲܠ̱ܲܐ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">വ്വ (വ് + വ)</td>
                                <td class="suriyani-letter">ܒ݂̱</td>
                                <td class="malayalam-example example-word">സർവ്വം</td>
                                <td class="suriyani-example example-word">ܣܲࡧܒ݂̱ܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ശ്ശ (ശ് + ശ)</td>
                                <td class="suriyani-letter">ܫ̱</td>
                                <td class="malayalam-example example-word">നിശ്ശബ്ദം</td>
                                <td class="suriyani-example example-word">ࡥܝܼܫ̱ܲܒܕܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">സ്സ (സ് + സ)</td>
                                <td class="suriyani-letter">ܣ̱</td>
                                <td class="malayalam-example example-word">നിസ്സാരം</td>
                                <td class="suriyani-example example-word">ࡥܝܼܣ̱ܵࡧܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ള്ള (ള് + ള)</td>
                                <td class="suriyani-letter">ࡨ̱</td>
                                <td class="malayalam-example example-word">വെള്ളം</td>
                                <td class="suriyani-example example-word">ܒ݂ܸࡨ̱ܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">റ്റ (റ് + റ)</td>
                                <td class="suriyani-letter">ܪ̱</td>
                                <td class="malayalam-example example-word">കാറ്റ്</td>
                                <td class="suriyani-example example-word">ܟܵܪ̱</td>
                            </tr>
                            <!-- Heterogeneous compound letters -->
                            <tr>
                                <td colspan="4" class="table-section">Heterogeneous Compound Letters (വർഗേതര കൂട്ടക്ഷരങ്ങൾ)</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ങ്ക (ങ് + ക)</td>
                                <td class="suriyani-letter">ࡠܟ‍</td>
                                <td class="malayalam-example example-word">തിങ്കൾ</td>
                                <td class="suriyani-example example-word">ܬܝܼࡠܟܲࡨ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഗ്ന (ഗ് + ന)</td>
                                <td class="suriyani-letter">ܓࡥ</td>
                                <td class="malayalam-example example-word">അഗ്നി</td>
                                <td class="suriyani-example example-word">ܐܲܓࡥܝܼ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഗ്മ (ഗ് + മ)</td>
                                <td class="suriyani-letter">ܓܡ</td>
                                <td class="malayalam-example example-word">യുഗ്മം</td>
                                <td class="suriyani-example example-word">ܝܘܼܓܡܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഞ്ച (ഞ് + ച)</td>
                                <td class="suriyani-letter">ࡢܫ݁</td>
                                <td class="malayalam-example example-word">അഞ്ചു</td>
                                <td class="suriyani-example example-word">ܐܲࡢܫ݁ܘܼ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഞ്ജ (ഞ് + ജ)</td>
                                <td class="suriyani-letter">ࡢࡡ</td>
                                <td class="malayalam-example example-word">അഞ്ജലി</td>
                                <td class="suriyani-example example-word">ܐܲࡢࡡܲܠܝܼ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ണ്മ (ണ് + മ)</td>
                                <td class="suriyani-letter">ࡤܡ</td>
                                <td class="malayalam-example example-word">മണ്മറഞ്ഞു</td>
                                <td class="suriyani-example example-word">ܡܲࡤܡܲܪܲࡢ̱ܘܼ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ണ്ട (ണ് + ട)</td>
                                <td class="suriyani-letter">ࡤࡣ</td>
                                <td class="malayalam-example example-word">വണ്ടി</td>
                                <td class="suriyani-example example-word">ܒ݂ܲࡤࡣܝܼ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ണ്ഡ (ണ് + ഡ)</td>
                                <td class="suriyani-letter">ࡤܖ</td>
                                <td class="malayalam-example example-word">പാണ്ഡവർ</td>
                                <td class="suriyani-example example-word">ܦܵࡤܖܲܒ݂ܲࡧ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ന്മ (ന് + മ)</td>
                                <td class="suriyani-letter">ࡥܡ</td>
                                <td class="malayalam-example example-word">നന്മ</td>
                                <td class="suriyani-example example-word">ࡥܲࡥܡܲܐ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ന്ത (ന് + ത)</td>
                                <td class="suriyani-letter">ࡥܬ</td>
                                <td class="malayalam-example example-word">സന്തോഷം</td>
                                <td class="suriyani-example example-word">ܣܲࡥܬܘܿࡪܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ന്ദ (ന് + ദ)</td>
                                <td class="suriyani-letter">ࡥܕ</td>
                                <td class="malayalam-example example-word">നന്ദി</td>
                                <td class="suriyani-example example-word">ࡥܲࡥܕܝܼ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ത്മ (ത് + മ)</td>
                                <td class="suriyani-letter">ܬܡ</td>
                                <td class="malayalam-example example-word">ആത്മാവ്</td>
                                <td class="suriyani-example example-word">ܐܵܬܡܵܒ݂</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">മ്പ (മ് + പ)</td>
                                <td class="suriyani-letter">ܡܦ</td>
                                <td class="malayalam-example example-word">തമ്പുരാൻ</td>
                                <td class="suriyani-example example-word">ܬܲܡܦܘܼࡧܵܢ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഹ്ന (ഹ് + ന)</td>
                                <td class="suriyani-letter">ܗࡥ</td>
                                <td class="malayalam-example example-word">ചിഹ്നം</td>
                                <td class="suriyani-example example-word">ܫ݁ܝܼܗࡥܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ഹ്മ (ഹ് + മ)</td>
                                <td class="suriyani-letter">ܗܡ</td>
                                <td class="malayalam-example example-word">ബ്രഹ്മം</td>
                                <td class="suriyani-example example-word">ܒࡧܲܗܡܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ക്ഷ (ക് + ഷ)</td>
                                <td class="suriyani-letter">ܟࡪ</td>
                                <td class="malayalam-example example-word">അക്ഷരം</td>
                                <td class="suriyani-example example-word">ܐܲܟࡪܲࡧܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ജ്ഞ (ജ് + ഞ)</td>
                                <td class="suriyani-letter">ࡡࡢ</td>
                                <td class="malayalam-example example-word">ജ്ഞാനം</td>
                                <td class="suriyani-example example-word">ࡡࡢܵࡥܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ശ്ച (ശ് + ച)</td>
                                <td class="suriyani-letter">ܫܫ݁</td>
                                <td class="malayalam-example example-word">നിശ്ചയം</td>
                                <td class="suriyani-example example-word">ࡥܝܼܫܫ݁ܲܝܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ത്ഥ (ത് + ഥ)</td>
                                <td class="suriyani-letter">ܬܛ</td>
                                <td class="malayalam-example example-word">അർത്ഥം</td>
                                <td class="suriyani-example example-word">ܐܲࡧܬܛܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ത്ഭ (ത് + ഭ)</td>
                                <td class="suriyani-letter">ܬࡦ</td>
                                <td class="malayalam-example example-word">ഉത്ഭവം</td>
                                <td class="suriyani-example example-word">ܐܘܼܬࡦܲܒ݂ܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ത്സ (ത് + സ)</td>
                                <td class="suriyani-letter">ܬܣ</td>
                                <td class="malayalam-example example-word">ഉത്സവം</td>
                                <td class="suriyani-example example-word">ܐܘܼܬܣܲܒ݂ܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">സ്ഥ (സ് + ഥ)</td>
                                <td class="suriyani-letter">ܣܛ</td>
                                <td class="malayalam-example example-word">സ്ഥാനം</td>
                                <td class="suriyani-example example-word">ܣܛܵࡥܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">സ്റ്റ (സ് + റ് + റ)</td>
                                <td class="suriyani-letter">ܣܪ̱</td>
                                <td class="malayalam-example example-word">സ്റ്റേഷൻ</td>
                                <td class="suriyani-example example-word">ܣܪ̱ܹࡪܲܢ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ന്റ (ന് + റ)</td>
                                <td class="suriyani-letter">ܢܪ̱</td>
                                <td class="malayalam-example example-word">അവന്റെ</td>
                                <td class="suriyani-example example-word">ܐܲܒ݂ܲܢܪ̱ܸܐ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ന്റെ (ന് + റ + െ)</td>
                                <td class="suriyani-letter">ܢܪ̱ܸ</td>
                                <td class="malayalam-example example-word">എന്റെ</td>
                                <td class="suriyani-example example-word">ܐܸܢܪ̱ܸܐ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ന്ധ (ന് + ധ)</td>
                                <td class="suriyani-letter">ࡥܕ̃</td>
                                <td class="malayalam-example example-word">ബന്ധം</td>
                                <td class="suriyani-example example-word">ܒܲࡥܕ̃ܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ദ്ധ (ദ് + ധ)</td>
                                <td class="suriyani-letter">ܕ̃</td>
                                <td class="malayalam-example example-word">ബുദ്ധി</td>
                                <td class="suriyani-example example-word">ܒܘܼܕ̃ܝܼ</td>
                            </tr>
                            
                            <!-- Symbol compound letters -->
                            <tr>
                                <td colspan="4" class="table-section">Symbol Compound Letters (ചിഹ്നാദി കൂട്ടക്ഷരങ്ങൾ)</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">കൃ (ക് + ൃ)</td>
                                <td class="suriyani-letter">ܟܪ</td>
                                <td class="malayalam-example example-word">കൃഷി</td>
                                <td class="suriyani-example example-word">ܟܪࡪܝܼ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ക്സ (ക് + സ)</td>
                                <td class="suriyani-letter">ܟܣ</td>
                                <td class="malayalam-example example-word">ടാക്സി</td>
                                <td class="suriyani-example example-word">ࡣܵܟܣܝܼ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ക്ര (ക് + ര)</td>
                                <td class="suriyani-letter">ܟࡧ ܟܪ</td>
                                <td class="malayalam-example example-word">ക്രമം</td>
                                <td class="suriyani-example example-word">ܟࡧܲܡܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">സ്മ (സ് + മ)</td>
                                <td class="suriyani-letter">ܣܡ</td>
                                <td class="malayalam-example example-word">സ്മരണ</td>
                                <td class="suriyani-example example-word">ܣܡܲࡧܲࡤܲܐ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ക്ല (ക് + ല)</td>
                                <td class="suriyani-letter">ܟܠ ܟࡨ</td>
                                <td class="malayalam-example example-word">ക്ലേശം</td>
                                <td class="suriyani-example example-word">ܟܠܹܫܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ക്യ (ക് + യ)</td>
                                <td class="suriyani-letter">ܟܝ</td>
                                <td class="malayalam-example example-word">വാക്യം</td>
                                <td class="suriyani-example example-word">ܒ݂ܵܟܝܲܡ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">സ്ക (സ് + ക)</td>
                                <td class="suriyani-letter">ܣܟ</td>
                                <td class="malayalam-example example-word">സ്കൂൾ</td>
                                <td class="suriyani-example example-word">ܣܟܘܼࡨ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">ക്വ (ക് + വ)</td>
                                <td class="suriyani-letter">ܟܒ݂</td>
                                <td class="malayalam-example example-word">ക്വാർട്ടർ</td>
                                <td class="suriyani-example example-word">ܟܒ݂ܵࡧࡣ̱ࡧ</td>
                            </tr>
                            <tr>
                                <td class="malayalam-letter">സ്പ (സ് + പ)</td>
                                <td class="suriyani-letter">ܣܦ</td>
                                <td class="malayalam-example example-word">സ്പർശം</td>
                                <td class="suriyani-example example-word">ܣܦࡧܫܲܡ</td>
                            </tr>
                        </tbody>
                    </table></div>

                </div>
            </section>
            
            <section class="article-section">
                <h2 class="section-title">Historical Context</h2>
                <div class="section-content">
                    <p>Suriyani Malayalam was used in liturgy and literature among Saint Thomas Christians in Kerala-a bridge between Syriac church tradition and local Malayalam. Many manuscripts and printed works in the script survive in archives and private collections.</p>
                </div>
            </section>
            
            <section class="article-section">
                <h2 class="section-title">References</h2>
                <div class="section-content">
                    <ul>
                        <li>Perczel, István. "GARSHUNI MALAYALAM: A WITNESS TO AN EARLY STAGE OF INDIAN CHRISTIAN LITERATURE" Hugoye: Journal of Syriac Studies, vol. 17, no. 1, 2015, pp. 263-324. <a href="https://doi.org/10.31826/hug-2015-170115" target="_blank">https://doi.org/10.31826/hug-2015-170115</a></li>
                        <li>Kathanar, Koonammakkal Thoma. "An Introduction to Malayalam Karshon". The Harp (Volume 15), edited by Geevarghese Panicker, Rev. Jacob Thekeparampil and Abraham Kalakudi, Piscataway, NJ, USA: Gorgias Press, 2011, pp. 99-106. <a href="https://doi.org/10.31826/9781463233037-010" target="_blank">https://doi.org/10.31826/9781463233037-010</a></li>
                    </ul>
                </div>
            </section>
            
            

            <a href="/articles/" class="back-to-home">Back to Articles</a>`;

const styles = `
        .article-header {
            margin-bottom: 2rem;
            text-align: center;
            border-bottom: 1px solid rgba(138, 60, 60, 0.14);
            padding-bottom: 1.5rem;
        }

        .title-container {
            margin-bottom: 0.75rem;
        }

        .english-title {
            font-size: clamp(1.35rem, 3.6vw, 2.1rem);
            line-height: 1.3;
            color: var(--primary-color);
            margin: 0;
            text-wrap: balance;
        }

        .subtitle-container {
            margin: 0.85rem auto 0;
            max-width: 40rem;
        }

        .subtitle {
            font-size: 0.95rem;
            line-height: 1.65;
            color: #4a4540;
            margin: 0;
        }

        .article-meta {
            margin-top: 0.85rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.35rem 1.25rem;
            font-size: 0.9rem;
            color: #6b6460;
        }

        .article-meta span {
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
        }

        .article-meta i {
            color: var(--tertiary-color);
        }

        .article-section {
            margin: 2rem 0;
        }

        .section-title {
            color: var(--primary-color);
            margin: 0 0 0.85rem;
            font-size: clamp(1.25rem, 3vw, 1.55rem);
            line-height: 1.3;
            padding-bottom: 0.4rem;
            border-bottom: 1px solid rgba(212, 164, 69, 0.45);
        }

        .section-content {
            font-size: 0.875rem;
            line-height: 1.75;
            color: #2a2622;
        }

        .section-content > p {
            margin: 0 0 1rem;
            max-width: 42rem;
        }

        .section-content a {
            color: var(--primary-color);
            font-weight: 600;
            text-decoration-thickness: 1px;
            text-underline-offset: 2px;
        }

        .note-callout {
            background: rgba(138, 60, 60, 0.06);
            border-left: 3px solid var(--secondary-color);
            border-radius: 0 0.4rem 0.4rem 0;
            padding: 0.85rem 1rem;
            margin: 1rem 0 1.35rem;
            max-width: 42rem;
        }

        .note-callout p {
            margin: 0;
            font-size: 0.95rem;
            line-height: 1.6;
            color: #4a4540;
        }

        figure {
            margin: 1.5rem auto;
            text-align: center;
        }

        figure img {
            max-width: min(160px, 45%);
            height: auto;
            border-radius: 0.4rem;
            box-shadow: 0 8px 24px rgba(43, 38, 32, 0.12);
            border: none;
        }

        figure figcaption {
            margin-top: 0.65rem;
            font-size: 0.875rem;
            color: #6b6460;
            font-style: italic;
        }

        .table-wrap {
            margin: 1.25rem 0 0.5rem;
        }

        .correspondence-table {
            width: 100%;
            border-collapse: collapse;
            margin: 0;
            table-layout: fixed;
        }

        .correspondence-table th {
            background: rgba(138, 60, 60, 0.06);
            color: var(--primary-color);
            font-family: var(--font-sans), system-ui, sans-serif;
            font-size: 0.8rem;
            font-weight: 600;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            padding: 0.65rem 0.5rem;
            text-align: center;
            border-bottom: 1px solid rgba(138, 60, 60, 0.15);
        }

        .correspondence-table td {
            padding: 0.65rem 0.45rem;
            text-align: center;
            vertical-align: middle;
            border-bottom: 1px solid rgba(43, 38, 32, 0.08);
            word-break: break-word;
            overflow-wrap: anywhere;
            white-space: normal;
        }

        .correspondence-table tbody tr:nth-child(even):not(:has(.table-section)) {
            background: rgba(248, 245, 240, 0.55);
        }

        .table-section {
            background: rgba(138, 60, 60, 0.08) !important;
            color: var(--primary-color);
            font-family: var(--font-sans), system-ui, sans-serif;
            font-weight: 600;
            font-size: 0.9rem;
            letter-spacing: 0.01em;
            text-align: center;
            padding: 0.7rem 0.5rem !important;
        }

        .malayalam-letter,
        .malayalam-example {
            font-family: var(--font-malayalam), "Noto Sans Malayalam", sans-serif;
        }

        .malayalam-letter {
            font-size: 0.95rem;
            line-height: 1.4;
            font-weight: 600;
        }

        .malayalam-example {
            font-size: 0.85rem;
            line-height: 1.45;
        }

        .article-content .suriyani-letter,
        .article-content .suriyani-example,
        .suriyani-letter,
        .suriyani-example {
            font-family: "East Syriac Malankara", "East Syriac Adiabene", "Karshon", serif !important;
            direction: rtl;
            unicode-bidi: isolate;
            font-size: 1.65rem !important;
            line-height: 2.1;
            font-feature-settings: "liga" 1, "clig" 1, "calt" 1, "ccmp" 1, "locl" 1, "mark" 1, "mkmk" 1;
            -webkit-font-feature-settings: "liga" 1, "clig" 1, "calt" 1, "ccmp" 1, "locl" 1, "mark" 1, "mkmk" 1;
            letter-spacing: 0;
        }

        .article-content .suriyani-letter,
        .suriyani-letter {
            font-size: 1.9rem !important;
        }

        .section-content ul {
            margin: 0.5rem 0 0;
            padding-left: 1.2rem;
            max-width: 42rem;
        }

        .section-content li {
            margin-bottom: 0.75rem;
            line-height: 1.65;
        }

        .back-to-home {
            display: none;
        }

        @media (max-width: 720px) {
            .table-wrap {
                margin-top: 1rem;
            }

            .correspondence-table,
            .correspondence-table thead,
            .correspondence-table tbody,
            .correspondence-table th,
            .correspondence-table td,
            .correspondence-table tr {
                display: block;
                width: 100%;
            }

            .correspondence-table {
                table-layout: auto;
                border: none;
            }

            .correspondence-table thead {
                display: none;
            }

            .correspondence-table tr:not(:has(.table-section)) {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 0.35rem 0.75rem;
                align-items: center;
                margin: 0 0 0.75rem;
                padding: 0.85rem 0.9rem;
                border: 1px solid rgba(138, 60, 60, 0.12);
                border-radius: 0.45rem;
                background: #fffefb;
                box-shadow: 0 4px 14px rgba(43, 38, 32, 0.04);
            }

            .correspondence-table tr:has(.table-section) {
                display: block;
                margin: 1.1rem 0 0.65rem;
                padding: 0;
                border: none;
                box-shadow: none;
                background: transparent;
            }

            .correspondence-table td {
                border: none;
                padding: 0.2rem;
            }

            .malayalam-letter {
                font-size: 1rem;
                padding-bottom: 0.35rem;
                border-bottom: 1px solid rgba(43, 38, 32, 0.06);
            }

            .article-content .suriyani-letter,
            .suriyani-letter {
                font-size: 1.85rem !important;
                padding-bottom: 0.35rem;
                border-bottom: 1px solid rgba(43, 38, 32, 0.06);
            }

            .malayalam-example {
                font-size: 0.88rem;
                color: #4a4540;
            }

            .article-content .suriyani-example,
            .suriyani-example {
                font-size: 1.55rem !important;
                line-height: 2.1;
                color: #4a4540;
            }

            .table-section {
                border-radius: 0.35rem;
                padding: 0.55rem 0.75rem !important;
            }

            .article-meta {
                flex-direction: column;
                gap: 0.25rem;
            }
        }

        @media (min-width: 721px) {
            .correspondence-table th:nth-child(1),
            .correspondence-table td.malayalam-letter {
                width: 18%;
            }
            .correspondence-table th:nth-child(2),
            .correspondence-table td.suriyani-letter {
                width: 22%;
            }
            .correspondence-table th:nth-child(3),
            .correspondence-table td.malayalam-example {
                width: 28%;
            }
            .correspondence-table th:nth-child(4),
            .correspondence-table td.suriyani-example {
                width: 32%;
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
