/* global jest */
/* eslint-disable react/prop-types */

import '@testing-library/jest-dom';

// Global mock for strings utility
jest.mock('@/js/utils/strings.js', () => {
    return function(key, isParse, values) {
        // Handle different string types
        if (isParse) {
            return `<parsed>${key}</parsed>`;
        }
        
        // Handle function strings with values
        if (values) {
            return `mocked ${key} with ${values.join(',')}`;
        }
        
        // Handle static strings
        return `mocked ${key}`;
    };
});

// Add mock for Img component
jest.mock('@/js/components/Img.js', () => {
    return function mockImg({ src, alt, ...props }) {
        return <img src={src} alt={alt} data-testid="mock-img" {...props} />
    }
});