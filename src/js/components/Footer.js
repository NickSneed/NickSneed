import Img from './Img.js';
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
                            <Img src={logoInsta} alt="Visit my Instagram" height={30} />
                        </a>
                        <a href="https://bobrumbly.com">
                            <Img src={logoTumblr} alt="Visit my Tumblr" height={30} />
                        </a>
                        <a href="https://github.com/NickSneed/">
                            <Img src={logoGitHub} alt="Visit my GitHub" height={30} />
                        </a>
                        <a href="https://x.com/BobRumbly">
                            <Img src={logoX} alt="Visit my X/Twitter" height={30} />
                        </a>
                        <a href="https://www.linkedin.com/in/nsneed/">
                            <Img src={logoLinkedIn} alt="Visit my LinkedIn" height={30} />
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