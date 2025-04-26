import Img from './Img.js';
import SocialTile from './SocialTile.js';
import SpaceLaunches from './SpaceLauches.js';
import str from '../utils/strings.js';
import { useUser } from '../context/UserContext.js';

// Import Chakra UI components
import {
    Box,
    Grid,
    GridItem
} from '@chakra-ui/react'

// Import images
import familyImg from '../../img/comp/family.png';
import familyImgSmall from '../../img/comp/family-small.png';
import headerInsta from '../../img/comp/header-insta.png';
import headerTumblr from '../../img/comp/header-tumblr.png';
import headerGitHub from '../../img/comp/header-github.png';

// Main component
const Main = () => {

    const { userID } = useUser();

    // Component HTML
    const html = (
        <Box bg="#000" color="#fff" p="5">
            <Grid templateColumns='repeat(3, 1fr)' alignItems="center" gap="8">
                <GridItem>
                    <Img src={familyImg} srcSmall={familyImgSmall} alt="My family" percent={100} />
                </GridItem>
                <GridItem colSpan={2}>
                    {str('mainIntro', true)}
                </GridItem>
                <GridItem>
                    <SocialTile 
                        img={headerInsta} 
                        title={str('socialTileInstaAlt')}
                        text={str('socialTileInsta', true, [userID])}
                        link="https://www.instagram.com/bobrumbly/"
                        alt={str('socialTileInstaAlt')}
                        linkTxt={str('socialTileInstaBt')}
                    />
                </GridItem>
                <GridItem>
                    <SocialTile
                        img={headerTumblr}
                        title={str('socialTileTumblrAlt')}
                        text={str('socialTileTumblr', true, [userID])}
                        link="https://bobrumbly.com"
                        alt={str('socialTileTumblrAlt')}
                        linkTxt={str('socialTileTumblrBt')}
                    />
                </GridItem>
                <GridItem>
                    <SocialTile
                        img={headerGitHub}
                        title={str('socialTileGitHubAlt')}
                        text={str('socialTileGitHub', true, [userID])}
                        link="https://github.com/NickSneed/"
                        alt={str('socialTileGitHubAlt')}
                        linkTxt={str('socialTileGitHubBt')}
                    />
                </GridItem>
                <GridItem colSpan={3}>
                    <hr />
                    <SpaceLaunches />
                </GridItem>
            </Grid>
        </Box>
    )

    return html;
}

export default Main;
