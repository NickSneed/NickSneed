/* global describe, test, expect, jest */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
jest.unmock('@/js/components/Img.js');
import Img from '@/js/components/Img';

describe('Image Component', () => {
    const mockProps = {
        src: 'test-image.jpg',
        alt: 'Test image',
        className: 'test-class',
        percent: '100'
    };

    test('renders image with required props', () => {
        render(<Img src={mockProps.src} alt={mockProps.alt} />);
        const image = screen.getByAltText(mockProps.alt);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', mockProps.src);
    });

    test('renders image with all props', () => {
        render(<Img {...mockProps} />);
        const image = screen.getByAltText(mockProps.alt);
        expect(image).toHaveClass(mockProps.className);
    });

    test('renders picture element when srcSmall is provided', () => {
        render(<Img {...mockProps} srcSmall="small-image.jpg" />);
        const picture = document.querySelector('picture');
        expect(picture).toBeInTheDocument();
        expect(picture.querySelector('source')).toHaveAttribute('srcset', 'small-image.jpg');
    });

    test('renders wrapper div when percent prop is provided', () => {
        render(<Img {...mockProps} />);
        const wrapper = document.querySelector('div > div');
        expect(wrapper).toHaveStyle({ position: 'relative', width: '100%' });
    });
});