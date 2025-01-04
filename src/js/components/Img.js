import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';

const loadingAnimation = (e) => {
    setTimeout(function () {
        e.target.style.opacity = 1;
    }, 50);
}

function Img(props) {

    const { src, srcSmall, alt, className, percent, width, height } = props;
    const style = {
        opacity: 0,
        transition: 'opacity 1s linear 0s'
    }

    let html = (
        <>
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
        </>
    )

    if (srcSmall) {
        html = (
            <>
                <picture>
                    <source srcSet={srcSmall} media="(max-width: 959px)" />
                    {html}
                </picture>
            </>
        )
    }

    if (percent) {
        html = (
            <>
                <div className={className ? 'img-percent ' + className : 'img-percent'}>
                    <div className="spacer" style={{
                        'paddingTop': percent + '%'
                    }}></div>
                    {html}
                </div>
            </>
        )
    }

    return html;
}

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