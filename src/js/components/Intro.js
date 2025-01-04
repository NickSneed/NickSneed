import logo from '../../img/svg/ns-logo.svg';
import { lazy, Suspense, useEffect } from 'react';
import Img from './Img.js';

const Stars = lazy(() => import('./Stars.js'));

function Intro() {

    useEffect(() => {
        setTimeout(function () {
            document.querySelector('.intro h1').style.opacity = 1;
        }, 50);
    }, [])

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