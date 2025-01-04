import { lazy, Suspense, useEffect } from 'react';
import Img from './Img.js';
import str from '../utils/strings.js';

// Import images
import logo from '../../img/svg/ns-logo.svg';

// Lazy load the Stars component
const Stars = lazy(() => import('./Stars.js'));

// Loading animation
const loadingAnimation = () => {
    setTimeout(function () {
        document.querySelector('.intro h1').style.opacity = 1;
    }, 50);
}

// Intro component
const Intro = () => {

    useEffect(loadingAnimation, [])

    // Component HTML
    const html = (
        <div className="intro">
            <Img src={logo} alt={str('introLogoAlt')}/>
            <h1 style={{opacity: 0, transition: 'opacity 1s linear 0.5s'}}>
                {str('introTxt', true)}
            </h1>
            <Suspense>
                <Stars />
            </Suspense>
        </div>
    )
    
    return html;
}

export default Intro;