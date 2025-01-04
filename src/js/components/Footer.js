import Img from './Img.js';
import Copy from './Copy.js';
import str from '../utils/strings.js';

// Import images
import logoInsta from '../../img/svg/logo-instagram.svg'
import logoTumblr from '../../img/comp/logo-tumblr.png'
import logoGitHub from '../../img/comp/logo-github.png'
import logoX from '../../img/svg/logo-x.svg'
import logoLinkedIn from '../../img/comp/logo-linkedin.png'

// Footer component
const Footer = () => {

    // Component HTML
    const html = (
        <footer>
            <hr />
            <div className="content">
                <div className="social">
                    <a href="https://www.instagram.com/bobrumbly/">
                        <Img src={logoInsta} alt={str('footerInstaAlt')} />
                    </a>
                    <a href="https://bobrumbly.com">
                        <Img src={logoTumblr} alt={str('footerTumblrAlt')} />
                    </a>
                    <a href="https://github.com/NickSneed/">
                        <Img src={logoGitHub} alt={str('footerGitHubAlt')} />
                    </a>
                    <a href="https://x.com/BobRumbly">
                        <Img src={logoX} alt={str('footerXAlt')} />
                    </a>
                    <a href="https://www.linkedin.com/in/nsneed/">
                        <Img src={logoLinkedIn} alt={str('footerLinkedInAlt')} />
                    </a>
                </div>
                <Copy />
            </div>
        </footer>
    )
    
    return html;
}

export default Footer;