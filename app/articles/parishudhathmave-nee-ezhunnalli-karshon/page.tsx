import type { Metadata } from "next";
import { ArticleShell } from "@/components/article-shell";
import { getArticle } from "@/lib/articles";

const slug = "parishudhathmave-nee-ezhunnalli-karshon";
const meta = getArticle(slug) ?? {
  slug,
  title: "Parishudhathmave nee ezhunnalli - Karshon",
  description: "Study 'Parishudhathmave nee ezhunnalli' with parallel Syriac and Malayalam text. An essential resource for understanding Syriac liturgy and Nasrani heritage.",
  author: "Hendo Academy",
  date: "",
  excerpt: "Study 'Parishudhathmave nee ezhunnalli' with parallel Syriac and Malayalam text. An essential resource for understanding Syriac liturgy and Nasrani heritage.",
  listed: false,
  hasComments: true,
};

export const metadata: Metadata = {
  title: "Parishudhathmave nee ezhunnalli - Karshon",
  description: "Study 'Parishudhathmave nee ezhunnalli' with parallel Syriac and Malayalam text. An essential resource for understanding Syriac liturgy and Nasrani heritage.",
  openGraph: {
    type: "article",
    url: `https://www.hendoacademy.org/articles/${slug}`,
    title: "Parishudhathmave nee ezhunnalli - Karshon",
    description: "Study 'Parishudhathmave nee ezhunnalli' with parallel Syriac and Malayalam text. An essential resource for understanding Syriac liturgy and Nasrani heritage.",
    images: ["/assets/images/logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parishudhathmave nee ezhunnalli - Karshon",
    description: "Study 'Parishudhathmave nee ezhunnalli' with parallel Syriac and Malayalam text. An essential resource for understanding Syriac liturgy and Nasrani heritage.",
    images: ["/assets/images/logo.jpg"],
  },
  alternates: {
    canonical: `https://www.hendoacademy.org/articles/${slug}`,
  },
};

const html = `<header class="article-header">
                <div class="title-container">
                    <h1 class="english-title">Parishudhathmave nee ezhunnalli</h1>
                </div>
                <div class="article-meta">
                    <span>Dr. Amel Antony</span>
                    <span>April 24, 2025</span>
                </div>
                <div class="subtitle-container">
                    <p class="subtitle primary-subtitle">A Karshon (Suriyani Malayalam) rendering of the Malayalam hymn
                        "Parishudhathmave nee ezhunnalli" with parallel text.</p>
                    <p class="subtitle attribution-subtitle">This Pentecost hymn, written by late Fr. Abel Periyappuram
                        CMI and commonly sung in the Syro Malabar liturgy, is presented here with the original Malayalam
                        text alongside its Syriac script rendering.</p>
                </div>
            </header>

            <!-- Author image with caption -->
            <div class="author-image-container">
                <img src="/articles/images/parishudhathmave-nee-ezhunnalli-karshon/fr-abel.png" alt="Fr. Abel Periyappuram CMI"
                    class="author-image">
                <p class="author-caption">Fr. Abel Periyappuram CMI (1920-2001), renowned Syro-Malabar priest, poet and
                    hymnographer who composed over 300 devotional hymns including "Parishudhathmave nee ezhunnalli"</p>
            </div>

            <div class="font-selector">
                <label for="syriac-font">Select Karshon Font:</label>
                <select id="syriac-font" >
                    <option value="East Syriac Malankara">East Syriac Malankara</option>
                    <option value="East Syriac Malankara Classical">East Syriac Malankara Classical</option>
                    <option value="East Syriac Adiabene">East Syriac Adiabene</option>
                </select>
            </div>

            <!-- First verse -->
            <div class="parallel-text">
                <div class="syriac-text">
                    ܦܲࡧܝܼܫܘܼܕܬ̄ܵܐܬܡܵܒ݂ܹܐ ࡥܝܼ ܐܸࡩܘܼࡥ̱ܲࡨ̱ܝܼ ܒ݂ܲࡧܲࡤܲܡܹܐ ܐܸܢܪ̱ܸܐ ܗܪܕܲܝܲܬ̱ܝܼܠ܀
                </div>
                <div class="malayalam-text">
                    <p>പരിശുദ്ധാത്മാവേ നീയെഴുന്നള്ളി<br>
                        വരണമേ എന്റെ ഹൃദയത്തില്‍</p>
                </div>
            </div>

            <!-- Second verse -->
            <div class="parallel-text">
                <div class="syriac-text">
                    ܕܝܼܒ݂ܝܲܕܵܢܲࡠ̱ܲࡨ ܫ݁ܝܼࡥܬܝܼ ܐܸܢ̱ܘܼࡨ̱ܝܼܠ ܕܲܝܒ݂ܲܣܢܹܗܲܡ ࡥܝܼܪܲܝܟ̱ܲࡤܹܐ܀
                </div>
                <div class="malayalam-text">
                    <p>ദിവ്യദാനങ്ങള്‍ ചിന്തിയെന്നുള്ളില്‍<br>
                        ദൈവസ്നേഹം നിറയ്‌ക്കണേ</p>
                </div>
            </div>

            <!-- Third verse -->
            <div class="parallel-text">
                <div class="syriac-text">
                    ܣܒ݂ܲܪܓܲܒ݂ܵܬܝܼܠ ܬܘܼܪܲࡥ̱ܘܼ ࡦܘܼܡܝܼܝܼܠ ࡥܝܼܪܓܲࡨܝܼܟ̱ܘܼܡ ܦܪܲܟܵܫܲܡܹܐ܀
                </div>
                <div class="malayalam-text">
                    <p>സ്വര്‍ഗ്ഗ വാതില്‍ തുറന്നു ഭൂമിയില്‍<br>
                        നിര്‍ഗ്ഗളീക്കും പ്രകാശമേ</p>
                </div>
            </div>

            <!-- Fourth verse -->
            <div class="parallel-text">
                <div class="syriac-text">
                    ܐܲࡥܬ̄ܲܟܵࡧܲܐܒ݂ܝܼࡧܝܼܦ̱ܘܼ ܡܵܪ̱ܝܼࡣܘܼܡ ܫ݁ܲࡥܬܲܡܹܪܘܼࡥ̱ܲܐ ܕܝܼܦܲܡܹܐ܀
                </div>
                <div class="malayalam-text">
                    <p>അന്ധകാര വിരിപ്പു മാറ്റിടും<br>
                        ചന്തമേറുന്ന ദീപമേ</p>
                </div>
            </div>

            <!-- Fifth verse -->
            <div class="parallel-text">
                <div class="syriac-text">
                    ܟܹࡩܘܼܡܵܬܡܵܒ݂ܝܼܠ ܐܵܫܲܒ݂ܝܼܫܘܼࡥ̱ܲܐ ܡܘܿܗܲܢܲܐ ܕܝܼܒ݂ܝܲܐ ܓܵܢܲܡܹܐ܀
                </div>
                <div class="malayalam-text">
                    <p>കേഴുമാത്മാവിൽ ആശവീശുന്ന<br>
                        മോഹന ദിവ്യഗാനമേ</p>
                </div>
            </div>

            <!-- Sixth verse -->
            <div class="parallel-text">
                <div class="syriac-text">
                    ܒ݂ܝܼࡤࡣܘܼࡤܲࡠ̱ܝܼܒ݂ܲࡧܲࡤࡣܲܐ ܡܵܢܲܣܲܡ ܟܲࡤࡣܲܐ ܒ݂ܝܼࡤ̱ܝܼܢ ܬܲࡣܵـܟܲܡܹܐ܀
                </div>
                <div class="malayalam-text">
                    <p>വിണ്ടുണങ്ങിവരണ്ട മാനസം<br>
                        കണ്ട വിണ്ണിന്‍ തടാകമേ</p>
                </div>
            </div>

            <!-- Seventh verse -->
            <div class="parallel-text">
                <div class="syriac-text">
                    ܡܲࡥܕܲܡܵܝ ܒ݂ܲࡥ̱ܘܼ ܒ݂ܝܼܫܝܼ ܐܵܢܲࡥܕܲܡ ܬܲࡥ̱ܲܐ ܦܘܿܢ̱ܝܼࡨܲܡ ܬܸܢ̱ܲܠܹܐ܀
                </div>
                <div class="malayalam-text">
                    <p>മന്ദമായ് വന്നു വീശിയാനന്ദം<br>
                        തന്ന പൊന്നിളം തെന്നലേ</p>
                </div>
            </div>

            <!-- Eighth verse -->
            <div class="parallel-text">
                <div class="syriac-text">
                    ࡧܲܟܬܲܣܵܟ̱ࡪܝܼܟܲࡨ ܐܵࡢ̱ܘܼܦܘܼܠܟܝܼܝܲܐ ܦܘܼࡤܝܲࡡܝܼܒ݂ܝܼܬܲܐ ܦܵܬܐܲ ࡥܝܼ܀
                </div>
                <div class="malayalam-text">
                    <p>രക്തസാക്ഷികള്‍ ആഞ്ഞുപുല്‍കിയ<br>
                        പുണ്യജീവിത പാത നീ</p>
                </div>
            </div>

            <!-- Images Gallery -->
            <div class="image-gallery">
                <div class="gallery-item">
                    <div class="gallery-image-container">
                        <img src="/articles/images/parishudhathmave-nee-ezhunnalli-karshon/Dr-Amel-handwriting.jpg"
                            alt="Handwriting of Dr. Amel" class="gallery-image">
                    </div>
                    <p class="image-caption">Handwritten version of the hymn by Dr. Amel Antony</p>
                </div>
                <div class="gallery-item">
                    <div class="gallery-image-container">
                        <img src="/articles/images/parishudhathmave-nee-ezhunnalli-karshon/Binu-George-Calligraphy.jpg"
                            alt="Calligraphy by Binu George" class="gallery-image">
                    </div>
                    <p class="image-caption">Calligraphy by Binu George, made using a Lamy Joy 1.9mm</p>
                </div>
            </div>

            

            <a href="/articles" class="back-to-home">
                Back to Articles
            </a>`;

const styles = `
        .back-to-home { display: none !important; }

        

        

        

        

        

        

        

        

        /* Navbar Styles */
        

        

        

        

        

        

        

        

        

        @media (max-width: 992px) {
            

            
        }

        @media (max-width: 768px) {
            

            

            

            

            
        }

        @media (max-width: 480px) {
            

            

            

            
        }

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

        .english-title {
            font-size: 2.5rem;
            color: var(--primary-color);
        }

        .featured-image {
            width: 100%;
            max-width: 400px;
            margin: 0 auto 30px;
            display: block;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .author-image-container {
            text-align: center;
            margin: 20px auto 30px;
        }

        .author-image {
            width: 100%;
            max-width: 300px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .author-caption {
            margin-top: 10px;
            text-align: center;
            font-size: 0.9rem;
            color: #555;
            font-style: italic;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .parallel-text {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
        }

        .syriac-text,
        .malayalam-text {
            flex: 1;
            padding: 20px;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        .syriac-text {
            font-family: 'East Syriac Malankara', serif;
            direction: rtl;
            text-align: right;
            font-size: 1.8em;
            padding: 10px 20px;
        }

        .malayalam-text {
            font-family: 'Noto Sans Malayalam', sans-serif;
        }

        .verse-number {
            color: #666;
            font-size: 0.9em;
            margin-bottom: 5px;
        }

        /* Image gallery styles */
        .image-gallery {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-top: 40px;
            justify-content: center;
        }

        .gallery-item {
            flex: 1;
            min-width: min(100%, 300px);
            max-width: 500px;
            margin-bottom: 30px;
            display: flex;
            flex-direction: column;
        }

        .gallery-image-container {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #dee3e5;
            border-radius: 8px;
            overflow: hidden;
            height: 500px;
            /* Fixed height based on larger image */
            padding: 15px 0;
        }

        .gallery-image {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
            border-radius: 8px;
        }

        .gallery-image:hover {
            transform: scale(1.02);
        }

        .image-caption {
            margin-top: 10px;
            text-align: center;
            font-size: 0.9rem;
            color: #555;
            font-style: italic;
        }

        @media (max-width: 768px) {
            .parallel-text {
                flex-direction: column;
                gap: 10px;
                margin-bottom: 30px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                border-radius: 8px;
                overflow: hidden;
            }

            .syriac-text,
            .malayalam-text {
                border-radius: 0;
            }

            .syriac-text {
                border-bottom: none;
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
                padding-bottom: 15px;
            }

            .malayalam-text {
                border-bottom-left-radius: 8px;
                border-bottom-right-radius: 8px;
                background-color: #f9f9f9;
            }

            .title-container {
                flex-direction: column;
            }

            

            

            

            

            .syriac-title {
                font-size: 2.5rem;
            }

            .english-title {
                font-size: 2rem;
            }

            .article-meta {
                flex-direction: column;
                gap: 0.5rem;
            }

            

            

            .syriac-text {
                font-size: 1.5em;
            }

            .featured-image {
                max-width: 100%;
                height: auto;
                margin-bottom: 20px;
            }

            .article-header {
            padding: 2rem 1rem;
            margin-bottom: 1.5rem;
        }

            

            

            .gallery-item {
                min-width: 100%;
            }
        }

        @media (max-width: 480px) {
            .syriac-title {
                font-size: 2rem;
            }

            .english-title {
                font-size: 1.7rem;
            }

            .subtitle {
                font-size: 1rem;
                margin-bottom: 0.5rem;
            }

            .attribution-subtitle {
                font-size: 0.95rem;
            }

            .article-header {
            padding: 1.5rem 1rem;
        }

            .syriac-text {
                font-size: 1.3em;
                padding: 10px;
            }

            .malayalam-text {
                padding: 10px;
            }

            .article-meta {
                gap: 0.5rem;
                font-size: 0.85rem;
            }

            .footer-section h3 {
                font-size: 1.1rem;
            }

            .back-to-home {
                margin-top: 1.5rem;
                width: 100%;
                text-align: center;
            }
        }

        /* Footer Styles */
        

        

        .footer-section h3 {
            color: var(--secondary-color);
            margin-bottom: 1rem;
        }

        .footer-section p {
            margin-bottom: 0.5rem;
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

        .font-selector {
            margin: 20px 0;
            text-align: left;
        }

        .font-selector label {
            margin-right: 10px;
            font-weight: 600;
            color: var(--primary-color);
        }

        .font-selector select {
            padding: 5px 10px;
            border: 1px solid var(--primary-color);
            border-radius: 4px;
            background-color: white;
            color: var(--text-color);
            font-size: 0.9em;
            cursor: pointer;
        }

        .font-selector select:hover {
            border-color: var(--secondary-color);
        }

        .font-selector select:focus {
            outline: none;
            border-color: var(--secondary-color);
            box-shadow: 0 0 0 2px rgba(212, 164, 69, 0.2);
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
