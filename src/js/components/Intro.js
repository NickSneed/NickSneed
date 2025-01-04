import { lazy, Suspense, useEffect } from 'react';
import Img from './Img.js';

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

    const html = (<>
            <div className="intro">
                <Img src={logo} alt="Nick Sneed Logo"/>
                <h1 style={{opacity: 0, transition: 'opacity 1s linear 0.5s'}}>Hello &amp; <br />welcome.</h1>
                <Suspense>
                    <Stars />
                </Suspense>
            </div>
        </>
    )
    return html;
}

export default Intro;