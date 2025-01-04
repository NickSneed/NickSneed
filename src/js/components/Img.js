import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';

const loadingAnimation = (e) => {
    setTimeout(function () {
        e.target.style.opacity = 1;
    }, 50);
}

function Img(props) {

    const { src, alt, className, percent, width, height } = props;
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

    if (percent) {
        html = (
            <>
                <div className={className ? 'img-percent ' + className : 'img-percent'}>
                    <div className="spacer" style={{
                        'padding-top': percent + '%'
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
    alt: PropTypes.string.isRequired,
    className: PropTypes.string.notRequired,
    percent: PropTypes.string.notRequired,
    width: PropTypes.string.notRequired,
    height: PropTypes.string.notRequired
};

export default Img;