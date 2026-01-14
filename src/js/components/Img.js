import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';

// Function to animate the loading of an image
const loadingAnimation = (e) => {
    setTimeout(function () {
        e.target.style.opacity = 1;
    }, 50);
};

// Img component
const Img = (props) => {
    const {
        src,
        srcSmall,
        alt,
        className,
        width = 'auto',
        height = 'auto',
        display = 'block',
        maxWidth = 'none',
        aspect = 'none'
    } = props;

    // Base HTML for an image
    let html = (
        <LazyLoadImage
            style={{
                display: display,
                height: height,
                width: width,
                opacity: 0,
                transition: 'opacity 1s linear 0s',
                maxWidth: maxWidth,
                margin: '0 auto',
                aspectRatio: aspect ? aspect : 'none',
                objectFit: 'cover'
            }}
            src={src}
            alt={alt}
            className={className}
            onLoad={function (e) {
                loadingAnimation(e);
            }}
        />
    );

    // If a small image is provided, wrap the image in a picture element
    if (srcSmall) {
        html = (
            <picture>
                <source
                    srcSet={srcSmall}
                    media="(max-width: 959px)"
                />
                {html}
            </picture>
        );
    }

    return html;
};

// Define the prop types for the component
Img.propTypes = {
    src: PropTypes.string.isRequired,
    srcSmall: PropTypes.string.notRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string.notRequired,
    width: PropTypes.string.notRequired,
    height: PropTypes.string.notRequired,
    display: PropTypes.string.notRequired,
    maxWidth: PropTypes.string.notRequired,
    aspect: PropTypes.string.notRequired
};

export default Img;
