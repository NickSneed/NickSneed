import { lazy, Suspense, useEffect, useRef } from 'react';
import Img from '@/js/components/Img.js';
import str from '@/js/utils/strings.js';
import { useUser } from '@/js/context/UserContext.js';

// Import images
import logo from '@/img/svg/ns-logo.svg';
import backgroundImage from '@/img/comp/back.jpg';
import backgroundOverlay from '@/img/comp/back-overlay.png';

import * as styles from './Intro.module.css';

// Lazy load the Stars component
const Stars = lazy(() => import('@/js/components/Stars.js'));

// Intro component
const Intro = () => {
    const { userID } = useUser();
    const textRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (textRef.current) {
                textRef.current.style.opacity = 1;
            }
        }, 50);

        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

    // Component HTML
    const html = (
        <div
            className={styles.intro}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div
                className={styles.txt}
                style={{ opacity: 0, transition: 'opacity 1s linear 0.5s' }}
                ref={textRef}
            >
                <div className={styles.logo}>
                    <Img
                        src={logo}
                        alt={str('introLogoAlt')}
                        width="100%"
                        display="block"
                    />
                </div>
                <h1>{str('introH1')}</h1>
                <p>{str('introTxt', false, [userID])}</p>
            </div>
            <div className={styles.overlay}>
                <Img
                    src={backgroundOverlay}
                    alt={str('introBackgroundAlt')}
                    height="100%"
                    width="100%"
                />
            </div>
            <div className={styles.stars}>
                <Suspense>
                    <Stars />
                </Suspense>
            </div>
        </div>
    );

    return html;
};

export default Intro;
