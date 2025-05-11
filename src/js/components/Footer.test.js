/* global jest, describe, test, expect */

import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '@/js/components/Footer';

// Add mocks
jest.mock('@/js/components/Copy');
jest.mock('@/js/components/Img')

// Mock the image imports
jest.mock('@/img/svg/logo-instagram.svg', () => 'instagram.svg');
jest.mock('@/img/comp/logo-tumblr.png', () => 'tumblr.png');
jest.mock('@/img/comp/logo-github.png', () => 'github.png');
jest.mock('@/img/svg/logo-x.svg', () => 'x.svg');
jest.mock('@/img/comp/logo-linkedin.png', () => 'linkedin.png');

describe('Footer Component', () => {
    test('renders footer with correct structure', () => {
        render(<Footer />);
        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toBeInTheDocument();
    });

    test('renders all social media links with correct attributes', () => {
        render(<Footer />);
        
        const expectedLinks = [
            'https://www.instagram.com/bobrumbly/',
            'https://bobrumbly.com',
            'https://github.com/NickSneed/',
            'https://x.com/BobRumbly',
            'https://www.linkedin.com/in/nsneed/'
        ];
    
        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(expectedLinks.length);
    
        links.forEach((link, index) => {
            expect(link).toHaveAttribute('href', expectedLinks[index]);
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('rel', 'noopener noreferrer');
            const img = within(link).getByRole('img');
            expect(img).toHaveAttribute('alt');
        });
    });
    
    test('renders with responsive styles', () => {
        render(<Footer />);
        const box = screen.getByRole('contentinfo').firstChild;
        expect(box).toHaveStyle({ backgroundColor: '#111' });
        
        const flex = box.firstChild;
        expect(flex).toHaveStyle({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        });
    });

    test('renders Copy component', () => {
        render(<Footer />);
        const copyElement = screen.getByTestId('copy-component');
        expect(copyElement).toBeInTheDocument();
    });
});
