import Img from '@/js/components/Img.js';
import Copy from '@/js/components/Copy.js';
import str from '@/js/utils/strings.js';

// Import images
import logoInsta from '@/img/svg/logo-instagram.svg'
import logoTumblr from '@/img/comp/logo-tumblr.png'
import logoGitHub from '@/img/comp/logo-github.png'
import logoX from '@/img/svg/logo-x.svg'
import logoLinkedIn from '@/img/comp/logo-linkedin.png'

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
            <Box p={{base: 7, md: 10}} bg="#111">
                <Flex 
                    direction={{base: 'column', md: 'row'}} 
                    align="center" 
                    justify="space-between"
                >
                    <Flex align="flex-start" mb={{base: '4', md: '0'}}>
                        <Link href="https://www.instagram.com/bobrumbly/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            mr={{base: 2, md: 4}} 
                            h={{ base: '20px', md: '30px' }}
                        >
                            <Img src={logoInsta} alt={str('footerInstaAlt')} display="inline-block" height="100%" />
                        </Link>
                        <Link href="https://bobrumbly.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            mr={{base: 2, md: 4}} 
                            h={{ base: '20px', md: '30px' }}
                        >
                            <Img src={logoTumblr} alt={str('footerTumblrAlt')} display="inline-block" height="100%" />
                        </Link>
                        <Link href="https://github.com/NickSneed/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            mr={{base: 2, md: 4}} 
                            h={{ base: '20px', md: '30px' }}
                        >
                            <Img src={logoGitHub} alt={str('footerGitHubAlt')} display="inline-block" height="100%" />
                        </Link>
                        <Link href="https://x.com/BobRumbly" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            mr={{base: 2, md: 4}} 
                            h={{ base: '20px', md: '30px' }}
                        >
                            <Img src={logoX} alt={str('footerXAlt')} display="inline-block" height="100%" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/nsneed/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            mr={{base: 2, md: 4}} 
                            h={{ base: '20px', md: '30px' }}
                        >
                            <Img src={logoLinkedIn} alt={str('footerLinkedInAlt')} display="inline-block" height="100%" />
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