import Img from './Img.js';
import SocialTile from './SocialTile.js';
import SpaceLaunches from './SpaceLauches.js';
import str from '../utils/strings.js';

// Import Chakra UI components
import { 
    Box
} from '@chakra-ui/react'

// Import images
import familyImg from '../../img/comp/family.png';
import familyImgSmall from '../../img/comp/family-small.png';
import headerInsta from '../../img/comp/header-insta.png';
import headerTumblr from '../../img/comp/header-tumblr.png';
import headerGitHub from '../../img/comp/header-github.png';

import { useUser } from '../context/UserContext.js';

// Main component
const Main = () => {

    const { userID } = useUser();

    // Component HTML
    const html = (
        <Box bg="#000" color="#fff" p="5">
            <div className="row align-vc">
                <div className="col-1 no-padding-sm">
                    <Img src={familyImg} srcSmall={familyImgSmall} alt="My family" percent={100} />
                </div>
                <div className="col-2">
                    {str('mainIntro', true)}
                </div>
            </div>
            <div className="row">
                <div className="col-1">
                    <SocialTile 
                        img={headerInsta} 
                        title={str('socialTileInstaAlt')}
                        text={str('socialTileInsta', true, [userID])}
                        link="https://www.instagram.com/bobrumbly/"
                        alt={str('socialTileInstaAlt')}
                        linkTxt={str('socialTileInstaBt')}
                    />
                </div>
                <div className="col-1">
                    <SocialTile
                        img={headerTumblr}
                        title={str('socialTileTumblrAlt')}
                        text={str('socialTileTumblr', true, [userID])}
                        link="https://bobrumbly.com"
                        alt={str('socialTileTumblrAlt')}
                        linkTxt={str('socialTileTumblrBt')}
                    />
                </div>
                <div className="col-1">
                    <SocialTile
                        img={headerGitHub}
                        title={str('socialTileGitHubAlt')}
                        text={str('socialTileGitHub', true, [userID])}
                        link="https://github.com/NickSneed/"
                        alt={str('socialTileGitHubAlt')}
                        linkTxt={str('socialTileGitHubBt')}
                    />
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-1">
                    <SpaceLaunches />
                </div>
            </div>
        </Box>
    )
    
    return html;
}

export default Main;
