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
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: 'semibold',
                borderRadius: '5px',
            },
            sizes: {
                sm: {
                    fontSize: 'md',
                    px: 4,
                    py: 2,
                },
                md: {
                    fontSize: 'lg',
                    px: 6,
                    py: 3,
                }
            },
            variants: {
                solid: {
                    bg: 'blue.600',
                    color: 'white',
                    _hover: {
                        bg: 'blue.500'
                    }
                },
                outline: {
                    border: '2px solid',
                    borderColor: 'blue.500',
                    color: 'blue.500'
                }
            },
            defaultProps: {
                size: 'md',
                variant: 'solid'
            }
        }
    }
});

export default theme;