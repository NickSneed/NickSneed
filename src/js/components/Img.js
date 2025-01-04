import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';

function Img(props) {

    const { src, alt, className, useSpacer } = props;

    let html = '';

    if (useSpacer) {
        html = (
            <>
                <div className={className ? 'img-wrapper ' + className : 'img-wrapper'}>
                    <div className="spacer"></div>
                    <LazyLoadImage
                        style={{
                            opacity: 0,
                            transition: 'opacity 1s',
                            transitionDelay: '0.5s'
                        }}
                        src={src}
                        alt={alt}
                        onLoad={function (e) {
                            setTimeout(function () {
                                e.target.style.opacity = 1;
                            }, 10);
                        }} />
                </div>
            </>
        )
    } else {
        html = (
            <>
                <LazyLoadImage
                    style={{
                        opacity: 0,
                        transition: 'opacity 1s',
                        transitionDelay: '0.5s'
                    }}
                    src={src}
                    alt={alt}
                    className={className}
                    onLoad={function (e) {
                        setTimeout(function () {
                            e.target.style.opacity = 1;
                        }, 10);
                    }} />
            </>
        )
    }

    
    return html;
}

Img.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string.notRequired
};

export default Img;