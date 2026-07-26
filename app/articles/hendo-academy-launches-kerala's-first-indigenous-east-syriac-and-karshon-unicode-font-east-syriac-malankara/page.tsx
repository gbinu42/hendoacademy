import type { Metadata } from "next";
import { ArticleShell } from "@/components/article-shell";
import { getArticle } from "@/lib/articles";

const slug = "hendo-academy-launches-kerala's-first-indigenous-east-syriac-and-karshon-unicode-font-east-syriac-malankara";
const meta = getArticle(slug) ?? {
  slug,
  title: "East Syriac Malankara Font",
  description: "Hendo Academy launches India's first indigenous East Syriac and Karshon Unicode font, preserving the rich Syriac heritage of Saint Thomas Christians.",
  author: "Hendo Academy",
  date: "",
  excerpt: "Hendo Academy launches India's first indigenous East Syriac and Karshon Unicode font, preserving the rich Syriac heritage of Saint Thomas Christians.",
  listed: false,
  hasComments: true,
};

export const metadata: Metadata = {
  title: "East Syriac Malankara Font",
  description: "Hendo Academy launches India's first indigenous East Syriac and Karshon Unicode font, preserving the rich Syriac heritage of Saint Thomas Christians.",
  openGraph: {
    type: "article",
    url: `https://www.hendoacademy.org/articles/${slug}`,
    title: "East Syriac Malankara Font",
    description: "Hendo Academy launches India's first indigenous East Syriac and Karshon Unicode font, preserving the rich Syriac heritage of Saint Thomas Christians.",
    images: ["/assets/images/logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "East Syriac Malankara Font",
    description: "Hendo Academy launches India's first indigenous East Syriac and Karshon Unicode font, preserving the rich Syriac heritage of Saint Thomas Christians.",
    images: ["/assets/images/logo.jpg"],
  },
  alternates: {
    canonical: `https://www.hendoacademy.org/articles/${slug}`,
  },
};

const html = `<header class="article-header">
                <div class="title-container">
                    <h1 class="english-title">East Syriac Malankara: India's First Indigenous Syriac & Karshon Font
                    </h1>
                </div>
                <div class="article-meta">
                    <span>Binu George</span>
                    <span>May 15, 2025</span>
                </div>
                <div class="subtitle-container">
                    <p class="subtitle primary-subtitle">A historic milestone for preserving India's East Syriac
                        heritage with the first Unicode-compliant font developed by and for the Nasrani community of
                        India</p>
                    <p class="subtitle">Released under Open Font License, East Syriac Malankara brings India's unique
                        Syriac-Karshon tradition into the digital age</p>
                </div>
            </header>

            <section class="article-section">
                <h2 class="section-title">East Syriac Malankara Character Map</h2>
                <p>Below is the complete character set for the East Syriac Malankara font, showcasing its unique design
                    features and full Unicode support:</p>

                <div style="display: flex; gap: 2rem; flex-wrap: wrap; margin: 2rem 0;">
                    <div
                        style="flex: 1; min-width: min(100%, 300px); padding: 1.5rem; background-color: var(--light-bg); border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        <h3 style="color: var(--tertiary-color); margin-bottom: 1rem; text-align: center;">Modern
                            Version Character Set</h3>

                        <div style="margin-bottom: 1.5rem; text-align: center;">
                            <h4 style="margin-bottom: 0.5rem;">Syriac Characters</h4>
                            <p
                                style="font-family: 'EastSyriacMalankara'; font-size: 2rem; direction: rtl; line-height: 1.5; padding: 0.5rem; background: white; border: 1px solid #ddd; border-radius: 4px;">
                                ܐ ܒ ܓ ܕ ܗ ܘ ܙ ܚ ܛ ܝ ܟܟ ܟ ܠ ܡܡ ܢܢ ܢ ܣ ܥ ܦ ܨ ܩ ܪ ܫ ܬ ܑ ܞ
                            </p>
                        </div>

                        <div style="margin-bottom: 1.5rem; text-align: center;">
                            <h4 style="margin-bottom: 0.5rem;">Karshon Malayalam Characters</h4>
                            <p
                                style="font-family: 'EastSyriacMalankara'; font-size: 2rem; direction: rtl; line-height: 1.5; padding: 0.5rem; background: white; border: 1px solid #ddd; border-radius: 4px;">
                                ࡠ ࡡ ࡢ ࡣ ࡤ ࡥ ࡦ ࡧ ࡨ ࡩ ࡪ
                            </p>
                        </div>

                        <div style="text-align: center;">
                            <h4 style="margin-bottom: 0.5rem;">East Syriac Cross</h4>
                            <p
                                style="font-family: 'EastSyriacMalankara'; font-size: 2rem; padding: 0.5rem; background: white; border: 1px solid #ddd; border-radius: 4px; display: inline-block; min-width: 80px;">
                                ♱
                            </p>
                        </div>

                        <p style="margin-top: 1.5rem; text-align: center; font-style: italic; color: #666;">The East
                            Syriac
                            Malankara font includes all standard Syriac characters plus specialized Karshon glyphs for
                            writing Malayalam in the Syriac script.</p>
                    </div>

                    <div
                        style="flex: 1; min-width: min(100%, 300px); padding: 1.5rem; background-color: var(--light-bg); border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        <h3 style="color: var(--tertiary-color); margin-bottom: 1rem; text-align: center;">Classical
                            Version Character Set</h3>

                        <div style="margin-bottom: 1.5rem; text-align: center;">
                            <h4 style="margin-bottom: 0.5rem;">Syriac Characters</h4>
                            <p
                                style="font-family: 'EastSyriacMalankaraClassical'; font-size: 2rem; direction: rtl; line-height: 1.5; padding: 0.5rem; background: white; border: 1px solid #ddd; border-radius: 4px;">
                                ܐ ܒ ܓ ܕ ܗ ܘ ܙ ܚ ܛ ܝ ܟܟ ܠ ܡܡ ܢܢ ܢ ܣ ܥ ܦ ܨ ܩ ܪ ܫ ܬ ܑ ܞ
                            </p>
                        </div>

                        <div style="margin-bottom: 1.5rem; text-align: center;">
                            <h4 style="margin-bottom: 0.5rem;">Karshon Malayalam Characters</h4>
                            <p
                                style="font-family: 'EastSyriacMalankaraClassical'; font-size: 2rem; direction: rtl; line-height: 1.5; padding: 0.5rem; background: white; border: 1px solid #ddd; border-radius: 4px;">
                                ࡠ ࡡ ࡢ ࡣ ࡤ ࡥ ࡦ ࡧ ࡨ ࡩ ࡪ
                            </p>
                        </div>

                        <div style="text-align: center;">
                            <h4 style="margin-bottom: 0.5rem;">East Syriac Cross</h4>
                            <p
                                style="font-family: 'EastSyriacMalankaraClassical'; font-size: 2rem; padding: 0.5rem; background: white; border: 1px solid #ddd; border-radius: 4px; display: inline-block; min-width: 80px;">
                                ♱
                            </p>
                        </div>

                        <p style="margin-top: 1.5rem; text-align: center; font-style: italic; color: #666;">The East
                            Syriac
                            Malankara Classical font preserves the authentic calligraphic style from the Vedatharkam
                            manuscript, including all standard Syriac characters and Karshon glyphs.</p>
                    </div>
                </div>
            </section>

            <section class="article-section">
                <p>In a historic milestone for the Saint Thomas Christians of India, Hendo Academy has unveiled "East
                    Syriac Malankara"-the first-ever Syriac and Karshon (Garshuni Malayalam or Suriyani Malayalam) font
                    developed by the East Syriac community of India. While previous efforts in Syriac computing have
                    come from Western academia or Middle Eastern institutions, this initiative marks a significant step
                    in India's indigenous preservation of its Syriac heritage.</p>

                <p>The font recreates the calligraphic style found in the 18th-century Vedatharkam
                    manuscript (Mannanam MS Syr 74) from the Syro-Malabar tradition. This didactic text, written in East
                    Syriac script with Karshon letters (Malayalam language in Syriac script), was copied by
                    Puthenpurackal Ya'kov Kathanar of Kanjirapally while he resided in Kuruvilangadu cheriya palli
                    in 1768. </p>
            </section>

            <section class="article-section">
                <h2 class="section-title">A Landmark Achievement for India's Syriac Tradition</h2>
                <p>For centuries, the Saint Thomas Christians have maintained a rich tradition of Syriac liturgy and
                    Syriac-Malayalam-Karshon literature. However, digital tools for this heritage have largely been
                    developed outside India, often prioritizing Western Syriac (Serto) or Classical Syriac scripts.</p>

                <p>"East Syriac Malankara" changes this narrative-it is the first Unicode-compliant font designed by and
                    for the East Syriac community of India, ensuring that their unique scriptural and linguistic
                    identity is preserved in the digital era.</p>
            </section>

            <section class="article-section">
                <h2 class="section-title">Two Variants for Different Needs</h2>
                <div class="font-variants">
                    <div class="font-variant">
                        <h3>"East Syriac Malankara" (Modernized)</h3>
                        <p>A refined, legible version optimized for digital publishing, liturgical books, and everyday
                            use. This variant balances historical authenticity with contemporary needs, making it
                            perfect for modern publications.</p>
                    </div>
                    <div class="font-variant">
                        <h3>"East Syriac Malankara Classical"</h3>
                        <p>A faithful reproduction of the original Vedatharkam manuscript's calligraphy, with more
                            authentic vowel shapes, retaining its
                            historic charm for academic and ceremonial purposes. Ideal for scholars and those seeking an
                            unaltered connection to India's manuscript tradition.</p>
                    </div>
                </div>
                <p>This dual approach ensures that the font serves both contemporary users and scholars seeking an
                    unaltered connection to the past.</p>
            </section>

            <section class="article-section">
                <h2 class="section-title">Why This Matters</h2>
                <ul class="feature-list">
                    <li><strong>First Indigenous Effort:</strong> Unlike previous Syriac computing projects from the
                        West, this is India's own contribution, reflecting the living tradition of the Malankara East
                        Syriac Church.</li>
                    <li><strong>Preserving Karshon Malayalam:</strong> Many historic Malayalam texts were written in
                        Malayalam Garshuni (Syriac script)-this font helps digitize them, making them accessible to
                        researchers and devotees.</li>
                    <li><strong>Liturgical Revival:</strong> Enables the digitization of East Syriac prayers, hymns, and
                        scriptures in their authentic form, supporting the revival of traditional worship.</li>
                </ul>
            </section>

            <section class="article-section">
                <h2 class="section-title">Peculiarities of the Font</h2>
                <p>Hendo Academy's groundbreaking "East Syriac Malankara" font stands apart from common East Syriac
                    typefaces like "East Syriac Adiabene" through several distinctive features that faithfully reflect
                    India's manuscript tradition while innovating for modern use:</p>

                <h3>Uniform Width & Indian Aesthetic</h3>
                <p>Unlike Mesopotamian East Syriac fonts that often feature bold, variable strokes, this font maintains
                    a more consistent width, mirroring the elegant uniformity found in India's manuscript tradition.
                </p>

                <h3>Distinct Character Shapes</h3>
                <ul class="feature-list">
                    <li>Zain (ܙ) appears in a distinctive looped form</li>
                    <li>Ae (ܥ) is angled differently from standard East Syriac</li>
                    <li>Ṣāḏē (ܨ) features a uniquely curved structure</li>
                    <li>Waw (ܘ), He (ܗ), and Taw (ܬ) in the original manuscript join letters on both sides, though
                        Unicode shaping limitations prevent full replication in the digital font</li>
                </ul>

                <div
                    style="margin: 1.5rem 0; padding: 1.5rem; background-color: var(--light-bg); border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <h4 style="color: var(--tertiary-color); margin-bottom: 1rem;">Character Comparison</h4>
                    <p style="margin-bottom: 0.8rem;">See the difference between standard Karshon and the new East
                        Syriac Malankara font:</p>

                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1rem;">
                        <div style="text-align: center; font-weight: bold;">Character</div>
                        <div style="text-align: center; font-weight: bold;">East Syriac Adiabene</div>
                        <div style="text-align: center; font-weight: bold;">East Syriac Malankara</div>

                        <div style="text-align: center;">Zain (ܙ)</div>
                        <div style="text-align: center; font-family: 'Karshon'; font-size: 2rem; direction: rtl;">ܙ
                        </div>
                        <div
                            style="text-align: center; font-family: 'EastSyriacMalankara'; font-size: 2rem; direction: rtl;">
                            ܙ</div>

                        <div style="text-align: center;">Ae (ܥ)</div>
                        <div style="text-align: center; font-family: 'Karshon'; font-size: 2rem; direction: rtl;">ܥ
                        </div>
                        <div
                            style="text-align: center; font-family: 'EastSyriacMalankara'; font-size: 2rem; direction: rtl;">
                            ܥ</div>

                        <div style="text-align: center;">Ṣāḏē (ܨ)</div>
                        <div style="text-align: center; font-family: 'Karshon'; font-size: 2rem; direction: rtl;">ܨ
                        </div>
                        <div
                            style="text-align: center; font-family: 'EastSyriacMalankara'; font-size: 2rem; direction: rtl;">
                            ܨ</div>

                        <div style="text-align: center;">East Syriac Cross</div>
                        <div style="text-align: center; font-family: 'Karshon'; font-size: 2rem; direction: rtl;">♱
                        </div>
                        <div
                            style="text-align: center; font-family: 'EastSyriacMalankara'; font-size: 2rem; direction: rtl;">
                            ♱</div>
                    </div>


                </div>

                <h3>Karshuni Malayalam Support</h3>
                <ul class="feature-list">
                    <li>Includes newly designed glyphs for Malayalam letters like Bha<span
                            style="font-family: 'EastSyriacMalankara'; font-size: 1.8rem;">(ࡦ)</span> and Ja <span
                            style="font-family: 'EastSyriacMalankara'; font-size: 1.8rem;">(ࡡ)</span>, which were not
                        present in the original manuscript but were carefully crafted to match the historic style</li>
                    <li>Features special terminal Nun <span
                            style="font-family: 'EastSyriacMalankara'; font-size: 1.8rem; direction: rtl;">(ܢ&#x200D;)</span>
                        and Kap <span
                            style="font-family: 'EastSyriacMalankara'; font-size: 1.8rem; direction: rtl;">(ܟ&#x200D;)</span>
                        forms for
                        Karshuni usage
                    </li>
                </ul>

                <h3>Liturgical & Cultural Elements</h3>
                <ul class="feature-list">
                    <li>Uses the Paraur Cross (a traditional cross style from Kerala) as the East Syriac cross symbol
                    </li>
                    <li>Introduces a new ligature for Ra + Nūn <span
                            style="font-family: 'EastSyriacMalankara'; direction: rtl; font-size: 1.8rem;">(ࡧܢ)</span>
                        combination</li>
                </ul>
            </section>

            <section class="article-section">
                <h2 class="section-title">Sample Documents</h2>
                <p>Below are examples of the East Syriac Malankara font in use, showcasing both pure Syriac text and
                    Karshon (Suriyani Malayalam):</p>

                <div style="margin: 2rem 0;">
                    <h3 style="color: var(--tertiary-color); margin-bottom: 1rem;">Classical Syriac Samples</h3>

                    <div style="margin-bottom: 2rem;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                            <div>
                                <img src="/articles/images/east-syriac-malankara/slotha.jpg" alt="East Syriac text sample"
                                    class="sample-image"
                                    style="width: 100%; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); background-color: #f0f0f0; padding: 10px;">
                                <p style="text-align: center; font-style: italic; margin-top: 0.5rem; color: #666;">
                                    Modern version - Classical East Syriac prayer text</p>
                            </div>
                            <div>
                                <img src="/articles/images/east-syriac-malankara/slotha_classical.jpg"
                                    alt="East Syriac text sample classical" class="sample-image"
                                    style="width: 100%; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); background-color: #f0f0f0; padding: 10px;">
                                <p style="text-align: center; font-style: italic; margin-top: 0.5rem; color: #666;">
                                    Classical version - Classical East Syriac prayer text</p>
                            </div>
                        </div>

                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                            <div>
                                <img src="/articles/images/east-syriac-malankara/breek_hannana.jpg"
                                    alt="East Syriac liturgical text" class="sample-image"
                                    style="width: 100%; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); background-color: #f0f0f0; padding: 10px;">
                                <p style="text-align: center; font-style: italic; margin-top: 0.5rem; color: #666;">
                                    Modern version - East Syriac liturgical hymn Breek Hannana</p>
                            </div>
                            <div>
                                <img src="/articles/images/east-syriac-malankara/breek_hannana_classical.jpg"
                                    alt="East Syriac liturgical text classical" class="sample-image"
                                    style="width: 100%; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); background-color: #f0f0f0; padding: 10px;">
                                <p style="text-align: center; font-style: italic; margin-top: 0.5rem; color: #666;">
                                    Classical version - East Syriac liturgical hymn Breek Hannana</p>
                            </div>
                        </div>
                    </div>

                    <h3 style="color: var(--tertiary-color); margin-bottom: 1rem;">Karshon (Suriyani Malayalam/
                        Malayalam Garshuni) Samples
                    </h3>

                    <div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                            <div>
                                <img src="/articles/images/east-syriac-malankara/vedatharkam.jpg"
                                    alt="Karshon Malayalam text sample" class="sample-image"
                                    style="width: 100%; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); background-color: #f0f0f0; padding: 10px;">
                                <p style="text-align: center; font-style: italic; margin-top: 0.5rem; color: #666;">
                                    Modern version - Font vs Manuscript comparison</p>
                            </div>
                            <div>
                                <img src="/articles/images/east-syriac-malankara/vedatharkam_classical.jpg"
                                    alt="Karshon Malayalam text sample classical" class="sample-image"
                                    style="width: 100%; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); background-color: #f0f0f0; padding: 10px;">
                                <p style="text-align: center; font-style: italic; margin-top: 0.5rem; color: #666;">
                                    Classical version - Font vs Manuscript comparison</p>
                            </div>
                        </div>

                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div>
                                <img src="/articles/images/east-syriac-malankara/parishudhatmave.jpg"
                                    alt="Karshon modern text example" class="sample-image"
                                    style="width: 100%; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); background-color: #f0f0f0; padding: 10px;">
                                <p style="text-align: center; font-style: italic; margin-top: 0.5rem; color: #666;">
                                    Modern version - Karshon rendering of Parishudhatmave nee ezhunnalli</p>
                            </div>
                            <div>
                                <img src="/articles/images/east-syriac-malankara/parishudhatmave_classical.jpg"
                                    alt="Karshon classical text example" class="sample-image"
                                    style="width: 100%; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); background-color: #f0f0f0; padding: 10px;">
                                <p style="text-align: center; font-style: italic; margin-top: 0.5rem; color: #666;">
                                    Classical version - Karshon rendering of Parishudhatmave nee ezhunnalli</p>
                            </div>
                        </div>
                    </div>
                </div>

                <p>These examples demonstrate how the East Syriac Malankara font faithfully preserves the calligraphic
                    tradition of India's manuscript heritage while providing the clarity and consistency needed for
                    modern digital publication.</p>
            </section>

            <section class="article-section">
                <h2 class="section-title">The Meticulous Creation Process</h2>
                <p>The font was developed through a rigorous, manual design process:</p>
                <ul class="feature-list">
                    <li>High-resolution scans of the Vedatharkam manuscript (Mannanam MS Syr 74) were obtained</li>
                    <li>Each character was painstakingly vectorized by hand to preserve the original calligraphy</li>
                    <li>Issa Benyamin's East Syriac calligraphy manual guided aesthetic proportions for balanced
                        letterforms</li>
                    <li>FontForge was used to construct the final font in TTF (TrueType) format</li>
                </ul>
            </section>

            <section class="article-section">
                <h2 class="section-title">Reviving the Karshon Tradition</h2>
                <p>Beyond its technical merits, "East Syriac Malankara" represents a crucial step in revitalizing the
                    Karshon (Garshuni Malayalam or Suriyani Malayalam) writing tradition that has been central to
                    India's Christian heritage for centuries.</p>

                <p>Karshon-the practice of writing Malayalam language using Syriac script-was once widespread among
                    Saint Thomas Christians, producing a wealth of theological, liturgical, and historical literature.
                    However, this unique writing system has faced decline in recent generations due to the lack of
                    Syriac knowledge and standardized digital tools.</p>

                <p>With this font, several important developments become possible:</p>
                <ul class="feature-list">
                    <li><strong>Digital Preservation:</strong> Thousands of Karshon manuscripts and printed texts can
                        now be digitized in their authentic script, preventing the loss of this literary heritage</li>
                    <li><strong>Educational Revival:</strong> Cultural institutions like Hendo Academy can now teach
                        Karshon writing using familiar digital interfaces, making it accessible to younger generations
                    </li>
                    <li><strong>Contemporary Usage:</strong> Modern liturgical and educational materials can be produced
                        in both Malayalam and Karshon, maintaining this distinctive aspect of Indian Christian identity
                    </li>
                    <li><strong>Cultural Continuity:</strong> The unique East Syriac style that developed in India can
                        continue to evolve in the digital age rather than being replaced by generic Middle Eastern forms
                    </li>
                </ul>

                <p>This revival of Karshon writing represents a significant cultural achievement, connecting India's
                    Saint Thomas Christians with their distinctive literary and liturgical tradition that spans nearly
                    two millennia.</p>
            </section>

            <section class="article-section">
                <h2 class="section-title">Availability & Next Steps</h2>

                <div style="overflow-x: auto; margin: 1.5rem 0 2rem;">
                    <table
                        style="width: 100%; border-collapse: collapse; border: 1px solid #ddd; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                        <thead>
                            <tr style="background-color: var(--tertiary-color); color: white;">
                                <th style="padding: 12px 15px; text-align: left; border-bottom: 2px solid #ddd;">Font
                                    Version</th>
                                <th style="padding: 12px 15px; text-align: left; border-bottom: 2px solid #ddd;">
                                    Description</th>
                                <th style="padding: 12px 15px; text-align: center; border-bottom: 2px solid #ddd;">
                                    Status</th>
                                <th style="padding: 12px 15px; text-align: center; border-bottom: 2px solid #ddd;">
                                    Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="background-color: var(--light-bg);">
                                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: 600;">East
                                    Syriac Malankara</td>
                                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd;">Modernized version
                                    optimized for digital publishing and everyday use.</td>
                                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center;">
                                    <div
                                        style="display: inline-flex; align-items: center; font-size: 0.9rem; color: #2e7d32;">
                                        <div
                                            style="width: 8px; height: 8px; background-color: #2e7d32; border-radius: 50%; margin-right: 6px;">
                                        </div>
                                        Released
                                    </div>
                                </td>
                                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center;"><a
                                        href="/assets/zip/EastSyriacMalankara.zip"
                                        style="display: inline-block; padding: 6px 12px; background-color: var(--primary-color); color: white; text-decoration: none; border-radius: 4px; font-weight: 600; transition: background-color 0.3s;">Download</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: 600;">East
                                    Syriac Malankara Classical</td>
                                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd;">Faithful reproduction of
                                    the original Vedatharkam manuscript's calligraphy for academic and ceremonial
                                    purposes.</td>
                                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center;">
                                    <div
                                        style="display: inline-flex; align-items: center; font-size: 0.9rem; color: #2e7d32;">
                                        <div
                                            style="width: 8px; height: 8px; background-color: #2e7d32; border-radius: 50%; margin-right: 6px;">
                                        </div>
                                        Released
                                    </div>
                                </td>
                                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: center;"><a
                                        href="/assets/zip/EastSyriacMalankaraClassical.zip"
                                        style="display: inline-block; padding: 6px 12px; background-color: var(--primary-color); color: white; text-decoration: none; border-radius: 4px; font-weight: 600; transition: background-color 0.3s;">Download</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p>The modernized version of "East Syriac Malankara" will be released first, with the Classical variant
                    following later for specialized use. Both will be freely available under the Open Font License (OFL)
                    to ensure wide accessibility.</p>

                <p>Hendo Academy has already developed resources to support Karshon typing:</p>
                <ul class="feature-list">
                    <li><a href="/articles/syriac-phonetic-karshon-keyboard-layout-and-usage.html">Syriac Phonetic
                            Karshon Keyboard Layout</a> - A custom keyboard layout designed specifically for Karshon
                        typing</li>
                    <li><a href="/articles/typing-karshon-in-libreoffice-writer-on-windows.html">Typing Karshon in
                            LibreOffice Writer on Windows</a> - Step-by-step guide for Windows users</li>
                    <li><a href="/articles/typing-karshon-in-libreoffice-writer-on-macos.html">Typing Karshon in
                            LibreOffice Writer on macOS</a> - Comprehensive guide for Mac users</li>

                </ul>

                <p>Additional resources planned for development include:</p>
                <ul class="feature-list">
                    <li>Educational materials to promote the script's use among students and clergy</li>
                </ul>

                <div
                    style="background-color: var(--light-bg); padding: 1.5rem; border-left: 4px solid var(--primary-color); margin: 2rem 0; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <p
                        style="font-size: 1.3rem; font-weight: 600; color: var(--primary-color); text-align: center; line-height: 1.6;">
                        This project reaffirms India's East Syriac community as active contributors-not just
                        inheritors-of the global Syriac heritage.
                    </p>
                </div>

                <p>Download now and experience the first-ever East Syriac font born from India's manuscript tradition!
                </p>
            </section>

            <section class="article-section">
                <h2 class="section-title">Try the Font Online</h2>
                <p>Want to see the East Syriac Malankara font in action without downloading it? Visit our online Syriac
                    Editor to try it out immediately:</p>

                <ol style="margin: 1.5rem 0; padding-left: 1.5rem; line-height: 1.6;">
                    <li>Go to <a href="/editor"
                            style="color: var(--tertiary-color); font-weight: 600;">hendoacademy.org/editor</a></li>
                    <li>Click on the <strong>Settings</strong> (gear icon ⚙️) button </li>
                    <li>Select <strong>"East Syriac Malankara"</strong> from the font dropdown menu and click "Save"
                    </li>
                    <li>Start typing to see the beautiful East Syriac Malankara characters!</li>
                </ol>

                <div
                    style="background-color: var(--light-bg); padding: 1rem; border-left: 4px solid var(--tertiary-color); margin: 1.5rem 0; border-radius: 4px;">
                    <p style="margin-bottom: 0;">The online editor is a great way to experiment with East Syriac and
                        Karshon writing without installing anything on your device. You can also use it to create and
                        share text samples with others.</p>
                </div>

                <div style="text-align: center; margin: 2rem 0;">
                    <a href="/editor"
                        style="display: inline-block; padding: 0.8rem 1.5rem; background-color: var(--tertiary-color); color: white; text-decoration: none; border-radius: 4px; font-weight: 600; transition: background-color 0.3s;">
                        Try East Syriac Malankara Font
                        Online
                    </a>
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
            flex-direction: column;
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

        .syriac-title {
            font-family: 'Karshon', serif;
            direction: rtl;
            font-size: 3.5rem;
            color: var(--primary-color);
        }

        .english-title {
            font-size: 2.2rem;
            color: var(--primary-color);
            text-align: center;
        }

        .featured-image {
            width: 100%;
            max-width: 600px;
            margin: 0 auto 30px;
            display: block;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .article-section {
            margin-bottom: 2rem;
            padding: 0 1rem;
        }

        .section-title {
            font-size: 1.8rem;
            color: var(--primary-color);
            margin-bottom: 1.2rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid var(--secondary-color);
        }

        .feature-list {
            list-style-type: none;
            padding-left: 1.5rem;
            margin-bottom: 1.5rem;
        }

        .feature-list li {
            position: relative;
            padding-left: 1.5rem;
            margin-bottom: 0.8rem;
        }

        .feature-list li:before {
            content: "•";
            position: absolute;
            left: 0;
            color: var(--tertiary-color);
            font-weight: bold;
            font-size: 1.2rem;
        }

        .article-meta {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 1rem;
            color: #666;
            font-size: 0.9rem;
        }

        .article-meta span {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .back-to-home {
            display: inline-block;
            margin-top: 2rem;
            color: var(--tertiary-color);
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s;
        }

        .back-to-home:hover {
            color: var(--primary-color);
        }

        /* Specific sections */
        .font-variants {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            margin-bottom: 2rem;
            justify-content: center;
        }

        .font-variant {
            flex: 1;
            min-width: min(100%, 300px);
            padding: 1.5rem;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            background-color: var(--light-bg);
        }

        .font-variant h3 {
            color: var(--tertiary-color);
            margin-bottom: 1rem;
            font-size: 1.4rem;
        }

        /* Footer */
        

        

        

        .footer-section h3 {
            font-size: 1.4rem;
            margin-bottom: 1rem;
            color: var(--secondary-color);
        }

        

        

        

        /* Responsive styles */
        @media (max-width: 992px) {
            

            
        }

        @media (max-width: 768px) {
            

            

            

            

            

            .english-title {
                font-size: 1.8rem;
            }

            .font-variants {
                flex-direction: column;
            }

            .font-variant {
                min-width: 100%;
            }

            .article-meta {
                flex-direction: column;
                gap: 0.5rem;
                align-items: center;
            }
        }

        @media (max-width: 480px) {
            

            

            

            

            .english-title {
                font-size: 1.6rem;
            }

            .subtitle {
                font-size: 1rem;
            }

            .section-title {
                font-size: 1.5rem;
            }
        }

        /* Add these styles in the existing style section */
        .lightbox {
            display: none;
            position: fixed;
            z-index: 1000;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            cursor: pointer;
        }

        .lightbox img {
            max-width: 90%;
            max-height: 90vh;
            margin: auto;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 4px;
        }

        .sample-image {
            cursor: pointer;
            transition: transform 0.2s;
        }

        .sample-image:hover {
            transform: scale(1.02);
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
