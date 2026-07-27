import type { Metadata } from "next";
import { ArticleShell } from "@/components/article-shell";
import { getArticle } from "@/lib/articles";

const slug = "typing-karshon-in-libreoffice-writer-on-windows";
const meta = getArticle(slug) ?? {
  slug,
  title: "Typing Karshon in LibreOffice Writer on Windows",
  description: "A step-by-step guide to type Karshon (Suriyani Malayalam) in LibreOffice Writer on Windows",
  author: "Hendo Academy",
  date: "",
  excerpt: "A step-by-step guide to type Karshon (Suriyani Malayalam) in LibreOffice Writer on Windows",
  listed: false,
  hasComments: true,
};

export const metadata: Metadata = {
  title: "Typing Karshon in LibreOffice Writer on Windows",
  description: "A step-by-step guide to type Karshon (Suriyani Malayalam) in LibreOffice Writer on Windows",
  openGraph: {
    type: "article",
    url: `https://www.hendoacademy.org/articles/${slug}`,
    title: "Typing Karshon in LibreOffice Writer on Windows",
    description: "A step-by-step guide to type Karshon (Suriyani Malayalam) in LibreOffice Writer on Windows",
    images: ["/assets/images/logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Typing Karshon in LibreOffice Writer on Windows",
    description: "A step-by-step guide to type Karshon (Suriyani Malayalam) in LibreOffice Writer on Windows",
    images: ["/assets/images/logo.jpg"],
  },
  alternates: {
    canonical: `https://www.hendoacademy.org/articles/${slug}`,
  },
};

const html = `<header class="article-header">
                <h1 class="article-title">Typing Karshon in LibreOffice Writer on Windows</h1>
                <div class="article-meta">
                    <span>Binu George</span>
                    <span>April 30, 2025</span>
                </div>
            </header>

            <section class="article-section">
                <h2 class="section-title">Related Articles</h2>
                <div class="section-content">
                    <ul style="list-style: none; padding: 0; margin: 1rem 0;">
                        <li style="margin-bottom: 1rem;">
                            <a href="/articles/typing-karshon-in-libreoffice-writer-on-macos"
                                style="color: var(--primary-color); text-decoration: none; font-weight: 600; display: inline-block; padding: 0.5rem 1rem; background-color: var(--light-bg); border-radius: 4px; transition: background-color 0.3s;">
                                Typing Karshon in LibreOffice Writer on macOS
                            </a>
                        </li>
                        <li style="margin-bottom: 1rem;">
                            <a href="/articles/syriac-phonetic-karshon-keyboard-layout-and-usage"
                                style="color: var(--primary-color); text-decoration: none; font-weight: 600; display: inline-block; padding: 0.5rem 1rem; background-color: var(--light-bg); border-radius: 4px; transition: background-color 0.3s;">
                                Karshon Keyboard Layout Guide
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <section class="article-section">
                <h2 class="section-title">Introduction</h2>
                <div class="section-content">
                    <p>This guide will walk you through the process of setting up and using Karshon (Suriyani Malayalam)
                        typing in LibreOffice Writer on Windows. While Microsoft Word is a popular word processor, it
                        currently lacks full support for typing Karshon, making LibreOffice Writer the recommended
                        choice for this purpose. Follow these steps carefully to ensure proper functionality.</p>
                </div>
            </section>

            <section class="article-section">
                <h2 class="section-title">Prerequisites</h2>
                <div class="section-content">
                    <p>Before you begin, make sure you have the following:</p>
                    <ul class="step-list">
                        <li>Windows 11 operating system</li>
                        <li>Administrator access to install software and fonts</li>
                        <li>Internet connection to download required files</li>
                    </ul>
                </div>
            </section>

            <section class="article-section">
                <h2 class="section-title">Installation Steps</h2>
                <div class="section-content">
                    <ol class="step-list">
                        <li>
                            <strong>Install LibreOffice</strong>
                            <p>Download and install the latest version of LibreOffice from the official website: <a
                                    href="https://www.libreoffice.org/download/download-libreoffice/"
                                    target="_blank">https://www.libreoffice.org/download/download-libreoffice/</a></p>

                        </li>

                        <li>
                            <strong>Install Karshon Keyboard</strong>
                            <p>Download Hendo Academy's Syriac Phonetic - Karshon Keyboard from <a
                                    href="/articles/files/karshon_keyboard.zip" target="_blank">here</a>. Extract the downloaded
                                karshon-keyboard.zip file and double click the setup.exe file to install the keyboard.
                            </p>
                            <div class="step-image">
                                <img src="/articles/images/karshon-typing/karshon-keyboard-install.png"
                                    alt="Karshon keyboard installation">
                                <div class="step-image-caption">Installing the Karshon keyboard</div>
                            </div>
                            <div class="step-image">
                                <img src="/articles/images/karshon-typing/karshon-keyboard-install-success.png"
                                    alt="Karshon keyboard installation">
                                <div class="step-image-caption">Installation successful</div>
                            </div>
                        </li>

                        <li>
                            <strong>Install Syriac Language Pack</strong>
                            <p>Open Windows Settings, go to Time & Language, click on Language, click on "Add a
                                Language", search for Syriac, and click Next to install.</p>
                            <div class="step-image">
                                <img src="/articles/images/karshon-typing/settings-language.png"
                                    alt="Adding Syriac language in Windows">
                                <div class="step-image-caption">Click on "Add a Language"</div>
                            </div>
                            <div class="step-image">
                                <img src="/articles/images/karshon-typing/install-syriac-language.png" alt="Search for Syriac">
                                <div class="step-image-caption">Search for Syriac, click Next to install</div>
                            </div>
                            <div class="step-image">
                                <img src="/articles/images/karshon-typing/post-installation.png"
                                    alt="Syriac language installed">
                                <div class="step-image-caption">Syriac language installed</div>
                            </div>
                        </li>

                        <li>
                            <strong>Configure Keyboard</strong>
                            <p>Once the Syriac language pack is installed, click on the three dots next to the Syriac
                                section and select "Language Options". In the options screen, click "Add a keyboard" and
                                select "Syriac Phonetic - Karshon".</p>
                            <div class="step-image">
                                <img src="/articles/images/karshon-typing/language-options-menu.png"
                                    alt="Configuring Karshon keyboard">
                                <div class="step-image-caption">Adding Karshon keyboard in language options</div>
                            </div>
                            <div class="step-image">
                                <img src="/articles/images/karshon-typing/language-options.png" alt="Language options">
                                <div class="step-image-caption">Click on "Add a keyboard" </div>
                            </div>
                            <div class="step-image">
                                <img src="/articles/images/karshon-typing/add-keyboard.png" alt="Add keyboard">
                                <div class="step-image-caption">Select "Syriac Phonetic - Karshon"</div>
                            </div>
                        </li>

                        <li>
                            <strong>Install a Karshon Font</strong>
                            <p>Download the East Syriac Adiabene font with Karshon letters from <a
                                    href="https://bethmardutho.org/malayalamgarshuni/" target="_blank">here</a>, or the
                                East Syriac Malankara font from <a
                                    href="/articles/hendo-academy-launches-kerala's-first-indigenous-east-syriac-and-karshon-unicode-font-east-syriac-malankara.html"
                                    target="_blank">here</a>. Double-click the .ttf file to install it.</p>

                            <div class="note-box">
                                <strong>Important Notice:</strong>
                                <p>The current version of the Karshon (Malayalam Garshuni) font available at Beth
                                    Mardutho's website is a preliminary release and may contain some limitations or
                                    display issues. We recommend waiting for the upcoming official release by Dr. George
                                    Kiraz of Beth Mardutho Institute, which will include comprehensive improvements and
                                    bug fixes. You may also use Hendo Academy's own East Syriac Malankara font as it is
                                    a more authentic, indigenous, and fully featured Karshon font.</p>
                            </div>

                        </li>
                    </ol>
                </div>
            </section>

            <section class="article-section">
                <h2 class="section-title">Using Karshon in LibreOffice Writer</h2>
                <div class="section-content">
                    <ol class="step-list">
                        <li>
                            <strong>Set Input Language</strong>
                            <p>Set Syriac and Syriac Phonetic - Karshon keyboard as the input language in Windows. Click
                                the language icon in the taskbar and select the Syriac Phonetic - Karshon keyboard, or
                                press Windows + Spacebar to switch between languages.</p>
                            <div class="step-image">
                                <img src="/articles/images/karshon-typing/selected-language-keyboard.png"
                                    alt="Setting input language">
                                <div class="step-image-caption">Selecting Karshon keyboard from language options</div>
                            </div>
                            <div class="step-image">
                                <img src="/articles/images/karshon-typing/installed-keyboards.png"
                                    alt="Select Syriac Phonetic - Karshon keyboard">
                                <div class="step-image-caption">Select Syriac Phonetic - Karshon keyboard</div>
                            </div>
                        </li>

                        <li>
                            <strong>Configure LibreOffice Writer</strong>
                            <p>Open LibreOffice Writer and select the Karshon font (the East Syriac Adiabene font or the
                                East Syriac Malankara font you installed earlier) from the font dropdown menu. If it is
                                not available in the dropdown menu, please close the LibreOffice Writer and open it
                                again.</p>
                            <div class="step-image">
                                <img src="/articles/images/karshon-typing/select-karshon-font-libre-office.png"
                                    alt="Selecting Karshon font in LibreOffice">
                                <div class="step-image-caption">Selecting Karshon font in LibreOffice Writer</div>
                            </div>
                        </li>

                        <li>
                            <strong>Enable Complex Text Layout</strong>
                            <p>Go to Tools > Language > For All Text > More and check the "Complex Text Layout"
                                checkbox. Select any version of Arabic in the dropdown menu (since Syriac is not
                                available in the list, Arabic is the closest match).</p>
                            <div class="step-image">
                                <img src="/articles/images/karshon-typing/language-selection-libreoffice-writer.png"
                                    alt="Change Language">
                                <div class="step-image-caption">Set Language</div>
                            </div>
                            <div class="step-image">
                                <img src="/articles/images/karshon-typing/complext-text-layout-language.png"
                                    alt="Enabling complex text layout">
                                <div class="step-image-caption">Select any version of Arabic from the dropdown menu
                                </div>
                            </div>
                        </li>

                        <li>
                            <strong>Set Text Direction</strong>
                            <p>Look for the text direction buttons on the right side of the top bar and select the
                                right-to-left text direction option.</p>
                            <div class="step-image">
                                <img src="/articles/images/karshon-typing/rtl-select.png" alt="Setting text direction">
                                <div class="step-image-caption">Setting right-to-left text direction</div>
                            </div>
                        </li>
                        <li>
                            <strong>That's it!</strong>
                            <p>You should now be able to type in Karshon. If you encounter any issues, please refer to
                                the troubleshooting section below.</p>
                            <div class="step-image">
                                <img src="/articles/images/karshon-typing/karshon-typing.gif" alt="Karshon typing">
                                <div class="step-image-caption">കർശോൻ ടൈപ്പ് ചെയ്യാൻ ഇനി പറ്റും!</div>
                            </div>
                        </li>
                    </ol>

                    <div class="note-box">
                        <p><strong>Note:</strong> When you start typing in Karshon, the document language should
                            automatically change to Syriac-Turkiye (Syr-TR). You can verify this at the bottom of the
                            page. You can change the document language by clicking on it.</p>
                    </div>
                </div>
            </section>

            <section class="article-section">
                <h2 class="section-title">Troubleshooting</h2>
                <div class="section-content">
                    <ul class="step-list">
                        <li>If you see Estangela letters instead of Karshon, make sure you've selected the Karshon
                            font(or East Syriac Adiabene font your installed earlier) from the dropdown menu. You might
                            need to do this a few times in the beginning.</li>
                        <li>If the text direction is incorrect, ensure you've selected the right-to-left text direction
                            option.</li>
                        <li>If the keyboard isn't working, verify that you've installed both the Syriac language pack
                            and the Karshon keyboard correctly.</li>
                        <li>If you face any issues, please make a comment below</li>
                    </ul>
                </div>
            </section>

            

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

        .article-title {
            font-size: 2rem;
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

        .article-section {
            margin-bottom: 3rem;
        }

        .section-title {
            color: var(--primary-color);
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid var(--light-bg);
        }

        .section-content {
            font-size: 1rem;
            line-height: 1.8;
        }

        .section-content p {
            margin-bottom: 1.2rem;
        }

        .section-content img {
            max-width: 100%;
            height: auto;
            margin: 1.5rem 0;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .section-content a {
            word-wrap: break-word;
            overflow-wrap: break-word;
            hyphens: auto;
        }

        .step-list {
            list-style-type: none;
            counter-reset: step-counter;
        }

        .step-list li {
            margin-bottom: 2rem;
            padding-left: 3rem;
            position: relative;
            font-size: 1rem;
        }

        .step-list li::before {
            content: counter(step-counter);
            counter-increment: step-counter;
            position: absolute;
            left: 0;
            top: 0;
            width: 1.8rem;
            height: 1.8rem;
            background-color: var(--light-bg);
            color: var(--primary-color);
            border: 2px solid var(--primary-color);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: 0.8rem;
        }

        .note-box {
            background-color: var(--light-bg);
            border-left: 4px solid var(--secondary-color);
            padding: 1rem;
            margin: 1.5rem 0;
            font-size: 0.95rem;
        }

        .warning-box {
            background-color: #fff3f3;
            border-left: 4px solid #ff6b6b;
            padding: 1rem;
            margin: 1.5rem 0;
            font-size: 0.95rem;
        }

        .warning-box strong {
            color: #d63031;
            display: block;
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

        .step-image {
            margin: 1rem 0 2rem;
            text-align: center;
        }

        .step-image img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .step-image-caption {
            margin-top: 0.5rem;
            font-size: 0.85rem;
            color: #666;
            font-style: italic;
        }

        /* Footer Styles */
        

        

        .footer-section h3 {
            color: var(--secondary-color);
            margin-bottom: 1rem;
        }

        .footer-section ul {
            list-style: none;
        }

        .footer-section ul li {
            margin-bottom: 0.5rem;
        }

        .footer-section a {
            color: #ddd;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .footer-section a:hover {
            color: var(--secondary-color);
        }

        

        

        

        

        /* Responsive Styles */
        @media (max-width: 1200px) {
            
        }

        @media (max-width: 480px) {
            .article-title {
                font-size: 1.7rem;
            }

            .article-header {
            padding: 2rem 0;
            margin-bottom: 1rem;
        }

            .article-content {
                font-size: 1rem;
                line-height: 1.6;
            }

            .article-content h2 {
                font-size: 1.3rem;
            }

            .article-content h3 {
                font-size: 1.2rem;
            }

            .article-content p {
                font-size: 1rem;
            }

            .note-box,
            .warning-box {
                padding: 0.8rem;
                margin: 1rem 0;
            }

            .note-box h4,
            .warning-box h4 {
                font-size: 1rem;
            }

            .step-list {
                padding-left: 1.2rem;
            }

            .step-list li {
                margin-bottom: 1.2rem;
            }

            .step-image {
                margin: 0.8rem 0;
            }

            .step-image-caption {
                font-size: 0.85rem;
            }

            .back-to-home {
                display: block;
                text-align: center;
                width: 100%;
            }

            

            

            

            .footer-section:last-child {
                margin-bottom: 0;
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
