/* global describe, test, expect */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Copy from './Copy';

describe('Copy Component', () => {
    test('renders copyright text with current year', () => {
        render(<Copy />);
        const currentYear = new Date().getFullYear();
        const copyrightText = screen.getByText(new RegExp(`© 2024-${currentYear}`));
        expect(copyrightText).toBeInTheDocument();
    });

    test('renders with correct styles', () => {
        render(<Copy />);
        const copyElement = screen.getByText(/©/);

        expect(copyElement).toHaveStyle({
            color: 'rgba(255, 255, 255, 1)',
            display: 'block'
        });
    });
});