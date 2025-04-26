import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    styles: {
        global: {
            p: {
                fontOpticalSizing: "auto"
            }
        }
    },
    fonts: {
        body: 'Montserrat, serif',
        heading: 'Montserrat, serif'
    }
});

export default theme;