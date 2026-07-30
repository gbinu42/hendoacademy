import type { Metadata } from "next";
import { ArticleShell } from "@/components/article-shell";
import { getArticle } from "@/lib/articles";

const slug = "vaikom-kadavan-orshlem-pally-syriac-inscription";
const img =
  "/articles/images/vaikom-kadavan-orshlem-pally-syriac-inscription";

const meta = getArticle(slug) ?? {
  slug,
  title: "Vaikom Kadavan Orshlem Pally Syriac Inscription",
  description:
    "A study of the hundred-year-old East Syriac inscription at Vaikom Kadavan Orshlem Pally, with transliteration, translation, and historical context of Syriac inscriptions in India.",
  author: "Josekutty Abraham",
  date: "",
  excerpt:
    "The East Syriac foundation inscription at Vaikom Kadavan Orshlem Pally (1917) is a rare narrative epigraph from a remote Kerala parish.",
  listed: true,
  hasComments: true,
};

export const metadata: Metadata = {
  title: "Vaikom Kadavan Orshlem Pally Syriac Inscription",
  description: meta.description,
  keywords: [
    "Vaikom Kadavan Orshlem Pally",
    "Kadavan Pally",
    "Orshlem",
    "Syriac inscription",
    "East Syriac inscription",
    "Syriac epigraphy",
    "Josekutty Abraham",
    "Syro-Malabar",
    "Ernakulam",
    "Mar Louis Pazheparambil",
    "The Harp",
    "SEERI",
    "St. Thomas Christians",
    "Hendo Academy",
  ],
  authors: [{ name: "Josekutty Abraham" }],
  creator: "Hendo Academy",
  publisher: "Hendo Academy",
  category: "Syriac Epigraphy",
  openGraph: {
    type: "article",
    url: `https://www.hendoacademy.org/articles/${slug}`,
    title: "Vaikom Kadavan Orshlem Pally Syriac Inscription",
    description: meta.description,
    siteName: "Hendo Academy",
    locale: "en_IN",
    images: [
      {
        url: `https://www.hendoacademy.org${img}/kadavan-pally.jpg`,
        alt: "Kadavan Orshlem Pally, Vaikom",
        width: 856,
        height: 667,
      },
    ],
    authors: ["Josekutty Abraham"],
    section: "Articles",
    tags: [
      "Syriac inscription",
      "East Syriac",
      "Kadavan Pally",
      "Orshlem",
      "Vaikom",
      "Syro-Malabar",
      "epigraphy",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaikom Kadavan Orshlem Pally Syriac Inscription",
    description: meta.description,
    images: [`https://www.hendoacademy.org${img}/kadavan-pally.jpg`],
  },
  alternates: {
    canonical: `https://www.hendoacademy.org/articles/${slug}`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

function fn(n: number) {
  return `<sup id="fnref${n}" class="fn-ref"><a href="#fn${n}">${n}</a></sup>`;
}

const html = `
<header class="article-header">
  <h1 class="article-title">Vaikom Kadavan Orshlem Pally Syriac Inscription</h1>
  <div class="article-meta">
    <span>Josekutty Abraham</span>
  </div>
</header>

<div class="article-body">
  <div class="article-image-container">
    <img src="${img}/kadavan-pally.jpg" alt="Kadavan Pally" class="article-image" />
    <div class="article-image-caption">Kadavan Pally${fn(1)}</div>
  </div>

  <div class="article-section">
    <h3 class="article-section-title">The Syriac Church in India and Her Inscriptions in a nutshell.</h3>
    <p>
      The Syriac Church in India holds a legacy of two thousand years. Syriac scholars like Koonammakkal Thomakathanar claim a first-century Aramaic connection in its linguistic roots, and a later Syriac tradition from Edessa${fn(2)}. Yet documental evidence begins only at the start of the 14<sup>th</sup> century, while the oldest Syriac inscription dates from the second half of the 16th century, during the Portuguese period. The oldest Syriac documental evidence from Kerala is Vatican Codex 22, dated 1301 and written by a fourteen-year-old deacon, Zacharias son of Joseph, at Kodungalloor${fn(3)}. This colophon is also the oldest Syriac document from India. The oldest Syriac inscription stands at the entrance of Mulanthuruthy St. Thomas Church and is dated 1574. The second oldest is the bell inscription at Kuravilangad Marth Mariam Church, dated 1584. Both show clear Latin influence. The Mulanthuruthy inscription was carved at a later date, since the calendar used is Gregorian${fn(4)}. The Gregorian calendar was used neither in Kerala nor anywhere in the world in 1575. The content of the bell inscription at Kuravilangadu is likewise much influenced by Latin theology. Thus neither these church structures nor their artifacts go beyond the 16<sup>th</sup> century. This points to a harmonious relationship with the Portuguese missionaries before the Synod of Diamper${fn(5)}.
    </p>
    <p>
      From the 3<sup>rd</sup> century onwards, Christian migration from Sassanian Persia to South India took place in connection with trade and commerce, filling the vacuum left by the decline of Roman trade through Alexandria${fn(6)}. Even before that, there is a strong probability that merchants from Edessa carried the St. Thomas stories from South India, along with those of North West India, to Edessa${fn(7)}. The author of the Acts of Judas Thomas mingled these stories according to his imagination and with a mission${fn(8)}. Thus the St. Thomas tradition in India became well known in the East and, through it, in the West${fn(9)}. The new Sassanian emperor, King Ardashir I, who overthrew the Parthian Empire in 224 AD, promoted the existing sea trade with India by building new ports and renovating those already there${fn(10)}. Fourth-century religious persecution under Shapur II further accelerated this migration. In this way the Syriac tradition entered South India at a very early stage of Eastern Oriental Christianity.
    </p>
    <p>
      The Persian Church of the Fars Archdiocese, centered on Rew Ardashir${fn(11)}, stood closer to India. This Church remained separated from the Catholicate of Seleucia-Ctesiphon from around the first quarter of the fifth century until the end of the 8<sup>th</sup> century. Under Bishop Mana in 420 AD, the Persian Church translated the Syriac Bible, the Peshitta, into Persian Pahlavi and used it in the liturgy${fn(12)}. The Indian Church was under this Fars metropolitan from A.D. 554 to 790${fn(13)}. At its peak in the 7<sup>th</sup> century, there were eighteen suffragan dioceses under the metropolitan of Fars, and the Indian Church was one among them${fn(14)}. That the Indian Church was under the metropolitan of Fars in this period is clear from the letter sent by the Seleucia-Ctesiphon Catholicos Ishoyab III (649-659) to Simon, Metropolitan of Fars${fn(15)}. In the report of Cosmas Indicopleustes from the first half of the 6<sup>th</sup> century A.D., the church in Malankara and in different parts of the Indian subcontinent is clearly mentioned. All are related to the Persian Church in various ways. The Persian Pahlavi inscribed crosses found across the subcontinent are remnants of that ancient relationship with the Church of Persia${fn(16)}. During the reign of Patriarch Timothy I (780-823), at the end of the 8<sup>th</sup> century, the Persian Church came again under the jurisdiction of the Church of the East${fn(17)}, and the Indian Church became a metropolitan church directly under the Catholicos of Seleucia-Ctesiphon${fn(18)}. Classical Syriac thus regained prominence throughout the Church of the East, from Persia to China, including India.
    </p>
    <p>
      The first documental evidence of Syriac from India appears during the reign of the famous Mongolian Patriarch Yahbalaha III (1283-1317) in the Mongol era (1206-1367). This is the colophon mentioned above, popularly known as Vatican Codex 22${fn(19)}. Unfortunately, inscriptional evidence appears only from the second half of the 16th century, and with clear Latin influence. Evidence of Syriac literature from India is dated to the 17th century: the poetical works of the famous Syriac poet Kadavil Chandi Kathanar of Kaduthuruthy${fn(20)}. These works were also much Latinized, probably through the influence of his teacher Francis Roz during his priestly formation at Vypinkotta Seminary${fn(21)}. Kadavil Chandi Kathanar was also one of the four advisors of the Archdeacon after the Sleeva Oath of 1653. In 1665 the Antiochian Church arrived with West Syriac, and later the &lsquo;Puthenkoor&rsquo; fraction came into being${fn(22)}. In the first half of the 18th century the &lsquo;Puthenkoor&rsquo; fraction showed proximity to East Syrian tradition because of the presence of the Chaldean bishop Mar Gabriel, the counterpart of Mathoma IV${fn(23)}. This is evident from the Syriac letter sent by Marthomma IV from Kandanadu Church in 1709, seeking bishops and scholars from the West Syrian Patriarch to fight against the Nestorian Mar Gabriel${fn(24)}. In 1730 Mar Gabriel died and was buried at Kottayam Cheriya Pally${fn(25)}. In the second half of the eighteenth century the West Syrian connection created problems over the authority of the &lsquo;Puthenkoor&rsquo; fraction${fn(26)}. Once again an East Syriac conscience rose against Antiochinisation and Latin colonization among the leaders of the St. Thomas Christians and the Christians under them${fn(27)}. In the 19th century, protest against Anglicanisation among the &lsquo;Puthenkoor&rsquo; fraction led to the complete acceptance of West Syrian liturgy, and West Syriac became the language of inscription in the &lsquo;Puthenkoor&rsquo; churches under the influence of West Syrian bishops${fn(28)}. As a result the Marthoma Syrian Church evolved after the Mulanthuruthy Synod${fn(29)}. In the old East Syrian fraction &lsquo;Pazhayakoor&rsquo;, the arrival of Mar Thoma Roccos and Mar Elias Mellus from the Chaldean Catholic Patriarch without the approval of Rome created problems and led to two factions. The minority under Mar Abdisho Thondanattu, who joined the Assyrian Church and later came under Mar Abimalek Thimotheos, became the present-day East Syrian Chaldean Church of Thrissur${fn(30)}. The majority, under the Catholic Syrian hierarchy from 1896 onwards - first under Latin prelates, then under native bishops - became the present-day Syro-Malabar Church. This was the general background of the Syriac Church in India at the beginning of the 20th century, when East Syriac was the liturgical language of the Syrian Catholics and the Kadavan Pally inscription took place.
    </p>
  </div>

  <div class="article-section">
    <h3 class="article-section-title">History of the Vaikom Kadavan Orshlem Church Inscription</h3>
    <p>
      Kadavan Pally is a small parish of 32 families under the Vaikom forane of the Syro-Malabar Ernakulam-Angamaly Diocese. Located near the eastern shore of Vembanad Lake at Padinjaremury, 1800 meters west of Udayanapuram Temple Junction on the Vaikom-Ernakulam road in Kottayam District, it was founded in 1920. The name of the church is St. Mary&rsquo;s Orshlem Parish Church. It is commonly known as Kadavan Pally because it was built by the Kadavan, or Kallarakkal Kadavil, family.
    </p>
    <p>
      The Vaikom Kallarakkal Kadavil family is an offshoot of the Pallipuram Kallarakkal Kadavil family. Two brothers of the Kallarakkal Kadavil family, Mr. Varkey Ouseph and Mr. Varkey Chacko, migrated from Pallipuram at the end of the 19th century to the eastern side of Vembanad Lake in order to look after the vast property they had gained there.${fn(31)} With the support of other family members, the two brothers and their household built this church so that they need not cross Vembanad Lake during the monsoon to reach the church at Pallipuram. They did so at the request of their younger brother, Fr. Mathai Varkey Kadavil (Mathan Kathanar)${fn(32)}. The church was built between 1917 and 1920 and donated to the Ernakulam Diocese. It became a parish church in 1937. Fr. Mathai Varkey Kadavil, popularly known as the great Mathan Kathanar, was its first parish vicar and continued in that office until his death in 1964.
    </p>
    <p>
      What gives this church its importance in Syrian Church history is its hundred-year-old East Syriac inscription. The Syriac text stands on the front, that is, the left side of the western church wall; the Malayalam inscription appears on the front right. Although the Syriac version is a translation of the Malayalam, it differs in places and is more elaborate than the Malayalam text.
    </p>
  </div>

  <div class="article-section">
    <h3 class="article-section-title">Kadavan Pally Syriac Inscription and Translation</h3>
    <p>
      The Syriac inscription, in East Syriac letters, is on the western wall of the church, north of the Elephant door. Repainting has made the text somewhat difficult to read. The repainting of such valuable epigraphs should always be supervised by a language expert.
    </p>
    <div class="article-image-container">
      <img src="${img}/syriac-inscription.jpg" alt="Syriac inscription at Kadavan Pally" class="article-image" />
      <div class="article-image-caption">Image of the Syriac Inscription</div>
    </div>

    <h4 class="article-subtitle">Syriac Transcription</h4>
    <div class="inscription-block syriac-inscription" dir="rtl" lang="syr">
      <p class="syr-block inscription-syr-line">ܝ܀ ܡ ܀ ܝ</p>
      <p class="syr-block inscription-syr-line">ܠܕܘܼܟ݂ܪܵܢ ܫܲܢ݇ܬܵܐ ܬܪܸܥܣܝܼܪܵܝܬܵܐ ܕܫܘܼܢܵܝ ܓܝܼܘܲܪܓܝܼܣ ܒܲܪ ܓܝܼܘܲܪܓܝܼܣ ܕܡ̣ܢ ܛܘܼܗܡܵܐ ܟܲܢܝܵܐ ܩܲܠܠܲܪܲܩܲܠ ܩܲܕܘܝܼܠ ܒܡܲܦܣܵܢܘܼܬ݂ ܡܵܪܝ ܠܘܝܼܣ ܦܪܹܦܪܲܡܒܝܼܠ ܟܠܹܗ ܐܝܼܩܵܪܵܐ ܐܲܦܸܣܩܘܿܦܵܐ ܕܛܝܼܢܵܐ ܘܩܲܝܘܿܡܵܐ ܫܠܝܼܚܵܝܵܐ ܕܐܸܪܢܵܟܘܼܠܲܡ: ܐܸܬܥܣܝܼܡܲܬ݂ ܡ̣ܢ ܩܲܫܝܼܫܵܐ ܡܝܲܩܪܵܐ ܡܲܬܲܝ ܒܲܪ ܓܝܼܘܲܪܓܝܼܣ ܥܗܝܼܕܵܐ ܟܐܹܦܵܐ ܕܪܹܫ ܒܸܢܝܵܢ ܥܹܕܬܵܐ ܗܵܕܹܐ ܕܲܫܡܹܗ ܐܘܿܪܸܫܠܸܡ ܒܐܸܫܬܬܥܣܲܪ ܒܝܲܪܚ ܬܡܘܼܙ ܒܫܵܥܬ݂ ܐܨ̈ܝܙ ܠܡܵܪܲܢ.</p>
    </div>

    <h4 class="article-subtitle">English Phonetic Transliteration</h4>
    <div class="inscription-block phonetic-inscription">
      <p class="inscription-line inscription-line-center">Īshōʿ . Maryam . Yawsēp</p>
      <p class="inscription-line inscription-phonetic">l-duḵrān šattā trēʿasīrāytā d-šūnāy Gīwargīs bar Gīwargīs d-min ṭūhmā kanyā Qallaraqal Qadwil [Kallarackal Kadavil] b-mapsānūţ Mār Luīs Parēparambīl kollē īqārā appesqōpā d-Ṭīnā w-qayyōmā šlīḥāyā d-Ernākulam: etʿasīmaţ min qaššīšā myaqrā Mattay bar Gīwargīs ʿahīdā kēppā d-rēš benyān ʿēdtā hādē da-šmēh Ōrešlem beštatʿasar b-yarḥ tammūz b-šāʿaţ 1917 l-māran.</p>
    </div>

    <h4 class="article-subtitle">Transliteration</h4>
    <div class="inscription-block">
      <p class="inscription-line inscription-line-center">ISHO * MARIAM * YAWSEP</p>
      <p class="inscription-line">LDUKRAN SHATHTHA THREASEERAITHA D&rsquo;SHOONAI GEERVARGHEESE BAR GEERVARGHESE DMIN THOHMA KNA KALLARAKKAL KADAVIL BMAPSANOOZ MAR LOUIS PAZHEPARAMBIL KOLLE IKKARA APESCOPA DTHINA VUQAIOMA SHLEEHAYA DERNAKULAM. ETHASEEMAZ MIN KASHEESHA MYAKKRA MATHAI BAR GEEVARGHESE AHIDA KEPA DRESH BENYAN EDTHA HADE DASHME ORSHLEM BESHTHASAR BYARH THMOOS BSHATHTHA 1917 L MARAN</p>
    </div>

    <h4 class="article-subtitle">Translation</h4>
    <p class="inscription-heading">Isho * Mariam *Ouseph</p>
    <p>
      In memory of the 12th anniversary of the demise of Geevargeese son of Geevargeese, from the family named Kallarakkal Kadavil, the foundation stone of this church building named Orshlem is laid by the honorable Kasheesha Mathai (Fr. Mathew), son of the aforementioned Geevargeese${fn(33)}, with the permission of the most respectable Mar Louis Pazheparambil, the Bishop of Thina${fn(34)} and Apostolic Prefect of Ernakulam, on the 16th of July in the year of our Lord 1917.
    </p>

    <div class="article-image-container">
      <img src="${img}/malayalam-inscription.jpg" alt="Malayalam inscription at Kadavan Pally" class="article-image" />
      <div class="article-image-caption">Image of the Malayalam Inscription</div>
    </div>

    <h4 class="article-subtitle">Malayalam Transcription</h4>
    <div class="inscription-block malayalam-inscription">
      <p class="inscription-ml-line" lang="ml">കല്ലറയ്ക്കൽ കടവിൽ വർക്കിവർക്കിയെന്ന ആളുടെ നിര്യാണത്തിന്റെ ദ്വാദശപക്ഷസ്മാരകമായി 1917 ജൂലായി 1 ന് എറ. വികാ. അപ്പ്. നി. വ. ദിവ്യശ്രീ പഴെപറമ്പിൽ മാർ ളുയീസുമെത്രാച്ചനവർകളുടെ കല്പന പ്രകാരം കല്ലറയ്ക്കൽ കടവിൽ ബ. വർക്കി മാത്തൻ കത്തനാരാൽ ഈ (ഓർശ്ശെലം) പള്ളിയുടെ ശിലാസ്ഥാപനകർമ്മം നടത്തപ്പെട്ടു</p>
    </div>

    <h4 class="article-subtitle">English Translation of the Malayalam</h4>
    <p>
      As a twelfth memorial of the demise of Mr. Varkey Varkey of Kallarakkal Kadavil, the foundation stone laying ceremony of this (Oreshlem) church was conducted on July 1, 1917, by Rev. Kallarakkal Kadavil Varkey Mathan Kathanar, in accordance with the decree of the Vicar Apostolic of Ernakulam, Most Rev. Bishop Mar Louis Pazheparambil.
    </p>
  </div>

  <div class="article-section">
    <h3 class="article-section-title">Analysis of the Translation of the Syriac Inscription</h3>
    <p>
      The language of the inscription is simple and easy to understand. The content is carefully drafted, and the narrative style is beautiful. The Malpan who designed it may have been a renowned Syriac scholar of that time, connected with the Ernakulam Diocese. It is very rare in Kerala for an East Syriac inscription to narrate even briefly the history of a church&rsquo;s establishment. The narrative style thus makes this inscription unique.
    </p>
    <p>
      By date the Kadavan Pally inscription is twenty years later than the East Syriac inscription at the Ernakulam Bishop House. The two share similarities in content and presentation, especially in the attributes given to Mar Louis Pazheparambil, yet the handwriting is altogether different. The inscription at the Ernakulam Bishop House is shorter than that at Kadavan Pally, but more elegant and stylish. Kadavan church has been under the Ernakulam Diocese from the beginning - it is therefore possible that the same Malpan designed both Syriac inscriptions, that they were written by two Kathanars, and that they were later carved into the respective buildings by the church authorities. It is worth noting that even parish priests laid the foundation stones of churches in 1917 with the permission of their bishops - something quite unlikely today. The Kadavan Pally inscription may have been written by its first parish vicar, Kadavil Mathan Kathanar, who may be called the founder of the church.
    </p>
    <p>
      It is no wonder that East Syriac was used as one of the languages of inscription to narrate the history of a small church in a remote area. Classical Syriac, whether the people understood it or not, held a unique place in their hearts as the sacred language of the Lord Jesus Christ, until the Syriac liturgy was rendered entirely into the vernacular. Both these inscriptions show that the church authorities of that time regarded East Syriac not only as a sacred liturgical language but also as a language of inscription bound up with their identity, a means of sharing history with future generations. Those able to read and understand the inscription may have been few. We may therefore say that the church authorities, whoever they were, chose East Syriac as a language of inscription out of their identity consciousness.
    </p>
    <div class="article-image-container article-image-narrow">
      <img src="${img}/ernakulam-bishop-house-inscription.jpg" alt="Syriac inscription at Ernakulam bishop house, 1897" class="article-image" />
      <div class="article-image-caption">Syriac Inscription at Ernakulam Bishop House in the year 1897</div>
    </div>
  </div>

  <div class="article-section">
    <h3 class="article-section-title">Conclusion</h3>
    <p>
      The Indian Church of the St. Thomas Christians holds a very long Syriac tradition of Edessan Aramaic. Yet its epigraphical evidence begins only in the second half of the sixteenth century. The hundred-year-old Vaikom Kadavan Pally inscription in East Syriac letters is unique in the short history of Syriac inscriptions in India for its remote location, its historical content, and, more importantly, its narrative style. It shows that in the first half of the twentieth century East Syriac reached even remote areas of Kerala as a language of inscription, in addition to its role as the language of liturgy. Though those able to read and understand the Syriac text were few, the church authorities chose East Syriac as one of the languages of the inscription out of their identity consciousness.
    </p>
  </div>

  <p class="article-publication-note">
    Originally published in <em>The Harp</em> (SEERI, Kottayam). Republished here.
  </p>

  <div class="article-author">
    <p>
      Josekutty Abraham<br />
      Hendo Academy<br />
      <a href="mailto:josekuttymf@gmail.com">josekuttymf@gmail.com</a>
    </p>
  </div>

  <div class="article-footnotes">
    <h3 class="footnotes-title">Notes</h3>
    <p id="fn1"><sup>1</sup> Church - Local name for church. Orshlem is the Syriac word of Jerusalem. The church is popularly known as Kadavan or Orshlem Pally. <a href="#fnref1" class="fn-back">↩</a></p>
    <p id="fn2"><sup>2</sup> KOONAMMAKKAL THOMAS, &ldquo;Suryaya Hendwaya&rdquo;, The Harp, Vol. 20, Part 11, SEERI, Kottayam, 2006, P.301-302 <a href="#fnref2" class="fn-back">↩</a></p>
    <p id="fn3"><sup>3</sup> KOKKARAVAYALIL SUNNY(Ed.), The sources of the Syro-Malabar Law by Jacob Kollaparambil, OIRSI, Kottayam, 2015, P.127 - It was a manuscript of the passage from the Epistle of St. Paul to Galatians for reading at Liturgy by the same deacon <a href="#fnref3" class="fn-back">↩</a></p>
    <p id="fn4"><sup>4</sup> 1575 October 9th Sunday is the date of the foundation of the door which is as per Gregorian calendar <a href="#fnref4" class="fn-back">↩</a></p>
    <p id="fn5"><sup>5</sup> Personally visited both the sites and read and verified both inscriptions <a href="#fnref5" class="fn-back">↩</a></p>
    <p id="fn6"><sup>6</sup> PUTHUR BOSCO(Ed.), St. Thomas Christians, Nambudiris, Jews and Sangam Literature, &ldquo; St. Thomas Christians: A Historical Analysis of their origin and Development upto 9th Century AD&rdquo; by Pius Malekandathil, LRC Publications Kochi,2003, P.27-38 <a href="#fnref6" class="fn-back">↩</a></p>
    <p id="fn7"><sup>7</sup> WILLIAM WRIGHT, Apocryphal Acts of the Apostles, Amsterdam Philo press, 1968, P.297-98 - mentions the bones of St. Thomas were transferred from the tomb in India to the west <a href="#fnref7" class="fn-back">↩</a></p>
    <p id="fn8"><sup>8</sup> KOONAMMAKKAL THOMAKATHANAR, The Harp, Vol. 33, P. 103-104 <a href="#fnref8" class="fn-back">↩</a></p>
    <p id="fn9"><sup>9</sup> Eastern Church Fathers both Syriac and Greek along with the Western (Latin) Church Fathers were unanimous in their opinion that St. Thomas preached Gospel in India and Parthia, which is outside the Eastern Roman Empire. <a href="#fnref9" class="fn-back">↩</a></p>
    <p id="fn10"><sup>10</sup> PUTHUR BOSCO(Ed.), St. Thomas Christians, Nambudiris, Jews and Sangam Literature, &ldquo; St. Thomas Christians: A Historical Analysis of their origin and Development upto 9th Century AD&rdquo; by Pius Malekandathil, P.27 <a href="#fnref10" class="fn-back">↩</a></p>
    <p id="fn11"><sup>11</sup> Ibid, 33 <a href="#fnref11" class="fn-back">↩</a></p>
    <p id="fn12"><sup>12</sup> Ibid, 42 <a href="#fnref12" class="fn-back">↩</a></p>
    <p id="fn13"><sup>13</sup> Ibid, 41. So far, there is no evidence that the Syriac Liturgy was changed to Persian Pahlavi <a href="#fnref13" class="fn-back">↩</a></p>
    <p id="fn14"><sup>14</sup> KOKKARAVAYALIL SUNNY(Ed.),The sources of the Syro-Malabar Law by Jacob Kollaparambil,P.112 <a href="#fnref14" class="fn-back">↩</a></p>
    <p id="fn15"><sup>15</sup> Ibid,P.112-113 : The message is that the Indian Church was in darkness along with Persian Church which lost the succession of priesthood from Seleucia-Ctesiphon Catholicos due to the fault of Persian Ecclesial authorities, forefathers of Metropolitan Simon. The interesting thing from this letter is the Southern boundary of the Indian Church is Kollah (distance from Persian boundary is 1200 &lsquo;parasangs&rsquo; i.e. around 6000 kilometers somewhere near to the borders of then southern Lower China located through Sea route) MUNDATAN A.M., History of Christianity in India, Vol.1, Church History Association of India., Bangalore, 2019, P.101 <a href="#fnref15" class="fn-back">↩</a></p>
    <p id="fn16"><sup>16</sup> PUTHUR BOSCO(Ed.), St. Thomas Christians, Nambudiris, Jews and Sangam Literature, &ldquo; St. Thomas Christians: A Historical Analysis of their origin and Development upto 9th Century AD&rdquo; by Pius Malekandathil, P. 37-39 <a href="#fnref16" class="fn-back">↩</a></p>
    <p id="fn17"><sup>17</sup> KOKKARAVAYALIL SUNNY(Ed.),The sources of the Syro-Malabar Law by Jacob Kollaparambil,P.116 <a href="#fnref17" class="fn-back">↩</a></p>
    <p id="fn18"><sup>18</sup> Varthamanapusthakam says - There were two bishoprics one at &lsquo;Socotra&rsquo; and the other at &lsquo;Mahachina&rsquo; under Indian Church: MALIYECKAL JOHN(Ed.), Varthamanapusthakam, OIRSI, Kottayam, 2014, P.333 <a href="#fnref18" class="fn-back">↩</a></p>
    <p id="fn19"><sup>19</sup> KOKKARAVAYALIL SUNNY(Ed.),The sources of the Syro-Malabar Law by Jacob Kollaparambil,P.127- It was brought to Rome from Keralam by the Persian Bishop Mar Joseph Sulakka in 1569 mentions the name of the patriarch Yahbalaha III and the Metropolitan of the Holy See of St. Thomas in India Mar Jacob <a href="#fnref19" class="fn-back">↩</a></p>
    <p id="fn20"><sup>20</sup> ISTVAN PERCZEL, Classical Syriac as a modern Lingua Franca in South India between 1600 and 2006, ARAM 21, P.305-308 <a href="#fnref20" class="fn-back">↩</a></p>
    <p id="fn21"><sup>21</sup> Ibid, 308 <a href="#fnref21" class="fn-back">↩</a></p>
    <p id="fn22"><sup>22</sup> Ibid, 310-311 <a href="#fnref22" class="fn-back">↩</a></p>
    <p id="fn23"><sup>23</sup> STEPHEN NEILL, A History of Christianity in India 1707-1858, Cambridge University Press, London, 2002, P.62. <a href="#fnref23" class="fn-back">↩</a></p>
    <p id="fn24"><sup>24</sup> Ibid <a href="#fnref24" class="fn-back">↩</a></p>
    <p id="fn25"><sup>25</sup> Mar Gabriel&rsquo;s tomb inscription in a log in &lsquo;vattezhuth&rsquo; at Kottayam Cheriya Pally mentions 1730 as date of Death. Stephen Neill mentions 1731 Ref. STEPHEN NEILL, A History of Christianity in India 1707-1858, P.62. <a href="#fnref25" class="fn-back">↩</a></p>
    <p id="fn26"><sup>26</sup> KURIAN THOMAS M(Ed.) Niranam Grandhavary(Mal.), SPCS, Kottayam, 2017, P. 53-56 <a href="#fnref26" class="fn-back">↩</a></p>
    <p id="fn27"><sup>27</sup> Varthamanapusthakam by Fr. Thomas Paremmakkal asserts this fact along with Niranam Grandhavary <a href="#fnref27" class="fn-back">↩</a></p>
    <p id="fn28"><sup>28</sup> ISTVAN PERCZEL, Classical Syriac as a modern Lingua Franca in South India between 1600 and 2006, ARAM 21, P.295-303 <a href="#fnref28" class="fn-back">↩</a></p>
    <p id="fn29"><sup>29</sup> KOODAPPUZHA XAVIER, Bharatha Sabha Charithram(Mal.), OIRSI, Kottayam, 1998, P.806 <a href="#fnref29" class="fn-back">↩</a></p>
    <p id="fn30"><sup>30</sup> ISTVAN PERCZEL, Classical Syriac as a modern Lingua Franca in South India between 1600 and 2006, ARAM 21, ARAM 21.0.2047097, 2009, P.320 <a href="#fnref30" class="fn-back">↩</a></p>
    <p id="fn31"><sup>31</sup> PALLIPURAM KALLARACKAL KADAVIL KUDUMBA YOGAM, Pallipuram Kallrackal Kadavil Kudumbacharithram (Mal.), 2008, P.315 <a href="#fnref31" class="fn-back">↩</a></p>
    <p id="fn32"><sup>32</sup> Ibid, 316 <a href="#fnref32" class="fn-back">↩</a></p>
    <p id="fn33"><sup>33</sup> Father of Fr. Mathai who died in 1905 July 16 <a href="#fnref33" class="fn-back">↩</a></p>
    <p id="fn34"><sup>34</sup> Mar Louis Pazheparambil is the titular bishop of Tymandus, a Catholic diocese in Asia Minor which is now in Southern Turkey. <a href="#fnref34" class="fn-back">↩</a></p>
  </div>
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
      overflow: hidden;
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
    }

    .article-content .article-section > p {
      margin: 0 0 1.15rem;
      line-height: 1.8;
    }

    .article-content .fn-ref {
      font-size: 0.75em;
      line-height: 0;
    }

    .article-content .fn-ref a {
      color: var(--brand);
      text-decoration: none;
      font-weight: 600;
    }

    .article-content .fn-ref a:hover {
      text-decoration: underline;
    }

    .article-content .inscription-block {
      margin: 1rem 0 1.5rem;
      padding: 1.1rem 1.25rem;
      background: rgba(138, 60, 60, 0.05);
      border-left: 3px solid var(--brand-gold);
      border-radius: 0 0.35rem 0.35rem 0;
    }

    .article-content .syriac-inscription {
      border-left: none;
      border-right: 3px solid var(--brand-gold);
      border-radius: 0.35rem 0 0 0.35rem;
      text-align: right;
    }

    .article-content .inscription-syr-line {
      margin: 0 0 0.85rem;
      font-family: "East Syriac Adiabene", "Karshon", serif;
      font-size: 1.75rem;
      line-height: 2.15;
      direction: rtl;
      unicode-bidi: isolate;
      color: #000;
      text-align: justify;
    }

    .article-content .inscription-syr-line:first-child {
      text-align: center;
      font-size: 1.95rem;
      margin-bottom: 1rem;
    }

    .article-content .inscription-syr-line:last-child {
      margin-bottom: 0;
    }

    .article-content .inscription-line {
      margin: 0 0 0.85rem;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 0.92rem;
      line-height: 1.7;
      letter-spacing: 0.02em;
      word-break: break-word;
    }

    .article-content .inscription-line:last-child {
      margin-bottom: 0;
    }

    .article-content .inscription-line-center {
      text-align: center;
      font-weight: 600;
      letter-spacing: 0.04em;
    }

    .article-content .phonetic-inscription .inscription-line {
      font-family: var(--font-serif), "Times New Roman", Times, serif;
      font-size: 1.05rem;
      line-height: 1.85;
      letter-spacing: 0.01em;
      text-align: justify;
    }

    .article-content .phonetic-inscription .inscription-line-center {
      text-align: center;
      margin-bottom: 1rem;
    }

    .article-content .inscription-heading {
      font-weight: 600;
      text-align: center;
      margin-bottom: 0.75rem !important;
    }

    .article-content .malayalam-inscription .inscription-ml-line {
      margin: 0;
      font-family: var(--font-malayalam), "Noto Sans Malayalam", sans-serif;
      font-size: 1.15rem;
      line-height: 1.9;
      text-align: justify;
      color: #000;
    }

    .article-content .article-image-container {
      margin: 1.5rem 0;
      text-align: center;
    }

    .article-content .article-image-narrow {
      max-width: 320px;
      margin-left: auto;
      margin-right: auto;
    }

    .article-content .article-image {
      display: block;
      width: 100%;
      max-width: 100%;
      height: auto;
      margin: 0 auto;
      border-radius: 0.35rem;
      box-shadow: 0 8px 24px rgba(43, 38, 32, 0.1);
    }

    .article-content .article-image-caption {
      margin-top: 0.65rem;
      font-family: var(--font-sans), system-ui, sans-serif;
      font-size: 0.875rem;
      line-height: 1.5;
      color: #6b6460;
      font-style: italic;
    }

    .article-content .article-publication-note {
      font-style: italic;
      color: #6b6460;
      text-align: right;
      margin: 2rem 0 1rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(138, 60, 60, 0.12);
    }

    .article-content .article-author {
      margin-top: 2rem;
      padding: 1.15rem 1.25rem;
      background: rgba(138, 60, 60, 0.05);
      border-left: 3px solid var(--brand);
      font-style: italic;
    }

    .article-content .article-author p {
      margin: 0;
      line-height: 1.55;
    }

    .article-content .article-author a {
      color: var(--brand);
      text-decoration: none;
    }

    .article-content .article-author a:hover {
      text-decoration: underline;
    }

    .article-content .article-footnotes {
      margin-top: 2.5rem;
      padding-top: 1.25rem;
      border-top: 1px solid rgba(138, 60, 60, 0.12);
      font-size: 0.9rem;
      color: #6b6460;
      scroll-margin-top: 5rem;
    }

    .article-content .footnotes-title {
      margin: 0 0 1rem;
      font-size: 1.1rem;
      color: var(--brand);
    }

    .article-content .article-footnotes p {
      margin: 0 0 0.65rem;
      line-height: 1.55;
      scroll-margin-top: 5rem;
    }

    .article-content .fn-back {
      margin-left: 0.25rem;
      color: var(--brand);
      text-decoration: none;
      font-size: 0.85em;
    }

    .article-content .fn-back:hover {
      text-decoration: underline;
    }

    @media (max-width: 720px) {
      .article-content .article-meta {
        flex-direction: column;
        gap: 0.25rem;
      }

      .article-content .article-image-narrow {
        max-width: 100%;
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
