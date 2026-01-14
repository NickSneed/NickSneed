/* global jest */

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
