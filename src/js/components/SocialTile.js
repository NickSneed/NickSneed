import Img from './Img.js';
import PropTypes from 'prop-types';

function SocialTile(props) {
    const {img, title, text, link, alt, linkTxt} = props;
    const html = (
        <>
            <Img src={img} alt={alt} className="wide-sm" percent={100} />
            <h2>{title}</h2>
            <p>{text}</p>
            <a href={link} className="btn">{linkTxt}</a>
        </>
    )
    return html;
}

SocialTile.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    linkTxt: PropTypes.string.isRequired
};

export default SocialTile;



