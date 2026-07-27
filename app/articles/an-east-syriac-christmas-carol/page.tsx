import type { Metadata } from "next";
import { ArticleShell } from "@/components/article-shell";
import { getArticle } from "@/lib/articles";

const slug = "an-east-syriac-christmas-carol";
const meta = getArticle(slug) ?? {
  slug,
  title: "An East Syriac Christmas Carol",
  description: "A parallel text presentation of the East Syriac Christmas Carol (Brik Hannana) in Syriac, Malayalam, and English.",
  author: "Hendo Academy",
  date: "",
  excerpt: "A parallel text presentation of the East Syriac Christmas Carol (Brik Hannana) in Syriac, Malayalam, and English.",
  listed: false,
  hasComments: true,
};

export const metadata: Metadata = {
  title: "An East Syriac Christmas Carol",
  description: "A parallel text presentation of the East Syriac Christmas Carol (Brik Hannana) in Syriac, Malayalam, and English.",
  openGraph: {
    type: "article",
    url: `https://www.hendoacademy.org/articles/${slug}`,
    title: "An East Syriac Christmas Carol",
    description: "A parallel text presentation of the East Syriac Christmas Carol (Brik Hannana) in Syriac, Malayalam, and English.",
    images: ["/assets/images/logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "An East Syriac Christmas Carol",
    description: "A parallel text presentation of the East Syriac Christmas Carol (Brik Hannana) in Syriac, Malayalam, and English.",
    images: ["/assets/images/logo.jpg"],
  },
  alternates: {
    canonical: `https://www.hendoacademy.org/articles/${slug}`,
  },
};

const html = `<header class="article-header">
                <div class="title-container">
                    <h1 class="english-title">An East Syriac Christmas Carol</h1>
                </div>
                <div class="article-meta">
                    <span>Binu George</span>
                    <span>May 2, 2025</span>
                </div>
                <div class="subtitle-container">
                    <p class="subtitle primary-subtitle">Hymn of Praise for Suḅara and Yalda, composed by Mar Babai the
                        Great</p>
                </div>
            </header>

            <div class="parallel-text">
                <div class="verse-group">
                    <div class="verse">
                        <div class="verse-text syriac-header">
                            <p class="column-title">ܒܪܝܼـܟ݂ ܚܲܢܵܢܵܐ</p>
                            <p class="column-subtitle">ܬܸܫܒܘܿܚܬܵܐ ܕܣܘܼܒܵܪܵܐ ܘܲܕܼܝܲܠܕܵܐ ܣܝܵܡܵܐ ܕܡܵܪܝ ܒܵܒܲܝ ܪܲܒܵܐ</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text malayalam-header">
                            <p class="column-title">ബ്രീക് ഹന്നാനാ</p>
                            <p class="column-subtitle">മാർ ബാബായ് റമ്പാ ചിട്ടപ്പെടുത്തിയ സൂവാറയുടേയും യൽദായുടേയും
                                തെശ്ബൊഹ്ത്താ </p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text english-text">
                            <p class="column-title">Brik Hannana</p>
                            <p class="column-subtitle">Hymn of Praise for Suḅara and Yalda, composed by Mar Babai the
                                Great</p>
                        </div>
                    </div>
                </div>

                <div class="verse-group">
                    <div class="verse">
                        <div class="verse-text syriac-text">
                            <p>ܒܪܝܼـܟ݂ ܚܲܢܵܢܵܐ ܕܲܒ݂ܛܲܝܒܘܼܬܹܗ؛</p>
                            <p>ܦܲܪܢܸܣ ܚܲܝܲܝ̈ܢ ܒܲܢܒ݂ܝܼܘܼܬ݂ܵܐ܀</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text malayalam-text">
                            <p>ബ്രീക് ഹന്നാനാ ദവ്തയ്ബൂസേ;</p>
                            <p>പറ്നെസ് ഹയ്യയ്ൻ ബന്‌വീയൂസാ</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text english-text">
                            <p>Blessed is the Compassionate One who in</p>
                            <p>His grace has provided our life with prophecy.</p>
                        </div>
                    </div>
                </div>

                <div class="verse-group">
                    <div class="verse">
                        <div class="verse-text syriac-text">
                            <p>ܒܥܲܝܢܵܐ ܕܪܘܼܚܵܐ ܚܙܵܐ ܐܹܫܲܥܝܵܐ؛</p>
                            <p>ܠܝܲܠܕܵܐ ܬܡܝܼܗܵܐ ܕܲܒ݂ܬܼܘܼܠܘܼܬ݂ܵܐ܀</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text malayalam-text">
                            <p>ബ്അയ്&zwnj;നാ ദ്റൂഹാ ഹ്സാ ഏശായാ;</p>
                            <p>ല്‌യൽദാ ത്മീഹാ ദവ്സൂലൂസാ</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text english-text">
                            <p>With the eye of the spirit did Isaiah see<span class="bible-ref">Is 7:14</span></p>
                            <p>the wondrous Child of virginity:</p>
                        </div>
                    </div>
                </div>

                <div class="verse-group">
                    <div class="verse">
                        <div class="verse-text syriac-text">
                            <p>ܕܠܵܐ ܙܘܼܘܵܓ݂ܵܐ ܝܸܠܕܲܬ̤ ܡܲܪܝܲܡ؛</p>
                            <p>ܠܥܲܡܵܢܘܼܐܹܝܠ ܒܪܵܐ ܕܐܲܠܵܗܵܐ܀</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text malayalam-text">
                            <p>ദ്&zwnj;ലാ സൂവാഗാ യെൽദസ് മർയം;</p>
                            <p>ല്അമ്മാനുഏൽ ബ്റാ ദാലാഹാ</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text english-text">
                            <p>without intercourse did Mary give birth</p>
                            <p>to Emmanuel, the Son of God,<span class="bible-ref">Mt 1:23</span></p>
                        </div>
                    </div>
                </div>

                <div class="verse-group">
                    <div class="verse">
                        <div class="verse-text syriac-text">
                            <p>ܕܡܸܢܵܗ̇ ܓܲܒ݂ܠܹܗ ܪܘܼܚܵܐ ܕܩܘܼܕܫܵܐ؛</p>
                            <p>ܠܦܲܓ݂ܪܵܐ ܡܚܲܝܕܵܐ ܐܲܟ݂ܡܵܐ ܕܲܟ݂ܬ݂ܝܼܒ݂܀</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text malayalam-text">
                            <p>ദ്മെന്നാ ഗവ്‌ലേ റൂഹാ ദ്&zwnj;കു&zwnj;ദ്&zwnj;ശാ;</p>
                            <p>ല്‌പഗ്റാ മ്ഹയ്&zwnj;ദാ അക്&zwnj;മാ ദക്&zwnj;സീ&zwnj;വ് </p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text english-text">
                            <p>for from her the Holy Spirit fashioned</p>
                            <p>His body that was united (with Him), as it is written,</p>
                        </div>
                    </div>
                </div>

                <div class="verse-group">
                    <div class="verse">
                        <div class="verse-text syriac-text">
                            <p>ܕܢܸܗܘܸܐ ܥܘܼܡܪܵܐ ܘܗܲܝܟ̇ܠܵܐ ܣܓ݂ܝܼܕܵܐ؛</p>
                            <p>ܠܨܸܡܚܹܗ ܕܐܲܒ݂ܵܐ ܒܲܚܕ݂ܵܐ ܒܪܘܼܬ݂ܵܐ܀</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text malayalam-text">
                            <p>ദ്നെഹ്‌വേ ഉമ്റാ ഉഹയ്ക്‌ലാ സ്&zwnj;ഗീദാ;</p>
                            <p>ല്സെമ്ഹേ ദാവാ ബഹ്ദാ ബ്റൂസാ</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text english-text">
                            <p>to be an abode and temple that is worshipped<span class="bible-ref">cp Jn 2:19</span></p>
                            <p>for the Radiance of the Father in a single Sonship;<span class="bible-ref">Heb 1:3</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="verse-group">
                    <div class="verse">
                        <div class="verse-text syriac-text">
                            <p>ܘܥܲܡ ܫܘܼܪܵܝܵܐ ܕܒܲܛܢܹܗ ܬܗܝܼܪܵܐ؛</p>
                            <p>ܚܲܝܕܹܗ ܥܲܡܹܗ ܒܚܲܕ݂ ܐܝܼܩܵܪܵܐ܀</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text malayalam-text">
                            <p>ഉഅം ശൂറായാ ദ്ബത്‌‌നേ ത്ഹീറാ;</p>
                            <p>ഹായ്ദേ അമ്മേ ബ്ഹദ് ഈക്കാറാ</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text english-text">
                            <p>and at the very beginning of His wonderful conception</p>
                            <p>He united it with Himself with a single honour,</p>
                        </div>
                    </div>
                </div>

                <div class="verse-group">
                    <div class="verse">
                        <div class="verse-text syriac-text">
                            <p>ܕܲܢܡܲܠܸܐ ܒܹܗ ܟܠܗܹܝܢ ܕܝܼܠܹܗ؛</p>
                            <p>ܠܦܘܼܪܩܵܢ ܓܵܘܵܐ ܐܲܝܟ݂ ܕܲܫܦܲܪ ܠܹܗ܀</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text malayalam-text">
                            <p>ദന്‌മല്ലേ ബേ കൊല്ഹേൻ ദീലേ;</p>
                            <p>ല്‌പുർഖാൻ ഗാവാ അക് ദശ്&zwnj;പർ ലേ</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text english-text">
                            <p>so that in it He might fulfil all things that belong to it</p>
                            <p>for the common salvation, just as it pleased Him.</p>
                        </div>
                    </div>
                </div>

                <div class="verse-group">
                    <div class="verse">
                        <div class="verse-text syriac-text">
                            <p>ܒܝܘܿܡ ܣܘܼܒܵܪܹܗ <span class="text-red">(ܐܵܘ ܡܵܘܠܵܕܹܗ)</span> ܫܲܒܚܘܼܗܝ ܥܝܼـܪܹ̈؛</p>
                            <p>ܒܗܘܼܠܵܠܲܝ̈ܗܘܿܢ ܒܪܵܘܡܵܐ ܕܲܠܥܸܠ</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text malayalam-text">
                            <p>ബ്‌യോം മൗലാദേ ശബ്ഹൂയ് ഈറേ;</p>
                            <p>ബ്‌ഹൂലാലയ്ഹോൻ ബ്റവ്മാ ദല്ഏൽ</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text english-text">
                            <p>On the day of His Nativity <span class="text-red">[or: Annunciation]</span> the Watchers
                                praised Him</p>
                            <p>with their halleluiahs in the height above;<span class="bible-ref">Lk 2:13-14</span></p>
                        </div>
                    </div>
                </div>

                <div class="verse-group">
                    <div class="verse">
                        <div class="verse-text syriac-text">
                            <p>ܘܐܵܦ ܐܲܪ̈ܥܵܢܹܐ ܩܲܪܸܒ݂ܘ ܣܸܓ݂ܕܬܵܐ؛</p>
                            <p>ܒܩܘܼܪ̈ܒܵܢܲܝܗܘܿܢ ܒܚܲܕ݂ ܐܝܼܩܵܪܵܐ܀</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text malayalam-text">
                            <p>ഉആപ് അർആനേ കാറേവ് സെഗ്&zwnj;താ ;</p>
                            <p>ബ്&zwnj;കുർബാനയ്ഹോൻ ബ്ഹദ് ഈക്കാറാ</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text english-text">
                            <p>beings on earth, too, offered worship</p>
                            <p>with their gifts in a single (act of) honour:<span class="bible-ref">Mt 1:11</span></p>
                        </div>
                    </div>
                </div>

                <div class="verse-group">
                    <div class="verse">
                        <div class="verse-text syriac-text">
                            <p>ܚܲܕ݂ܘܼ ܡܫܝܼܚܵܐ ܒܪܵܐ ܕܐܲܠܵܗܵܐ؛</p>
                            <p>ܣܓ݂ܝܼܕ݂ ܡ̣ܢ ܟܠܵܐ ܒܲܬ݂ܪܹܝܢ ܟܝܵـܢ̈ܝܼܢ܀</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text malayalam-text">
                            <p>ഹാദൂ മ്ശീഹാ ബ്റാ ദാലാഹാ;</p>
                            <p>സ്&zwnj;ഗിദ് മിൻ കൊല്ലാ ബസ്റേൻ ക്യാനീൻ</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text english-text">
                            <p>One is Christ, the Son of God,</p>
                            <p>worshipped by all in two natures,</p>
                        </div>
                    </div>
                </div>

                <div class="verse-group">
                    <div class="verse">
                        <div class="verse-text syriac-text">
                            <p>ܒܐܲܠܵܗܘܼܬܹܗ ܝܼܠܝܼܕ݂ ܡ̣ܢ ܐܲܒ݂ܵܐ؛</p>
                            <p>ܕܠܵܐ ܫܘܼܪܵܝܵܐ ܠܥܸܠ ܡ̣ܢ ܙܲܒ݂ܢܹ̈ܐ܀</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text malayalam-text">
                            <p>ബാലാഹൂസേ ഈലിദ് മിൻ ആവാ;</p>
                            <p>ദ്&zwnj;ലാ ശൂറായാ ല്എൽ മിൻ സവ്നേ</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text english-text">
                            <p>for in His divinity He is born from the Father,</p>
                            <p>without beginning, beyond (all) times,</p>
                        </div>
                    </div>
                </div>

                <div class="verse-group">
                    <div class="verse">
                        <div class="verse-text syriac-text">
                            <p>ܘܲܒ݂ܐ݇ܢܵܫܘܼܬܹܗ ܝܼܠܝܼܕ݂ ܡ̣ܢ ܡܲܪܝܲܡ؛</p>
                            <p>ܒܫܘܼܠܵܡ ܙܲܒ݂ܢܹ̈ܐ ܒܦܲܓ݂ܪܵܐ ܡܚܲܝܕܵܐ܀</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text malayalam-text">
                            <p>വവ്നാശൂസേ ഈലിദ് മിൻ മർയം;</p>
                            <p>ബ് ശൂലാം സവ്നേ ബ്&zwnj;പഗ്റാ മ്ഹയ്ദാ</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text english-text">
                            <p>and in His humanity He is born from Mary</p>
                            <p>at the end of times in a body that is united (with Him).</p>
                        </div>
                    </div>
                </div>

                <div class="verse-group">
                    <div class="verse">
                        <div class="verse-text syriac-text">
                            <p>ܠܵܐ ܐܲܠܵܗܘܼܬܹܗ ܡ̣ܢ ܟܝܵܢ ܐܸܡܵܐ؛</p>
                            <p>ܘܠܵܐ ܐ݇ܢܵܫܘܼܬܹܗ ܡ̣ܢ ܟܝܵܢ ܐܲܒ݂ܵܐ܀</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text malayalam-text">
                            <p>ലാ ആലാഹൂസേ മിൻ ക്യാൻ എമ്മാ;</p>
                            <p>ഉലാ നാശൂസേ മിൻ ക്യാൻ ആവാ</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text english-text">
                            <p>His divinity is not from the nature of the mother,</p>
                            <p>and His humanity is not from the nature of the Father:</p>
                        </div>
                    </div>
                </div>

                <div class="verse-group">
                    <div class="verse">
                        <div class="verse-text syriac-text">
                            <p>ܢܛܝܼܪ̈ܝܼܢ ܟܝܵـܢܹ̈ܐ ܒܲܩܢܘܿܡܲܝ̈ܗܘܿܢ؛</p>
                            <p>ܒܚܲܕ݂ ܦܲܪܨܘܿܦܵܐ ܕܲܚܕ݂ܵܐ ܒܪܘܼܬ݂ܵܐ܀</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text malayalam-text">
                            <p>ന്‌തീറീൻ ക്യാനേ ബക്നോമയ്ഹോൻ;</p>
                            <p>ബ്ഹദ് പർസോപ്പാ ദഹ്ദാ ബ്റൂസാ</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text english-text">
                            <p>the natures are preserved with their <span class="italic-term">qnome</span></p>
                            <p>in a single <span class="italic-term">prosopon</span> of the single Sonship.</p>
                        </div>
                    </div>
                </div>

                <div class="verse-group">
                    <div class="verse">
                        <div class="verse-text syriac-text">
                            <p>ܘܐܲܝܟܲܢ ܕܐܝܼܬܹܝܗ̇ ܐܲܠܵܗܘܼܬ݂ܵܐ؛</p>
                            <p>ܬܠܵܬ݂ܵܐ ܩܢܘܿܡܹ̈ܐ ܚܕ݂ܵܐ ܐܝܼܬ݂ܘܼܬ݂ܵܐ܀</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text malayalam-text">
                            <p>വയ്‌കൻ ദീസേ ആലാഹൂസാ;</p>
                            <p>ത്‌ലാസാ ക്നോമേ ഹ്ദാ ഈസൂസാ</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text english-text">
                            <p>And just as the Divinity is</p>
                            <p>three <span class="italic-term">qnome</span> but one Essence,</p>
                        </div>
                    </div>
                </div>

                <div class="verse-group">
                    <div class="verse">
                        <div class="verse-text syriac-text">
                            <p>ܗܵܟܲܢ ܐܝܼܬܹܝܗ̇ ܒܪܘܼܬܹܗ ܕܲܒ݂ܪܵܐ؛</p>
                            <p>ܒܲܬ݂ܪܹܝܢ ܟܝܵـܢ̈ܝܼܢ ܚܲܕ݂ ܦܲܪܨܘܿܦܵܐ܀</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text malayalam-text">
                            <p>ഹാകൻ ഈസേ ബ്റൂസേ ദവ്റാ;</p>
                            <p>ബസ്റേൻ ക്യാനീൻ ഹദ് പർസോപ്പാ</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text english-text">
                            <p>so the Sonship of the Son is,</p>
                            <p>in two natures, a single <span class="italic-term">prosopon</span>.</p>
                        </div>
                    </div>
                </div>

                <div class="verse-group">
                    <div class="verse">
                        <div class="verse-text syriac-text">
                            <p>ܗܵܟܲܢ ܝܸܠܦܲܬ̤ ܥܹܕܲܬ݂ ܩܘܼܕ݂ܫܵܐ؛</p>
                            <p>ܕܬ݂ܵܘܕܹ ܒܲܒ݂ܪܵܐ ܕܗ̤ܘܝܘܼ ܡܫܝܼܚܵܐ܀</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text malayalam-text">
                            <p>ഹാകൻ യെൽപസ് ഏദസ് കുദ്&zwnj;ശാ;</p>
                            <p>ദ്&zwnj;സാവ്ദേ ബവ്റാ ദ്ഹൂയൂ മ്ശീഹാ</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text english-text">
                            <p>Thus has the holy Church learnt</p>
                            <p>to confess the Son who is Christ.</p>
                        </div>
                    </div>
                </div>

                <div class="verse-group">
                    <div class="verse">
                        <div class="verse-text syriac-text">
                            <p>ܣܵܓ݂ܕܝܼܢܲܢ ܡܵܪܝ ܠܐܲܠܵܗܘܼܬ݂ܵܟ݂؛</p>
                            <p>ܘܲܠܐ݇ܢܵܫܘܼܬ݂ܵܟ݂ ܕܠܵܐ ܦܘܼܠܵܓ݂ܵܐ <span class="text-red">(ܬܢܝܼ ܓ ܙܲܒܼܢ̈ܝܼܢ)</span>܀</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text malayalam-text">
                            <p>സാഗ്‌ദീനൻ മാർ ലാലാഹൂസാക്;</p>
                            <p>വല് നാശൂസാക് ദ്‌ലാ പൂലാഗാ <span class="text-red">(മൂന്നു തവണ)</span></p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text english-text">
                            <p>We worship Your divinity, Lord,</p>
                            <p>and Your humanity, without division <span class="text-red">(three times)</span>:</p>
                        </div>
                    </div>
                </div>

                <div class="verse-group">
                    <div class="verse">
                        <div class="verse-text syriac-text">
                            <p>ܚܲܕ݂ܘܼ ܚܲܝܠܵܐ ܚܕ݂ܵܐ ܡܵܪܘܼܬ݂ܵܐ؛</p>
                            <p>ܚܲܕ݂ ܨܸܒܼܝܵـܢܵܐ ܚܲܕ݂ܵܐ ܬܸܫܒܘܿܚܬܵܐ܀</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text malayalam-text">
                            <p>ഹാദൂ ഹയ്‌ലാ ഹ്ദാ മാറൂസാ;</p>
                            <p>ഹദ് സെവ്‌യാനാ ഹ്ദാ തെശ്ബൊഹ്ത്താ</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text english-text">
                            <p>one is the Power, one is the Lordship,</p>
                            <p>one is the Will, one is the Glory,</p>
                        </div>
                    </div>
                </div>

                <div class="verse-group">
                    <div class="verse">
                        <div class="verse-text syriac-text">
                            <p>ܠܐܲܒܼܵܐ ܘܲܒܼܪܵܐ ܘܪܘܼܚܵܐ ܕܩܘܼܕܫܵܐ؛</p>
                            <p>ܠܥܵܠܲܡ ܥܵܠܡܝܼܢ ܐܵܡܹܝܢ ܘܐܵܡܹܝܢ܀</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text malayalam-text">
                            <p>ലാവാ വവ്റാ ഉറൂഹാ ദ്&zwnj;കുദ്‌ശാ;</p>
                            <p>ല്ആലം ആൽമീൻ ആമ്മേൻ വാമ്മേൻ</p>
                        </div>
                    </div>
                    <div class="verse">
                        <div class="verse-text english-text">
                            <p>to the Father and Son and Holy Spirit,</p>
                            <p>for eternal ages, amen and amen.</p>
                        </div>
                    </div>
                </div>
            </div>

            <section class="article-section">
                <h2 class="section-title">References</h2>
                <div class="section-content">
                    <ul style="list-style-type: none; padding-left: 0;">
                        <li style="margin-bottom: 1rem;">Text from the Hudra of the Church of the East (ed. Darmo), Vol
                            I, p. 118 (1st Sunday of Suḅara)</li>
                        <li style="margin-bottom: 1rem;">Transliterated by Binu George, with inputs from Josekutty
                            Abraham</li>
                        <li style="margin-bottom: 1rem;">English translation provided by Sebastian P. Brock in "Some
                            Early Witnesses to the East Syriac Liturgical Tradition." Journal of Assyrian Academic
                            Studies 18, no. 1 (2004), 30.</li>
                    </ul>
                </div>
            </section>

            

            <a href="/articles" class="back-to-home">
                Back to Articles
            </a>`;

const styles = `
        .back-to-home { display: none !important; }

        

        

        

        

        

        /* Navbar Styles */
        

        

        

        

        

        

        

        

        

        /* Article Styles */


        .article-header {
            padding: 0 0 1.5rem;
            margin-bottom: 2rem;
            text-align: center;
            border-bottom: 1px solid rgba(138, 60, 60, 0.12);
        }

        .title-container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            margin-bottom: 20px;
        }

        .subtitle-container {
            margin: 1.5rem auto;
            max-width: 800px;
        }

        .subtitle {
            font-size: 0.95rem;
            color: var(--text-color);
            margin: 0 auto 0.8rem;
            line-height: 1.6;
        }

        .primary-subtitle {
            font-weight: 600;
        }

        .attribution-subtitle {
            font-style: italic;
            font-size: 1.1rem;
            color: #555;
        }

        .syriac-title {
            font-family: 'Karshon', serif;
            direction: rtl;
            font-size: 3.5rem;
            color: var(--primary-color);
        }

        .article-meta {
            margin: 1rem 0;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            font-size: 0.95rem;
            color: #666;
        }

        .article-meta span {
            display: flex;
            align-items: center;
        }

        .article-meta i {
            margin-right: 0.5rem;
            color: var(--tertiary-color);
        }

        /* Parallel Text Styles */
        .parallel-text {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin: 2rem 0;
            padding: 0 1rem;
            max-width: 1200px;
            margin: 2rem auto;
        }

        .verse-group {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
            padding: 0.5rem;
            border: 1px solid #e0e0e0;
            border-radius: 4px;
            background-color: #fff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
            transition: all 0.2s ease;
        }

        .verse-group:hover {
            background-color: #f8f8f8;
            transform: translateY(-1px);
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .verse {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            padding: 0.25rem;
            border-radius: 4px;
            transition: all 0.2s ease;
            min-height: 100px;
        }

        .verse:hover {
            background-color: #f0f0f0;
        }

        .verse-text {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            /* align-items: center; */
            min-height: 80px;
        }

        .syriac-text {
            font-family: 'Karshon', serif;
            direction: rtl;
            font-size: 1.6rem;
            line-height: 1.4;
            padding: 0.5rem 0;
        }

        .syriac-text p {
            margin: 0;
            padding: 0;
        }

        .malayalam-text {
            font-family: 'Noto Sans Malayalam', sans-serif;
            font-size: 1rem;
            line-height: 1.8;
            padding: 0.5rem 0;
            text-align: center;
            justify-content: center;
        }

        .malayalam-text p {
            margin: 0;
            padding: 0;
        }

        .english-text {
            font-family: 'Noto Sans', sans-serif;
            font-size: 1rem;
            line-height: 1.5;
            padding: 0.5rem 0;
            margin: 0;
        }

        .english-title {
            font-family: 'Noto Sans', sans-serif;
        }

        .bible-ref {
            color: #ff0000;
            font-size: 0.8rem;
            margin-left: 0.5rem;
            font-style: italic;
        }

        .syriac-red {
            color: #ff0000;
            font-size: inherit;
            display: inline;
            margin: 0;
            padding: 0;
        }

        .text-red {
            color: #ff0000;
            font-size: inherit;
            display: inline;
            margin: 0;
            padding: 0;
        }

        .verse-line {
            margin-bottom: 0.5rem;
        }

        .italic-term {
            font-style: italic;
        }

        /* Footer Styles */
        

        

        .footer-section h3 {
            color: var(--secondary-color);
            margin-bottom: 1rem;
        }

        .footer-section p {
            margin-bottom: 0.5rem;
        }

        

        

        

        /* Responsive Styles */
        @media (max-width: 768px) {
            

            

            

            

            

            .parallel-text {
                padding: 0 0.5rem;
            }

            .verse-group {
                grid-template-columns: 1fr;
                gap: 0.25rem;
                padding: 0.5rem;
            }

            .verse {
                min-height: auto;
                padding: 0.25rem;
            }

            .verse-text {
                min-height: auto;
            }

            

            
        }

        @media (max-width: 480px) {
            

            

            

            

            .syriac-title {
                font-size: 2.5rem;
            }

            .article-header {
            padding: 2rem 1rem;
        }

            .article-meta {
                flex-direction: column;
                gap: 0.5rem;
            }
        }

        .syriac-text .bible-ref {
            color: #ff0000;
        }

        .column-header {
            text-align: left;
            margin-bottom: 0.5rem;
            padding: 0.25rem;
            border: 1px solid #e0e0e0;
            border-radius: 4px;
            background-color: #fff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
            min-height: 100px;
        }

        .column-title {
            font-size: 1.2em;
            font-weight: normal;
            margin-bottom: 0.25rem;
            color: #ff0000;
        }

        .malayalam-header .column-title,
        .english-text .column-title {
            font-weight: bold;
        }

        .column-subtitle {
            font-size: 0.85em;
            color: #ff0000;
            font-style: normal;
        }

        .syriac-header {
            font-family: 'Karshon', serif;
            direction: rtl;
            font-size: 1.6rem;
            line-height: 1.4;
        }

        .malayalam-header {
            font-family: 'Noto Sans Malayalam', sans-serif;
            font-size: 0.85rem;
            font-weight: 500;
            line-height: 1.8;
            text-align: center;
        }

        .back-to-home {
            display: inline-block;
            margin-top: 2rem;
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 600;
            padding: 0.5rem 1rem;
            border: 1px solid var(--primary-color);
            border-radius: 4px;
            transition: all 0.3s ease;
        }

        .back-to-home:hover {
            background-color: var(--primary-color);
            color: white;
        }

        .back-to-home i {
            margin-right: 0.5rem;
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
