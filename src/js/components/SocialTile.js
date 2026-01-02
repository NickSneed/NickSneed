import Img from '@/js/components/Img.js';
import PropTypes from 'prop-types';
import * as styles from './SocialTile.module.css';

// SocialTile component
const SocialTile = (props) => {
    const { img, title, text, link, alt, linkTxt } = props;

    // Component HTML
    const html = (
        <div className={styles.socialTile}>
            <div className={styles.img}>
                <Img
                    src={img}
                    alt={alt}
                    className="wide-sm"
                    aspect="1 / 1"
                    width="100%"
                />
            </div>
            <h2>{title}</h2>
            {text}
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
            >
                {linkTxt}
            </a>
        </div>
    );

    return html;
};

// Define the prop types for the component
SocialTile.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    linkTxt: PropTypes.string.isRequired
};

export default SocialTile;
