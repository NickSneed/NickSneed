import logo from '../../img/svg/ns-logo.svg';
//import Stars from './Stars.js';
import { lazy, Suspense } from 'react';

const Stars = lazy(() => import('./Stars.js'));

function Intro() {

    const html = (
        <>
            <div className="intro">
                <img src={logo} alt="Nick Sneed Logo"/>
                <h1>Hello &amp; <br />welcome.</h1>
                <Suspense>
                    <Stars />
                </Suspense>
            </div>
        </>
    )
    return html;
}

export default Intro;