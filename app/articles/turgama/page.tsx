import type { Metadata } from "next";
import { ArticleShell } from "@/components/article-shell";
import { getArticle } from "@/lib/articles";

const slug = "turgama";
const meta = getArticle(slug) ?? {
  slug,
  title: "Turgama d'evangelion",
  description: "Study the Turgama d'evangelion with parallel Syriac and Malayalam text. An essential resource for understanding Syriac liturgy and Nasrani heritage.",
  author: "Hendo Academy",
  date: "",
  excerpt: "Study the Turgama d'evangelion with parallel Syriac and Malayalam text. An essential resource for understanding Syriac liturgy and Nasrani heritage.",
  listed: false,
  hasComments: true,
};

export const metadata: Metadata = {
  title: "Turgama d'evangelion",
  description: "Study the Turgama d'evangelion with parallel Syriac and Malayalam text. An essential resource for understanding Syriac liturgy and Nasrani heritage.",
  openGraph: {
    type: "article",
    url: `https://www.hendoacademy.org/articles/${slug}`,
    title: "Turgama d'evangelion",
    description: "Study the Turgama d'evangelion with parallel Syriac and Malayalam text. An essential resource for understanding Syriac liturgy and Nasrani heritage.",
    images: ["/assets/images/logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turgama d'evangelion",
    description: "Study the Turgama d'evangelion with parallel Syriac and Malayalam text. An essential resource for understanding Syriac liturgy and Nasrani heritage.",
    images: ["/assets/images/logo.jpg"],
  },
  alternates: {
    canonical: `https://www.hendoacademy.org/articles/${slug}`,
  },
};

const html = `<header class="article-header">
                <div class="title-container">
                    <h1 class="english-title">Turgama d'evangelion</h1>
                    <span class="syriac-title">ܬܘܼܪܓܵܡܵܐ ܕܹܐܘܲܢܓܹܠܝܼܘܿܢ</span>
                </div>
                <div class="article-meta">
                    <span>Binu George</span>
                    <span>April 22, 2025</span>
                </div>
                <div class="subtitle-container">
                    <p class="subtitle primary-subtitle">A Karshon (Suriyani Malayalam) rendering of the Malayalam
                        translation of the Turgama of the Evangelion, as used before the Gospel Procession in the Syro
                        Malabar Qurbana</p>
                    <p class="subtitle attribution-subtitle">This highly poetic translation from the original Syriac was
                        made by the late Thelliyil Mani Malpan (Rev. Fr. Emmanuel Thelly), one of the founding members
                        of Hendo Academy.</p>
                </div>
            </header>

            <img src="/articles/images/turgama/gospel-procession.png" alt="Gospel Procession in Syriac Liturgy"
                class="featured-image">

            <div class="font-selector">
                <label for="syriac-font">Select Karshon Font:</label>
                <select id="syriac-font" >
                    <option value="East Syriac Malankara">East Syriac Malankara</option>
                    <option value="East Syriac Malankara Classical">East Syriac Malankara Classical</option>
                    <option value="East Syriac Adiabene">East Syriac Adiabene</option>
                </select>
            </div>

            <div class="parallel-text">
                <div class="syriac-text">
                    ܒ݂ܝܼܫܒ݂ܵܣܝܼܟܲࡨܹܐ ܟܹࡨܦ̱ܝܼܢ: ܣܲܘܼܩܝܲܐܒ݂ܘܼܡܘܼܝܼࡧܘܼܡ ܦܲܟܲࡧܘܼܡ ܡܘܿࡩܝܼܟܲࡨ ܡܘܿܕܵܠ: ܕܲܝܒ݂ܲܟܘܼܡܵࡧܲܢ ࡥܲࡧܲܢܵܝ
                    ࡥܲܡ̱ܸܐ ܡܘܿܫ݁ܝܼܬܲࡧܵܟ̱ܝܼ܀
                </div>
                <div class="malayalam-text">
                    <p>വിശ്വാസികളേ, കേൾപ്പിൻ</p>
                    <p>സൗഖ്യവുമുയിരും പകരും മൊഴികൾ മോദാൽ </p>
                    <p>ദൈവകുമാരൻ നരനായ് നമ്മെ മോചിതരാക്കി.</p>
                </div>
            </div>

            <div class="parallel-text">
                <div class="syriac-text">
                    ܐܝܼ ܡܘܿࡩܝܼ ࡥܝܼࡠ̱ܲࡨܟ̱ܹܟܝܼ: ࡦܵܓܝܲܡ ࡥܝܼܪܲܝܘܼܡ ܒ݂ܲܠܝܼܝܘܿࡧܘܼ ࡥܝܼܬ̄ܝܼܝܼ ࡦܘܼܒ݂ܝܼܠ: ܐܝܼ ܣܲܕܓࡧܲࡥܛܲܡ ࡡܝܼܒ݂ܲܢ
                    ࡥܲܠܟܘܼܡ ܐܲܘࡪܲܬ̄ܲܡܲܠ̱ܘܿ܀
                </div>
                <div class="malayalam-text">
                    <p>ഈ മൊഴി നിങ്ങൾക്കേകി</p>
                    <p>ഭാഗ്യം നിറയും വലിയൊരു നിധിയീ ഭൂവിൽ</p>
                    <p>ഈ സദ്ഗ്രന്ഥം ജീവൻ നൽകും ഔഷധമല്ലോ.</p>
                </div>
            </div>

            <div class="parallel-text">
                <div class="syriac-text">
                    ࡡܝܼܒ݂ܲܢ ࡥܲܠܟܵܢ ܦܘܿࡧܘܼܡ: ࡡܝܼـܒ݂ܲܕܒ݂ܲـܫ݁ܲܢܲܡ ܟܹࡨܟ̱ܝܼܠܘܿࡨܝܼܟ̱ܘܼܡ ܣܵܛܵܢ: ܒܵܬ̄ܲܟܲࡨܹܬܘܼܡ
                    ࡦܝܼܬܝܼܝܘܿࡣـܘܼࡣܲـܢܹܐ ܐܘܿࡩܝܼܒ݂ܵـܝܼࡣـܘܼܡ܀
                </div>
                <div class="malayalam-text">
                    <p>ജീവൻ നൽകാൻ പോരും</p>
                    <p>ജീവത്‌വചനം കേൾക്കിലൊളിക്കും സാത്താൻ</p>
                    <p>ബാധകളേതും ഭീതിയൊടുടനേ ഒഴിവായിടും.</p>
                </div>
            </div>

            <div class="parallel-text">
                <div class="syriac-text">
                    ܣܒ݂ܲܪܓܲܡ ܦܘܼܟܵܢ ܦܘܿࡧܘܼܡ: ܒ݂ܵܬܝܼܠܝܼܬܲܠ̱ܘܿ ܒ݂ܲࡩܝܼܝܘܼܡܝܼܬܲܠ̱ܘܿ ࡥܝܼܬܝܲܡ: ܐܝܼ ܒ݂ܲࡩܝܼ ܦܘܿܝܵܠ
                    ܐܲܦܲܟܲࡣܲـܡܲܢܝܹܐ ࡧܵࡡܝܲܡ ࡥܹࡣܵـܡ܀
                </div>
                <div class="malayalam-text">
                    <p>സ്വർഗ്ഗം പൂകാൻ പോരും</p>
                    <p>വാതിലിതല്ലോ വഴിയുമിതല്ലോ നിത്യം</p>
                    <p>ഈ വഴി പോയാൽ അപകടമന്യേ രാജ്യം നേടാം.</p>
                </div>
            </div>

            <div class="parallel-text">
                <div class="syriac-text">
                    ܡܪܬܲࡧܝܼ ܫܲܒܕܲܡ ܟܹࡨܟ̱ܝܼܠ: ࡡܝܼܒ݂ܲܢ ࡥܹࡣܘܼܡ ܣܒ݂ܲܪܓܲܡ ܦܘܼܟܘܼܡ ܫܹ݁ܠܝܼܠ: ܐܝܼܬܘܼ ࡥܝܼࡧܲܣܝܼܟ̱ـܝܼܠ
                    ࡡܝܼܒ݂ܝܼܦ̱ܲـܒ݂ܲࡧܘܼܡ ܡܪܬܲࡧܵܝ ܬܝܼࡧܘܼܡ܀
                </div>
                <div class="malayalam-text">
                    <p>മൃതരീ ശബ്ദം കേൾക്കിൽ</p>
                    <p>ജീവൻ നേടും സ്വർഗ്ഗം പൂകും ചേലിൽ</p>
                    <p>ഇതു നിരസിക്കിൽ ജീവിപ്പവരും മൃതരായ് തീരും.</p>
                </div>
            </div>

            <div class="parallel-text">
                <div class="syriac-text">
                    ܦܪܲࡦܲܐ ܒ݂ܝܼܬܲܪܝܼࡣܘܼܡ ܕܝܼܦܲܡ: ࡡܝܼܒ݂ܲܢܬܲܢ̱ܸܐ ܐܝܼ ܣܲܕܒ݂ܲـܫ݁ܲܢܲܡ ܦܵࡧܝܼܠ: ܒ݂ܝܼܬ̄ܝܼܝܵࡨܲܢܸـܝܼ ܒ݂ܲـܫ݁ܲܢܲܡ
                    ܣܘܼܬܲࡧܵܡ ܒ݂ܸࡨܝܼܒ݂ܵܟ̱ܘܼࡥ̱ܘܼ܀
                </div>
                <div class="malayalam-text">
                    <p>പ്രഭ വിതറിടും ദീപം</p>
                    <p>ജീവൻതന്നെ ഈ സദ്‌വചനം പാരിൽ</p>
                    <p>വിധിയാളനെയീ വചനം സുതരാം വെളിവാക്കുന്നു.</p>
                </div>
            </div>

            <div class="parallel-text">
                <div class="syriac-text">
                    ࡡܲܢܲܬܲܬܝܼܝܸܠ̱ܵܡ ܫܹ݁ܠܝܼܠ: ࡧܲܟ̱ࡪܝܼܬܲࡧܵܝܼ ࡥܵܛܲܢ ܒ݂ܲࡩܝܼـܝܵܝ ࡦܘܼܒ݂ܝܼܠ: ܦܵܦܲܡ ࡥܝܼܝܲܬܲܡ ܡܘܿܫ݁ܝܼܦ̱ܲـܒ݂ܲـܢܝܼ
                    ࡥܵܛܲܢ ܡܵܬܪܲܡ܀
                </div>
                <div class="malayalam-text">
                    <p>ജനതതിയെല്ലാം ചേലിൽ</p>
                    <p>രക്ഷിതരായി നാഥൻ വഴിയായ് ഭൂവിൽ</p>
                    <p>പാപം നിയതം മോചിപ്പവനീ നാഥൻ മാത്രം.</p>
                </div>
            </div>

            <div class="parallel-text">
                <div class="syriac-text">
                    ܒ݂ܝܼܬ̱ܘܼ ܒܝܼܬܲܟ̱ܘܼܡ ࡥܵܛܲܢ: ܬܝܼࡧܘܼܒ݂ܲـܫ݁ܲܢܲܬ̱ܝܼܢ ܒ݂ܝܼܬ̱ܘܼܒ݂ܝܼܬܲܟ̱ܵܢ ܒ݂ܲࡥ̱ܘܼ: ܒ݂ܲܝܲܠܝܼܢܘܼ ܦܲܟܲࡧܲܡ
                    ܗܪܕܲܝܲࡥܝܼܠܲࡠ̱ܲࡨ ࡥܲܠܟܘܼܟܲܐ ࡥܝܼࡠ̱ܲࡨ܀
                </div>
                <div class="malayalam-text">
                    <p>വിത്തു വിതയ്ക്കും നാഥൻ</p>
                    <p>തിരുവചനത്തിൻ വിത്തു വിതയ്ക്കാൻ വന്നു</p>
                    <p>വയലിനു പകരം ഹൃദയനിലങ്ങൾ നൽകുക നിങ്ങൾ.</p>
                </div>
            </div>

            <div class="parallel-text">
                <div class="syriac-text">
                    ࡥܵܛܲܢ ܡܘܿࡩܝܼܝܘܼܡ ࡥܵܕܲܡ: ࡦܵܓܝܲܒ݂ܘܼܡܘܼܝܼࡧܘܼܡ ܟܲࡧܘܼࡤܲܝܘܼܡܘܼܠܲܟܝܼܠ ܬܘܼܟܘܼܡ: ܫܲࡧܲࡤܲܒ݂ܘܼܡܲܢܝܼܫܲܡ
                    ܟܪܦܲܝܘܼܡܝܼܬܹܟܘܼܡ ܡܲܢܘࡡܲܢܘܼ ܡܘܿܕܵܠ܀
                </div>
                <div class="malayalam-text">
                    <p>നാഥൻ മൊഴിയും നാദം</p>
                    <p>ഭാഗ്യവുമുയിരും കരുണയുമുലകിൽ തൂകും</p>
                    <p>ശരണവുമനിശം കൃപയുമിതേകും മനുജനു മോദാൽ.</p>
                </div>
            </div>

            <div class="parallel-text">
                <div class="syriac-text">
                    ܐܵܫܪܲܝܲܡܲܒ݂ܲܢܝܼܠ ܫܹ݁ܪܟ̱ܘܼܡ: ܒ݂ܝܼܫܒ݂ܵܣܝܼܟܲࡨܘܿ ࡦܵܓܝܲܡ ࡥܝܼܝܲܬܲܡ ܫ݁ܘܼࡣܘܼܡ: ܐܲܒ݂ܲࡧܘܿࡧܘܼࡥܵࡨܝܼܠ
                    ܡܪܬܲࡧܵܝܵܠܘܼܡ ࡡܝܼܒ݂ܲܢ ࡥܹࡣܘܼܡ܀
                </div>
                <div class="malayalam-text">
                    <p>ആശ്രയമവനിൽ ചേർക്കും</p>
                    <p>വിശ്വാസികളോ ഭാഗ്യം നിയതം ചൂടും</p>
                    <p>അവരൊരുനാളിൽ മൃതരായാലും ജീവൻ നേടും.</p>
                </div>
            </div>

            <div class="parallel-text">
                <div class="syriac-text">
                    ܐܵܫܪܝܼܬܲࡧܸܝܵܐ ࡥܵܛܲܢ: ܟܲܝܒ݂ܸࡣـܝܼܝܼܠ̱ܲܐ ܟܵܬ̱ܲࡧܘܼࡨܝܼࡣܘܼܡ ࡥܝܼܬܝܲܡ: ܦܵܦܵـࡠ̱ܟܝܼܬܲࡧܵܝ ܐܲܒ݂ܲࡧܝܼܠܘܿࡧܵࡨܘܼܡ
                    ܡܪܬܝܼܝܲࡣܲـܝܼܠ̱ܲܐ܀
                </div>
                <div class="malayalam-text">
                    <p>ആശ്രിതരെയോ നാഥൻ</p>
                    <p>കൈവെടിയില്ല കാത്തരുളീടും നിത്യം</p>
                    <p>പാപാങ്കിതരായ് അവരിലൊരാളും മൃതിയടയില്ല.</p>
                </div>
            </div>

            <div class="parallel-text">
                <div class="syriac-text">
                    ܕܲܝܒ݂ܲܟܘܼܡܵࡧܲܢ ࡦܘܼܒ݂ܝܼܠ: ܡܵܢܲܒ݂ܲܢܵܝܼ ܬܝܼࡧܘܼܒ݂ܲܒ݂ܲܬܵࡧܲܡ ܫܸ݁ܝܬܘܼ: ܟܲܢܝܲܟܲܝܼܠ ࡥܝܼࡥ̱ܲـܒ݂ܲܢܘܿࡧܘܼࡥܵࡨܝܼܠ
                    ࡡܵܬܲܢܘܼܡܵܝܼ܀
                </div>
                <div class="malayalam-text">
                    <p>ദൈവകുമാരൻ ഭൂവിൽ</p>
                    <p>മാനവനായി തിരുവവതാരം ചെയ്തു</p>
                    <p>കന്യകയിൽ നിന്നവനൊരുനാളിൽ ജാതനുമായി.</p>
                </div>
            </div>

            <div class="parallel-text">
                <div class="syriac-text">
                    ࡧܘܿܓܲܡ ܣܲܕܲܝܲܡ ࡥܝܼܟ̱ܝܼ: ܡܪܬܲࡧܝܼܠ ࡡܝܼܒ݂ܲܢ ܦܘܼܢܲࡧܲܒ݂ܲܢܹܟܝܼ ܡܘܿܕܵܠ: ܬܝܼࡧܘܼܒ݂ܘܼܬ̱ܛܵܢܲܡ ܫܸ݁ܝܬܘܿࡧܘܼ ࡥܵܛܲܢ
                    ܣܒ݂ܲܪܓܲܡ ܦܘܼܟܝܼ܀
                </div>
                <div class="malayalam-text">
                    <p>രോഗം സദയം നീക്കി</p>
                    <p>മൃതരിൽ ജീവൻ പുനരവനേകി മോദാൽ</p>
                    <p>തിരുവുത്ഥാനം ചെയ്തൊരു നാഥൻ സ്വർഗ്ഗം പൂകി.</p>
                </div>
            </div>

            <div class="parallel-text">
                <div class="syriac-text">
                    ܪܘܼܚܵܝܹܝܵܐ ࡥܵܛܲܢ: ܫܝܼࡪܝܲܪܟ̱ܹܟܝܼ ܫܝܼܟ̱ࡪܲࡤܲܡܹܟܝܼ ܫܹ݁ܠܝܼܠ: ܫܝܼܟ̱ࡪܲࡤܲܡܹܟܵܢ ܣܲܕܲܝܲܡܲܝܲـܫ̱݁ܘܼ
                    ܕܝܼܫܲܟܲࡨܝܼܠܸـܠ̱ܵܡ܀
                </div>
                <div class="malayalam-text">
                    <p>റൂഹായെയാ നാഥൻ</p>
                    <p>ശിഷ്യർക്കേകി ശിക്ഷണമേകി ചേലിൽ</p>
                    <p>ശിക്ഷണമേകാൻ സദയമച്ചു ദിശകളിലെല്ലാം.</p>
                </div>
            </div>

            <div class="parallel-text">
                <div class="syriac-text">
                    ܝܘܿܚܲܢܵܢ ܬܲܢ ܣܵܟ̱ࡪܝܲܡ (ܣܘܼܒ݂ܫܹࡪܲܟܲܢܵܡ ܡܲܬܲܝ\\ܡܲܪܩܘܿܣ\\ܠܘܼܩܵܐ): ܐܲܢܘܼࡦܲܒ݂ܲܡܲܬ̄ܘܼܢܵܐ ܒ݂ܝܼܒ݂ܲࡧܝܼܟ̱ܘܼࡥ̱ܘܼ
                    ܟܹࡨܟ̱ܵܢ: ܫܸ݁ܒ݂ܝܼܝܘܼࡨ̱ܲܒ݂ܲܢܘܿ ܟܹܪ̱ܘܼ ܦ݂ܲܠܲࡠ̱ܲࡨ ࡥܲܠܟܝܼࡣܲـࡣ̱ܸـܐ܀
                </div>
                <div class="malayalam-text">
                    <p>യോഹന്നാൻ തൻ സാക്ഷ്യം</p>
                    <p>(സുവിശേഷകനാം മത്തായി / മർക്കോസ് / ലൂക്കാ)</p>
                    <p>അനുഭവമധുനാ വിവരിക്കുന്നു കേൾക്കാൻ</p>
                    <p>ചെവിയുള്ളവനോ കേട്ടു ഫലങ്ങൾ നൽകീടട്ടെ.</p>
                </div>
            </div>

            

            <a href="/articles" class="back-to-home">
                Back to Home
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

        .parallel-text {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
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
