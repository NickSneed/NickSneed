/* eslint-disable react/prop-types */
import React from 'react';

const Img = ({ src, alt, ...props }) => {
    return <img src={src} alt={alt} data-testid="mock-img" {...props} />
}

export default Img;
