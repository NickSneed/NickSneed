import { LazyLoadImage } from 'react-lazy-load-image-component';
import logoInsta from '../../img/svg/logo-instagram.svg'
import logoTumblr from '../../img/comp/logo-tumblr.png'
import logoGitHub from '../../img/comp/logo-github.png'
import logoX from '../../img/svg/logo-x.svg'
import logoLinkedIn from '../../img/comp/logo-linkedin.png'

function Footer() {
    const html = (
        <>
            <footer>
                <hr />
                <div className="content">
                    <div className="social">
                        <a href="https://www.instagram.com/bobrumbly/">
                            <LazyLoadImage src={logoInsta} alt="Visit my Instagram" />
                        </a>
                        <a href="https://bobrumbly.com">
                            <LazyLoadImage src={logoTumblr} alt="Visit my Tumblr" />
                        </a>
                        <a href="https://github.com/NickSneed/">
                            <LazyLoadImage src={logoGitHub} alt="Visit my GitHub" />
                        </a>
                        <a href="https://x.com/BobRumbly">
                            <LazyLoadImage src={logoX} alt="Visit my X/Twitter" />
                        </a>
                        <a href="https://www.linkedin.com/in/nsneed/">
                            <LazyLoadImage src={logoLinkedIn} alt="Visit my LinkedIn" />
                        </a>
                    </div>
                    <div className="copy">
                        <p>&copy; 2025 Nick Sneed</p>
                    </div>
                </div>
            </footer>
        </>
    )
    return html;
}

export default Footer;