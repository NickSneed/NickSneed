import { lazy, Suspense, useEffect } from 'react';
import Img from './Img.js';
import str from '../utils/strings.js';

// Import images
import logo from '../../img/svg/ns-logo.svg';

// Lazy load the Stars component
const Stars = lazy(() => import('./Stars.js'));

// Generate a ramdom numer
const generateUserID = () => {
    const min = 10000000; // Minimum 8-digit number
    const max = 99999999; // Maximum 8-digit number
  
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Loading animation
const loadingAnimation = () => {
    setTimeout(function () {
        document.querySelector('.intro-txt').style.opacity = 1;
    }, 50);
}

// Intro component
const Intro = () => {

    const userID = generateUserID();

    useEffect(loadingAnimation, [])

    // Component HTML
    const html = (
        <div className="intro">
            <Img src={logo} alt={str('introLogoAlt')}/>
            <div className="intro-txt" style={{opacity: 0, transition: 'opacity 1s linear 0.5s'}}>
                <h1>
                    {str('introH1')}
                </h1>
                <p>{str('introTxt', false, [userID])}</p>
            </div>
            <Suspense>
                <Stars />
            </Suspense>
        </div>
    )
    
    return html;
}

export default Intro;