import PropTypes from 'prop-types';

function SocialTile(props) {
    const {img, title, text, link, alt} = props;
    const html = (
        <>
            <img src={img} alt={alt} className="wide-sm" />
            <h2>{title}</h2>
            <p>{text}</p>
            <a href={link} className="btn">Shoot</a>
        </>
    )
    return html;
}

SocialTile.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

export default SocialTile;



