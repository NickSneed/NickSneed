import Img from './Img.js';
import PropTypes from 'prop-types';

// SocialTile component
const SocialTile = (props) => {
    const {img, title, text, link, alt, linkTxt} = props;

    // Component HTML
    const html = (
        <>
            <Img src={img} alt={alt} className="wide-sm" percent={100} />
            <h2>{title}</h2>
            <p>{text}</p>
            <a href={link} className="btn" target="_blank" rel="noopener noreferrer">{linkTxt}</a>
        </>
    )
    
    return html;
}

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



