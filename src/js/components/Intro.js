import { lazy, Suspense, useEffect } from 'react';
import Img from '@/js/components/Img.js';
import str from '@/js/utils/strings.js';
import { useUser } from '@/js/context/UserContext.js';

// Import Chakra UI components
import { 
    Box,
    Heading,
    Text,
    AbsoluteCenter
} from '@chakra-ui/react'

// Import images
import logo from '@/img/svg/ns-logo.svg';
import backgroundImage from '@/img/comp/back.jpg';

// Lazy load the Stars component
const Stars = lazy(() => import('@/js/components/Stars.js'));

// Loading animation
const loadingAnimation = () => {
    setTimeout(function () {
        document.querySelector('.intro-txt').style.opacity = 1;
    }, 50);
}

// Intro component
const Intro = () => {

    const { userID } = useUser();

    useEffect(loadingAnimation, [])

    // Component HTML
    const html = (
        <Box
            bg="#000"
            color="#fff"
            position="relative"
            height="100vh"
            bgImage={`url(${backgroundImage})`}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            minHeight="600px"
        >
            <AbsoluteCenter 
                axis="vertical"
                className="intro-txt" 
                align="center" 
                p="5"
                zIndex="1"
                position="relative"
                width="100%"
                style={{opacity: 0, transition: 'opacity 1s linear 0.5s'}}
            >
                <Box width={{base: '100px', md: '150px'}}>
                    <Img src={logo} alt={str('introLogoAlt')} width="100%" display="block"/>
                </Box>
                <Heading as="h1" fontSize={{base: '25vw', md: '200px'}} mb="2" fontWeight="semibold">
                    {str('introH1')}
                </Heading>
                <Text fontSize={{base: 'lg', md: '3xl'}}>{str('introTxt', false, [userID])}</Text>
            </AbsoluteCenter>
            <Suspense>
                <Stars />
            </Suspense>
        </Box>
    )
    
    return html;
}

export default Intro;