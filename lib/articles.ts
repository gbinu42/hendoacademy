export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  excerpt: string;
  image?: string;
  imageAlt?: string;
  listed: boolean;
  /** Preserve broken "Read more" href from original index when different from slug */
  readMoreHref?: string;
  hasComments?: boolean;
};

export const articles: ArticleMeta[] = [
  {
    slug: "vaikom-kadavan-orshlem-pally-syriac-inscription",
    title: "Vaikom Kadavan Orshlem Pally Syriac Inscription",
    description:
      "A study of the hundred-year-old East Syriac inscription at Vaikom Kadavan Orshlem Pally, with transliteration, translation, and historical context of Syriac inscriptions in India.",
    author: "Josekutty Abraham",
    date: "",
    excerpt:
      "The East Syriac foundation inscription at Vaikom Kadavan Orshlem Pally (1917) is a rare narrative epigraph from a remote Kerala parish. This article presents its transliteration, translation, and place in the history of Syriac inscriptions in India.",
    image:
      "/articles/images/vaikom-kadavan-orshlem-pally-syriac-inscription/kadavan-pally.jpg",
    imageAlt: "Kadavan Orshlem Pally, Vaikom",
    listed: true,
    hasComments: true,
  },
  {
    slug: "peculiarities-of-malabar-pronunciation-of-east-syriac",
    title: "Peculiarities of the Malabar Pronunciation of East Syriac",
    description:
      "Notes on how the East Syrians of Malabar pronounce Classical East Syriac, drawn from Rev. Fr. Thomas Arayathinal's Syriac Grammar - vowel length, doubling, nasal affection of beth/gamal/dalath, and related exceptions.",
    author: "Binu George",
    date: "August 1, 2026",
    excerpt:
      "Work in progress. The East Syrians of Malabar do not always follow Middle Eastern East Syriac pronunciation. These notes, based on Fr. Arayathinal's grammar, collect the main Malabar peculiarities: short vowels where others lengthen, doubling and its exceptions, and the nasal reading of duplicated ܒ ܓ ܕ.",
    listed: true,
    hasComments: true,
  },
  {
    slug: "understanding-the-dots-in-classical-east-syriac-script",
    title: "Understanding the Dots in Classical East Syriac Script",
    description:
      "A guide to East Syriac diacritics (nūqze): vowel points, qushaya and rukkakha, syāmē, and sublinear/supralinear points - how to tell them apart visually and type them correctly.",
    author: "Binu George",
    date: "August 1, 2026",
    excerpt:
      "East Syriac uses a sophisticated system of dots for pronunciation, vocalization, and grammar. This article shows how to distinguish vowel markers, consonant modifiers, and grammatical indicators - in manuscripts, print, and digital fonts - and how to type them on the Syriac Phonetic keyboard.",
    image: "/articles/images/east-syriac-dots/feature.png",
    imageAlt:
      "Understanding the Dots in Classical East Syriac Script - vowel, consonant, and grammatical diacritics",
    listed: true,
    hasComments: true,
  },
  {
    slug: "neo-malayalam-karshon",
    title: "Neo Malayalam Karshon",
    description:
      "Hendo Academy's proposal for writing modern Malayalam in East Syriac script - supplying the letters classical Karshon lacked without asking for new Unicode code points.",
    author: "Binu George",
    date: "July 27, 2026",
    excerpt:
      "Classical Karshon was shaped for an older stage of Malayalam. Neo Malayalam Karshon is our proposal for the missing modern letters - especially Sanskrit loan aspirates and ഡ - built from characters Unicode already provides.",
    image: "/articles/images/neo-malayalam-karshon/title.png",
    imageAlt: "Neo Malayalam Karshon - നിയോ മലയാളം കർശോൻ - ܢܝܼܝܘܿ ܡܲܠܲܝܵࡨܲܡ ܟܲܪܫܘܿܢ",
    listed: true,
    hasComments: true,
  },
  {
    slug: "hendo-academy-launches-kerala's-first-indigenous-east-syriac-and-karshon-unicode-font-east-syriac-malankara",
    title: "East Syriac Malankara: India's First Indigenous Syriac & Karshon Font",
    description:
      "Hendo Academy launches India's first indigenous East Syriac and Karshon Unicode font, preserving the rich Syriac heritage of Saint Thomas Christians.",
    author: "Binu George",
    date: "May 15, 2025",
    excerpt:
      "A historic milestone for preserving Kerala's East Syriac heritage with the first Unicode-compliant font developed by and for the Nasrani community of India. East Syriac Malankara brings Kerala's unique Syriac-Karshon tradition into the digital age, enabling the revival of Karshon writing and preservation of ancient manuscripts.",
    image: "/articles/images/east-syriac-malankara/vedatharkam_classical.jpg",
    imageAlt: "East Syriac Malankara Font Sample",
    listed: true,
    hasComments: true,
  },
  {
    slug: "syriac-phonetic-karshon-keyboard-layout-and-usage",
    title: "Syriac Phonetic - Karshon Keyboard Layout Guide",
    description:
      "Comprehensive guide to the Syriac Phonetic keyboard layout, including key mappings, diacritics, and special characters for typing in Syriac script.",
    author: "Binu George",
    date: "May 1, 2025",
    excerpt:
      "A comprehensive guide to the Syriac Phonetic keyboard layout, including key mappings, diacritics, and special characters for typing in East Syriac and Karshon scripts. This guide covers both Windows and Mac platforms, with detailed explanations of all available characters and their key combinations.",
    image: "/articles/images/karshon-keyboard/windows-unshifted.jpeg",
    imageAlt: "Syriac Phonetic Keyboard Layout preview",
    listed: true,
    hasComments: true,
  },
  {
    slug: "typing-karshon-in-libreoffice-writer-on-macos",
    title: "Typing Karshon in LibreOffice Writer on macOS",
    description:
      "A step-by-step guide to type Karshon (Suriyani Malayalam) in LibreOffice Writer on macOS",
    author: "Binu George",
    date: "April 30, 2025",
    excerpt:
      "A comprehensive guide to setting up and using Karshon (Suriyani Malayalam) typing in LibreOffice Writer on macOS. This step-by-step tutorial covers installation of required components, configuration settings, and troubleshooting tips for typing in Karshon script on Apple computers.",
    image: "/articles/images/karshon-typing-mac/karshon-text.png",
    imageAlt: "Karshon typing on macOS preview",
    listed: true,
    hasComments: true,
  },
  {
    slug: "typing-karshon-in-libreoffice-writer-on-windows",
    title: "Typing Karshon in LibreOffice Writer on Windows",
    description:
      "A step-by-step guide to type Karshon (Suriyani Malayalam) in LibreOffice Writer on Windows",
    author: "Binu George",
    date: "April 30, 2025",
    excerpt:
      "A comprehensive guide to setting up and using Karshon (Suriyani Malayalam) typing in LibreOffice Writer on Windows. This step-by-step tutorial covers installation of required components, configuration settings, and troubleshooting tips for typing in Karshon script.",
    image: "/articles/images/karshon-typing/karshon-typing.gif",
    imageAlt: "Karshon typing preview",
    listed: true,
    readMoreHref: "type-karshon-in-libreoffice-writer-on-windows",
    hasComments: true,
  },
  {
    slug: "suriyani-malayalam-script-correspondence",
    title: "Malayalam - Suriyani Malayalam script correspondence",
    description:
      "Correspondence between Modern Malayalam and Suriyani Malayalam (Karshon / Malayalam Garshuni).",
    author: "Binu George",
    date: "April 25, 2025",
    excerpt:
      "Correspondence between Modern Malayalam and Suriyani Malayalam (Karshon / Malayalam Garshuni).",
    listed: true,
    hasComments: true,
  },
  {
    slug: "parishudhathmave-nee-ezhunnalli-karshon",
    title: "Parishudhathmave nee ezhunnalli - Karshon",
    description:
      "Study 'Parishudhathmave nee ezhunnalli' with parallel Syriac and Malayalam text. An essential resource for understanding Syriac liturgical hymns.",
    author: "Dr. Amel Antony",
    date: "April 24, 2025",
    excerpt:
      'A Karshon (Suriyani Malayalam) rendering of the Malayalam hymn "Parishudhathmave nee ezhunnalli" with parallel text. This Pentecost hymn, written by late Fr. Abel Periyappuram CMI is commonly sung in the Syro Malabar liturgy, presented with the original Malayalam text alongside its Syriac script rendering.',
    listed: true,
    hasComments: true,
  },
  {
    slug: "turgama",
    title: "Turgama d'evangelion",
    description:
      "Study the Turgama d'evangelion with parallel Syriac and Malayalam text. An essential resource for understanding Syriac liturgical hymns.",
    author: "Binu George",
    date: "April 22, 2025",
    excerpt:
      "A Karshon (Suriyani Malayalam) rendering of the Malayalam translation of the Turgama of the Evangelion, as used in the Syro Malabar Qurbana. This article presents the parallel text in both Karshon script and Malayalam, preserving this important liturgical hymn.",
    image: "/articles/images/turgama/gospel-procession.png",
    imageAlt: "Turgama preview",
    listed: true,
    hasComments: true,
  },
  {
    slug: "beth-aprem-nazrani-dayra",
    title: "Beth Aprem Nazrani Dayra",
    description:
      "An exploration of the Dayra tradition among the Saint Thomas Christians of India.",
    author: "Fr. Thomas Koonammakal",
    date: "2007",
    excerpt:
      "An exploration of the Dayra tradition among the Saint Thomas Christians of India. This article examines the unique synthesis of Syriac monastic traditions and Indian cultural expressions in the Nazrani Dayra, highlighting their historical significance and contemporary relevance in preserving the distinctive identity of the Syro Malabar Church.",
    image: "/articles/images/beth-aprem-nazrani-dayra/thomas-koonammakkal.jpg",
    imageAlt: "Beth Aprem preview",
    listed: true,
    hasComments: true,
  },
  {
    slug: "an-east-syriac-christmas-carol",
    title: "An East Syriac Christmas Carol",
    description:
      "A parallel text presentation of the East Syriac Christmas Carol (Brik Hannana) in Syriac, Malayalam, and English.",
    author: "Hendo Academy",
    date: "",
    excerpt:
      "A parallel text presentation of the East Syriac Christmas Carol (Brik Hannana) in Syriac, Malayalam, and English.",
    listed: false,
    hasComments: true,
  },
  {
    slug: "tharisappally-syrian-christian-copper-plates-karshon-transcript",
    title: "Tharisappally Syrian Christian Copper Plates: Karshon Transcript",
    description:
      "A detailed transcript of the Tharisappally Syrian Christian Copper Plates in Karshon script with Malayalam transliteration.",
    author: "Hendo Academy",
    date: "",
    excerpt:
      "A detailed transcript of the Tharisappally Syrian Christian Copper Plates in Karshon script with Malayalam transliteration.",
    listed: false,
    hasComments: true,
  },
  {
    slug: "type-east-syriac-in-windows",
    title: "Type East Syriac in Windows",
    description: "Type East Syriac in Windows.",
    author: "Hendo Academy",
    date: "",
    excerpt: "Type East Syriac in Windows.",
    listed: false,
    hasComments: false,
  },
];

export function getListedArticles() {
  return articles.filter((a) => a.listed);
}

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
