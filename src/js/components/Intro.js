import { lazy, Suspense, useEffect } from 'react';
import Img from './Img.js';
import str from '../utils/strings.js';
import { useUser } from '../context/UserContext.js';

// Import images
import logo from '../../img/svg/ns-logo.svg';

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
        <div className="intro">
            <div className="intro-txt" style={{opacity: 0, transition: 'opacity 1s linear 0.5s'}}>
                <Img src={logo} alt={str('introLogoAlt')}/>
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