/* global jest, describe, test, expect */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Copy from '@/js/components/Copy';

// Mock the str utility
jest.mock('@/js/utils/strings.js', () => ({
    __esModule: true,
    default: jest.fn((key, parse, vars) => `mocked copy with ${vars ? vars[0] : ''}`)
}));

const currentYear = new Date().getFullYear();

describe('Copy Component', () => {
    test('renders copyright text with current year', () => {
        render(<Copy />);
        // The component renders a <p> tag, which has a 'paragraph' role.
        // We check its content to ensure it includes the current year.
        const copyrightText = screen.getByText(`mocked copy with ${currentYear}`);
        expect(copyrightText).toBeInTheDocument();
        expect(copyrightText.tagName).toBe('P');
    });
});
