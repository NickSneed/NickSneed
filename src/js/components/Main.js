import Img from './Img.js';
import SocialTile from './SocialTile.js';
import SpaceLaunches from './SpaceLauches.js';
import str from '../utils/strings.js';
import { useUser } from '../context/UserContext.js';

// Import Chakra UI components
import {
    Box,
    Divider,
    Grid,
    GridItem,
    Heading,
    Text
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
        <Box bg="#000" color="#fff" p="10">
            <Grid 
                templateColumns={{
                    base: '1fr', 
                    md: 'repeat(3, 1fr)'
                }} 
                alignItems="center" 
                gap="10" 
                maxW="1400px" 
                mx="auto"
            >
                <GridItem>
                    <Box maxW={{base: '150px', md: 'none'}} py={{base: 0, md: 10}} pt="10">
                        <Img src={familyImg} srcSmall={familyImgSmall} alt="My family" percent={100} />
                    </Box>
                </GridItem>
                <GridItem colSpan={{base: 1, md: 2}} fontSize="xl">
                    <Box py={{base: 0, md: 10}}>
                        <Heading as="h2" size={{base: 'md', md: 'xl'}} mb="4" fontWeight="semibold">{str('mainIntro1', true)}</Heading>
                        <Text mb="2">{str('mainIntro2', true)}</Text>
                        <Text >{str('mainIntro3', true)}</Text>
                    </Box>
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
                <GridItem colSpan={{base: 1, md: 3}}>
                    <Divider />
                    <SpaceLaunches />
                </GridItem>
            </Grid>
        </Box>
    )

    return html;
}

export default Main;
