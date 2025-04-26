import Img from './Img.js';
import Copy from './Copy.js';
import str from '../utils/strings.js';

// Import images
import logoInsta from '../../img/svg/logo-instagram.svg'
import logoTumblr from '../../img/comp/logo-tumblr.png'
import logoGitHub from '../../img/comp/logo-github.png'
import logoX from '../../img/svg/logo-x.svg'
import logoLinkedIn from '../../img/comp/logo-linkedin.png'

// Import Chakra UI components
import { 
    Box, 
    Flex, 
    Link 
} from '@chakra-ui/react'

// Footer component
const Footer = () => {

    // Component HTML
    const html = (
        <footer>
            <Box p="5" bg="#111">
                <Flex direction={{base: 'column', md: 'row'}} align="center" justify="space-between">
                    <Flex align="flex-start">
                        <Link href="https://www.instagram.com/bobrumbly/" target="_blank" rel="noopener noreferrer" mr="2" h="20px">
                            <Img src={logoInsta} alt={str('footerInstaAlt')} display="inline-block" height="20px" />
                        </Link>
                        <Link href="https://bobrumbly.com" target="_blank" rel="noopener noreferrer" mr="2" h="20px">
                            <Img src={logoTumblr} alt={str('footerTumblrAlt')} display="inline-block" height="20px" />
                        </Link>
                        <Link href="https://github.com/NickSneed/" target="_blank" rel="noopener noreferrer" mr="2" h="20px">
                            <Img src={logoGitHub} alt={str('footerGitHubAlt')} display="inline-block" height="20px" />
                        </Link>
                        <Link href="https://x.com/BobRumbly" target="_blank" rel="noopener noreferrer" mr="2" h="20px">
                            <Img src={logoX} alt={str('footerXAlt')} display="inline-block" height="20px" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/nsneed/" target="_blank" rel="noopener noreferrer" mr="2" h="20px">
                            <Img src={logoLinkedIn} alt={str('footerLinkedInAlt')} display="inline-block" height="20px" />
                        </Link>
                    </Flex>
                    <Copy />
                </Flex>
            </Box>
        </footer>
    )
    
    return html;
}

export default Footer;