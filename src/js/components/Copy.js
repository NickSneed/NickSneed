import str from '../utils/strings.js';

// Import Chakra UI components
import { 
    Flex, 
    Text 
} from '@chakra-ui/react'

// Copy component
const Copy = () => {

    // Get the current year
    const year = new Date().getFullYear();

    // Component HTML
    const html = (
        <Flex direction="direction" align="flex-end">
            <Text fontSize='md' color="#fff">{str('copy', false, [year])}</Text>
        </Flex>
    )

    return html;
}

export default Copy;