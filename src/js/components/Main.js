import Img from './Img.js';
import familyImg from '../../img/comp/family.png'
import headerInsta from '../../img/comp/header-insta.png'
import headerTumblr from '../../img/comp/header-tumblr.png'
import headerGitHub from '../../img/comp/header-github.png'
import SocialTile from './SocialTile.js'

function Main() {
    const html = (
        <>
            <div className="main">
                <div className="row align-vc">
                    <div className="col-1 no-padding-sm">
                        <Img src={familyImg} alt="My family" percent={100} />
                    </div>
                    <div className="col-2">
                        <p className="txt-l">I&apos;m Nick Sneed, a web developer/designer based in O&apos; Fallon, MO. I specialize in creating beautiful responsive websites. I combine my love for design and technology to create online experiences that are both visually stunning and user-friendly.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1">
                        <SocialTile 
                            img={headerInsta} 
                            title="Instagram" 
                            text="Reliving childhood memories, one pixel at a time on my Instagram. Exploring the world through the limited palette of the Game" 
                            link="https://www.instagram.com/bobrumbly/"
                            alt="Game Boy Camera"
                            linkTxt="Shoot"
                        />
                    </div>
                    <div className="col-1">
                        <SocialTile
                            img={headerTumblr}
                            title="Tumblr"
                            text="Tumblr is my digital sketchbook! I love creating art inspired by my favorite video games. View my latest creations!"
                            link="https://bobrumbly.com"
                            alt="Tumblr"
                            linkTxt="View"
                        />
                    </div>
                    <div className="col-1">
                        <SocialTile
                            img={headerGitHub}
                            title="GitHub"
                            text="Browse my GitHub! I love coding and exploring new technologies. This is where I share my experiments and creations."
                            link="https://github.com/NickSneed/"
                            alt="GitHub"
                            linkTxt="Play"
                        />
                    </div>
                </div>
            </div>
        </>
    )
    return html;
}

export default Main;
