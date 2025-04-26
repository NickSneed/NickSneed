import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';

// Import Chakra UI components
import { 
    Box
} from '@chakra-ui/react'

// Function to animate the loading of an image
const loadingAnimation = (e) => {
    setTimeout(function () {
        e.target.style.opacity = 1;
    }, 50);
}

// Img component
const Img = (props) => {

    const {
        src, 
        srcSmall, 
        alt, 
        className, 
        percent, 
        width = 'auto', 
        height = 'auto',
        display = 'block',
        maxWidth = 'none'
    } = props;

    // Base HTML for an image
    let html = (
        <LazyLoadImage
            style={{
                display: percent ? 'block' : display,
                height: percent ? '100%' : height,
                width: percent ? '100%' : width,
                opacity: 0,
                transition: 'opacity 1s linear 0s',
                maxWidth: maxWidth,
                margin: '0 auto',
                position: percent ? 'absolute' : 'static',
                left: percent ? '0' : 'auto',
                top: percent ? '0' : 'auto',
                objectFit: percent ? 'contain' : 'cover'
            }}
            src={src}
            alt={alt}
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
            <Box style={{
                position: 'relative',
                width: '100%'
            }}>
                <Box style={{
                    'paddingTop': percent + '%',
                    height: 0,
                    width: '100%'
                }}></Box>
                {html}
            </Box>
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
    height: PropTypes.string.notRequired,
    display: PropTypes.string.notRequired,
    maxWidth: PropTypes.string.notRequired
};

export default Img;