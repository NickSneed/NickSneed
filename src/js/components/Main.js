import Img from '@/js/components/Img.js';
import SocialTile from '@/js/components/SocialTile.js';
import SpaceLaunches from '@/js/components/SpaceLauches.js';
import str from '@/js/utils/strings.js';
import { useUser } from '@/js/context/UserContext.js';

// Import images
import familyImg from '@/img/comp/family.png';
import familyImgSmall from '@/img/comp/family-small.png';
import headerInsta from '@/img/comp/header-insta.png';
import headerTumblr from '@/img/comp/header-tumblr.png';
import headerGitHub from '@/img/comp/header-github.png';

import * as styles from './Main.module.css';

// Main component
const Main = () => {
    const { userID } = useUser();

    // Component HTML
    const html = (
        <div className={styles.main}>
            <div className={`${styles.full} ${styles.introContainer}`}>
                <div className={styles.mainimg}>
                    <Img
                        src={familyImg}
                        srcSmall={familyImgSmall}
                        alt="My family"
                        aspect="1 / 1"
                        width="100%"
                    />
                </div>
                <div className={styles.maincopy}>
                    <h2>{str('mainIntro1', true)}</h2>
                    <p>{str('mainIntro2', true)}</p>
                    <p>{str('mainIntro3', true)}</p>
                </div>
            </div>
            <div>
                <SocialTile
                    img={headerInsta}
                    title={str('socialTileInstaAlt')}
                    text={str('socialTileInsta', true, [userID])}
                    link="https://www.instagram.com/bobrumbly/"
                    alt={str('socialTileInstaAlt')}
                    linkTxt={str('socialTileInstaBt')}
                />
            </div>
            <div>
                <SocialTile
                    img={headerTumblr}
                    title={str('socialTileTumblrAlt')}
                    text={str('socialTileTumblr', true, [userID])}
                    link="https://bobrumbly.com"
                    alt={str('socialTileTumblrAlt')}
                    linkTxt={str('socialTileTumblrBt')}
                />
            </div>
            <div>
                <SocialTile
                    img={headerGitHub}
                    title={str('socialTileGitHubAlt')}
                    text={str('socialTileGitHub', true, [userID])}
                    link="https://github.com/NickSneed/"
                    alt={str('socialTileGitHubAlt')}
                    linkTxt={str('socialTileGitHubBt')}
                />
            </div>
            <div className={styles.full}>
                <hr />
                <SpaceLaunches />
            </div>
        </div>
    );

    return html;
};

export default Main;
