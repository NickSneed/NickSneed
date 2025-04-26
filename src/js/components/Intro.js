import { lazy, Suspense, useEffect } from 'react';
import Img from './Img.js';
import str from '../utils/strings.js';
import { useUser } from '../context/UserContext.js';

// Import Chakra UI components
import { 
    Box,
    Center,
    Heading,
    Text,
    AbsoluteCenter
} from '@chakra-ui/react'

// Import images
import logo from '../../img/svg/ns-logo.svg';
import backgroundImage from '../../img/comp/back.jpg';

// Lazy load the Stars component
const Stars = lazy(() => import('./Stars.js'));

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
            overflow="hidden"
            height="100vh"
            bgImage={`url(${backgroundImage})`}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
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
                <Img src={logo} alt={str('introLogoAlt')} width="10%" display="block"/>
                <Heading as="h1" size="4xl" mb="4" fontWeight="semibold">
                    {str('introH1')}
                </Heading>
                <Text>{str('introTxt', false, [userID])}</Text>
            </AbsoluteCenter>
            <Suspense>
                <Stars />
            </Suspense>
        </Box>
    )
    
    return html;
}

export default Intro;