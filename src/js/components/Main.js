import familyImg from '../../img/comp/family.png'
import headerInsta from '../../img/comp/header-insta.png'
import headerTumblr from '../../img/comp/header-tumblr.png'
import headerGitHub from '../../img/comp/header-github.png'

function Main() {
    const html = (
        <>
            <div className="main">
                <div className="row align-vc">
                    <div className="col-1 no-padding-sm">
                        <img src={familyImg} alt="My family" />
                    </div>
                    <div className="col-2">
                        <p className="txt-l">I&apos;m Nick Sneed, a web developer/designer based in O&apos; Fallon, MO. I specialize in creating beautiful responsive websites. I combine my love for design and technology to create online experiences that are both visually stunning and user-friendly.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1">
                        <img src={headerInsta} alt="Game Boy Camera" className="wide-sm" />
                        <h2>Instagram</h2>
                        <p>
                            Reliving childhood memories, one pixel at a time on my Instagram. Exploring the world through the limited palette of the Game Boy Camera.
                        </p>
                        <a href="https://www.instagram.com/bobrumbly/" className="btn">Shoot</a>
                    </div>
                    <div className="col-1">
                        <img src={headerTumblr} alt="Tumblr" className="wide-sm" />
                        <h2>Tumblr</h2>
                        <p>
                            Tumblr is my digital sketchbook! I love creating art inspired by my favorite video games. View my latest creations!
                        </p>
                        <a href="https://bobrumbly.com" className="btn">View</a>
                    </div>
                    <div className="col-1">
                        <img src={headerGitHub} alt="Tumblr" className="wide-sm" />
                        <h2>GitHub</h2>
                        <p>
                            Browse my GitHub! I love coding and exploring new technologies. This is where I share my experiments and creations.
                        </p>
                        <a href="https://github.com/NickSneed/" className="btn">Play</a>
                    </div>
                </div>
            </div>
        </>
    )
    return html;
}

export default Main;

