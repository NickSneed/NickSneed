/* global jest, global */
import '@testing-library/jest-dom';

// Global mock for strings utility
/*
jest.mock('@/js/utils/strings.js', () => {
    const mockStr = jest.fn().mockImplementation(() => 'mock string value');
    global.mockStr = mockStr; // Make available globally
    return mockStr;
});
*/


// Create mock implementation for str function
const mockStr = jest.fn().mockImplementation((key, isParse, values) => {
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
});

// Make mock globally available
global.mockStr = mockStr;

// Global mock for strings utility
jest.mock('@/js/utils/strings.js', () => {
    return mockStr;
});

// Mock html-react-parser
jest.mock('html-react-parser', () => ({
    __esModule: true,
    default: (str) => `<parsed>${str}</parsed>`
}));