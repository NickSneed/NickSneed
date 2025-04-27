import Img from './Img.js';
import PropTypes from 'prop-types';

// Import Chakra UI components
import {
    Heading,
    Button,
    Box
} from '@chakra-ui/react'

// SocialTile component
const SocialTile = (props) => {
    const {
        img, 
        title, 
        text, 
        link, 
        alt, 
        linkTxt
    } = props;

    // Component HTML
    const html = (
        <Box py="4">
            <Box maxW="150px" mb="6">
                <Img src={img} alt={alt} className="wide-sm" percent={100}/>
            </Box>
            <Heading as="h2" size="lg" fontWeight="semibold" mb="4">
                {title}
            </Heading>
            <Box mb="2" sx={{'p': {mb: '6'}}}>
                {text}
            </Box>
            <Button as="a" href={link} target="_blank" rel="noopener noreferrer">
                {linkTxt}
            </Button>
        </Box>
    )
    
    return html;
}

// Define the prop types for the component
SocialTile.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    linkTxt: PropTypes.string.isRequired
};

export default SocialTile;



