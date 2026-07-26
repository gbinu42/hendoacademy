import type { Metadata } from "next";
import { ArticleShell } from "@/components/article-shell";
import { getArticle } from "@/lib/articles";

const slug = "syriac-phonetic-karshon-keyboard-layout-and-usage";
const meta = getArticle(slug) ?? {
  slug,
  title: "Syriac Phonetic - Karshon Keyboard Layout Guide",
  description: "Comprehensive guide to the Syriac Phonetic keyboard layout, including key mappings, diacritics, and special characters for typing in Syriac script.",
  author: "Hendo Academy",
  date: "",
  excerpt: "Comprehensive guide to the Syriac Phonetic keyboard layout, including key mappings, diacritics, and special characters for typing in Syriac script.",
  listed: false,
  hasComments: true,
};

export const metadata: Metadata = {
  title: "Syriac Phonetic - Karshon Keyboard Layout Guide",
  description: "Comprehensive guide to the Syriac Phonetic keyboard layout, including key mappings, diacritics, and special characters for typing in Syriac script.",
  openGraph: {
    type: "article",
    url: `https://www.hendoacademy.org/articles/${slug}`,
    title: "Syriac Phonetic - Karshon Keyboard Layout Guide",
    description: "Comprehensive guide to the Syriac Phonetic keyboard layout, including key mappings, diacritics, and special characters for typing in Syriac script.",
    images: ["/assets/images/logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syriac Phonetic - Karshon Keyboard Layout Guide",
    description: "Comprehensive guide to the Syriac Phonetic keyboard layout, including key mappings, diacritics, and special characters for typing in Syriac script.",
    images: ["/assets/images/logo.jpg"],
  },
  alternates: {
    canonical: `https://www.hendoacademy.org/articles/${slug}`,
  },
};

const html = `<header class="article-header">
                <div class="title-container">
                    <h1 class="article-title">Syriac Phonetic - Karshon Keyboard Layout Guide</h1>
                </div>
                <div class="article-meta">
                    <span>Binu George</span>
                    <span>May 1, 2025</span>
                </div>
                <div class="subtitle-container">
                    <p class="subtitle primary-subtitle">A comprehensive guide to the Syriac Phonetic keyboard layout,
                        including key mappings, diacritics, and special characters for typing in Syriac script.</p>
                </div>
            </header>

            <section class="article-section">
                <h2 class="section-title">Related Articles</h2>
                <div class="section-content">
                    <ul style="list-style: none; padding: 0; margin: 1rem 0;">
                        <li style="margin-bottom: 1rem;">
                            <a href="/articles/typing-karshon-in-libreoffice-writer-on-windows"
                                style="color: var(--primary-color); text-decoration: none; font-weight: 600; display: inline-block; padding: 0.5rem 1rem; background-color: var(--light-bg); border-radius: 4px; transition: background-color 0.3s;">
                                Typing Karshon in LibreOffice Writer on Windows
                            </a>
                        </li>
                        <li style="margin-bottom: 1rem;">
                            <a href="/articles/typing-karshon-in-libreoffice-writer-on-macos"
                                style="color: var(--primary-color); text-decoration: none; font-weight: 600; display: inline-block; padding: 0.5rem 1rem; background-color: var(--light-bg); border-radius: 4px; transition: background-color 0.3s;">
                                Typing Karshon in LibreOffice Writer on macOS
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <section class="article-section">
                <h2 class="section-title">Introduction</h2>
                <div class="section-content">
                    <p>The Syriac Phonetic - Karshon keyboard layout is designed to make typing in East Syriac and
                        Karshon scripts intuitive and efficient. It follows a phonetic mapping system where the English
                        keys correspond to their closest phonetic equivalents in Syriac. This approach makes it easier
                        for users familiar with the English QWERTY keyboard to type in Syriac without having to memorize
                        complex key combinations.</p>

                    <p>This version of the keyboard has been specifically optimized for East Syriac and Karshon scripts.
                        Characters not commonly used in these scripts (such as Arabic Garshuni letters and West Syriac
                        vowel signs) have been removed to simplify the layout and focus on the most frequently used
                        characters. As a result, some keys are empty.</p>

                    <p><strong>Note:</strong> All keybindings in this layout are consistent across both Windows and Mac
                        platforms. The only difference is that on Mac, the "Right Alt" key is called "Right Option" -
                        they function exactly the same way.</p>

                    <div class="keyboard-downloads"
                        style="margin: 2rem 0; padding: 1.5rem; background-color: var(--light-bg); border-radius: 8px;">
                        <h3 style="color: var(--primary-color); margin-bottom: 1rem;">Download Keyboard Layouts</h3>
                        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                            <a href="/articles/files/karshon_keyboard.zip" class="download-button"
                                style="display: inline-flex; align-items: center; padding: 0.8rem 1.5rem; background-color: var(--primary-color); color: white; text-decoration: none; border-radius: 4px; transition: background-color 0.3s;">
                                Download for Windows
                            </a>
                            <a href="/articles/files/SyriacKarshon.keylayout" class="download-button"
                                style="display: inline-flex; align-items: center; padding: 0.8rem 1.5rem; background-color: var(--primary-color); color: white; text-decoration: none; border-radius: 4px; transition: background-color 0.3s;">
                                Download for Mac
                            </a>
                        </div>
                        <p style="margin-top: 1rem; font-size: 0.9rem; color: #666;">
                            After downloading, follow the installation instructions in the related articles mentioned
                            above.
                        </p>
                    </div>

                    <div class="keyboard-image-container">
                        <h3 class="table-title">Windows - Unshifted Layout</h3>
                        <img src="/articles/images/karshon-keyboard/windows-unshifted.jpeg"
                            alt="Windows Unshifted Keyboard Layout" class="keyboard-image">
                        <p class="image-caption">Default keyboard layout for Windows users</p>
                    </div>

                    <div class="keyboard-image-container">
                        <h3 class="table-title">Windows - Shifted Layout</h3>
                        <img src="/articles/images/karshon-keyboard/windows-shifted.jpeg" alt="Windows Shifted Keyboard Layout"
                            class="keyboard-image">
                        <p class="image-caption">Shift key combinations for Windows users</p>
                    </div>

                    <div class="keyboard-image-container">
                        <h3 class="table-title">Mac - Unshifted Layout</h3>
                        <img src="/articles/images/karshon-keyboard/mac-unshifted.jpeg" alt="Mac Unshifted Keyboard Layout"
                            class="keyboard-image">
                        <p class="image-caption">Default keyboard layout for Mac users</p>
                    </div>

                    <div class="keyboard-image-container">
                        <h3 class="table-title">Mac - Shifted Layout</h3>
                        <img src="/articles/images/karshon-keyboard/mac-shifted.jpeg" alt="Mac Shifted Keyboard Layout"
                            class="keyboard-image">
                        <p class="image-caption">Shift key combinations for Mac users</p>
                    </div>
                </div>
            </section>

            <section class="article-section">
                <h2 class="section-title">Keybinding Reference Table</h2>
                <div class="section-content">
                    <p>Below is a comprehensive reference table showing the key mappings for the Syriac Phonetic
                        keyboard and their corresponding East Syriac and Karshon characters.</p>

                    <h3 class="table-title">Unshifted Layout</h3>
                    <div class="keyboard-table-container">
                        <table class="keyboard-table">
                            <thead>
                                <tr>
                                    <th>English Key</th>
                                    <th>Syriac Letter</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>a</td>
                                    <td class="syriac-char">ܐ</td>
                                    <td>Alaph</td>
                                </tr>
                                <tr>
                                    <td>b</td>
                                    <td class="syriac-char">ܒ</td>
                                    <td>Beth</td>
                                </tr>
                                <tr>
                                    <td>g</td>
                                    <td class="syriac-char">ܓ</td>
                                    <td>Gamal</td>
                                </tr>
                                <tr>
                                    <td>d</td>
                                    <td class="syriac-char">ܕ</td>
                                    <td>Dalath</td>
                                </tr>

                                <tr>
                                    <td>h</td>
                                    <td class="syriac-char">ܗ</td>
                                    <td>He</td>
                                </tr>
                                <tr>
                                    <td>w</td>
                                    <td class="syriac-char">ܘ</td>
                                    <td>Waw</td>
                                </tr>
                                <tr>
                                    <td>z</td>
                                    <td class="syriac-char">ܙ</td>
                                    <td>Zain</td>
                                </tr>
                                <tr>
                                    <td>;</td>
                                    <td class="syriac-char">ܚ</td>
                                    <td>Heth</td>
                                </tr>

                                <tr>
                                    <td>j</td>
                                    <td class="syriac-char">ܛ</td>
                                    <td>Teth</td>
                                </tr>
                                <tr>
                                    <td>y</td>
                                    <td class="syriac-char">ܝ</td>
                                    <td>Yodh</td>
                                </tr>
                                <tr>
                                    <td>k</td>
                                    <td class="syriac-char">ܟ</td>
                                    <td>Kaph</td>
                                </tr>
                                <tr>
                                    <td>l</td>
                                    <td class="syriac-char">ܠ</td>
                                    <td>Lamadh</td>
                                </tr>
                                <tr>
                                    <td>m</td>
                                    <td class="syriac-char">ܡ</td>
                                    <td>Mim</td>
                                </tr>
                                <tr>
                                    <td>n</td>
                                    <td class="syriac-char">ܢ</td>
                                    <td>Nun</td>
                                </tr>
                                <tr>
                                    <td>s</td>
                                    <td class="syriac-char">ܣ</td>
                                    <td>Semkath</td>
                                </tr>
                                <tr>
                                    <td>i</td>
                                    <td class="syriac-char">ܥ</td>
                                    <td>Ae</td>
                                </tr>
                                <tr>
                                    <td>p</td>
                                    <td class="syriac-char">ܦ</td>
                                    <td>Pe</td>
                                </tr>
                                <tr>
                                    <td>x</td>
                                    <td class="syriac-char">ܨ</td>
                                    <td>Sadhe</td>
                                </tr>
                                <tr>
                                    <td>q</td>
                                    <td class="syriac-char">ܩ</td>
                                    <td>Qop</td>
                                </tr>
                                <tr>
                                    <td>r</td>
                                    <td class="syriac-char">ܪ</td>
                                    <td>Resh</td>
                                </tr>
                                <tr>
                                    <td>v</td>
                                    <td class="syriac-char">ܫ</td>
                                    <td>Shin</td>
                                </tr>
                                <tr>
                                    <td>t</td>
                                    <td class="syriac-char">ܬ</td>
                                    <td>Taw</td>
                                </tr>
                                <tr>
                                    <td>' (Apostrophe)</td>
                                    <td class="syriac-char">ܞ</td>
                                    <td>Yodh-He</td>
                                </tr>
                                <tr>
                                    <td>, (Comma)</td>
                                    <td class="syriac-char">܀</td>
                                    <td>End of Paragraph</td>
                                </tr>
                                <tr>
                                    <td>/ (Slash)</td>
                                    <td class="syriac-char">܇</td>
                                    <td>Colon</td>
                                </tr>
                                <tr>
                                    <td>\\ (Backslash)</td>
                                    <td class="syriac-char">܆</td>
                                    <td>Colon</td>
                                </tr>
                                <tr>
                                    <td>. (Period)</td>
                                    <td class="syriac-char">.</td>
                                    <td>Period</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    <h3 class="table-title">Shifted Layout - Karshon Letters</h3>
                    <div class="keyboard-table-container">
                        <table class="keyboard-table">
                            <thead>
                                <tr>
                                    <th>Key Combination</th>
                                    <th>Character</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Shift + q</td>
                                    <td class="syriac-char">ࡠ</td>
                                    <td><span class="malayalam-char">ങ</span> (Nga)</td>
                                </tr>
                                <tr>
                                    <td>Shift + w</td>
                                    <td class="syriac-char">ࡡ</td>
                                    <td><span class="malayalam-char">ജ</span> (Ja)</td>
                                </tr>
                                <tr>
                                    <td>Shift + e</td>
                                    <td class="syriac-char">ࡢ</td>
                                    <td><span class="malayalam-char">ഞ</span> (Nya)</td>
                                </tr>
                                <tr>
                                    <td>Shift + r</td>
                                    <td class="syriac-char">ࡣ</td>
                                    <td><span class="malayalam-char">ട</span> (Tta)</td>
                                </tr>
                                <tr>
                                    <td>Shift + t</td>
                                    <td class="syriac-char">ࡤ</td>
                                    <td><span class="malayalam-char">ണ</span> (Nna)</td>
                                </tr>
                                <tr>
                                    <td>Shift + y</td>
                                    <td class="syriac-char">ࡥ</td>
                                    <td><span class="malayalam-char">ന</span> (Na)</td>
                                </tr>
                                <tr>
                                    <td>Shift + a</td>
                                    <td class="syriac-char">ࡦ</td>
                                    <td><span class="malayalam-char">ഭ</span> (Bha)</td>
                                </tr>
                                <tr>
                                    <td>Shift + s</td>
                                    <td class="syriac-char">ࡧ</td>
                                    <td><span class="malayalam-char">ര</span> (Ra)</td>
                                </tr>
                                <tr>
                                    <td>Shift + d</td>
                                    <td class="syriac-char">ࡨ</td>
                                    <td><span class="malayalam-char">ള</span> (Lla)</td>
                                </tr>
                                <tr>
                                    <td>Shift + f</td>
                                    <td class="syriac-char">ࡩ</td>
                                    <td><span class="malayalam-char">ഴ</span> (Zha)</td>
                                </tr>
                                <tr>
                                    <td>Shift + g</td>
                                    <td class="syriac-char">ࡪ</td>
                                    <td><span class="malayalam-char">ഷ</span> (Sha)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="table-title">Shifted Layout - Vowels</h3>
                    <div class="keyboard-table-container">
                        <table class="keyboard-table">
                            <thead>
                                <tr>
                                    <th>Key Combination</th>
                                    <th>Character</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Shift + z</td>
                                    <td class="syriac-char">◌ܲ</td>
                                    <td>Ptaha - Short 'a' - <span class="syriac-char">ܐܲ</span></td>
                                </tr>
                                <tr>
                                    <td>Shift + x</td>
                                    <td class="syriac-char">◌ܵ</td>
                                    <td>Zqapha - Long 'a' - <span class="syriac-char">ܐܵ</span></td>
                                </tr>
                                <tr>
                                    <td>Shift + c</td>
                                    <td class="syriac-char">◌ܸ</td>
                                    <td>Zlama Pshiqa - Short 'e' - <span class="syriac-char">ܐܸ</span></td>
                                </tr>
                                <tr>
                                    <td>Shift + v</td>
                                    <td class="syriac-char">◌ܼ</td>
                                    <td>Hwasa-Rwasa - <span class="syriac-char">ܐܘܼ ܐܝܼ</span></td>
                                </tr>
                                <tr>
                                    <td>Shift + b</td>
                                    <td class="syriac-char">◌ܿ</td>
                                    <td>Rwaha - <span class="syriac-char">ܐܘܿ</span></td>
                                </tr>
                                <tr>
                                    <td>Shift + n</td>
                                    <td class="syriac-char">◌ܹ</td>
                                    <td>Zlama Qasya - Long 'e' - <span class="syriac-char">ܐܹ</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="table-title">Shifted Layout - Others</h3>
                    <div class="keyboard-table-container">
                        <table class="keyboard-table">
                            <thead>
                                <tr>
                                    <th>Key Combination</th>
                                    <th>Character</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Shift + m</td>
                                    <td class="syriac-char">◌݂</td>
                                    <td>Rukkakha - soft - <span class="syriac-char">ܬ݂ ܦ݂ ܒ݂ ܟ݂ ܕ݂</span></td>
                                </tr>
                                <tr>
                                    <td>Shift + u</td>
                                    <td class="syriac-char">◌݁</td>
                                    <td>Qushaya - hard - <span class="syriac-char">ܕ݁ ܬ݁ ܦ݁ ܒ݁ ܟ݁</span></td>
                                </tr>
                                <tr>
                                    <td>Shift + |</td>
                                    <td class="syriac-char">:</td>
                                    <td>Colon</td>
                                </tr>
                                <tr>
                                    <td>Shift + j</td>
                                    <td class="syriac-char">ـ</td>
                                    <td>Kashida/Tatweel - extender - <span class="syriac-char">ܒــــــܐ</span></td>
                                </tr>
                                <tr>
                                    <td>Shift + i</td>
                                    <td class="syriac-char">̈</td>
                                    <td>Combining Diaresis - Plural Dots - <span class="syriac-char">ܪ̈ ܩ̈ ܒ̈ </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Shift + o</td>
                                    <td class="syriac-char">̄</td>
                                    <td>Combining Macron - Horizontal line above - <span class="syriac-char">ܪ̄ ܩ̄ ܒ̄
                                        </span></td>
                                </tr>
                                <tr>
                                    <td>Shift + l</td>
                                    <td class="syriac-char">̱</td>
                                    <td>Combining Macron Below - Horizontal line below - <span class="syriac-char">ܪ̱ ܩ̱
                                            ܒ̱ </span></td>
                                </tr>
                                <tr>
                                    <td>Shift + p</td>
                                    <td class="syriac-char">̇</td>
                                    <td>Combining Dot Above - Don't confuse with Qushaya - <span class="syriac-char">ܡ̇ܢ
                                        </span></td>
                                </tr>
                                <tr>
                                    <td>Shift + ;</td>
                                    <td class="syriac-char">̣</td>
                                    <td>Combining Dot Below - Don't confuse with Rukakha - <span class="syriac-char">ܡ̣ܢ
                                        </span></td>
                                </tr>
                                <tr>
                                    <td>Shift + ,</td>
                                    <td class="syriac-char">،</td>
                                    <td>Arabic Comma</td>
                                </tr>
                                <tr>
                                    <td>Shift + .</td>
                                    <td class="syriac-char">؛</td>
                                    <td>Arabic Semicolon</td>
                                </tr>
                                <tr>
                                    <td>Shift + /</td>
                                    <td class="syriac-char">؟</td>
                                    <td>Arabic Question Mark</td>
                                </tr>
                                <tr>
                                    <td>Shift + \` (Backtick)</td>
                                    <td class="syriac-char">̮</td>
                                    <td>Combining Breve below - <span class="syriac-char">ܦ̮ </span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="table-title">Right Alt (Windows)/ Right Option (Mac) Layout</h3>
                    <div class="keyboard-table-container">
                        <table class="keyboard-table">
                            <thead>
                                <tr>
                                    <th>Key Combination</th>
                                    <th>Character</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Right Alt/Option + u</td>
                                    <td class="syriac-char">݇</td>
                                    <td>Syriac Oblique Line Above - silent letters - <span class="syriac-char"> ܐ݇ܢܵܫܵܐ
                                        </span></td>
                                </tr>
                                <tr>
                                    <td>Right Alt/Option + j</td>
                                    <td class="syriac-char">݈</td>
                                    <td>Syriac Oblique Line Below - <span class="syriac-char"> ܐ݈ </span></td>
                                </tr>
                                <tr>
                                    <td>Right Alt/Option + v</td>
                                    <td class="syriac-char"></td>
                                    <td>Zero Width Joiner - <span class="syriac-char">ܐܲܒ݂ܲܢ&zwj; ܐܲܒܲܟ̱&zwj; </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Right Alt/Option + b</td>
                                    <td class="syriac-char"></td>
                                    <td>Zero Width Non-Joiner - used to break apart a ligature <span
                                            class="syriac-char"></span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </div>
            </section>

            

            <a href="/articles" class="back-to-home">
                Back to Articles
            </a>`;

const styles = `
        .back-to-home { display: none !important; }

        

        

        

        

        /* Navigation Styles */
        

        

        

        

        

        

        

        

        

        /* Article Styles */
        .article-content {
            box-sizing: border-box;
        }

        .article-header {
            padding: 0 0 1.5rem;
            margin-bottom: 2rem;
            text-align: center;
            border-bottom: 1px solid rgba(138, 60, 60, 0.12);
        }

        .article-title {
            font-size: 2.5rem;
            color: var(--primary-color);
            margin-bottom: 1rem;
            position: relative;
            display: inline-block;
        }

        .article-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background-color: var(--secondary-color);
        }

        .article-meta {
            margin: 1.5rem 0;
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

        .article-section {
            margin-bottom: 3rem;
        }

        .section-title {
            color: var(--primary-color);
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            border-bottom: 2px solid var(--light-bg);
            padding-bottom: 0.5rem;
        }

        .section-content {
            font-size: 0.95rem;
            line-height: 1.8;
            color: #444;
        }

        .section-content p {
            margin-bottom: 1.5rem;
        }

        .article-image-container {
            margin: 2rem 0;
            text-align: center;
        }

        .article-image {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .article-image-caption {
            margin-top: 0.8rem;
            font-size: 0.9rem;
            color: #666;
            font-style: italic;
        }

        @media (max-width: 768px) {
            

            

            

            

            
        }

        @media (max-width: 480px) {
            

            

            .article-content {
                margin: 0;
            }

            .keyboard-table-container {
                margin: 0;
                padding: 0;
                width: 100%;
            }

            

            

            

            

            .article-title {
                font-size: 2rem;
            }

            .article-header {
            padding: 2rem 1rem;
        }

            .article-meta {
                flex-direction: column;
                gap: 1rem;
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

        /* Table Styles */
        .keyboard-table-container {
            overflow-x: auto;
            margin: 1rem 0;
            -webkit-overflow-scrolling: touch;
            width: 100%;
            box-sizing: border-box;
        }

        .keyboard-table {
            width: 100%;
            border-collapse: collapse;
            border: 1px solid #ddd;
            margin: 0;
            table-layout: fixed;
        }

        .keyboard-table th,
        .keyboard-table td {
            padding: 12px;
            border: 1px solid #ddd;
            vertical-align: middle;
            word-wrap: break-word;
            overflow-wrap: break-word;
        }

        .keyboard-table th {
            text-align: left;
            background-color: var(--light-bg);
            white-space: normal;
        }

        .keyboard-table td:first-child {
            width: 20%;
        }

        .keyboard-table td:nth-child(2) {
            width: 30%;
        }

        .keyboard-table td:last-child {
            width: 50%;
        }

        .keyboard-table .syriac-char {
            font-family: 'Karshon';
            src: url('/assets/fonts/Karshon.ttf') format('truetype');
            font-size: 2em !important;
            line-height: 1.2;
            text-align: center;
        }

        .malayalam-char {
            font-size: 1.5em;
            line-height: 1.2;
        }

        .table-title {
            color: var(--primary-color);
            margin-top: 2rem;
            font-size: 1.4rem;
            font-weight: 600;
        }

        @media (max-width: 768px) {
            .article-title {
                font-size: 2rem;
            }

            .section-title {
                font-size: 1.5rem;
            }

            .table-title {
                font-size: 1.2rem;
            }

            .keyboard-table th,
            .keyboard-table td {
                padding: 8px;
                font-size: 0.9rem;
            }

            .keyboard-table .syriac-char {
                font-size: 1.8em !important;
            }

            .malayalam-char {
                font-size: 1.3em;
            }

            .article-header {
            padding: 2rem 1rem;
        }

            

            .section-content {
                font-size: 1rem;
            }


        }

        @media (max-width: 480px) {
            .article-title {
                font-size: 1.8rem;
            }

            .section-title {
                font-size: 1.3rem;
            }

            .table-title {
                font-size: 1.1rem;
            }



            .keyboard-table .syriac-char {
                font-size: 1.6em !important;
            }

            .malayalam-char {
                font-size: 1.2em;
            }

            .article-header {
            padding: 1.5rem 0.8rem;
        }

            

            .section-content {
                font-size: 0.95rem;
            }

            .article-meta {
                flex-direction: column;
                gap: 0.5rem;
                font-size: 0.9rem;
            }

            

            
        }

        /* Improve table scrolling on touch devices */
        @media (hover: none) {
            .keyboard-table-container {
                -webkit-overflow-scrolling: touch;
                scrollbar-width: thin;
            }
        }

        .keyboard-layout-images {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            margin: 2rem 0;
        }

        .keyboard-image-container {
            background: var(--light-bg);
            padding: 1rem;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            margin-bottom: 2rem;
        }

        .keyboard-image-container:last-child {
            margin-bottom: 0;
        }

        .keyboard-image {
            width: 100%;
            height: auto;
            border-radius: 4px;
            margin: 1rem 0;
        }

        .image-caption {
            text-align: center;
            color: #666;
            font-style: italic;
            margin-top: 0.5rem;
            font-size: 0.9rem;
        }

        @media (max-width: 768px) {
            .keyboard-layout-images {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }

            .keyboard-image-container {
                padding: 0.8rem;
            }
        }

        @media (max-width: 480px) {
            .keyboard-layout-images {
                gap: 1rem;
            }

            .keyboard-image-container {
                padding: 0.6rem;
            }

            .image-caption {
                font-size: 0.85rem;
            }
        }

        /* Related Articles Styles */
        .related-articles-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .related-articles-list li {
            margin-bottom: 1.5rem;
            padding: 1rem;
            background-color: var(--light-bg);
            border-radius: 8px;
            transition: transform 0.3s ease;
        }

        .related-articles-list li:hover {
            transform: translateY(-2px);
        }

        .related-articles-list a {
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            display: block;
            margin-bottom: 0.5rem;
        }

        .related-articles-list a:hover {
            color: var(--secondary-color);
        }

        .related-articles-list p {
            margin: 0;
            color: #666;
            font-size: 0.95rem;
        }

        @media (max-width: 768px) {
            .related-articles-list li {
                padding: 0.8rem;
            }

            .related-articles-list a {
                font-size: 1rem;
            }

            .related-articles-list p {
                font-size: 0.9rem;
            }
        }

        @media (max-width: 480px) {
            .related-articles-list li {
                padding: 0.6rem;
            }

            .related-articles-list a {
                font-size: 0.95rem;
            }

            .related-articles-list p {
                font-size: 0.85rem;
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
