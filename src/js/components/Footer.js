import Img from '@/js/components/Img.js';
import Copy from '@/js/components/Copy.js';
import str from '@/js/utils/strings.js';

// Import images
import logoInsta from '@/img/svg/logo-instagram.svg';
import logoTumblr from '@/img/comp/logo-tumblr.png';
import logoGitHub from '@/img/comp/logo-github.png';
import logoX from '@/img/svg/logo-x.svg';

import * as styles from './Footer.module.css';

// Footer component
const Footer = () => {
    // Component HTML
    const html = (
        <footer>
            <div className={styles.footer}>
                <div className={styles.footerContainer}>
                    <div className={styles.socialLinks}>
                        <a
                            href="https://www.instagram.com/bobrumbly/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Img
                                src={logoInsta}
                                alt={str('footerInstaAlt')}
                                display="inline-block"
                                height="100%"
                            />
                        </a>
                        <a
                            href="https://bobrumbly.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Img
                                src={logoTumblr}
                                alt={str('footerTumblrAlt')}
                                display="inline-block"
                                height="100%"
                            />
                        </a>
                        <a
                            href="https://github.com/NickSneed/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Img
                                src={logoGitHub}
                                alt={str('footerGitHubAlt')}
                                display="inline-block"
                                height="100%"
                            />
                        </a>
                        <a
                            href="https://x.com/BobRumbly"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Img
                                src={logoX}
                                alt={str('footerXAlt')}
                                display="inline-block"
                                height="100%"
                            />
                        </a>
                    </div>
                    <Copy />
                </div>
            </div>
        </footer>
    );

    return html;
};

export default Footer;
