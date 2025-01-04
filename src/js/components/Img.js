import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';

// Function to animate the loading of an image
const loadingAnimation = (e) => {
    setTimeout(function () {
        e.target.style.opacity = 1;
    }, 50);
}

// Img component
const Img = (props) => {

    const { src, srcSmall, alt, className, percent, width, height } = props;
    const style = {
        opacity: 0,
        transition: 'opacity 1s linear 0s'
    }

    // Base HTML for an image
    let html = (
        <LazyLoadImage
            style={style}
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            onLoad={function (e) {
                loadingAnimation(e)
            }} />
    )

    // If a small image is provided, wrap the image in a picture element
    if (srcSmall) {
        html = (
            <picture>
                <source srcSet={srcSmall} media="(max-width: 959px)" />
                {html}
            </picture>
        )
    }

    // If a percentage is provided, wrap the image in a div with a spacer
    if (percent) {
        html = (
            <div className={className ? 'img-percent ' + className : 'img-percent'}>
                <div className="spacer" style={{
                    'paddingTop': percent + '%'
                }}></div>
                {html}
            </div>
        )
    }

    return html;
}

// Define the prop types for the component
Img.propTypes = {
    src: PropTypes.string.isRequired,
    srcSmall: PropTypes.string.notRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string.notRequired,
    percent: PropTypes.string.notRequired,
    width: PropTypes.string.notRequired,
    height: PropTypes.string.notRequired
};

export default Img;