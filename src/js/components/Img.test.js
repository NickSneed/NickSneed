/* global jest, describe, test, expect */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Img from '@/js/components/Img';

// Mock the react-lazy-load-image-component
jest.mock('react-lazy-load-image-component', () => ({
    LazyLoadImage: (props) => <img {...props} />
}));

describe('Image Component', () => {
    const mockProps = {
        src: 'test-image.jpg',
        alt: 'Test image',
        className: 'test-class',
        percent: '100'
    };

    test('renders image with required props', () => {
        render(
            <Img
                src={mockProps.src}
                alt={mockProps.alt}
            />
        );
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
        render(
            <Img
                {...mockProps}
                srcSmall="small-image.jpg"
            />
        );
        const picture = document.querySelector('picture');
        expect(picture).toBeInTheDocument();
        expect(picture.querySelector('source')).toHaveAttribute('srcset', 'small-image.jpg');
    });

    test('matches snapshot', () => {
        const { container } = render(
            <Img
                src={mockProps.src}
                alt={mockProps.alt}
                className={mockProps.className}
                srcSmall="small-image.jpg"
            />
        );
        expect(container).toMatchSnapshot();
    });
});
