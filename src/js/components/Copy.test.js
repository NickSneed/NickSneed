/* global describe, test, expect */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Copy from '@/js/components/Copy';

const currentYear = new Date().getFullYear()

describe('Copy Component', () => {
    test('renders copyright text with current year', () => {
        render(<Copy />);
        const copyrightText = screen.getByText(new RegExp(`mocked copy with ${currentYear}`));
        expect(copyrightText).toBeInTheDocument();
    });

    test('renders with correct styles', () => {
        render(<Copy />);
        const copyElement = screen.getByText(new RegExp(`mocked copy with ${currentYear}`));
        expect(copyElement).toHaveStyle({
            color: 'rgba(255, 255, 255, 1)',
            display: 'block'
        });
    });
});